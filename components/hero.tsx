"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import ApplyModal from "@/components/ui/apply-modal"
import Link from "next/link"

export default function Hero() {
  const [animated, setAnimated] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setAnimated(true)
  }, [])

  return (
    <>
      <section className="min-h-screen bg-[#030712] text-white flex items-center justify-center pt-20 pb-12 overflow-hidden font-poppins">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* LEFT CONTENT */}
            <div className={`space-y-8 ${animated ? "animate-slideInLeft" : "opacity-0"}`}>
              
              <h1 className="text-4xl lg:text-[40px] font-semibold leading-[1.1] tracking-tight">
                Building <span className="text-[#00C365]">Industry-Ready</span> <br />
                Engineers, Not Just <br />
                <span className="text-gray-400 decoration-[#00C365] underline decoration-4 underline-offset-4">Exam-Ready</span> Graduates.
              </h1>

              <p className="text-lg lg:text-[19px] text-gray-300 font-normal max-w-lg leading-relaxed">
                Skip the theory trap. Gain real work experience, build live projects, and land your dream tech job before you graduate.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 pt-2">
                {/* Apply Button - Opens Modal */}
                <Button 
                  onClick={() => setIsModalOpen(true)} 
                  className="h-13 px-10 rounded-lg border border-white bg-transparent hover:bg-white/10 text-white text-base font-medium"
                >
                  Apply Now
                </Button>

                {/* LINK TO NEW PAGE */}
                <Link href="/audience">
                    <Button
                      className="h-13 px-10 rounded-lg bg-[#00C365] hover:bg-[#00A855] text-white border-none text-base font-medium"
                    >
                      Explore programs
                    </Button>
                </Link>
              </div>

              {/* Stats Section */}
              <div className="flex items-center gap-8 pt-1">
                <div className="flex items-center gap-3">
                  <span className="text-4xl lg:text-[50px] font-normal tracking-tight">100%</span>
                  <span className="text-sm leading-tight text-gray-300 font-light">
                    Guaranteed <br /> Placement
                  </span>
                </div>
                
                <div className="h-12 w-[1px] bg-gray-600/50"></div>

                <div className="flex items-center gap-3">
                  <span className="text-4xl lg:text-[50px] font-normal tracking-tight">50%</span>
                  <span className="text-sm leading-tight text-gray-300 font-light">
                    Student <br /> Scholarship
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className={`relative flex justify-center lg:justify-end ${animated ? "animate-slideInRight" : "opacity-0"}`}>
              <div className="relative p-[6px] rounded-2xl border border-[#00C365] w-full max-w-[650px]">
                  <div className="relative h-[350px] lg:h-[420px] w-full overflow-hidden rounded-xl bg-gray-800">
                      <img 
                          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop" 
                          alt="Students learning"
                          className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-500"
                      />
                  </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MODAL COMPONENT */}
      <ApplyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}