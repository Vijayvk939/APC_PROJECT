import { useEffect, useRef } from "react"
import { Calendar, Clock, Church, Heart, Users, BookOpen, Phone, MapPin, Megaphone, TrendingUp } from "lucide-react"
import { ScrollBlurText } from "@/components/scroll-blur-text"
import { Badge } from "@/components/ui/badge"
import { SpecialPrayerCardCarousel } from "@/components/features/events"
import { specialPrayerEvents, regularPrograms } from "@/data/events"
import pastorImage from "/images/SamuelPrasad1.jpg"

const pastorInfo = {
  name: "Pastor Prasad Machavarapu",
  role: "SENIOR PASTOR & VISIONARY LEADER",
  image: pastorImage,
  bio: "Pastor Prasad Machavarapu has been faithfully serving the Agape Pentecostal Church in Vijayawada with passion, wisdom, and unwavering commitment to God's Word. His heart for people and dedication to biblical truth has helped countless individuals grow in their faith journey through powerful messages and glorious worship.",
  education: [
    "Diploma in Theology - World Bible College",
    "Advanced Biblical Studies & Ministry Training",
    "Leadership Development & Church Administration"
  ],
  contact: {
    phone: "+91 9390232344",
    location: "Vijayawada, Andhra Pradesh"
  }
}

const specialtyItems = [
  { label: "Powerful Preaching", icon: Megaphone },
  { label: "Gospel Speaker", icon: BookOpen },
  { label: "Church Growth", icon: TrendingUp },
  { label: "Agape Bible School Faculty", icon: Users },
  { label: "Glorious Worship", icon: Heart },
]

