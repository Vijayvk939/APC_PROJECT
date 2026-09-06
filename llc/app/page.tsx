import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { LeadershipSection } from "@/components/leadership-section"
import { IndustriesSection } from "@/components/industries-section"
import { ScienceSection } from "@/components/science-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { JobsSection } from "@/components/jobs-section"
import { ContactSection } from "@/components/contact-section"
import { MissionSection } from "@/components/mission-section"
import { Footer } from "@/components/footer"
import { ScrollToTopOnLoad } from "@/components/scroll-to-top-on-load"

// The main landing page of the website that displays all sections.
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollToTopOnLoad />
      <Header />
      <HeroSection />
      <AboutSection />
      <LeadershipSection />
      <IndustriesSection />
      <MissionSection />
      <ScienceSection />
      <TestimonialsSection />
      <JobsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
