import { useEffect, useRef } from "react"
import { BookOpen, Heart, MapPin, Phone, Sparkles, Users } from "lucide-react"
import { ScrollBlurText } from "@/components/scroll-blur-text"

import churchImage from "/images/BVPM_CHURCH.jpg"

const values = [
  {
    icon: Heart,
    title: "Love",
    description: "We believe in God's unconditional love and strive to share it with everyone we meet."
  },
  {
    icon: Users,
    title: "Community",
    description: "Building authentic relationships where everyone belongs and no one walks alone."
  },
  {
    icon: BookOpen,
    title: "Truth",
    description: "Grounded in Biblical truth, we seek to understand and live by God's Word."
  },
  {
    icon: Sparkles,
    title: "Transformation",
    description: "Witnessing lives changed through the power of the Holy Spirit and God's grace."
  }
]

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
    <section ref={sectionRef} id="about" className="py-10 sm:py-14 lg:py-16 bg-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <div className="reveal opacity-0 flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-primary" />
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
          <div className="reveal opacity-0 animation-delay-300 w-16 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-6" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story & Mission text */}
          <div className="space-y-6">
            <div className="reveal opacity-0 bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/40 shadow-lg">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Journey</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                Founded in 2006, Agape Pentecostal Church began as a small gathering of believers with a big vision: to create a place where God's love could transform lives and build a stronger community. What started with just a few families has grown into a vibrant congregation of hundreds.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Today, we continue to be guided by the same principles that founded our church - unconditional love, authentic worship, and a commitment to serving both our congregation and broader community.
              </p>
            </div>

            <div className="reveal opacity-0 animation-delay-200 bg-gradient-to-br from-primary via-accent to-secondary rounded-3xl p-8 text-primary-foreground shadow-xl">
              <h3 className="font-serif text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-sm sm:text-base leading-relaxed opacity-95">
                To create a welcoming church where people can encounter God's love, grow in their faith, and discover their divine purpose through meaningful relationships and transformative worship experiences.
              </p>
            </div>

            <div className="reveal opacity-0 animation-delay-300 bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/40 shadow-lg space-y-4">
              <h3 className="font-serif text-xl font-bold text-foreground flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Our Location</span>
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Gurukrupa Rd, Kamakoti Nagar, VD Puram, Vijayawada, Andhra Pradesh 520012
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://maps.app.goo.gl/FzWhZsGQTtNoy49LA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-all flex items-center gap-2 shadow-md"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
                <a
                  href="tel:+919390232344"
                  className="px-5 py-2.5 rounded-full bg-muted text-muted-foreground text-xs font-semibold hover:bg-muted/80 transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>
          </div>

          {/* Image & Core Values */}
          <div className="space-y-6">
            <div className="reveal opacity-0 rounded-3xl overflow-hidden shadow-2xl border border-border/40 relative">
              <img src={churchImage} alt="Church" className="w-full h-80 sm:h-96 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-background flex justify-between items-center">
                <div>
                  <p className="font-serif text-2xl font-bold">20+ Years</p>
                  <p className="text-xs text-background/80">Serving God & People</p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold">500+ Members</p>
                  <p className="text-xs text-background/80">Vibrant Congregation</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((val, idx) => (
                <div
                  key={val.title}
                  className={`reveal opacity-0 ${idx === 0 ? "" : idx === 1 ? "animation-delay-100" : idx === 2 ? "animation-delay-200" : "animation-delay-300"} bg-card/60 backdrop-blur-sm rounded-2xl p-5 border border-border/40 shadow-md flex items-start gap-3`}
                >
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                    <val.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-foreground text-base mb-1">{val.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{val.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}