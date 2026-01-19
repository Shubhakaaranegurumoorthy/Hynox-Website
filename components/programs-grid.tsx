"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

const programs = [
  {
    title: "Full Stack Web Development",
    icon: "💻",
    description: "Master frontend, backend, and deployment with real projects",
    duration: "6 months",
    level: "Beginner to Intermediate",
    projects: 5,
    skills: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    title: "Data Science & ML",
    icon: "📊",
    description: "Learn machine learning from theory to production deployment",
    duration: "6 months",
    level: "Intermediate",
    projects: 4,
    skills: ["Python", "TensorFlow", "Analytics", "Cloud"],
  },
  {
    title: "Product Management",
    icon: "🎯",
    description: "Build and ship products that customers love",
    duration: "4 months",
    level: "Beginner to Advanced",
    projects: 6,
    skills: ["Strategy", "Analytics", "Design", "Leadership"],
  },
  {
    title: "UI/UX Design",
    icon: "🎨",
    description: "Create beautiful, user-centric digital experiences",
    duration: "4 months",
    level: "Beginner to Intermediate",
    projects: 8,
    skills: ["Figma", "Design Systems", "Psychology", "Prototyping"],
  },
]

export default function ProgramsGrid() {
  const [visible, setVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
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
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-primary mb-4">Our Programs</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-curated programs designed to land you your dream job
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {programs.map((program, index) => (
            <Card
              key={index}
              className={`p-8 border border-border hover:border-secondary hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden relative ${
                visible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />

              <div className="relative z-10">
                <div className="text-5xl mb-4">{program.icon}</div>

                <h3 className="font-poppins font-bold text-2xl text-primary mb-2 group-hover:text-secondary transition-colors">
                  {program.title}
                </h3>

                <p className="text-muted-foreground mb-6">{program.description}</p>

                <div className="grid grid-cols-2 gap-3 mb-6 pb-6 border-b border-border">
                  <div>
                    <p className="text-xs text-muted-foreground">Duration</p>
                    <p className="text-primary font-semibold">{program.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Live Projects</p>
                    <p className="text-primary font-semibold">{program.projects}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-xs text-muted-foreground mb-2">Core Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {program.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="bg-secondary/10 text-secondary text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <button className="w-full py-2 px-4 bg-secondary/10 text-secondary rounded-lg font-medium text-sm hover:bg-secondary hover:text-background transition-all duration-300 flex items-center justify-center gap-2 group">
                  Explore Program
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
