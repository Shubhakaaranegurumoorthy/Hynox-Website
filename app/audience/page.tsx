"use client"

import { useState, useEffect } from "react"
import { GraduationCap, Rocket, Backpack, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Header from "@/components/header"

export default function AudiencePage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Header isScrolled={isScrolled} />

      {/* Main Page Container */}
      <div className="min-h-screen w-full bg-[#030712] flex items-center justify-center p-4 font-poppins relative overflow-hidden pt-20">
        
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
          }}
        ></div>

        {/* Main Content Card 
            Updates:
            1. Added [&::-webkit-scrollbar]:hidden to hide scrollbar in Chrome/Safari
            2. Added [scrollbar-width:none] to hide scrollbar in Firefox
        */}
        <div className="relative z-10 bg-[#0a101d]/90 backdrop-blur-xl w-full max-w-6xl rounded-[24px] p-8 lg:p-12 shadow-2xl animate-in fade-in zoom-in-95 duration-500 max-h-[85vh] overflow-y-auto border border-white/10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          
          {/* Close Button */}
          <Link href="/">
              <button className="absolute top-6 right-6 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors shadow-sm z-20">
                  <X size={24} className="text-white" />
              </button>
          </Link>

          {/* Header Text */}
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-12 mt-2 tracking-tight">
            Who is Hynox Campus For?
          </h2>

          {/* Grid Content */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Box 1 */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-lg hover:bg-white/10 hover:border-[#00C365]/30 transition-all duration-300 flex flex-col h-full hover:-translate-y-1 group">
              <div className="mb-6 bg-red-500/10 w-fit p-4 rounded-xl group-hover:bg-red-500/20 transition-colors">
                 <Backpack size={32} className="text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">School Students</h3>
              <p className="text-gray-400 leading-relaxed mb-8 flex-grow text-[16px]">
                Career awareness, STEM exploration, logical thinking, and early exposure to future skills through hands-on learning.
              </p>
              <div className="mt-auto">
                <Link href="/programs">
                  <Button className="w-full bg-[#00C365] hover:bg-[#00A855] text-white font-medium py-6 text-base rounded-xl border-none">
                    View School Programs
                  </Button>
                </Link>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-lg hover:bg-white/10 hover:border-[#00C365]/30 transition-all duration-300 flex flex-col h-full hover:-translate-y-1 group">
              <div className="mb-6 bg-blue-500/10 w-fit p-4 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                 <GraduationCap size={36} className="text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">College Students</h3>
              <p className="text-gray-400 leading-relaxed mb-8 flex-grow text-[16px]">
                Industry-ready skills, real projects, internships, and guidance to bridge the gap between college and career.
              </p>
              <div className="mt-auto">
                <Link href="/programs">
                  <Button className="w-full bg-[#00C365] hover:bg-[#00A855] text-white font-medium py-6 text-base rounded-xl border-none">
                    View College Programs
                  </Button>
                </Link>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-lg hover:bg-white/10 hover:border-[#00C365]/30 transition-all duration-300 flex flex-col h-full hover:-translate-y-1 group">
              <div className="mb-6 bg-green-500/10 w-fit p-4 rounded-xl group-hover:bg-green-500/20 transition-colors">
                 <Rocket size={32} className="text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Open Learners</h3>
              <p className="text-gray-400 leading-relaxed mb-8 flex-grow text-[16px]">
                Upskilling, career transition, and practical programs for anyone who wants to build real-world skills.
              </p>
              <div className="mt-auto">
                <Link href="/programs">
                  <Button className="w-full bg-[#00C365] hover:bg-[#00A855] text-white font-medium py-6 text-base rounded-xl border-none">
                    View Open Programs
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}