"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

const benefits = [
  "Bulk student onboarding with minimal friction",
  "Final-year project collaboration & support",
  "Internship & certification ecosystem",
  "No infrastructure burden on institutions",
  "Career outcomes for your students",
]

export default function SchoolCollaboration() {
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
    <section id="partnership" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`${visible ? "animate-slideInLeft" : "opacity-0"}`}>
            <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-primary mb-6">
              Partnering With <span className="text-secondary">Schools & Colleges</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We work with schools and colleges to provide career-ready internship & project opportunities for your
              students.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex gap-3 items-start ${visible ? "animate-fadeInUp" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-primary font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              Become a Hynox Campus Partner
            </Button>
          </div>

          {/* Right Visual */}
          <div className={`${visible ? "animate-slideInRight" : "opacity-0"}`}>
            <Card className="border-2 border-secondary/20 p-8 bg-gradient-to-br from-secondary/5 to-accent/5">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-secondary mb-2">500+</div>
                  <p className="text-muted-foreground">Institutions Partnered</p>
                </div>
                <div className="border-t border-border pt-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">50,000+</div>
                  <p className="text-muted-foreground">Students Impacted</p>
                </div>
                <div className="border-t border-border pt-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
                  <p className="text-muted-foreground">Internships Completed</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
