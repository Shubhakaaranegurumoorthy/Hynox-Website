"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

interface HeaderProps {
  isScrolled: boolean
}

export default function Header({ isScrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#030712]/95 backdrop-blur-md shadow-sm border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#00C365] rounded-lg flex items-center justify-center text-white font-bold">
              H
            </div>
            <span className="font-poppins font-bold text-xl text-white hidden sm:inline">Hynox Campus</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-[#00C365] transition-colors">
              About
            </Link>
            
            {/* LINK TO NEW PAGE */}
            <Link href="/audience" className="text-sm font-medium text-gray-300 hover:text-[#00C365] transition-colors">
              Programs
            </Link>

            <Link href="/#how-it-works" className="text-sm font-medium text-gray-300 hover:text-[#00C365] transition-colors">
              How It Works
            </Link>
            <Link href="/#partnership" className="text-sm font-medium text-gray-300 hover:text-[#00C365] transition-colors">
              Partnership
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="hidden sm:inline-flex text-white border-white hover:bg-white/10 bg-transparent"
            >
              Sign In
            </Button>
            
            {/* LINK TO NEW PAGE */}
            <Link href="/audience">
                <Button className="bg-[#00C365] hover:bg-[#00A855] text-white">Explore Programs</Button>
            </Link>
            
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <nav className="flex flex-col gap-3 py-4">
              <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-[#00C365] transition-colors">
                About
              </Link>
              <Link href="/audience" className="text-sm font-medium text-gray-300 hover:text-[#00C365] transition-colors">
                Programs
              </Link>
              <Link href="/#how-it-works" className="text-sm font-medium text-gray-300 hover:text-[#00C365] transition-colors">
                How It Works
              </Link>
              <Link href="/#partnership" className="text-sm font-medium text-gray-300 hover:text-[#00C365] transition-colors">
                Partnership
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}