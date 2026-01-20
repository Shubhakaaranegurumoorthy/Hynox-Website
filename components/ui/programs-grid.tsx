"use client"

import { useState } from "react"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

const PROGRAMS = [
  {
    id: 1,
    title: "UI/UX Design",
    duration: "25 weeks",
    originalPrice: "₹85,000",
    price: "₹74,990",
    category: "Design",
  },
  {
    id: 2,
    title: "Product Design",
    duration: "20 weeks",
    originalPrice: "₹60,000",
    price: "₹49,990",
    category: "Design",
  },
  {
    id: 3,
    title: "D2C Mentorship",
    duration: "28 weeks",
    originalPrice: "₹60,000",
    price: "₹49,990",
    category: "Business",
  },
  {
    id: 4,
    title: "Full Stack Dev",
    duration: "30 weeks",
    originalPrice: "₹90,000",
    price: "₹79,990",
    category: "Tech & Data",
  },
  {
    id: 5,
    title: "Digital Marketing",
    duration: "12 weeks",
    originalPrice: "₹45,000",
    price: "₹34,990",
    category: "Marketing",
  },
  {
    id: 6,
    title: "Management Consulting",
    duration: "25 weeks",
    originalPrice: "₹80,000",
    price: "₹59,990",
    category: "Business",
  }
]

const CATEGORIES = ["All", "Design", "Business", "Marketing", "Tech & Data"]

export default function ProgramsGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredPrograms = activeCategory === "All" 
    ? PROGRAMS 
    : PROGRAMS.filter(p => p.category === activeCategory)

  return (
    <div className="bg-white min-h-screen pb-24 font-poppins relative selection:bg-[#00C365] selection:text-white">
      
      {/* 1. Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none" 
           style={{
             backgroundImage: `linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)`,
             backgroundSize: '40px 40px'
           }}
      ></div>

      {/* 2. Header Section - Reduced Padding */}
      <div className="container mx-auto px-6 lg:px-12 pt-28 pb-8 relative z-10">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#0a0a0a] mb-3 tracking-tight">Extensive Programs</h1>
        <p className="text-gray-500 text-base font-normal">Build a strong career with our focused programs</p>
      </div>

      {/* 3. Cards Grid - Tighter Gap */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredPrograms.map((program) => (
                <div 
                    key={program.id}
                    // COMPACT CARD: p-6, min-h-[260px], rounded-xl
                    className="bg-[#011219] text-white rounded-xl p-6 flex flex-col justify-between min-h-[260px] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group border border-gray-800/60"
                >
                    <div className="relative z-10">
                        {/* Title - Text Large (not XL) */}
                        <h3 className="text-xl font-semibold mb-3 tracking-wide">{program.title}</h3>
                        
                        {/* Duration - Small Text */}
                        <div className="flex items-center gap-2 text-gray-300/90 mb-6 text-[11px] font-medium uppercase tracking-wide">
                            <Calendar size={14} />
                            <span>{program.duration}</span>
                        </div>

                        {/* Price Section - Compact */}
                        <div className="flex items-baseline gap-2 mb-1">
                            <span className="text-[#00C365] line-through text-lg font-bold decoration-2 opacity-80">
                                {program.originalPrice}
                            </span>
                            <span className="text-xl font-bold text-white tracking-tight">
                                {program.price}
                            </span>
                        </div>
                    </div>

                    {/* Preview Link - Small Text */}
                    <div className="relative z-10 pt-4 mt-auto">
                        <Link href={`/programs/${program.id}`} className="inline-flex items-center gap-1.5 text-[#2ec4b6] text-sm font-medium group-hover:gap-2.5 transition-all hover:text-[#25e4d0]">
                            Preview <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* 4. Floating Filter Capsule - Smaller */}
      <div className="fixed bottom-6 left-0 right-0 z-40 flex justify-center pointer-events-none">
        <div className="bg-[#1f2937] p-1 rounded-full shadow-xl flex items-center gap-1 pointer-events-auto backdrop-blur-md border border-white/10 ring-1 ring-black/5 scale-90 origin-bottom">
            {CATEGORIES.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-5 rounded-full text-[15px] font-medium transition-all duration-300
                        ${activeCategory === cat 
                            ? "bg-[#10b981] text-white shadow-sm" 
                            : "text-gray-400 hover:text-white hover:bg-white/10"
                        }`}
                >
                    {cat}
                </button>
            ))}
        </div>
      </div>

    </div>
  )
}