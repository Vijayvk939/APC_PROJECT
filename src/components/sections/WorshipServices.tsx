import { useEffect, useRef } from "react"
import { Church, Users, Clock, MapPin, ArrowRight, Play, Phone } from "lucide-react"
import { ScrollBlurText } from "@/components/scroll-blur-text"
import { Badge } from "@/components/ui/badge"

const worshipServices = [
  {
    icon: Church,
    title: "Sunday 1st Service",
    subtitle: "Bhavanipuram",
    time: "8:30 AM - 11:00 AM",
    location: "Bhavanipuram",
    highlights: ["Live Worship", "Church Fellowship", "Inspiring Sermons", "Communion Service"],
    status: "Active"
  },
  {
    icon: Users,
    title: "Sunday School",
    subtitle: "Bhavanipuram",
    time: "9:00 AM - 11:00 AM",
    location: "Bhavanipuram",
    highlights: ["Bible Stories", "Worship Songs", "Arts & Crafts", "Prayer Time"],
    status: "Active"
  },
  {
    icon: Church,
    title: "Sunday 2nd Service",
    subtitle: "Gollapudi",
    time: "6:30 PM - 8:30 PM",
    location: "Gollapudi",
    highlights: ["Evening Worship", "Inspiring Sermons", "Church Fellowship", "Prayer Ministry"],
    status: "Active"
  },
  {
    icon: Users,
    title: "Sunday School",
    subtitle: "Gollapudi",
    time: "7:30 PM - 8:30 PM",
    location: "Gollapudi",
    highlights: ["Evening Bible Study", "Children's Worship", "Interactive Learning", "Family Time"],
    status: "Active"
  }
]

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
          src="/images/Worship_ServicesPNG.png"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {worshipServices.map((service, index) => (
            <div
              key={service.title + service.subtitle}
              className={`reveal opacity-0 ${index === 0 ? "" : index === 1 ? "animation-delay-100" : index === 2 ? "animation-delay-200" : "animation-delay-300"} group bg-card/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4.5 sm:p-5 border border-border/40 shadow-sm hover:shadow-md hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden`}
            >
              <div className="relative z-10">
                {/* Header Row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-[11px] px-2.5 py-0.5">
                    {service.status}
                  </Badge>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground mb-0.5 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-3">{service.subtitle}</p>

                {/* Time & Location */}
                <div className="space-y-1.5 mb-4">
                  <div className="flex items-center text-xs text-muted-foreground bg-muted/50 rounded-lg p-2">
                    <Clock className="w-3.5 h-3.5 mr-2 text-primary shrink-0" />
                    <span className="font-medium truncate">{service.time}</span>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground bg-muted/50 rounded-lg p-2">
                    <MapPin className="w-3.5 h-3.5 mr-2 text-secondary shrink-0" />
                    <span className="font-medium truncate">{service.location}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-1 pt-2 border-t border-border/30">
                  {service.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center text-[11px] sm:text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="reveal opacity-0 animation-delay-400">
          <div className="relative bg-gradient-to-r from-[#8B0000] via-[#700000] to-[#4A0E17] rounded-3xl p-8 sm:p-10 text-white shadow-xl overflow-hidden border border-white/20">
            {/* Background Special-Prayers-Design.png Image Overlay */}
            <img
              src="/images/Special-Prayers-Design.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-screen pointer-events-none select-none"
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2 text-white">Join Us This Sunday</h3>
                <p className="text-sm sm:text-base text-white/90 max-w-xl">
                  Experience worship and God's Word with our welcoming church family.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 w-full md:w-auto">
                <a
                  href="https://maps.app.goo.gl/FdKWAgfJd1mNDVDz8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-white text-[#8B0000] font-semibold text-sm hover:bg-white/90 transition-all flex items-center gap-2 shadow-md"
                >
                  <MapPin className="w-4 h-4 text-[#8B0000]" />
                  <span>Plan Visit</span>
                  <ArrowRight className="w-4 h-4 text-[#8B0000]" />
                </a>
                <a
                  href="https://www.youtube.com/@agapepentecostalchurch/streams"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-white/15 backdrop-blur-md text-white font-medium text-sm hover:bg-white/25 transition-all border border-white/30 flex items-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  <span>Watch Online</span>
                </a>
                <a
                  href="tel:+919390232344"
                  className="px-5 py-3 rounded-full bg-white/15 backdrop-blur-md text-white font-medium text-sm hover:bg-white/25 transition-all border border-white/30 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
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
