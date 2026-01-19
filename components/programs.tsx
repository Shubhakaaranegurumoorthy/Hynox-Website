"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const programs = [
  {
    title: "Software Development",
    icon: "💻",
    skills: ["Web Development", "Backend APIs", "Databases", "Deployment"],
    internship: "Real backend & full-stack projects",
    ideal: "Engineering & IT students",
  },
  {
    title: "AI / ML Foundations",
    icon: "🤖",
    skills: ["Python Basics", "ML Algorithms", "Data Processing", "Models"],
    internship: "AI product & ML pipeline projects",
    ideal: "Engineering & Science students",
  },
  {
    title: "UI/UX & Design",
    icon: "🎨",
    skills: ["Design Principles", "Prototyping", "User Research", "Tools"],
    internship: "Real design projects for products",
    ideal: "Design & Creative students",
  },
  {
    title: "Digital Marketing",
    icon: "📱",
    skills: ["Social Strategy", "Content", "Analytics", "Growth"],
    internship: "Real marketing campaigns & analytics",
    ideal: "Business & Marketing students",
  },
  {
    title: "Business & Startup Skills",
    icon: "📊",
    skills: ["Business Plans", "Finance", "Strategy", "Leadership"],
    internship: "Real startup projects & mentorship",
    ideal: "MBA & Entrepreneurship students",
  },
]

export default function Programs() {
  const [visible, setVisible] = useState<boolean[]>(new Array(programs.length).fill(false))
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
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-primary mb-4">Programs We Offer</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-aligned courses across diverse fields
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Card
              key={index}
              className={`p-6 border border-border hover:border-secondary/50 hover:shadow-xl hover:-translate-y-1 transition-all group ${
                visible[index] ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-3">{program.icon}</div>

              <h3 className="font-poppins font-bold text-xl text-primary mb-3">{program.title}</h3>

              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Skills Covered</p>
                  <div className="flex flex-wrap gap-2">
                    {program.skills.map((skill, i) => (
                      <span key={i} className="text-xs bg-muted text-primary px-2 py-1 rounded border border-border">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Internship Outcome</p>
                  <p className="text-sm text-muted-foreground font-medium">{program.internship}</p>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Ideal For</p>
                  <p className="text-sm text-muted-foreground font-medium">{program.ideal}</p>
                </div>

                <Button className="w-full mt-4 bg-secondary hover:bg-secondary/90 text-white group" variant="default">
                  Learn More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
