"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: "🎓",
    title: "Learn by Doing",
    description: "Work on real projects with real companies from day one",
  },
  {
    icon: "👥",
    title: "Learn with Others",
    description: "Collaborate in teams and build lasting professional networks",
  },
  {
    icon: "🚀",
    title: "Learn for Future",
    description: "Skills that are actually in demand by top tech companies",
  },
  {
    icon: "💼",
    title: "1:1 Mentorship",
    description: "Personal guidance from industry leaders throughout your journey",
  },
  {
    icon: "🎯",
    title: "Career Focused",
    description: "Every module designed to land you a job or promotion",
  },
  {
    icon: "📈",
    title: "Measurable Growth",
    description: "Track your progress with real metrics and portfolio pieces",
  },
]

export default function FeaturesGrid() {
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
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-primary mb-4">Why Hynox Campus?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to succeed in the real world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`p-8 border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300 group ${
                visible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
                {feature.icon}
              </div>
              <h3 className="font-poppins font-bold text-lg text-primary mb-2 group-hover:text-secondary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
