"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

const outcomes = [
  { metric: "95%", label: "Internship Placement Rate" },
  { metric: "₹8-15L", label: "Average First Year Salary" },
  { metric: "3-6 Months", label: "Time to First Job" },
  { metric: "10K+", label: "Students Placed" },
]

export default function CareerOutcomes() {
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
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-primary mb-4">Career Outcomes That Matter</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from students who worked with real industry problems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((outcome, index) => (
            <Card
              key={index}
              className={`p-8 border-2 border-secondary/20 hover:border-secondary bg-gradient-to-br from-secondary/5 to-accent/5 transition-all ${
                visible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3 mb-4">
                <TrendingUp className="text-secondary mt-1 flex-shrink-0" />
              </div>
              <div className="text-4xl font-bold text-secondary mb-2">{outcome.metric}</div>
              <p className="text-primary font-medium">{outcome.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
