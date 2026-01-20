"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

interface CounterProps {
  target: number
  label: string
  suffix?: string
}

function Counter({ target, label, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const increment = target / 50
          const timer = setInterval(() => {
            setCount((prev) => {
              if (prev >= target) {
                clearInterval(timer)
                return target
              }
              return prev + increment
            })
          }, 30)
          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl lg:text-5xl font-bold text-secondary mb-2">
        {count.toLocaleString("en-US", { maximumFractionDigits: 0 })}
        {suffix}
      </div>
      <p className="text-muted-foreground font-medium">{label}</p>
    </div>
  )
}

export default function TrustSection() {
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-primary mb-4">
            Trusted by Students, Schools & Industry
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real impact numbers that speak for themselves
          </p>
        </div>

        {/* Counters */}
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Counter target={10000} label="Students Trained" />
          <Counter target={5000} label="Projects Completed" />
          <Counter target={2500} label="Internships Delivered" />
          <Counter target={500} label="Institutions Partnered" />
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h3 className="text-center font-poppins font-bold text-2xl text-primary mb-8">What People Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Hynox Campus gave me real project experience that actually mattered for my career.",
                author: "Priya S.",
                role: "Engineering Student",
              },
              {
                quote: "The internship structure is nothing like typical online platforms. It's real work.",
                author: "Arjun M.",
                role: "College Graduate",
              },
              {
                quote: "Our students are getting industry exposure that our college alone couldn't provide.",
                author: "Dr. Ramesh K.",
                role: "College Director",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className={`p-6 border border-border hover:border-secondary/50 transition-all ${
                  visible ? "animate-fadeInUp" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-muted-foreground italic mb-4 leading-relaxed">"{testimonial.quote}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Industry Partners */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">Trusted by leading companies</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-60">
            {["TechCorp", "StartupHub", "InnovateLabs", "GrowthVentures"].map((partner) => (
              <div key={partner} className="text-sm font-semibold text-primary">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
