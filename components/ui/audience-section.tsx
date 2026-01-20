"use client"

import { GraduationCap, Rocket, Backpack, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface AudienceModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AudienceModal({ isOpen, onClose }: AudienceModalProps) {
  if (!isOpen) return null

  return (
    // 1. Fixed Overlay with Blur
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 font-poppins">
      
      {/* Dark Blurred Background */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      ></div>

      {/* 2. Main Modal Content */}
      <div className="relative z-10 bg-[#f9fafb] w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[24px] p-8 lg:p-12 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-sm"
        >
          <X size={24} className="text-black" />
        </button>

        {/* Header */}
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#0a0a0a] mb-12 mt-2">
          Who is Hynox Campus For?
        </h2>

        {/* The 3 Boxes Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Box 1: School Students */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
            <div className="mb-6 bg-red-50 w-fit p-4 rounded-xl">
               <Backpack size={32} className="text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-[#0a0a0a] mb-4">School Students</h3>
            <p className="text-gray-500 leading-relaxed mb-8 flex-grow text-[16px]">
              Career awareness, STEM exploration, logical thinking, and early exposure to future skills through hands-on learning.
            </p>
            <div className="mt-auto">
              <Link href="/programs">
                <Button className="w-full bg-[#0056d2] hover:bg-[#0041a3] text-white font-medium py-6 text-base rounded-xl">
                  View School Programs
                </Button>
              </Link>
            </div>
          </div>

          {/* Box 2: College Students */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
            <div className="mb-6 bg-gray-50 w-fit p-4 rounded-xl">
               <GraduationCap size={36} className="text-[#0a0a0a]" />
            </div>
            <h3 className="text-2xl font-bold text-[#0a0a0a] mb-4">College Students</h3>
            <p className="text-gray-500 leading-relaxed mb-8 flex-grow text-[16px]">
              Industry-ready skills, real projects, internships, and guidance to bridge the gap between college and career.
            </p>
            <div className="mt-auto">
              <Link href="/programs">
                <Button className="w-full bg-[#0056d2] hover:bg-[#0041a3] text-white font-medium py-6 text-base rounded-xl">
                  View College Programs
                </Button>
              </Link>
            </div>
          </div>

          {/* Box 3: Open Learners */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
            <div className="mb-6 bg-red-50 w-fit p-4 rounded-xl">
               <Rocket size={32} className="text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-[#0a0a0a] mb-4">Open Learners</h3>
            <p className="text-gray-500 leading-relaxed mb-8 flex-grow text-[16px]">
              Upskilling, career transition, and practical programs for anyone who wants to build real-world skills.
            </p>
            <div className="mt-auto">
              <Link href="/programs">
                <Button className="w-full bg-[#0056d2] hover:bg-[#0041a3] text-white font-medium py-6 text-base rounded-xl">
                  View Open Programs
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}