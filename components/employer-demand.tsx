"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { BarChart3 } from "lucide-react"

export default function EmployerDemand() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-secondary/10 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className={visible ? "animate-slideInLeft" : "opacity-0"}>
            <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-primary mb-6">Built for Employer Demand</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We don't create our curriculum in a vacuum. We work directly with 100+ companies to understand exactly
              what skills they need. Our students are job-ready because they've solved the problems employers face.
            </p>

            <div className="space-y-4">
              {[
                "100+ Companies on our Advisory Board",
                "Skills updated every quarter based on industry feedback",
                "Direct hiring partnerships",
                "Live problem statements from real businesses",
              ].map((point, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-primary font-medium">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Visual */}
          <div className={`${visible ? "animate-slideInRight" : "opacity-0"}`}>
            <Card className="p-8 border-2 border-secondary/20 bg-white">
              <div className="flex items-center justify-center mb-8">
                <BarChart3 size={48} className="text-secondary" />
              </div>
              <div className="text-center space-y-6">
                <div>
                  <p className="text-4xl font-bold text-secondary mb-2">87%</p>
                  <p className="text-muted-foreground">Of students work on problems directly from partner companies</p>
                </div>
                <div className="border-t border-border pt-6">
                  <p className="text-3xl font-bold text-secondary mb-2">92%</p>
                  <p className="text-muted-foreground">Of employers are satisfied with our students' readiness</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
