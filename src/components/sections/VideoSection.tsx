import { useEffect, useRef } from "react"
import { Play, Clock, Eye, Heart, Sparkles } from "lucide-react"
import { ScrollBlurText } from "@/components/scroll-blur-text"
import { Badge } from "@/components/ui/badge"
import { videos } from "@/data/videos"

import transformativeBg from "/images/Design/Transformative_Messages.webp"

export default function VideoSection() {
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
    <section ref={sectionRef} id="videos" className="py-12 sm:py-16 lg:py-20 bg-[#120306] text-white relative overflow-hidden">
      {/* Background Image Overlay (Full Width with Light Black Layer) */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <img
          src={transformativeBg}
          alt=""
          className="w-full h-full object-cover min-w-full opacity-100 select-none pointer-events-none"
        />
        {/* Light Black Overlay Layer */}
        <div className="absolute inset-0 bg-black/35 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#120306]/50 via-transparent to-[#120306]/70 pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="reveal opacity-0 flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-[#B22222]" />
            <p className="text-xs uppercase tracking-[0.3em] text-white/70 font-medium">
              Featured Sermons & Media
            </p>
          </div>
          <ScrollBlurText
            text="Transformative Messages"
            className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white text-balance mb-6"
          />
          <p className="reveal opacity-0 animation-delay-200 text-base sm:text-lg text-white/80 max-w-3xl mx-auto">
            Inspiring sermons, live worship songs, and messages from our church.
          </p>
          <div className="reveal opacity-0 animation-delay-300 w-14 h-0.5 bg-[#8B0000] mx-auto mt-6" />
        </div>

        {/* Video Grid - Tablet & Desktop Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-8 sm:mb-10">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`reveal opacity-0 ${
                index === 0 ? "" : index === 1 ? "animation-delay-100" : "animation-delay-200"
              } ${
                index === 2 && videos.length === 3 ? "md:col-span-2 lg:col-span-1 md:max-w-[calc(50%-0.75rem)] lg:max-w-none md:mx-auto md:w-full" : ""
              } group bg-[#260e14] hover:bg-[#2d1118] backdrop-blur-md rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl hover:border-[#8B0000]/60 hover:shadow-[#8B0000]/20 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between`}
            >
              {/* Thumbnail Container */}
              <div className="relative h-48 sm:h-56 lg:h-60 overflow-hidden bg-black/50">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#260e14] via-black/30 to-black/20" />

                {/* Category Badge */}
                <Badge className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 bg-[#8B0000] text-white font-bold text-[11px] sm:text-xs px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-md border border-white/10 z-10">
                  {video.category}
                </Badge>

                {/* Play Trigger Link */}
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center group/btn z-10"
                  aria-label={`Watch ${video.title}`}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/40 border-2 border-white/60 text-white backdrop-blur-sm flex items-center justify-center shadow-xl group-hover/btn:scale-110 group-hover/btn:bg-[#8B0000] group-hover/btn:border-white transition-all duration-300">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5 fill-white text-white" />
                  </div>
                </a>
              </div>

              {/* Video Details Box */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between bg-[#260e14]">
                <div>
                  <h3 className="font-serif text-base sm:text-lg lg:text-xl font-bold text-white mb-1 group-hover:text-rose-200 transition-colors line-clamp-2 leading-snug">
                    {video.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 font-medium mb-3.5 line-clamp-2 leading-relaxed">
                    {video.subtitle}
                  </p>
                </div>

                <div>
                  {/* Subtle Separator Line */}
                  <div className="w-full h-[1px] bg-white/10 mb-3" />

                  {/* Bottom Stats Bar */}
                  <div className="flex items-center justify-between text-[11px] sm:text-xs text-white/75 font-medium gap-1 sm:gap-1.5">
                    <span className="flex items-center gap-1 sm:gap-1.5 shrink-0">
                      <Clock className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                      <span>{video.duration}</span>
                    </span>
                    <span className="flex items-center gap-1 sm:gap-1.5 shrink-0">
                      <Eye className="w-3.5 h-3.5 text-rose-300 shrink-0" />
                      <span>{video.views}</span>
                    </span>
                    <span className="flex items-center gap-1 sm:gap-1.5 shrink-0">
                      <Heart className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                      <span>{video.likes}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}