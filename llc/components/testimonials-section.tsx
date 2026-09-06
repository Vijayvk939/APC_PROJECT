"use client"

import { useEffect, useRef } from "react"
import { MessageSquare, User } from "lucide-react"
import { ScrollBlurText } from "./scroll-blur-text"
import WasimAkramShaik from "@/public/Testinomials_PICS/Wasim_Akram_Shaik.jpg"
import SunilKumarNukala from "@/public/Testinomials_PICS/Sunil_Kumar_Nukala.jpg"

// List of client testimonials.
const testimonials = [
  {
    quote:
      "I am thoroughly impressed with the responsiveness and professionalism of the team at Maganti Group LLC. They consistently go above and beyond to meet our needs, and the overall experience has been seamless and productive. I'm proud to be part of a company that prioritizes both excellent results and employee well-being. Maganti Group LLC provides the flexibility and resources I need to do my best work every day.",
    author: "Sharath Kumar Kundur",
    role: "Sr. Software Engineer",
    avatar: "",
  },
  {
    quote:
      "I have been working with Maganti Group LLC for almost three years, and it has been a great experience. During this time, I have learned a lot professionally and have had the opportunity to grow my skills and knowledge in a supportive work environment. The company provides valuable learning opportunities and encourages employees to take on new challenges. Management is approachable, and the team is collaborative and helpful. I appreciate the trust and responsibility I have been given, which has contributed significantly to my professional development.",
    author: "Muhammad Adil Mazhar",
    role: "Information Security Analyst",
    avatar: "",
  },
  {
    quote:
      "One of the things I genuinely appreciate about being part of Maganti Group LLC is the consistent reminder that success is not only about results and numbers. It is also about people. That people-first mindset makes a real difference. One thing I truly appreciate is how much it helps employees when an organization stands with them through both the ups and downs. After being here for almost a decade, I can truly say it's the culture and the people that make the journey meaningful. Grateful to be part of an organization that understands the importance of standing by its people.",
    author: "Wasim Akram Shaik",
    role: "Hadoop Engineer/Data Engineer",
    avatar: WasimAkramShaik.src,
  },
  {
    quote:
      "I joined Maganti Group LLC in 2017 as a fresh graduate, and I was guided through every step of becoming a Software professional. Nine years later, I'm still here and that says everything. I started as a Java developer learning the fundamentals, and today I lead technical projects and teams. That growth didn't happen by accident; Maganti Group LLC invested in me at every stage, celebrated my wins, stood by me through challenges, and treated me like family. For anyone looking for an employer who genuinely cares about your growth and long-term success, I wholeheartedly recommend Maganti Group LLC.",
    author: "Meghanath Nagulapalli",
    role: "Technical Project Lead",
    avatar: "",
  },
  {
    quote:
      "I have had a positive experience working with Maganti Group LLC. The team has consistently demonstrated professionalism, technical expertise, and a strong commitment to delivering quality services. Maganti Group LLC's dedication to employees and customer satisfaction, timely delivery of any required support has made our collaboration smooth and effective. I appreciate the reliability of the team and would confidently recommend Maganti Group LLC to organizations seeking dependable IT solutions and services.",
    author: "Sunil Kumar Nukkala",
    role: "DevOps Engineer",
    avatar: SunilKumarNukala.src,
  },
  {
    quote:
      "I am very pleased with the level of service and professionalism demonstrated by the team. Communication has always been prompt, and projects have been handled efficiently and effectively. Maganti Group LLC's commitment to quality support to employees has made our collaboration both productive and enjoyable. I truly value our partnership and appreciate the dedication and support the team consistently provides. I look forward to many more successful collaborations in the future.",
    author: "Bhargav Kandagatla",
    role: "Automation Test Engineer",
    avatar: "",
  },
]

// Component that displays a scrolling marquee of customer testimonials.
export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Fade in elements with the "reveal" class when they enter the viewport.
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

  // Setup continuous scrolling for the testimonials marquee with pause-on-hover.
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5 // Scroll speed setting.

    const animate = () => {
      scrollPosition += scrollSpeed

      // Loop back to start when halfway scrolled.
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    // Pause scroll animation on hover.
    const handleMouseEnter = () => cancelAnimationFrame(animationId)
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate)
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  // Duplicate list to achieve continuous loop scroll.
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section ref={sectionRef} id="temoignages" className="py-16 sm:py-24 bg-background overflow-hidden lg:py-32 lg:pb-0">
      {/* Section Header */}
      <div className="w-full">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-6">
          <div className="reveal opacity-0 flex items-center justify-center gap-2 mb-4">
            <MessageSquare className="w-5 h-5 text-primary" />
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-secondary font-medium">
              Testimonials
            </p>
          </div>
          <ScrollBlurText
            text="Trusted by industry leaders"
            className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-foreground text-balance"
          />
        </div>

        <div className="reveal opacity-0 animation-delay-400">
          <div ref={scrollRef} className="flex gap-4 sm:gap-6 overflow-x-hidden px-4 sm:px-0" style={{ scrollBehavior: "auto" }}>
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[240px] sm:w-[270px] md:w-[300px] bg-card rounded-2xl p-4 sm:p-5 border border-border/50 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 my-4 sm:my-6 py-6 sm:py-8"
              >
                <blockquote className="font-serif text-xs sm:text-sm md:text-base text-foreground leading-relaxed mb-5">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                  {testimonial.avatar ? (
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                  )}
                  <div>
                    <div className="font-medium text-xs sm:text-sm text-foreground">{testimonial.author}</div>
                    <div className="text-[11px] text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
