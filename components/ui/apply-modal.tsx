"use client"

import { X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"

// 1. Updated list with ISO codes to fetch images
const COUNTRIES = [
  { code: "+91", iso: "in", name: "India" },
  { code: "+1", iso: "us", name: "USA" },
  { code: "+44", iso: "gb", name: "UK" },
  { code: "+971", iso: "ae", name: "UAE" },
  { code: "+61", iso: "au", name: "Australia" },
  { code: "+49", iso: "de", name: "Germany" },
  { code: "+33", iso: "fr", name: "France" },
  { code: "+81", iso: "jp", name: "Japan" },
]

interface ApplyModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ApplyModal({ isOpen, onClose }: ApplyModalProps) {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: ""
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: ""
  })

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleClose = () => {
    setErrors({ name: "", email: "", mobile: "" })
    setFormData({ name: "", email: "", mobile: "" })
    setIsDropdownOpen(false)
    onClose()
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleSubmit = () => {
    const newErrors = { name: "", email: "", mobile: "" }
    let isValid = true

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      isValid = false
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile Number is required"
      isValid = false
    }

    setErrors(newErrors)

    if (isValid) {
      console.log("Submitted:", {
        ...formData,
        fullMobile: `${selectedCountry.code} ${formData.mobile}`
      })
      alert("Submitted Successfully!") 
      handleClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={handleClose}
      />

      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-[400px] p-6 animate-in fade-in zoom-in-95 duration-200">
        
        <button 
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-black transition-colors"
        >
          <X size={20} />
        </button>

        <div className="space-y-4 mt-4">
          
          <div className="space-y-1.5">
            {errors.name ? (
              <label className="text-sm font-normal text-red-500">{errors.name}</label>
            ) : (
              <label className="text-sm font-normal text-gray-700">Name</label>
            )}
            <input 
              type="text" 
              placeholder="example"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className={`w-full px-3 py-2 border rounded-md text-sm outline-none transition-colors placeholder:text-gray-400 text-black 
                ${errors.name ? "border-red-400 focus:border-red-500" : "border-gray-300 focus:border-black"}`}
            />
          </div>

          <div className="space-y-1.5">
            {errors.email ? (
              <label className="text-sm font-normal text-red-500">{errors.email}</label>
            ) : (
              <label className="text-sm font-normal text-gray-700">Email</label>
            )}
            <input 
              type="email" 
              placeholder="yourname@email.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={`w-full px-3 py-2 border rounded-md text-sm outline-none transition-colors placeholder:text-gray-400 text-black 
                ${errors.email ? "border-red-400 focus:border-red-500" : "border-gray-300 focus:border-black"}`}
            />
          </div>

          {/* Mobile Field with Dropdown */}
          <div className="space-y-1.5">
            {errors.mobile ? (
              <label className="text-sm font-normal text-red-500">{errors.mobile}</label>
            ) : (
               <label className="text-sm font-normal text-gray-700">Mobile</label>
            )}
            
            <div className={`flex w-full border rounded-md overflow-visible relative ${errors.mobile ? "border-red-400" : "border-gray-300"}`}>
              
              {/* Dropdown Button */}
              <div ref={dropdownRef} className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`flex items-center gap-2 px-3 h-full bg-white border-r hover:bg-gray-50 transition-colors rounded-l-md min-w-[100px] ${errors.mobile ? "border-red-400" : "border-gray-300"}`}
                >
                  {/* Flag Image */}
                  <img
                    src={`https://flagcdn.com/w40/${selectedCountry.iso}.png`}
                    alt={selectedCountry.name}
                    className="w-5 h-auto object-cover rounded-[2px]"
                  />
                  <span className="text-sm text-gray-700">{selectedCountry.code}</span>
                  <ChevronDown size={14} className="text-gray-400 ml-auto" />
                </button>

                {/* Dropdown List */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-[200px] max-h-[200px] overflow-y-auto bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    {COUNTRIES.map((country) => (
                      <button
                        key={country.name}
                        type="button"
                        className="w-full flex items-center gap-3 px-3 py-2 text-sm hover:bg-gray-50 transition-colors text-left"
                        onClick={() => {
                          setSelectedCountry(country)
                          setIsDropdownOpen(false)
                        }}
                      >
                        <img
                            src={`https://flagcdn.com/w40/${country.iso}.png`}
                            alt={country.name}
                            className="w-5 h-auto object-cover rounded-[2px]"
                        />
                        <span className="text-gray-700 font-medium w-8">{country.code}</span>
                        <span className="text-gray-500 truncate">{country.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <input 
                type="tel"
                value={formData.mobile}
                onChange={(e) => handleChange("mobile", e.target.value)}
                className="flex-1 px-3 py-2 text-sm outline-none placeholder:text-gray-400 text-black rounded-r-md"
              />
            </div>
          </div>

          <div className="pt-4 flex justify-center">
            <Button 
              onClick={handleSubmit}
              className="w-32 bg-[#34D399] hover:bg-[#10B981] text-black border-none font-normal rounded-md"
            >
              Submit
            </Button>
          </div>

        </div>
      </div>
    </div>
  )
}