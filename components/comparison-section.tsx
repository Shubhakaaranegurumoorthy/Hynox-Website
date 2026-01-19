"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2, XCircle } from "lucide-react"

const comparisons = [
  {
    feature: "Learning Format",
    normal: "Recorded videos only",
    hynox: "Live & guided learning",
  },
  {
    feature: "Real Projects",
    normal: "No real projects",
    hynox: "Real industry projects",
  },
  {
    feature: "Certification",
    normal: "Certificate without proof",
    hynox: "Guaranteed internship exposure",
  },
  {
    feature: "Collaboration",
    normal: "Individual learning",
    hynox: "Multi-level teams",
  },
  {
    feature: "Portfolio Value",
    normal: "Certificate only",
    hynox: "Portfolio + certification",
  },
  {
    feature: "After Course",
    normal: "Learning ends",
    hynox: "Long-term ecosystem access",
  },
]

export default function ComparisonSection() {
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
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-primary mb-4">
            Hynox Campus vs Normal Courses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">See how we're different</p>
        </div>

        <div ref={ref} className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left p-4 font-poppins font-bold text-primary">Feature</th>
                <th className="text-center p-4 font-poppins font-bold text-primary">Normal Courses</th>
                <th className="text-center p-4 font-poppins font-bold text-secondary">Hynox Campus</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((comp, index) => (
                <tr
                  key={index}
                  className={`border-b border-border hover:bg-muted/50 transition-colors ${
                    visible ? "animate-fadeInUp" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <td className="p-4 font-medium text-primary">{comp.feature}</td>
                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <XCircle size={18} />
                      <span className="text-sm">{comp.normal}</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2 text-secondary font-medium">
                      <CheckCircle2 size={18} />
                      <span className="text-sm">{comp.hynox}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
