import { useState, useEffect, useRef } from "react"
import { Camera, ChevronLeft, ChevronRight } from "lucide-react"
import { ScrollBlurText } from "@/components/scroll-blur-text"

import img1 from "/images/Gallery/IMG1.jpg"
import img2 from "/images/Gallery/IMG2.jpg"
import img3 from "/images/Gallery/IMG3.jpg"
import img4 from "/images/Gallery/IMG4.jpg"
import img5 from "/images/Gallery/IMG5.jpg"
import img6 from "/images/Gallery/IMG6.jpg"

const galleryImages = [
  {
    url: img1,
    title: "Blessed Family",
    description: "A beautiful family portrait showing the love and unity God creates in our homes."
  },
  {
    url: img2,
    title: "Women's Prayer Meeting",
    description: "Sisters in Christ gathering for prayer, worship, and spiritual fellowship."
  },
  {
    url: img3,
    title: "Church Leadership",
    description: "Our dedicated church leaders serving God and our church with love and dedication."
  },
  {
    url: img4,
    title: "Church Candlelight Gathering",
    description: "Our church family coming together in prayer and fellowship, holding candles of hope and faith."
  },
  {
    url: img5,
    title: "Pastoral Ministry",
    description: "Spreading God's word and ministering to our congregation with passion and grace."
  },
  {
    url: img6,
    title: "Sunday School Celebration",
    description: "Children learning about God's love through music, stories, and joyful activities."
  }
]

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0)
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)

  return (
    <section ref={sectionRef} id="gallery" className="py-10 sm:py-14 lg:py-16 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="reveal opacity-0 flex items-center justify-center gap-2 mb-4">
            <Camera className="w-5 h-5 text-primary" />
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium">
              Our Moments
            </p>
          </div>
          <ScrollBlurText
            text="Church Photo Gallery"
            className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-foreground text-balance mb-6"
          />
          <p className="reveal opacity-0 animation-delay-200 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Witness the joy, fellowship, and spiritual growth in our church family.
          </p>
          <div className="reveal opacity-0 animation-delay-300 w-16 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-6" />
        </div>

        {/* Featured Showcase Slider */}
        <div className="reveal opacity-0 relative mb-12 max-w-5xl mx-auto">
          <div className="relative h-72 sm:h-96 md:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-border/40 bg-card">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
                  }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white z-20">
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-white">
                    {image.title}
                  </h3>
                  <p className="text-xs sm:text-base text-white/80 max-w-2xl leading-relaxed">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Nav Controls */}
            <button
              onClick={prevSlide}
              aria-label="Previous photo"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20 flex items-center justify-center z-20 hover:bg-black/60 hover:scale-110 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next photo"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20 flex items-center justify-center z-20 hover:bg-black/60 hover:scale-110 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentSlide ? "w-8 bg-primary" : "w-2.5 bg-muted-foreground/30"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {galleryImages.map((image, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`cursor-pointer rounded-2xl overflow-hidden border-2 transition-all duration-300 ${idx === currentSlide ? "border-primary scale-105 shadow-md" : "border-transparent opacity-70 hover:opacity-100"
                }`}
            >
              <img src={image.url} alt={image.title} className="w-full h-24 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}