export default function Events() {
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
    <section ref={sectionRef} id="events" className="py-10 sm:py-14 lg:py-16 bg-background relative overflow-hidden">
      {/* Background PNG Overlay (Full Width) */}
      <div className="absolute inset-x-0 top-0 w-full pointer-events-none z-0 overflow-hidden">
        <img
          src="/images/Prayer_Events&Programs.png"
          alt=""
          className="w-full h-auto min-w-full object-cover opacity-65 dark:opacity-25 select-none pointer-events-none"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="reveal opacity-0 flex items-center justify-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-primary" />
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium">
              Join Us for Prayer
            </p>
          </div>
          <ScrollBlurText
            text="Prayer Events & Programs"
            className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-foreground text-balance mb-6"
          />
          <p className="reveal opacity-0 animation-delay-200 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Prayer gatherings and programs that strengthen faith and community.
          </p>
          <div className="reveal opacity-0 animation-delay-300 w-16 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-6" />
        </div>

        {/* Regular Programs Subheader */}
        <div className="reveal opacity-0 text-center mb-6">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-2">Weekly Rhythms of Grace</h3>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Weekly gatherings that fuel faith and keep you connected.
          </p>
        </div>

        {/* Regular Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {regularPrograms.map((program, index) => (
            <div
              key={index}
              className={`reveal opacity-0 ${index === 0 ? "" : "animation-delay-200"} group bg-card/60 hover:bg-card/95 backdrop-blur-sm rounded-3xl p-6 border border-border/40 hover:border-primary/40 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors shrink-0">
                  <program.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors truncate">
                      {program.title}
                    </h4>
                    <Badge variant="secondary" className="bg-primary/10 text-primary shrink-0">
                      {program.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-primary bg-primary/5 rounded-xl px-3 py-1.5 inline-flex mt-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{program.schedule}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pl-1">{program.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Special Prayer Events Carousel - Styled with Special-Prayers-Design.png */}
      <div className="w-full bg-[#1a080c] text-white py-12 sm:py-16 relative overflow-hidden mb-10">
        {/* Background Image Overlay (Full Width) */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <img
            src="/images/Special-Prayers-Design.png"
            alt=""
            className="w-full h-full object-cover min-w-full opacity-95 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a080c]/50 via-transparent to-[#1a080c]/70 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-white">
              Special Prayer Events
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-4" />
            <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto drop-shadow-sm">
              Extended prayer gatherings focused on faith and breakthrough.
            </p>
          </div>

          <div className="w-full">
            <SpecialPrayerCardCarousel
              cards={specialPrayerEvents}
              autoPlay={true}
              autoPlayInterval={3000}
              showIndicators={true}
              showNavigation={true}
              cardHeight="h-[22rem] sm:h-[25rem] lg:h-[28rem]"
            />
          </div>
        </div>
      </div>

      {/* Spiritual Leadership Section */}
      <div id="leadership" className="relative py-12 sm:py-16 overflow-hidden">
        {/* Section Background Overlay: About.png */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <img
            src="/images/About.png"
            alt=""
            className="w-full h-full object-cover opacity-85 dark:opacity-25 select-none pointer-events-none"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <div className="reveal opacity-0 flex items-center justify-center gap-2 mb-4">
              <Users className="w-5 h-5 text-primary" />
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium">
                Spiritual Leadership
              </p>
            </div>
            <ScrollBlurText
              text="Meet Our Pastor"
              className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-foreground text-balance mb-6"
            />
            <p className="reveal opacity-0 animation-delay-200 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Guiding our church family with biblical wisdom and divine vision.
            </p>
            <div className="reveal opacity-0 animation-delay-300 w-16 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-6" />
          </div>

          {/* Leadership Card (Matching Reference UI Design) */}
          <div className="max-w-4xl mx-auto">
            <div className="reveal opacity-0 group bg-card/90 backdrop-blur-md rounded-3xl overflow-hidden border border-border/50 shadow-xl hover:shadow-2xl hover:border-primary/40 transition-all duration-500 relative p-5 sm:p-7 lg:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
                {/* Left Column: Photo, Name & Contact Info */}
                <div className="lg:col-span-5 flex flex-col items-center text-center">
                  {/* Circular Image with Red Ring Accent */}
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 mb-4">
                    {/* Decorative Red Outer Arc Ring */}
                    <svg className="absolute -inset-2.5 w-[calc(100%+20px)] h-[calc(100%+20px)] text-primary pointer-events-none" viewBox="0 0 100 100" fill="none">
                      <path d="M 50 4 C 76 4, 96 24, 96 50 C 96 66, 88 80, 76 88" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
                      <circle cx="96" cy="50" r="3.5" fill="currentColor" />
                    </svg>

                    {/* Photo Circle */}
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-background bg-zinc-900 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                      <img
                        src={pastorInfo.image}
                        alt={pastorInfo.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Name (Two-tone) */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight mb-1">
                    <span className="block text-primary font-serif">Pastor Prasad</span>
                    <span className="block text-foreground font-serif">Machavarapu</span>
                  </h3>

                  {/* Sub-divider with Cross */}
                  <div className="flex items-center justify-center gap-2.5 my-2 opacity-60">
                    <div className="w-10 h-[1px] bg-primary/40" />
                    <svg className="w-3 h-3 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11 2h2v7h7v2h-7v11h-2V11H4V9h7V2z" />
                    </svg>
                    <div className="w-10 h-[1px] bg-primary/40" />
                  </div>

                  {/* Role */}
                  <p className="text-[10px] sm:text-[11px] font-bold text-primary tracking-[0.2em] uppercase text-center mb-3">
                    {pastorInfo.role}
                  </p>

                  {/* Quick Contact Badges */}
                  <div className="space-y-2 text-xs text-muted-foreground w-full max-w-xs mx-auto">
                    <div className="flex items-center justify-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="font-medium text-foreground">{pastorInfo.contact.phone}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="font-medium text-muted-foreground">{pastorInfo.contact.location}</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Bio, Education & Ministry Focus */}
                <div className="lg:col-span-7 space-y-4 text-left">
                  {/* Biography */}
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-2">
                      <Heart className="w-3.5 h-3.5 text-primary shrink-0" />
                      <h4 className="font-serif font-bold text-xs sm:text-sm text-primary">
                        Biography & Heart for Ministry
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-1">
                      {pastorInfo.bio}
                    </p>
                  </div>

                  {/* Education */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-4 h-4 text-primary shrink-0" />
                      <h4 className="font-serif font-bold text-sm sm:text-base text-primary">
                        Education & Training
                      </h4>
                    </div>
                    <ul className="space-y-1.5 pl-1">
                      {pastorInfo.education.map((edu, idx) => (
                        <li key={idx} className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span>{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ministry Focus */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-primary shrink-0" />
                      <h4 className="font-serif font-bold text-sm sm:text-base text-primary">
                        Ministry Focus
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {specialtyItems.map((item, idx) => (
                        <div
                          key={idx}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-semibold flex items-center gap-1.5 shadow-sm"
                        >
                          <item.icon className="w-3 h-3 text-primary shrink-0" />
                          <span>{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}