"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const mentors = [
  {
    name: "Rajesh Kumar",
    role: "Lead Engineer at Amazon",
    experience: "12+ years",
    students: "500+",
    rating: 4.9,
    specialization: "Backend & Scalability",
  },
  {
    name: "Priya Desai",
    role: "Product Manager at Google",
    experience: "10+ years",
    students: "300+",
    rating: 4.8,
    specialization: "Product Strategy",
  },
  {
    name: "Amit Singh",
    role: "CTO at Fintech Startup",
    experience: "15+ years",
    students: "600+",
    rating: 4.9,
    specialization: "Full Stack & DevOps",
  },
  {
    name: "Ananya Sharma",
    role: "Design Lead at Adobe",
    experience: "8+ years",
    students: "250+",
    rating: 4.7,
    specialization: "UI/UX Design",
  },
]

export default function Mentors() {
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
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-primary mb-4">Learn from Industry Icons</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get mentored by the top 1% who've built products loved by millions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((mentor, index) => (
            <Card
              key={index}
              className={`p-6 border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300 group overflow-hidden relative ${
                visible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Mentor Avatar Placeholder */}
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full mb-4 flex items-center justify-center text-white text-xl font-bold">
                  {mentor.name.charAt(0)}
                </div>

                <h3 className="font-poppins font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
                  {mentor.name}
                </h3>
                <p className="text-accent text-sm font-semibold mb-2">{mentor.role}</p>

                <div className="space-y-2 text-sm text-muted-foreground mb-4 border-t border-border pt-4">
                  <div className="flex justify-between">
                    <span>Experience</span>
                    <span className="text-primary font-medium">{mentor.experience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mentored</span>
                    <span className="text-primary font-medium">{mentor.students}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`${i < Math.floor(mentor.rating) ? "fill-secondary text-secondary" : "text-border"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-primary font-semibold">{mentor.rating}</span>
                </div>

                <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                  {mentor.specialization}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
