"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const stories = [
  {
    name: "Priya Sharma",
    role: "Software Engineer at Amazon",
    story:
      "I wasn't getting anywhere with online courses. Hynox gave me a real project to work on. Within 6 months, Amazon recruited me directly.",
    rating: 5,
  },
  {
    name: "Arjun Patel",
    role: "Product Manager at Microsoft",
    story:
      "The multi-level team environment taught me how real companies work. I learned more in 4 months than in my entire college degree.",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    role: "Data Analyst at Google",
    story:
      "Working on a live analytics project for an EdTech company showed me what real data science looks like. Google was impressed.",
    rating: 5,
  },
]

export default function StudentStories() {
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
    <section ref={ref} className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-primary mb-4">Stories from Our Students</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real students. Real impact. Real careers built.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <Card
              key={index}
              className={`p-8 border border-border hover:shadow-lg transition-all ${
                visible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: story.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-primary mb-6 leading-relaxed">"{story.story}"</p>
              <div>
                <p className="font-poppins font-bold text-primary">{story.name}</p>
                <p className="text-secondary text-sm font-semibold">{story.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
