"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import IndustryPartners from "@/components/industry-partners"
import RealProjects from "@/components/real-projects"
import CareerOutcomes from "@/components/career-outcomes"
import HowItWorks from "@/components/how-it-works"
import ComparisonSection from "@/components/comparison-section"
import StudentStories from "@/components/student-stories"
import EmployerDemand from "@/components/employer-demand"
import FinalCTA from "@/components/final-cta"
import Footer from "@/components/footer"
import Mentors from "@/components/mentors"
import ProgramsGrid from "@/components/programs-grid"
import InfiniteLogos from "@/components/infinite-logos"
import FeaturesGrid from "@/components/features-grid"
// ADD THIS IMPORT LINE:
import AudienceSection from "@/components/ui/audience-section"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="scroll-smooth overflow-x-hidden">
      <Header isScrolled={isScrolled} />
      <Hero />
      <InfiniteLogos />
      <AudienceSection /> {/* Moved this up to be visible earlier, or place where you prefer */}
      <Mentors />
      <ProgramsGrid />
      <IndustryPartners />
      <FeaturesGrid />
      <RealProjects />
      <CareerOutcomes />
      <HowItWorks />
      <ComparisonSection />
      <StudentStories />
      <EmployerDemand />
      <FinalCTA />
      <Footer />
    </main>
  )
}