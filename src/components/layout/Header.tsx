import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Menu, X, BookOpen, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

import logoImage from "/images/AGP.png"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPastHero, setIsPastHero] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 20)

      // Detect if scrolled past Hero page or on subpage
      const heroHeight = window.innerHeight * 0.7
      setIsPastHero(location.pathname !== "/" || scrollY > heroHeight)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [location.pathname])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault()
    setIsOpen(false)

    if (location.pathname !== "/") {
      navigate("/")
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 150)
    } else {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const navLinks = [
    { id: "services", label: "Services" },
    { id: "events", label: "Events" },
    { id: "videos", label: "Sermons" },
    { id: "leadership", label: "Leadership" },
    { id: "gallery", label: "Gallery" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav
        className={`w-full transition-all duration-300 backdrop-blur-2xl border-b shadow-md ${
          isPastHero
            ? "bg-white/85 dark:bg-slate-950/85 border-slate-200/60 dark:border-white/20 shadow-slate-900/10 py-2.5"
            : isScrolled
            ? "bg-white/15 border-white/25 shadow-black/40 py-3"
            : "bg-white/10 border-white/15 shadow-sm py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <button
            onClick={(e) => handleNavClick(e, "home")}
            className="flex items-center gap-2.5 sm:gap-3 shrink-0 text-left cursor-pointer group focus:outline-none"
          >
            <div className={`w-8 sm:w-9 h-8 sm:h-9 rounded-full overflow-hidden shrink-0 border shadow-md transition-colors ${
              isPastHero ? "border-slate-300 dark:border-white/25" : "border-white/25"
            }`}>
              <img
                src={logoImage}
                alt="Agape Pentecostal Church Logo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-xs xs:text-sm sm:text-base font-bold tracking-wider uppercase group-hover:text-[#D91B36] transition-colors leading-none ${
                isPastHero ? "text-slate-900 dark:text-white" : "text-white"
              }`}>
                AGAPE PENTECOSTAL CHURCH
              </span>
              <span className={`text-[10px] sm:text-[11px] font-medium tracking-wide leading-tight mt-0.5 transition-colors ${
                isPastHero ? "text-slate-600 dark:text-slate-400" : "text-white/60"
              }`}>
                Pastor Samuel Prasad Machavarapu
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-xs xl:text-sm font-medium transition-colors cursor-pointer ${
                  isPastHero
                    ? "text-slate-800 dark:text-slate-200 hover:text-[#D91B36] dark:hover:text-white"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Call to Action Button & Vertical Divider */}
          <div className="hidden md:flex items-center gap-3.5">
            <div className={`h-5 w-[1px] hidden lg:block transition-colors ${
              isPastHero ? "bg-slate-300 dark:bg-white/20" : "bg-white/20"
            }`} />
            <Button
              className="bg-gradient-to-r from-[#D91B36] to-[#A00E26] hover:from-[#e6223e] hover:to-[#b3102c] text-white rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(217,27,54,0.4)] transition-all hover:scale-[1.03] border border-white/20 flex items-center gap-2"
              onClick={() => {
                navigate("/books")
                window.scrollTo(0, 0)
              }}
            >
              <BookOpen className="w-4 h-4 text-white" />
              <span className="text-white">GET BOOKS</span>
            </Button>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            className={`lg:hidden p-2 rounded-full transition-colors focus:outline-none ${
              isPastHero
                ? "text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5 text-[#D91B36]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className={`lg:hidden py-4 px-4 sm:px-6 border-t backdrop-blur-2xl shadow-2xl animate-fade-up ${
            isPastHero
              ? "bg-white/95 dark:bg-slate-950/95 border-slate-200/60 dark:border-white/20 text-slate-900 dark:text-white"
              : "bg-black/85 border-white/20 text-white"
          }`}>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                    isPastHero
                      ? "text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-[#D91B36]"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                  }`}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  <span>{link.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isPastHero ? "text-slate-400" : "text-white/50"}`} />
                </a>
              ))}
              <div className={`pt-3 mt-1 border-t ${isPastHero ? "border-slate-200/60 dark:border-white/15" : "border-white/15"}`}>
                <Button
                  className="bg-gradient-to-r from-[#D91B36] to-[#A00E26] hover:from-[#e6223e] hover:to-[#b3102c] text-white rounded-full w-full py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(217,27,54,0.4)]"
                  onClick={() => {
                    setIsOpen(false)
                    navigate("/books")
                    window.scrollTo(0, 0)
                  }}
                >
                  <BookOpen className="w-4 h-4 text-white" />
                  <span className="text-white">GET BOOKS</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}