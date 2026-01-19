"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Zap, Users, Briefcase, Target } from "lucide-react"

const points = [
  {
    icon: Target,
    title: "Real-World Problem Statements",
    description: "Solve actual industry challenges from startups & established businesses",
  },
  {
    icon: Users,
    title: "Mentor-Led Project Reviews",
    description: "Receive guidance from industry experts with proven track records",
  },
  {
    icon: Briefcase,
    title: "Agile & Industry Workflows",
    description: "Learn and apply real industry processes and methodologies",
  },
  {
    icon: Zap,
    title: "Team-Based Execution",
    description: "Execute projects like real industry teams with collaboration",
  },
]

export default function IndustryConnection() {
  const [visible, setVisible] = useState<boolean[]>(new Array(points.length).fill(false))
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setVisible((prev) => prev.map(() => true))
          }, 100)
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-primary mb-4">
            Our Industry Collaboration Model
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built on real partnership with actual industry problems and mentorship
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {points.map((point, index) => {
            const Icon = point.icon
            return (
              <Card
                key={index}
                className={`p-8 border border-border hover:border-secondary/50 hover:shadow-lg transition-all ${
                  visible[index] ? "animate-fadeInUp" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-lg text-primary mb-2">{point.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Trust Line */}
        <Card className="bg-gradient-to-r from-secondary/10 to-transparent border border-secondary/30 p-8 text-center">
          <p className="text-primary font-poppins font-bold text-xl">
            Internships are not simulated — they are structured like real industry teams.
          </p>
          <p className="text-muted-foreground text-sm mt-3">
            Every project is backed by real business problems, real timelines, and real impact measurement.
          </p>
        </Card>
      </div>
    </section>
  )
}
