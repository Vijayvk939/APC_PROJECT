import { useEffect, useRef } from "react"
import { Play, Clock, Eye, Heart, Sparkles } from "lucide-react"
import { ScrollBlurText } from "@/components/scroll-blur-text"
import { Badge } from "@/components/ui/badge"
import { videos } from "@/data/videos"

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
    <section ref={sectionRef} id="videos" className="py-10 sm:py-14 lg:py-16 bg-[#1a080c] text-white relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <img
          src="/images/Transformative_Messages.png"
          alt=""
          className="w-full h-full object-cover min-w-full opacity-70 select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a080c]/60 via-transparent to-[#1a080c]/80 pointer-events-none" />
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

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`reveal opacity-0 ${index === 0 ? "" : index === 1 ? "animation-delay-100" : "animation-delay-200"} group bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 shadow-2xl hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between`}
            >
              {/* Thumbnail Container */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-black/40">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />

                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground font-semibold shadow-md">
                  {video.category}
                </Badge>

                {/* Play Trigger Link */}
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center group/btn"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/90 text-primary-foreground border border-white/40 flex items-center justify-center shadow-xl group-hover/btn:scale-110 transition-transform">
                    <Play className="w-7 h-7 ml-1" />
                  </div>
                </a>
              </div>

              {/* Video Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-rose-300 transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-xs text-white/70 mb-4 line-clamp-2">{video.subtitle}</p>
                </div>

                <div className="flex items-center justify-between text-xs text-white/60 pt-4 border-t border-white/10">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-rose-400" /> {video.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-rose-300" /> {video.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-rose-400" /> {video.likes}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}