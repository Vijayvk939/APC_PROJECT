import { Helmet } from "react-helmet-async"
import { ScrollToTopOnLoad } from "@/components/scroll-to-top-on-load"
import Hero from "@/components/sections/Hero"
import WorshipServices from "@/components/sections/WorshipServices"
import Events from "@/components/sections/Events"
import VideoSection from "@/components/sections/VideoSection"
import Gallery from "@/components/sections/Gallery"
import About from "@/components/sections/About"
import Contact from "@/components/sections/Contact"

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Agape Pentecostal Church | Vijayawada</title>
        <link rel="canonical" href="https://www.agapepentecostalchurch.com/" />
        {typeof window !== "undefined" && window.location.hostname.includes("vercel.app") && (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Helmet>
      <main className="min-h-screen bg-background text-foreground">
        <ScrollToTopOnLoad />
        <Hero />
        <WorshipServices />
        <Events />
        <VideoSection />
        <Gallery />
        <About />
        <Contact />
      </main>
    </>
  )
}
