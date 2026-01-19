"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

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
      className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center max-w-3xl mx-auto ${visible ? "animate-fadeInUp" : "opacity-0"}`}>
          <h2 className="font-poppins font-bold text-4xl lg:text-6xl mb-6 text-white text-balance">
            Don't Just Learn. <span className="text-accent">Work With Industry.</span>
          </h2>

          <p className="text-lg text-white/90 mb-12 leading-relaxed">
            Join thousands of students who've transformed their careers through real industry experience, guaranteed
            internships, and portfolio-ready projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
              Join Hynox Campus
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              Talk to Our Team
            </Button>
          </div>

          {/* Secondary message */}
          <p className="text-white/70 text-sm mt-8">
            Start your industry journey today. No application fees for the first 100 students.
          </p>
        </div>
      </div>
    </section>
  )
}
