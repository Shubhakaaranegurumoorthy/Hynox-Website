import AboutSection from "@/components/ui/about-section"
import Header from "@/components/header" 

export default function AboutPage() {
  return (
    <main>
      {/* We pass isScrolled={true} so the header has a dark background 
         immediately, since this page doesn't have a huge hero image like the home page.
      */}
      <Header isScrolled={true} />
      
      <AboutSection />
      
    </main>
  )
}