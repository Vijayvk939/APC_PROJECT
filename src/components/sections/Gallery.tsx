import { useState, useEffect, useRef } from "react"
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Eye,
  Sparkles
} from "lucide-react"
import { ScrollBlurText } from "@/components/scroll-blur-text"
import { Badge } from "@/components/ui/badge"

import { galleryImages } from "@/data/gallery"
import galleryBg from "/images/Design/Gallery_design.webp"


export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  // Intersection observer for animation
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

  // Auto-play slider timer
  useEffect(() => {
    if (isPaused || lightboxIndex !== null) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
    }, 4500)

    return () => clearInterval(timer)
  }, [isPaused, lightboxIndex])

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return

      if (e.key === "Escape") {
        setLightboxIndex(null)
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : 0
        )
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % galleryImages.length : 0
        )
      }
    }

    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    }

    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [lightboxIndex])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  return (
    <section ref={sectionRef} id="gallery" className="py-10 sm:py-14 lg:py-16 bg-background relative overflow-hidden">
      {/* Background PNG Overlay (Full Width) */}
      <div className="absolute inset-x-0 top-0 w-full pointer-events-none z-0 overflow-hidden">
        <img
          src={galleryBg}
          alt=""
          className="w-full h-auto min-w-full object-cover opacity-65 dark:opacity-25 select-none pointer-events-none"
        />
      </div>

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
        <div className="reveal opacity-0 relative mb-8 max-w-5xl mx-auto">
          {/* Main Featured Spotlight Card */}
          <div
            className="relative h-80 sm:h-[420px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-border/40 bg-card group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentSlide
                    ? "opacity-100 scale-100 z-10 pointer-events-auto"
                    : "opacity-0 scale-105 z-0 pointer-events-none"
                  }`}
              >
                {/* Image */}
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                {/* Top Bar Info & Controls inside card */}
                <div className="absolute top-3 left-3 right-3 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between gap-2 z-20 min-w-0">
                  <Badge
                    variant="secondary"
                    className="bg-black/40 backdrop-blur-md text-white border border-white/20 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-medium flex items-center gap-1 sm:gap-1.5 whitespace-nowrap shrink min-w-0"
                  >
                    <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary shrink-0" />
                    <span className="truncate">{image.category}</span>
                  </Badge>

                  <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    {/* Counter Badge */}
                    <span className="text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white/90 border border-white/20 whitespace-nowrap">
                      {String(index + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}
                    </span>

                    {/* Fullscreen Expand */}
                    <button
                      onClick={() => openLightbox(index)}
                      aria-label="Expand image fullscreen"
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-black/60 hover:scale-110 transition-all shrink-0"
                    >
                      <Maximize2 className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8 text-white z-20 max-w-3xl">
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-white drop-shadow-md">
                    {image.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-white/85 leading-relaxed drop-shadow-sm">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Slider Edge Navigation Controls */}
            <button
              onClick={prevSlide}
              aria-label="Previous photo"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20 flex items-center justify-center z-30 hover:bg-black/70 hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next photo"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20 flex items-center justify-center z-30 hover:bg-black/70 hover:scale-110 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Interactive Thumbnail Filmstrip Bar for all 12 images */}
          <div className="mt-6 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-2 sm:gap-2.5">
            {galleryImages.map((image, idx) => {
              const isActive = idx === currentSlide
              return (
                <button
                  key={image.id}
                  onClick={() => {
                    setCurrentSlide(idx)
                    setIsPaused(true)
                  }}
                  className={`group relative h-14 sm:h-16 rounded-xl overflow-hidden transition-all duration-300 text-left border ${isActive
                      ? "border-primary ring-2 ring-primary/40 shadow-lg scale-105"
                      : "border-border/40 opacity-70 hover:opacity-100 hover:scale-102"
                    }`}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 transition-opacity ${isActive ? "bg-primary/20" : "bg-black/40 group-hover:bg-black/20"}`} />

                  {isActive && (
                    <div className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      <Eye className="w-2 h-2" />
                    </div>
                  )}

                  <div className="absolute bottom-0.5 left-1 right-1 truncate">
                    <span className="text-[9px] font-semibold text-white drop-shadow-sm block truncate">
                      {image.title}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-300">
          {/* Lightbox Header */}
          <div className="flex items-center justify-between text-white z-20 max-w-6xl mx-auto w-full pt-2 gap-2">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <Badge variant="outline" className="text-white border-white/30 px-2.5 sm:px-3 py-1 text-xs whitespace-nowrap shrink-0">
                {galleryImages[lightboxIndex].category}
              </Badge>
              <span className="text-xs text-white/70 font-medium whitespace-nowrap">
                Photo {lightboxIndex + 1} of {galleryImages.length}
              </span>
            </div>

            <button
              onClick={closeLightbox}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lightbox Main Image & Controls */}
          <div className="relative flex-1 flex items-center justify-center my-4 max-w-6xl mx-auto w-full">
            {/* Prev Button */}
            <button
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : 0
                )
              }
              aria-label="Previous image"
              className="absolute left-2 sm:left-4 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Main Lightbox Photo */}
            <div className="relative max-h-[75vh] max-w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center">
              <img
                src={galleryImages[lightboxIndex].url}
                alt={galleryImages[lightboxIndex].title}
                className="max-h-[75vh] w-auto max-w-full object-contain select-none"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev !== null ? (prev + 1) % galleryImages.length : 0
                )
              }
              aria-label="Next image"
              className="absolute right-2 sm:right-4 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>

          {/* Lightbox Footer Caption */}
          <div className="text-center text-white z-20 max-w-3xl mx-auto w-full pb-4">
            <h3 className="font-serif text-xl sm:text-2xl font-bold mb-1 text-white">
              {galleryImages[lightboxIndex].title}
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              {galleryImages[lightboxIndex].description}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}