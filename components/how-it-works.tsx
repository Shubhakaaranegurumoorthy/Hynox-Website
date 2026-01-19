"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

const stages = [
  {
    number: 1,
    title: "Career Direction",
    description: "Career clarity & domain selection. Ideal for 11th, 12th & early college students.",
    icon: "🎯",
  },
  {
    number: 2,
    title: "Domain Exposure",
    description: "Workshops & roadmap understanding. What skills industry actually expects.",
    icon: "🔍",
  },
  {
    number: 3,
    title: "Skill Development",
    description: "Paid, structured, project-based courses with industry-aligned curriculum.",
    icon: "💻",
  },
  {
    number: 4,
    title: "Guaranteed Internship",
    description: "PAN-India industry projects, internship certificates & portfolio-ready experience.",
    icon: "🚀",
  },
]

export default function HowItWorks() {
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
    <section id="how-it-works" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-primary mb-4">How Hynox Campus Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four stages to transform your career with industry experience
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block relative h-64 mb-16">
            <div className="absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary" />

            <div className="grid grid-cols-4 gap-4 relative z-10">
              {stages.map((stage) => (
                <div
                  key={stage.number}
                  className={`transition-all duration-500 ${
                    visible ? "animate-slideInLeft opacity-100" : "opacity-0 translate-y-10"
                  }`}
                  style={{ animationDelay: `${stage.number * 0.15}s` }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-white border-4 border-secondary rounded-full flex items-center justify-center text-2xl shadow-lg mb-4">
                      {stage.icon}
                    </div>
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm absolute -top-2 -right-4">
                      {stage.number}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Vertical */}
          <div className="grid grid-cols-1 lg:hidden gap-6">
            {stages.map((stage, index) => (
              <Card
                key={stage.number}
                className={`p-6 border-l-4 border-l-secondary hover:shadow-lg transition-all ${
                  visible ? "animate-fadeInUp" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-4 items-start">
                  <div className="text-3xl">{stage.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {stage.number}
                      </span>
                      <h3 className="font-poppins font-bold text-lg text-primary">{stage.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{stage.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Desktop Card Details */}
          <div className="hidden lg:grid grid-cols-4 gap-4">
            {stages.map((stage, index) => (
              <Card
                key={stage.number}
                className={`p-4 text-center border border-border hover:border-secondary/50 transition-all ${
                  visible ? "animate-fadeInUp" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <h3 className="font-poppins font-bold text-primary mb-2">{stage.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{stage.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
