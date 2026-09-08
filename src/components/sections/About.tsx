import { useEffect, useRef } from "react"
import { BookOpen, Award, ShieldCheck } from "lucide-react"
import { ScrollBlurText } from "@/components/scroll-blur-text"
import { Badge } from "@/components/ui/badge"

import { values } from "@/data/about"
import ourStoryBg from "/images/Design/Our_Story.webp"
import churchImage from "/images/BVPM_CHURCH.webp"


export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-10 sm:py-14 lg:py-16 bg-background relative overflow-hidden">
      {/* Background PNG Overlay (Full Width) */}
      <div className="absolute inset-x-0 top-0 w-full pointer-events-none z-0 overflow-hidden">
        <img
          src={ourStoryBg}
          alt=""
          className="w-full h-auto min-w-full object-cover opacity-65 dark:opacity-25 select-none pointer-events-none"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <div className="reveal opacity-0 flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-[#8B0000]" />
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium">
              About Us
            </p>
          </div>
          <ScrollBlurText
            text="Our Story & Mission"
            className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-foreground text-balance mb-6"
          />
          <p className="reveal opacity-0 animation-delay-200 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Serving God and spreading faith in Vijayawada for over 20 years.
          </p>
          <div className="reveal opacity-0 animation-delay-300 w-16 h-0.5 bg-[#8B0000] mx-auto mt-6" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 sm:mb-14">
          {/* Story & Mission Column */}
          <div className="space-y-6">
            {/* Our Journey Card */}
            <div className="reveal opacity-0 group bg-card/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-border/50 shadow-xl hover:shadow-2xl hover:border-[#8B0000]/40 transition-all duration-500 relative overflow-hidden">
              <div className="flex items-center justify-between gap-2 mb-4">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground group-hover:text-[#8B0000] transition-colors">
                  Our Journey
                </h3>
                <Badge variant="secondary" className="bg-[#8B0000]/10 text-[#8B0000] border border-[#8B0000]/20 text-xs px-3 py-1 font-semibold">
                  EST. 2006
                </Badge>
              </div>
              <p className="text-xs sm:text-base text-muted-foreground leading-relaxed mb-4">
                Founded in 2006, Agape Pentecostal Church began as a small gathering of believers with a big vision: to create a place where God's love could transform lives and build a stronger community. What started with just a few families has grown into a vibrant congregation of hundreds.
              </p>
              <p className="text-xs sm:text-base text-muted-foreground leading-relaxed">
                Today, we continue to be guided by the same principles that founded our church - unconditional love, authentic worship, and a commitment to serving both our congregation and broader community.
              </p>
            </div>

            {/* Our Mission Card */}
            <div className="reveal opacity-0 animation-delay-200 group bg-gradient-to-br from-[#8B0000] via-[#700000] to-[#4A0E17] rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-white/20 relative overflow-hidden">
              {/* Background Glow Overlay */}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />

              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-amber-300 shrink-0" />
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-xs sm:text-base leading-relaxed text-white/90 drop-shadow-sm">
                To create a welcoming church where people can encounter God's love, grow in their faith, and discover their divine purpose through meaningful relationships and transformative worship experiences.
              </p>
            </div>
          </div>

          {/* Image & Core Values Column */}
          <div className="space-y-6">
            {/* Church Photo Card */}
            <div className="reveal opacity-0 group rounded-3xl overflow-hidden shadow-2xl border border-border/50 relative bg-card">
              <img
                src={churchImage}
                alt="Bhavanipuram Church Sanctuary"
                className="w-full h-64 sm:h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white flex justify-between items-center gap-2">
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Award className="w-4 h-4 text-amber-400 shrink-0" />
                    <p className="font-serif text-lg sm:text-2xl font-bold text-white">20+ Years</p>
                  </div>
                  <p className="text-[10px] sm:text-xs text-white/80">Serving God & People</p>
                </div>
                <div className="text-right">
                  <p className="font-serif text-lg sm:text-2xl font-bold text-white">200+ Members</p>
                  <p className="text-[10px] sm:text-xs text-white/80">Vibrant Congregation</p>
                </div>
              </div>
            </div>

            {/* Core Values Single-Row Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
              {values.map((val, idx) => (
                <div
                  key={val.title}
                  className={`reveal opacity-0 ${idx === 0 ? "" : idx === 1 ? "animation-delay-100" : idx === 2 ? "animation-delay-200" : "animation-delay-300"
                    } group bg-card/80 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 border border-border/50 shadow-sm hover:shadow-md hover:border-[#8B0000]/40 transition-all flex flex-col justify-between items-start gap-1.5 min-w-0 w-full overflow-hidden`}
                >
                  <div className="flex items-center gap-1.5 sm:gap-2 w-full min-w-0">
                    <div className="p-1.5 rounded-lg bg-[#8B0000]/10 text-[#8B0000] group-hover:bg-[#8B0000]/20 transition-colors shrink-0">
                      <val.icon className="w-3.5 h-3.5 text-[#8B0000]" />
                    </div>
                    <h4 className="font-serif font-bold text-foreground text-[11px] sm:text-xs md:text-sm tracking-tight truncate leading-tight min-w-0 group-hover:text-[#8B0000] transition-colors">
                      {val.title}
                    </h4>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-muted-foreground leading-tight line-clamp-2">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}