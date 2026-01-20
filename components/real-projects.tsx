"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "E-Commerce Platform Redesign",
    company: "Leading Retail Startup",
    students: 8,
    impact: "Increased conversion by 35%",
    skills: ["UI/UX Design", "Frontend"],
  },
  {
    title: "Mobile Banking App Development",
    company: "Fintech Company",
    students: 12,
    impact: "10K+ downloads in first month",
    skills: ["Mobile Dev", "Backend"],
  },
  {
    title: "Data Analytics Pipeline",
    company: "EdTech Platform",
    students: 6,
    impact: "Reduced query time by 60%",
    skills: ["Data Analytics", "Python"],
  },
  {
    title: "Cloud Infrastructure Migration",
    company: "SaaS Company",
    students: 10,
    impact: "40% cost reduction",
    skills: ["Cloud", "DevOps"],
  },
  {
    title: "AI Chatbot Integration",
    company: "Customer Support Firm",
    students: 5,
    impact: "Handled 80% of queries",
    skills: ["AI/ML", "NLP"],
  },
  {
    title: "Real-time Analytics Dashboard",
    company: "Gaming Company",
    students: 9,
    impact: "Real-time monitoring for 1M+ users",
    skills: ["Full Stack", "Analytics"],
  },
]

export default function RealProjects() {
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
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-primary mb-4">
            Real Industry Projects, Real Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our students don't practice on dummy problems. They work on live projects that power real companies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`p-6 border border-border hover:border-secondary transition-all hover:shadow-lg ${
                visible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="mb-4">
                <h3 className="font-poppins font-bold text-xl text-primary mb-2">{project.title}</h3>
                <p className="text-secondary font-semibold text-sm">{project.company}</p>
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">Business Impact</p>
                  <p className="text-primary font-semibold">{project.impact}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{project.students} students working together</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, i) => (
                  <Badge key={i} variant="secondary" className="bg-secondary/10 text-secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
