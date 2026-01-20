"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

const partners = [
  { name: "Accenture", outcome: "500+ Placements" },
  { name: "TCS", outcome: "320+ Placements" },
  { name: "Infosys", outcome: "280+ Placements" },
  { name: "Wipro", outcome: "240+ Placements" },
  { name: "Amazon", outcome: "180+ Placements" },
  { name: "Microsoft", outcome: "150+ Placements" },
]

export default function IndustryPartners() {
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
    <section ref={ref} className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-foreground mb-4">
            Industry Partners Who Hire Our Students
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real partnerships with India's top companies. Direct hiring pipeline for proven talent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className={`p-8 border border-border bg-card hover:border-accent hover:shadow-xl hover:shadow-accent/20 transition-all ${
                visible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-3xl font-bold text-accent">{partner.name.charAt(0)}</div>
                </div>
                <h3 className="font-poppins font-bold text-xl text-foreground mb-2">{partner.name}</h3>
                <p className="text-accent font-semibold text-lg">{partner.outcome}</p>
                <p className="text-muted-foreground text-sm mt-2">Active hiring our graduates</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
