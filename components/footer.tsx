"use client"

import { Mail, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border text-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center font-bold text-white">
                H
              </div>
              <span className="font-poppins font-bold">Hynox Campus</span>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Industry-first learning ecosystem designed to convert students into real contributors.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-poppins font-bold mb-4">Programs</h3>
            <ul className="space-y-3 text-sm">
              {["Software Development", "AI & ML", "UI/UX Design", "Digital Marketing"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-poppins font-bold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              {["About Us", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-poppins font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-border hover:bg-secondary rounded-lg flex items-center justify-center transition-colors text-foreground hover:text-white"
              >
                <Mail size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-border hover:bg-secondary rounded-lg flex items-center justify-center transition-colors text-foreground hover:text-white"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-border hover:bg-secondary rounded-lg flex items-center justify-center transition-colors text-foreground hover:text-white"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/70">
          <p>© 2025 Hynox Campus. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
