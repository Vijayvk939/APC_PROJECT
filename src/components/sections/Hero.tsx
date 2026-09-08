import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen } from "lucide-react"

import bgVideo from "/images/APC_DASHBOARD-BG.mp4"
import dashShade from "/images/Design/dash-png.webp"

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
      className="relative min-h-screen min-h-[100dvh] flex items-center overflow-hidden bg-background"
    >
      {/* Background Container with Video & Radiant Glow Overlay */}
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
            preload="auto"
            poster={dashShade}
            className="w-full h-full object-cover object-center"
          >
            <source src={bgVideo} type="video/mp4" />
          </video>
        </div>

        {/* Top Slight Black Shadow (Behind PNG) */}
        <div className="absolute inset-x-0 top-0 h-36 sm:h-40 bg-gradient-to-b from-black/85 via-black/40 to-transparent pointer-events-none" />

        {/* Left Black Shadow Overlay (Enhanced dark shade for clear text readability) */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-4/5 md:w-2/3 bg-gradient-to-r from-black/90 via-black/70 to-transparent pointer-events-none z-10" />

        {/* Subtle Bottom Shade */}
        <div className="absolute inset-x-0 bottom-0 h-28 sm:h-24 bg-gradient-to-t from-black/80 sm:from-black/60 to-transparent pointer-events-none z-10" />

        {/* Glowing Dash Shade Overlay */}
        <img
          src={dashShade}
          alt="Shade overlay"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-60 sm:opacity-75 mix-blend-screen z-10"
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-6 sm:pt-24 sm:pb-10 lg:pt-24 lg:pb-10 w-full flex flex-col justify-between min-h-screen min-h-[100dvh]">
        <div className="max-w-2xl lg:max-w-3xl my-auto py-4 sm:py-8">
          {/* Eyebrow Badge */}
          <div className="reveal opacity-0 inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-4 sm:mb-5">
            <span className="text-[#B22222] font-sans font-bold">†</span>
            <span>WELCOME TO AGAPE</span>
          </div>

          {/* Main Title Typography */}
          <h1 className="reveal opacity-0 animation-delay-200 font-serif text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] sm:leading-[1.05] text-white tracking-tight mb-4 break-words">
            <span className="block text-white">Agape Pentecostal</span>
            <span className="block text-[#B22222]">
              Church
            </span>
          </h1>

          {/* Accent Line Under Title */}
          <div className="reveal opacity-0 animation-delay-300 h-[2.5px] w-12 sm:w-14 bg-[#8B0000] rounded-full mb-5 sm:mb-6" />

          {/* Minimalist Subtitle */}
          <p className="reveal opacity-0 animation-delay-400 text-xs sm:text-base md:text-lg text-white/90 font-light max-w-3xl mb-6 sm:mb-8 leading-relaxed">
            Experience powerful worship, faith, and community in Vijayawada.
          </p>

          {/* Action Buttons */}
          <div className="reveal opacity-0 animation-delay-600 flex flex-col sm:flex-row gap-3 sm:gap-3.5 max-w-md sm:max-w-none w-full">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#8B0000] hover:bg-[#6c0000] text-white rounded-full px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-base font-semibold shadow-sm flex items-center justify-center gap-2.5 transition-all group border border-white/10"
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
              className="w-full sm:w-auto bg-[#16101e]/90 hover:bg-white/15 backdrop-blur-md border border-white/25 text-white rounded-full px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-base font-semibold flex items-center justify-center gap-2.5 transition-all"
              onClick={() => {
                navigate("/books")
                window.scrollTo(0, 0)
              }}
            >
              <BookOpen className="w-4 h-4 text-white" />
              <span>Get Books</span>
            </Button>
          </div>
        </div>

        {/* Hero Bottom Bar */}
        <div className="pt-4 sm:pt-5 pb-2 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 border-t border-white/15 text-white/70 text-[10px] xs:text-[11px] sm:text-xs tracking-[0.12em] sm:tracking-[0.2em] font-medium uppercase select-none text-center sm:text-left">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <span className="h-3.5 w-[2.5px] bg-[#8B0000] rounded-full inline-block" />
            <span>PEOPLE • PURPOSE • A BRIGHTER TOMORROW</span>
          </div>
          <div className="flex items-center gap-2.5 sm:gap-3">
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