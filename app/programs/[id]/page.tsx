"use client"

import { useState } from "react"
import { X, Calendar } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import ApplyModal from "@/components/ui/apply-modal"

// Data Source
const PROGRAM_DETAILS: Record<string, { title: string, duration: string, desc: string, items: string[] }> = {
  "1": {
    title: "UI/UX Design",
    duration: "25 weeks",
    desc: "Build a career in growth and grow your business faster than ever.",
    items: [
      "Introduction to UI/UX Design",
      "User Research and Analysis",
      "Visual Design Fundamentals",
      "Usability Testing and User Feedback",
      "Career Opportunities in UI/UX"
    ]
  },
  "2": {
    title: "Product Design",
    duration: "20 weeks",
    desc: "Master the art of creating functional and aesthetically pleasing products.",
    items: [
      "Design Thinking Process",
      "Prototyping & Wireframing",
      "Material Design Guidelines",
      "Product Lifecycle Management",
      "Portfolio Building"
    ]
  },
  "3": {
    title: "D2C Mentorship",
    duration: "28 weeks",
    desc: "Learn how to build and scale direct-to-consumer brands from experts.",
    items: [
      "Brand Storytelling",
      "Supply Chain Basics",
      "Customer Acquisition Costs",
      "Social Media Marketing",
      "Scaling Strategies"
    ]
  },
  "4": {
    title: "Full Stack Dev",
    duration: "30 weeks",
    desc: "Become a complete developer capable of handling frontend and backend.",
    items: [
      "HTML, CSS, JavaScript Deep Dive",
      "React & Next.js Frameworks",
      "Node.js & Express Backend",
      "Database Management (SQL/NoSQL)",
      "Deployment & DevOps Basics"
    ]
  },
  "5": {
    title: "Digital Marketing",
    duration: "12 weeks",
    desc: "Navigate the digital landscape with modern marketing strategies.",
    items: [
      "SEO & SEM Fundamentals",
      "Content Marketing Strategies",
      "Social Media Analytics",
      "Email Marketing Automation",
      "Performance Marketing"
    ]
  }
}

export default function ProgramDetailsPage() {
  const params = useParams()
  const id = Array.isArray(params.id) ? params.id[0] : params.id
  const data = (id && PROGRAM_DETAILS[id]) ? PROGRAM_DETAILS[id] : PROGRAM_DETAILS["1"] 
  
  const [showApplyModal, setShowApplyModal] = useState(false)

  if (showApplyModal) {
    return <ApplyModal isOpen={true} onClose={() => setShowApplyModal(false)} />
  }

  return (
    // 1. Wrapper
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-poppins overflow-y-auto">
      
      {/* 2. BACKGROUND SIMULATION (Creates the Green Top & Blurred Dark Look) */}
      <div className="absolute inset-0 z-0 bg-[#0f172a]">
          
          {/* Green Glow at the Top (Simulates the banner) */}
          <div className="absolute top-0 left-0 right-0 h-[250px] bg-gradient-to-b from-[#00C365] via-[#00C365]/30 to-transparent opacity-80 blur-3xl"></div>
          
          {/* Subtle Grid Pattern (Simulates the page content) */}
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
          </div>

          {/* Strong Blur Overlay to fuzz everything out */}
          <div className="absolute inset-0 backdrop-blur-[100px] bg-black/20"></div>
      </div>

      {/* 3. Main Modal Card */}
      <div className="relative z-10 bg-white w-full max-w-4xl rounded-[20px] p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-300 my-auto border border-gray-100">
        
        {/* Close Button */}
        <Link href="/programs" className="absolute top-6 right-6 z-20 hover:opacity-80 transition-opacity">
            <div className="bg-black text-white p-1 rounded-[4px]">
                <X size={18} strokeWidth={3} />
            </div>
        </Link>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-2 pr-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-[#0a0a0a] tracking-tight leading-tight">
                {data.title}
            </h1>
            
            <div className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-gray-700 font-medium bg-white shrink-0 mt-1 shadow-sm">
                <Calendar size={16} className="text-gray-500" />
                <span className="text-sm">{data.duration}</span>
            </div>
        </div>

        <p className="text-gray-500 text-base mb-6 font-normal max-w-2xl leading-relaxed">
            {data.desc}
        </p>

        <hr className="border-gray-200 mb-8" />

        {/* Layout Grid */}
        <div className="grid md:grid-cols-[280px_1fr] gap-8">
            
            {/* Left Image Placeholder */}
            <div className="bg-[#020b16] rounded-xl h-[340px] w-full relative flex items-center justify-center overflow-hidden shadow-inner">
                <div className="absolute inset-0 opacity-20" 
                     style={{
                         backgroundImage: `linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)`,
                         backgroundSize: '24px 24px'
                     }}>
                </div>
                <div className="relative w-20 h-20">
                    <div className="absolute -top-3 -right-3 w-20 h-20 border-[3px] border-[#00C365]"></div>
                    <div className="absolute top-0 left-0 w-20 h-20 bg-[#00C365] shadow-xl"></div>
                </div>
            </div>

            {/* Right Content */}
            <div className="flex flex-col h-full">
                <h3 className="text-gray-400 mb-3 text-sm font-normal">What is encompassed within this program</h3>
                
                <div className="border border-gray-200 rounded-xl p-6 mb-6">
                    <ul className="space-y-4">
                        {data.items.map((item, index) => (
                            <li key={index} className="flex items-center gap-3 text-gray-600 text-[15px] font-light">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0"></div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-auto border-t border-gray-200 pt-6 flex justify-end">
                    <button 
                        onClick={() => setShowApplyModal(true)}
                        className="px-8 py-2.5 rounded-lg border border-black text-black font-medium hover:bg-black hover:text-white transition-all duration-300 text-sm bg-white"
                    >
                        See Details
                    </button>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}