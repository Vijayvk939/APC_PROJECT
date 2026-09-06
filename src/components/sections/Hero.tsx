import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen } from "lucide-react"

import bgVideo from "/images/APC_DASHBOARD-BG.mp4"

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const scrollY = window.scrollY
      const sectionHeight = sectionRef.current.offsetHeight
      const progress = Math.min(scrollY / (sectionHeight * 0.5), 1)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scale = 1 - scrollProgress * 0.05
  const borderRadius = scrollProgress * 24

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Background Container with Video & Radiant Glow Overlay (LLC Shrinking Style) */}
      <div
        ref={videoContainerRef}
        className="absolute inset-0 w-full h-full overflow-hidden transition-all duration-75 ease-out"
        style={{
          transform: `scale(${scale})`,
          borderRadius: `${borderRadius}px`,
        }}
      >
        {/* Background Video of Pastor Preaching */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
          >
            <source src={bgVideo} type="video/mp4" />
          </video>
        </div>

        {/* Clean Vignette Overlay (Left to Right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent pointer-events-none" />

        {/* Subtle Bottom Shade */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-24 lg:pb-10 w-full flex flex-col justify-between min-h-screen">
        <div className="max-w-2xl lg:max-w-3xl my-auto py-6 sm:py-8">
          {/* Eyebrow Badge */}
          <div className="reveal opacity-0 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-mono uppercase tracking-[0.2em] mb-5">
            <span className="text-[#B22222] font-sans font-bold">†</span>
            <span>WELCOME TO AGAPE</span>
          </div>

          {/* Main Title Typography */}
          <h1 className="reveal opacity-0 animation-delay-200 font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] text-white tracking-tight mb-4">
            <span className="block text-white">Agape Pentecostal</span>
            <span className="block text-[#B22222]">
              Church
            </span>
          </h1>

          {/* Accent Line Under Title */}
          <div className="reveal opacity-0 animation-delay-300 h-[2.5px] w-14 bg-[#8B0000] rounded-full mb-6" />

          {/* Minimalist Subtitle */}
          <p className="reveal opacity-0 animation-delay-400 text-sm sm:text-base md:text-lg text-white/90 font-light max-w-3xl mb-8">
            Experience powerful worship, faith, and community in Vijayawada.
          </p>

          {/* Action Buttons */}
          <div className="reveal opacity-0 animation-delay-600 flex flex-col sm:flex-row gap-3.5 max-w-md sm:max-w-none">
            <Button
              size="lg"
              className="bg-[#8B0000] hover:bg-[#6c0000] text-white rounded-full px-8 py-3.5 text-sm sm:text-base font-semibold shadow-sm flex items-center justify-center gap-2.5 transition-all group border border-white/10"
              onClick={() => {
                const servicesSection = document.getElementById("services")
                servicesSection?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <span>Worship Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border border-white/30 bg-black/30 backdrop-blur-md hover:bg-white/15 text-white rounded-full px-8 py-3.5 text-sm sm:text-base font-semibold flex items-center justify-center gap-2 transition-all"
              onClick={() => {
                navigate("/books")
                window.scrollTo(0, 0)
              }}
            >
              <BookOpen className="w-4 h-4" />
              <span>Get Books</span>
            </Button>
          </div>
        </div>

        {/* Hero Bottom Bar */}
        <div className="pt-5 pb-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/15 text-white/70 text-[11px] sm:text-xs tracking-[0.2em] font-medium uppercase select-none">
          <div className="flex items-center gap-2.5">
            <span className="h-3.5 w-[2.5px] bg-[#8B0000] rounded-full inline-block" />
            <span>PEOPLE • PURPOSE • A BRIGHTER TOMORROW</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 opacity-90">
              <span className="w-4 sm:w-6 h-[2px] bg-white/35 rounded-full inline-block" />
              <span className="w-6 sm:w-8 h-[2.5px] bg-[#FF2D55] rounded-full shadow-[0_0_8px_rgba(255,45,85,0.8)] inline-block" />
              <span className="w-4 sm:w-6 h-[2px] bg-white/35 rounded-full inline-block" />
            </div>
            <span>FAITH • LOVE • SERVICE</span>
          </div>
        </div>
      </div>
    </section>
  )
}