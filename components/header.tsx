"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  isScrolled: boolean
}

export default function Header({ isScrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center text-white font-bold">
              H
            </div>
            <span className="font-poppins font-bold text-xl text-foreground hidden sm:inline">Hynox Campus</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              About
            </a>
            <a href="#programs" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Programs
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              How It Works
            </a>
            <a href="#partnership" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Partnership
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="hidden sm:inline-flex text-foreground border-foreground hover:bg-foreground/10 bg-transparent"
            >
              Sign In
            </Button>
            <Button className="bg-secondary hover:bg-secondary/90 text-white">Explore Programs</Button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-foreground">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col gap-3 py-4">
              <a href="#about" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                About
              </a>
              <a href="#programs" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Programs
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                How It Works
              </a>
              <a
                href="#partnership"
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                Partnership
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
