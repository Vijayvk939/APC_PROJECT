import { useState, useEffect, useRef } from "react"
import { Book, Download, Library, ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { ScrollBlurText } from "@/components/scroll-blur-text"
import { ScrollToTopOnLoad } from "@/components/scroll-to-top-on-load"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

interface BookData {
  id: string
  title: string
  author: string
  description: string
  coverColor: string
}

const books: BookData[] = [
  {
    id: "1",
    title: "The Holy Bible (KJV)",
    author: "Multiple Authors",
    description: "The classic King James text treasured for its beauty and enduring influence.",
    coverColor: "bg-primary",
  },
  {
    id: "2",
    title: "Pilgrim's Progress",
    author: "John Bunyan",
    description: "John Bunyan’s beloved allegory that charts the soul’s journey toward heaven.",
    coverColor: "bg-secondary",
  },
  {
    id: "3",
    title: "Mere Christianity",
    author: "C.S. Lewis",
    description: "C.S. Lewis distills the heart of Christian belief with clarity and wit.",
    coverColor: "bg-accent",
  },
  {
    id: "4",
    title: "The Purpose Driven Life",
    author: "Rick Warren",
    description: "Rick Warren guides readers through forty days of purpose-centered devotion.",
    coverColor: "bg-primary",
  },
  {
    id: "5",
    title: "The Cost of Discipleship",
    author: "Dietrich Bonhoeffer",
    description: "Bonhoeffer’s piercing call to costly grace and wholehearted obedience.",
    coverColor: "bg-foreground text-background",
  },
  {
    id: "6",
    title: "Knowing God",
    author: "J.I. Packer",
    description: "J.I. Packer’s classic invitation to deeper, more intimate knowledge of God.",
    coverColor: "bg-secondary",
  },
]

export default function Books() {
  const navigate = useNavigate()
  const sectionRef = useRef<HTMLDivElement>(null)

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

  const handleDownload = (bookTitle: string) => {
    toast.success(`"${bookTitle}" download initiated!`)
  }

  return (
    <>
      <Helmet>
        <title>Spiritual Library | Agape Pentecostal Church</title>
        <link rel="canonical" href="https://www.agapepentecostalchurch.com/books" />
        {typeof window !== "undefined" && window.location.hostname.includes("vercel.app") && (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Helmet>

      <ScrollToTopOnLoad />

      <div ref={sectionRef} className="pt-28 pb-20 min-h-screen bg-background text-foreground relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Bar */}
          <div className="flex justify-between items-center mb-8">
            <Button
              variant="outline"
              onClick={() => navigate("/")}
              className="rounded-full px-5 flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Button>
          </div>

          {/* Section Heading */}
          <div className="text-center mb-16">
            <div className="reveal opacity-0 flex items-center justify-center gap-2 mb-4">
              <Library className="w-5 h-5 text-primary" />
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium">
                Featured Collection
              </p>
            </div>
            <ScrollBlurText
              text="Spiritual Library & Books"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-foreground text-balance mb-6"
            />
            <p className="reveal opacity-0 animation-delay-200 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore spiritual books and resources to fuel your faith journey.
            </p>
            <div className="reveal opacity-0 animation-delay-300 w-16 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-6" />
          </div>

          {/* Book Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book, idx) => (
              <div
                key={book.id}
                className={`reveal opacity-0 ${idx % 3 === 1 ? "animation-delay-100" : idx % 3 === 2 ? "animation-delay-200" : ""} group bg-card/60 backdrop-blur-sm rounded-3xl overflow-hidden border border-border/40 shadow-lg hover:shadow-2xl hover:border-primary/40 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between`}
              >
                {/* Book Cover */}
                <div className={`h-52 ${book.coverColor} flex items-center justify-center p-6 relative`}>
                  <Book className="w-20 h-20 text-white/90 group-hover:scale-110 transition-transform duration-500" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-xs font-semibold text-primary mb-3">{book.author}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-6 leading-relaxed">
                      {book.description}
                    </p>
                  </div>

                  <Button
                    onClick={() => handleDownload(book.title)}
                    className="w-full rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 py-3 font-semibold text-sm flex items-center justify-center gap-2 shadow-md"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
