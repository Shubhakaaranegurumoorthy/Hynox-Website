"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const features = [
  {
    title: "Learn from Practitioners",
    description:
      "Your instructors aren't YouTube creators. They're industry professionals with 10+ years of experience.",
  },
  {
    title: "Build Portfolio, Not Resume",
    description: "Every project you do becomes part of your portfolio. Employers see your actual work.",
  },
  {
    title: "Guaranteed Internship",
    description: "After successful course completion, internship placement is guaranteed. No exceptions.",
  },
  {
    title: "Multi-level Team Learning",
    description: "Work with students of different skill levels, just like in real companies. Learn collaboration.",
  },
]

export default function WhyHynox() {
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
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-primary mb-4">Why Choose Hynox Campus?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not a course platform. We're an industry-education bridge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`p-8 border border-border hover:border-secondary transition-all ${
                visible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-4">
                <CheckCircle2 className="text-secondary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-poppins font-bold text-lg text-primary mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
