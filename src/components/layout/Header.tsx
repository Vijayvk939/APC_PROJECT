import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Menu, X, BookOpen, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

import logoImage from "/images/AGP.png"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollPercent, setScrollPercent] = useState(0)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const percent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0
      setScrollPercent(percent)
      setIsScrolled(scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
      {/* Minimal Top Scroll Progress Line */}
      <div
        className="h-[2px] bg-[#8B0000] fixed top-0 left-0 z-[60] transition-all duration-150 ease-out"
        style={{ width: `${scrollPercent}%` }}
      />

      <nav
        className={`w-full transition-all duration-300 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-white/10 ${
          isScrolled ? "py-2.5 shadow-sm" : "py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <button
            onClick={(e) => handleNavClick(e, "home")}
            className="flex items-center gap-3 shrink-0 text-left cursor-pointer group focus:outline-none"
          >
            <img
              src={logoImage}
              alt="Agape Pentecostal Church Logo"
              className="h-9 sm:h-10 w-auto group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <span className="font-serif text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-wider uppercase group-hover:text-[#8B0000] transition-colors leading-none">
                AGAPE PENTECOSTAL CHURCH
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-wide leading-tight mt-0.5">
                Pastor Prasad Machevarapu
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-xs xl:text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-[#8B0000] dark:hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              className="bg-[#8B0000] hover:bg-[#6c0000] text-white rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider shadow-sm transition-all hover:scale-[1.02] border border-white/20 flex items-center gap-2"
              onClick={() => {
                navigate("/books")
                window.scrollTo(0, 0)
              }}
            >
              <BookOpen className="w-4 h-4" />
              <span>Get Books</span>
            </Button>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            className="lg:hidden p-2 text-slate-700 dark:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-[#8B0000]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="lg:hidden py-4 px-4 sm:px-6 border-t border-slate-200/60 dark:border-white/10 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl shadow-xl animate-fade-up">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-[#8B0000] transition-all cursor-pointer"
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
              <div className="pt-3 mt-1 border-t border-slate-200/60 dark:border-white/10">
                <Button
                  className="bg-[#8B0000] hover:bg-[#6c0000] text-white rounded-xl w-full py-3 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
                  onClick={() => {
                    setIsOpen(false)
                    navigate("/books")
                    window.scrollTo(0, 0)
                  }}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Get Books</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}