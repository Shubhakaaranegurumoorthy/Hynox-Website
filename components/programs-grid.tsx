"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

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
    // 1. Updated Background to Site Dark Color
    <section ref={ref} id="programs" className="py-24 bg-[#030712] font-poppins">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl lg:text-5xl text-white mb-4 tracking-tight">
            Our Programs
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Industry-curated programs designed to land you your dream job
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {programs.map((program, index) => (
            <Card
              key={index}
              // 2. Dark Theme Card Styles
              className={`p-8 border border-white/10 bg-white/5 hover:border-[#00C365]/50 hover:bg-white/[0.07] transition-all duration-300 cursor-pointer group overflow-hidden relative ${
                visible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Hover Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-[#00C365]/5 to-transparent transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />

              <div className="relative z-10">
                <div className="text-5xl mb-6 bg-white/5 w-fit p-3 rounded-2xl">{program.icon}</div>

                <h3 className="font-bold text-2xl text-white mb-2 group-hover:text-[#00C365] transition-colors">
                  {program.title}
                </h3>

                <p className="text-gray-400 mb-6">{program.description}</p>

                <div className="grid grid-cols-2 gap-3 mb-6 pb-6 border-b border-white/10">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Duration</p>
                    <p className="text-white font-semibold">{program.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Live Projects</p>
                    <p className="text-white font-semibold">{program.projects}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Core Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {program.skills.map((skill, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        // 3. Green Accent Badges
                        className="bg-[#00C365]/10 text-[#00C365] hover:bg-[#00C365]/20 border border-[#00C365]/20 text-xs px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* 4. Link Button */}
                <Link href="/programs">
                    <button className="w-full py-3 px-4 bg-white/5 border border-white/10 text-white rounded-xl font-medium text-sm hover:bg-[#00C365] hover:border-[#00C365] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group">
                    Explore Program
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}