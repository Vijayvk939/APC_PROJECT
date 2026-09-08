import { useEffect, useRef } from "react"
import { Church, Users, Clock, MapPin, ArrowRight, Play, Phone } from "lucide-react"
import { ScrollBlurText } from "@/components/scroll-blur-text"
import { Badge } from "@/components/ui/badge"

import { worshipServices } from "@/data/worship"
import worshipServicesBg from "/images/Design/Worship_ServicesPNG.webp"
import specialPrayersBg from "/images/Design/Prayer_Events&Programs.webp"


export default function WorshipServices() {
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
    <section ref={sectionRef} id="services" className="py-10 sm:py-14 lg:py-16 bg-muted/30 relative overflow-hidden">
      {/* Background PNG Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src={worshipServicesBg}
          alt=""
          className="w-full h-full object-cover opacity-90 dark:opacity-30 select-none pointer-events-none"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <div className="reveal opacity-0 flex items-center justify-center gap-2 mb-4">
            <Church className="w-5 h-5 text-primary" />
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium">
              Join Us Every Sunday
            </p>
          </div>
          <ScrollBlurText
            text="Worship Services"
            className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-foreground text-balance mb-6"
          />
          <p className="reveal opacity-0 animation-delay-200 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Inspiring worship, powerful preaching, and warm fellowship every Sunday.
          </p>
          <div className="reveal opacity-0 animation-delay-300 w-16 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-6" />
        </div>

        {/* Worship Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {worshipServices.map((service, index) => (
            <div
              key={service.title + service.subtitle}
              className={`reveal opacity-0 ${index === 0 ? "" : index === 1 ? "animation-delay-100" : index === 2 ? "animation-delay-200" : "animation-delay-300"} group bg-card/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-border/40 shadow-sm hover:shadow-md hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden`}
            >
              <div className="relative z-10">
                {/* Header Row */}
                <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                  <div className="p-2 sm:p-2.5 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5">
                    {service.status}
                  </Badge>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-serif text-base sm:text-xl font-bold text-foreground mb-0.5 group-hover:text-primary transition-colors leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-3">{service.subtitle}</p>

                {/* Time & Location */}
                <div className="space-y-1.5 mb-3.5">
                  <div className="flex items-start text-xs text-muted-foreground bg-muted/50 rounded-lg p-2 gap-2">
                    <Clock className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span className="font-medium leading-tight break-words">{service.time}</span>
                  </div>
                  <div className="flex items-start text-xs text-muted-foreground bg-muted/50 rounded-lg p-2 gap-2">
                    <MapPin className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                    <span className="font-medium leading-tight break-words">{service.location}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-1 pt-2 border-t border-border/30">
                  {service.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center text-[11px] sm:text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2 shrink-0" />
                      <span className="leading-tight">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="reveal opacity-0 animation-delay-400">
          <div className="relative bg-gradient-to-r from-[#8B0000] via-[#700000] to-[#4A0E17] rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 text-white shadow-xl overflow-hidden border border-white/20">
            {/* Background Special-Prayers-Design.png Image Overlay */}
            <img
              src={specialPrayersBg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen pointer-events-none select-none"
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6">
              <div className="text-center lg:text-left">
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold mb-1.5 sm:mb-2 text-white">Join Us This Sunday</h3>
                <p className="text-xs sm:text-sm md:text-base text-white/90 max-w-xl leading-relaxed">
                  Experience worship and God's Word with our welcoming church family.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2.5 sm:gap-3 w-full lg:w-auto">
                <a
                  href="https://maps.app.goo.gl/FdKWAgfJd1mNDVDz8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-white text-[#8B0000] font-semibold text-xs sm:text-sm hover:bg-white/90 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8B0000]" />
                  <span>Plan Visit</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8B0000]" />
                </a>
                <a
                  href="https://www.youtube.com/@agapepentecostalchurch/streams"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-white/15 backdrop-blur-md text-white font-medium text-xs sm:text-sm hover:bg-white/25 transition-all border border-white/30 flex items-center justify-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Watch Online</span>
                </a>
                <a
                  href="tel:+919390232344"
                  className="w-full sm:w-auto px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-white/15 backdrop-blur-md text-white font-medium text-xs sm:text-sm hover:bg-white/25 transition-all border border-white/30 flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>+91 9390232344</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
