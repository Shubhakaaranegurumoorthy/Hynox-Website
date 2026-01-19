"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    setAnimated(true)
  }, [])

  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-background to-background pt-20 pb-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] pt-20">
          {/* Left Content */}
          <div className={`space-y-6 ${animated ? "animate-slideInLeft" : "opacity-0"}`}>
            <div className="inline-block">
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20">
                ✨ Industry-First Learning Ecosystem
              </span>
            </div>

            <h1 className="font-poppins font-bold text-5xl lg:text-6xl text-foreground leading-tight text-balance">
              Don't Just Learn.
              <br />
              <span className="text-accent">Work With Industry.</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed text-pretty max-w-lg">
              Join thousands of students who've transformed their careers through real industry experience, guaranteed
              internships, and portfolio-ready projects.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-background font-semibold">
                Join Hynox Campus <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-foreground border-foreground hover:bg-foreground/10 bg-transparent"
              >
                Talk to Our Team
              </Button>
            </div>

            <p className="text-sm text-muted-foreground pt-4">
              Start your industry journey today. No application fees for the first 100 students.
            </p>
          </div>

          {/* Right Visual */}
          <div
            className={`relative h-full min-h-96 lg:min-h-[500px] ${animated ? "animate-slideInRight" : "opacity-0"}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl blur-3xl" />
            <div className="absolute inset-0 border border-secondary/20 rounded-3xl" />

            {/* Animated Elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/10 rounded-2xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/10 rounded-2xl animate-pulse" />
            <div
              className="absolute top-1/2 right-20 w-20 h-20 border-2 border-secondary/30 rounded-full animate-spin"
              style={{ animationDuration: "8s" }}
            />

            {/* Content Inside */}
            <div className="absolute inset-8 flex flex-col justify-center items-center text-center">
              <div className="space-y-4">
                <div className="text-5xl font-bold text-accent">10,000+</div>
                <p className="text-foreground font-medium">Students Trained</p>
                <div className="border-t border-secondary/20 pt-4 mt-4">
                  <p className="text-sm text-muted-foreground">Real Industry Projects • Guaranteed Internships</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
