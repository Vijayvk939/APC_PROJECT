import { useEffect, useRef, useState, useMemo } from "react"
import { Book, Download, Library, ArrowLeft, Search, Star, Globe, FileText, Sparkles, BookOpen } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { ScrollBlurText } from "@/components/scroll-blur-text"
import { ScrollToTopOnLoad } from "@/components/scroll-to-top-on-load"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import { books } from "@/data/books"
import arcBg from "/images/Design/ARC-PNG.webp"

export default function Books() {
  const navigate = useNavigate()
  const sectionRef = useRef<HTMLDivElement>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

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

  // Categories list
  const categories = useMemo(() => {
    const cats = new Set(books.map((b) => b.category || "General"))
    return ["All", ...Array.from(cats)]
  }, [])

  // Filtered books
  const filteredBooks = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return books.filter((book) => {
      const matchesSearch =
        !q ||
        book.title.toLowerCase().includes(q) ||
        book.author.toLowerCase().includes(q) ||
        book.description.toLowerCase().includes(q) ||
        (book.category && book.category.toLowerCase().includes(q)) ||
        (book.language && book.language.toLowerCase().includes(q))

      const matchesCategory = selectedCategory === "All" || book.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const handleDownload = (bookTitle: string, fileSize?: string) => {
    toast.success(`"${bookTitle}" download started! (${fileSize || "PDF"})`, {
      description: "Thank you for exploring our spiritual library.",
    })
  }

  return (
    <>
      <Helmet>
        <title>Spiritual Library & Books | Agape Pentecostal Church</title>
        <meta
          name="description"
          content="Explore and download free Christian books, Bibles, theology resources, and spiritual study guides at Agape Pentecostal Church."
        />
        <link rel="canonical" href="https://www.agapepentecostalchurch.com/books" />
        {typeof window !== "undefined" && window.location.hostname.includes("vercel.app") && (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Helmet>

      <ScrollToTopOnLoad />

      <div ref={sectionRef} className="pt-24 sm:pt-28 pb-20 min-h-screen bg-background text-foreground relative overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
          <img
            src={arcBg}
            alt=""
            className="w-full h-full object-cover opacity-50 dark:opacity-20 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background pointer-events-none" />
        </div>

        {/* Ambient Glow Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Navigation & Breadcrumb */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-10">
            <Button
              variant="outline"
              onClick={() => navigate("/")}
              className="rounded-full px-4 sm:px-5 py-2 flex items-center gap-2 border-border/60 hover:border-primary/50 hover:bg-primary/10 transition-all text-xs sm:text-sm"
            >
              <ArrowLeft className="w-4 h-4 text-primary" />
              <span>Back to Home</span>
            </Button>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="cursor-pointer hover:text-primary transition-colors" onClick={() => navigate("/")}>
                Home
              </span>
              <span>/</span>
              <span className="font-semibold text-foreground">Spiritual Library</span>
            </div>
          </div>

          {/* Section Heading */}
          <div className="text-center mb-10 sm:mb-14">
            <div className="reveal opacity-0 flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">
                Spiritual Growth & Study
              </p>
            </div>
            <ScrollBlurText
              text="Spiritual Library & Books"
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance mb-6"
            />
            <p className="reveal opacity-0 animation-delay-200 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore timeless Christian books, study guides, and biblical literature to nourish your spirit and deepen your walk with God.
            </p>
            <div className="reveal opacity-0 animation-delay-300 w-16 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-6" />

            {/* Quick Feature Badges */}
            <div className="reveal opacity-0 animation-delay-300 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mt-6 text-[11px] sm:text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/80 backdrop-blur-md border border-border/50 shadow-sm">
                <BookOpen className="w-3.5 h-3.5 text-primary shrink-0" />
                <span className="font-medium text-foreground">{books.length} Digital Titles</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/80 backdrop-blur-md border border-border/50 shadow-sm">
                <Download className="w-3.5 h-3.5 text-primary shrink-0" />
                <span className="font-medium text-foreground">100% Free Downloads</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/80 backdrop-blur-md border border-border/40 shadow-sm">
                <Globe className="w-3.5 h-3.5 text-primary shrink-0" />
                <span className="font-medium text-foreground">Telugu & English Editions</span>
              </div>
            </div>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="reveal opacity-0 animation-delay-200 mb-10 sm:mb-12 space-y-5">
            {/* Search Input Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                type="text"
                placeholder="Search books by title, author, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-11 pr-4 h-11 sm:h-12 bg-card/80 backdrop-blur-md rounded-2xl sm:rounded-full border-border/60 focus:border-primary focus:ring-2 focus:ring-primary/20 text-xs sm:text-sm shadow-md transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground font-medium"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 border ${selectedCategory === cat
                      ? "bg-gradient-to-r from-[#6b0000] via-[#8B0000] to-[#a80e22] text-white border-transparent shadow-md scale-105"
                      : "bg-card/70 text-muted-foreground border-border/50 hover:border-primary/40 hover:text-foreground"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Book Cards Grid */}
          {filteredBooks.length === 0 ? (
            <div className="text-center py-16 bg-card/40 rounded-3xl border border-border/40 max-w-lg mx-auto p-8">
              <Library className="w-12 h-12 text-muted-foreground/60 mx-auto mb-3" />
              <h3 className="font-serif text-lg font-bold text-foreground mb-1">No Books Found</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                We couldn't find any books matching "{searchQuery}".
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All")
                }}
                className="rounded-full text-xs"
              >
                Reset Search
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {filteredBooks.map((book, idx) => (
                <div
                  key={book.id}
                  className={`reveal opacity-0 ${idx % 4 === 1 ? "animation-delay-100" : idx % 4 === 2 ? "animation-delay-200" : idx % 4 === 3 ? "animation-delay-300" : ""
                    } group bg-card/90 backdrop-blur-md rounded-2xl sm:rounded-3xl overflow-hidden border border-border/50 shadow-xl hover:shadow-2xl hover:border-primary/50 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between relative`}
                >
                  {/* Realistic 3D Styled Book Cover */}
                  <div
                    className={`h-56 sm:h-60 bg-gradient-to-br ${book.gradient || "from-[#8B0000] via-[#5c0000] to-[#260e14]"
                      } p-6 relative flex flex-col justify-between overflow-hidden shadow-inner`}
                  >
                    {/* Spine Line Effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-black/40 border-r border-white/10" />

                    {/* Book Overlay Subtle Grid Patterns */}
                    <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                    {/* Header Badges */}
                    <div className="relative z-10 flex items-center justify-between gap-1 pl-2">
                      <Badge className="bg-black/40 text-white border border-white/20 text-[10px] px-2 py-0.5 rounded-full backdrop-blur-sm font-semibold">
                        {book.category || "Spiritual"}
                      </Badge>

                      {book.rating && (
                        <div className="flex items-center gap-1 bg-black/40 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-400/30 backdrop-blur-sm">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          <span>{book.rating}</span>
                        </div>
                      )}
                    </div>

                    {/* Center Cover Graphic */}
                    <div className="relative z-10 text-center pl-2 my-auto">
                      <div className="w-14 h-14 mx-auto rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500 mb-2">
                        <Book className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="font-serif text-sm sm:text-base font-bold text-white leading-tight line-clamp-2 px-2 drop-shadow-md">
                        {book.title}
                      </h4>
                      <p className="text-[11px] text-white/80 font-medium mt-1 italic drop-shadow-sm">
                        {book.author}
                      </p>
                    </div>

                    {/* Footer Language Badge */}
                    <div className="relative z-10 pl-2 flex items-center justify-between text-[10px] text-white/80 font-medium">
                      <span className="bg-black/30 px-2 py-0.5 rounded-md border border-white/10">
                        {book.language || "English & Telugu"}
                      </span>
                      {book.fileSize && <span>{book.fileSize}</span>}
                    </div>
                  </div>

                  {/* Book Info Body */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-card/95">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <h3 className="font-serif text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                          {book.title}
                        </h3>
                      </div>

                      <p className="text-xs font-semibold text-primary mb-2.5 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 shrink-0" />
                        <span>By {book.author}</span>
                      </p>

                      <p className="text-xs sm:text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                        {book.description}
                      </p>

                      {/* Specs Row */}
                      <div className="grid grid-cols-2 gap-2 mb-4 p-2.5 rounded-xl bg-muted/40 text-[11px] text-muted-foreground border border-border/40">
                        <div className="flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span className="font-medium">{book.pages || "PDF Edition"}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Globe className="w-3.5 h-3.5 text-secondary shrink-0" />
                          <span className="font-medium truncate">{book.language || "PDF"}</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions Row */}
                    <div className="pt-2 border-t border-border/30">
                      <Button
                        onClick={() => handleDownload(book.title, book.fileSize)}
                        className="w-full rounded-xl bg-gradient-to-r from-[#6b0000] via-[#8B0000] to-[#a80e22] text-white hover:opacity-95 py-2.5 text-xs font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all border border-white/10"
                      >
                        <Download className="w-3.5 h-3.5 text-white" />
                        <span>Download PDF</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Special Request Callout Box */}
          <div className="reveal opacity-0 animation-delay-300 mt-16 sm:mt-20">
            <div className="relative bg-gradient-to-r from-[#A52020] via-[#8B1010] to-[#6B1520] rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-white shadow-2xl overflow-hidden border border-white/10">
              {/* Decorative book icons bleeding in from the right */}
              <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
                <BookOpen className="absolute -bottom-4 right-6 w-36 h-36 text-white/10 rotate-12" />
                <BookOpen className="absolute top-3 right-40 w-20 h-20 text-white/8 -rotate-6" />
                <Book className="absolute top-5 right-16 w-14 h-14 text-white/8 rotate-3" />
                <Book className="absolute bottom-4 right-52 w-10 h-10 text-white/6 -rotate-12" />
              </div>
              {/* Left-to-right gradient mask: solid on left, fades to transparent on right */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#A52020] via-[#8B1010]/80 to-transparent pointer-events-none z-0" />

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left max-w-2xl">
                  <Badge className="bg-white/20 text-white border-white/30 text-xs px-3 py-1 mb-3 rounded-full">
                    Need Printed Books or Study Bibles?
                  </Badge>
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-white">
                    Request Physical Copies & Telugu Study Bibles
                  </h3>
                  <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                    Looking for physical printed copies, Telugu study materials, or pastoral recommended reading? Reach out to our church office directly.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 shrink-0 w-full md:w-auto">
                  <Button
                    onClick={() => navigate("/#contact")}
                    className="w-full sm:w-auto rounded-full bg-white text-[#A52020] hover:bg-white/95 font-bold text-xs sm:text-sm px-6 py-3 shadow-lg transition-all"
                  >
                    Contact Church Office
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
