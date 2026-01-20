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
    // 1. Updated Background to Site Dark Color
    <section ref={ref} className="py-20 bg-[#030712] font-poppins text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl lg:text-5xl text-white mb-4 tracking-tight">
            Career Outcomes That Matter
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Real results from students who worked with real industry problems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((outcome, index) => (
            <Card
              key={index}
              // 2. Updated Card Styling for Dark Theme
              className={`p-8 border border-white/10 bg-white/5 hover:border-[#00C365]/50 hover:bg-white/10 transition-all duration-300 group ${
                visible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3 mb-4">
                {/* 3. Updated Icon Color to Green */}
                <TrendingUp className="text-[#00C365] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              {/* 4. Updated Text Colors */}
              <div className="text-4xl font-bold text-white mb-2 tracking-tight">
                {outcome.metric}
              </div>
              <p className="text-gray-400 font-medium group-hover:text-gray-300 transition-colors">
                {outcome.label}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}