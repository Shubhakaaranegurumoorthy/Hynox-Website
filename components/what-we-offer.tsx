"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const features = [
  {
    title: "Industry-Aligned Skill Courses",
    description: "Online & hybrid courses designed by industry experts with real-world workflows",
  },
  {
    title: "Guaranteed Internship Exposure",
    description: "Structured like real industry teams with actual project work and mentorship",
  },
  {
    title: "Multi-Level Project Teams",
    description: "Collaborate with school students, college students, and graduates on real projects",
  },
  {
    title: "Real Tools & Real Mentors",
    description: "Work with actual industry tools, processes, and experienced mentors",
  },
  {
    title: "Project-Backed Certification",
    description: "Certificates backed by portfolio-ready projects and proven impact",
  },
  {
    title: "Long-Term Ecosystem Access",
    description: "Continuous learning and growth opportunities even after course completion",
  },
]

export default function WhatWeOffer() {
  const [visible, setVisible] = useState<boolean[]>(new Array(features.length).fill(false))
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = 100
            setTimeout(() => {
              setVisible((prev) => {
                const newVisible = [...prev]
                features.forEach((_, index) => {
                  newVisible[index] = true
                })
                return newVisible
              })
            }, delay)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-primary mb-4">What Exactly Do We Offer?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to transform from a learner to an industry-ready contributor
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`p-6 border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300 ${
                visible[index] ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-poppins font-bold text-lg text-primary mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Important Clarity Line */}
        <Card className="bg-gradient-to-r from-accent/10 to-transparent border border-accent/30 p-6">
          <p className="text-primary font-poppins font-bold text-lg">
            ✓ Hynox Campus is <span className="text-accent">NOT</span> just an online course platform.
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            We are an industry-first ecosystem designed to convert students into real contributors with proven
            experience and portfolio-ready projects.
          </p>
        </Card>
      </div>
    </section>
  )
}
