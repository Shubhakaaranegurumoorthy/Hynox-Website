import ProgramsGrid from "@/components/ui/programs-grid"
import Header from "@/components/header" 

// This MUST be a default export
export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header is passed isScrolled=true so it's visible on the white background */}
      <Header isScrolled={true} />
      
      
      <ProgramsGrid />
    </main>
  )
}