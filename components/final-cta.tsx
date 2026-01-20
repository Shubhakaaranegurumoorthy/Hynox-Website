"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link" // Added Link for navigation

export default function FinalCTA() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      // 1. Changed background to site dark color
      className="py-24 bg-[#030712] text-white relative overflow-hidden font-poppins border-t border-white/5"
    >
      {/* 2. Updated Animated background elements to Green/White glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00C365]/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{
               backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
               backgroundSize: '40px 40px'
           }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center max-w-4xl mx-auto ${visible ? "animate-fadeInUp" : "opacity-0"}`}>
          
          <h2 className="font-bold text-4xl lg:text-6xl mb-6 text-white text-balance tracking-tight">
            Don't Just Learn. <br className="hidden md:block" />
            {/* 3. Updated accent color to #00C365 */}
            <span className="text-[#00C365]">Work With Industry.</span>
          </h2>

          <p className="text-lg text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
            Join thousands of students who've transformed their careers through real industry experience, guaranteed
            internships, and portfolio-ready projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            {/* 4. Updated Primary Button to Green */}
            <Link href="/audience">
                <Button size="lg" className="bg-[#00C365] text-white hover:bg-[#00A855] font-semibold h-14 px-8 text-base rounded-xl shadow-[0_0_20px_rgba(0,195,101,0.3)] hover:shadow-[0_0_30px_rgba(0,195,101,0.5)] transition-all duration-300">
                Join Hynox Campus
                <ArrowRight size={20} className="ml-2" />
                </Button>
            </Link>
            
            <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-xl border-white/20 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm">
              Talk to Our Team
            </Button>
          </div>

          {/* Secondary message */}
          <p className="text-gray-500 text-sm mt-10">
            Start your industry journey today. <span className="text-gray-300">No application fees for the first 100 students.</span>
          </p>
        </div>
      </div>
    </section>
  )
}