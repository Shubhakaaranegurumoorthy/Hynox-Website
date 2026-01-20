"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const audiences = [
  {
    title: "School Students (11th & 12th)",
    description: "Start early with career direction & domain exposure. Build portfolio before college.",
    icon: "🎓",
  },
  {
    title: "College Students",
    description: "Upskill with industry-relevant courses. Get real project experience alongside studies.",
    icon: "📚",
  },
  {
    title: "Final-Year Students",
    description: "Transition smoothly from college to career. Get guaranteed internship & mentorship.",
    icon: "🚀",
  },
  {
    title: "Schools & Institutions",
    description: "Provide your students with real career outcomes. Partner with industry ecosystem.",
    icon: "🏫",
  },
]

export default function WhoShouldJoin() {
  const [visible, setVisible] = useState<boolean[]>(new Array(audiences.length).fill(false))
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
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-primary mb-4">Who Should Join?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hynox Campus is for anyone serious about industry-ready career outcomes
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiences.map((audience, index) => (
            <Card
              key={index}
              className={`p-8 border border-border hover:border-secondary/50 hover:shadow-lg transition-all group cursor-pointer ${
                visible[index] ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{audience.icon}</div>
              <h3 className="font-poppins font-bold text-xl text-primary mb-3 group-hover:text-secondary transition-colors">
                {audience.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{audience.description}</p>
              <Button
                variant="outline"
                className="text-secondary border-secondary hover:bg-secondary/10 bg-transparent"
              >
                Learn More
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
