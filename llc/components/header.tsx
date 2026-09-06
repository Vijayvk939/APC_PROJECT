"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import logo from "@/public/MIT_G.png"

// Component that displays the main website navigation header.
export function Header() {
  // State to track if the mobile navigation menu is open.
  const [isOpen, setIsOpen] = useState(false)

  // Smooth scrolls to the selected section on the page.
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false) // Close the mobile menu.
  }

  return (
    // Fixed header navigation bar.
    <header className="fixed top-0 left-0 right-0 z-50 p-0 transition-all duration-300">
      <nav className="w-full rounded-none bg-background/80 dark:bg-stone-900/80 backdrop-blur-2xl backdrop-saturate-150 border-t-0 border-x-0 border-b border-border/40 shadow-lg py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-18">
          {/* Logo links to the home page */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image src={logo} alt="Maganti Group LLC" width={200} height={200} className="h-24 sm:h-32 lg:h-36 w-auto -ml-2 sm:-ml-4 lg:-ml-6 mt-1 sm:mt-2 drop-shadow-[0_0_25px_rgba(255,255,255,0.9)]" />
          </Link>

          {/* Desktop navigation links */}
          <div className="hidden md:flex items-center gap-1 bg-white/20 dark:bg-white/5 p-1.5 rounded-full border border-white/30 dark:border-white/10 backdrop-blur-xl">
            <a href="#industries" onClick={(e) => handleNavClick(e, "industries")} className="px-4 py-1.5 rounded-full text-sm text-muted-foreground hover:text-primary hover:bg-white/60 dark:hover:bg-white/10 transition-all cursor-pointer">
              Industries
            </a>
            <a href="#about" onClick={(e) => handleNavClick(e, "about")} className="px-4 py-1.5 rounded-full text-sm text-muted-foreground hover:text-primary hover:bg-white/60 dark:hover:bg-white/10 transition-all cursor-pointer">
              About
            </a>
            <a href="#mission" onClick={(e) => handleNavClick(e, "mission")} className="px-4 py-1.5 rounded-full text-sm text-muted-foreground hover:text-primary hover:bg-white/60 dark:hover:bg-white/10 transition-all cursor-pointer">
              Talent Solutions
            </a>
            <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className="px-4 py-1.5 rounded-full text-sm text-muted-foreground hover:text-primary hover:bg-white/60 dark:hover:bg-white/10 transition-all cursor-pointer">
              Contact
            </a>
          </div>

          {/* Call to action button */}
          <div className="hidden md:block">
            <a href="#jobs" onClick={(e) => handleNavClick(e, "jobs")}>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 shadow-md hover:shadow-primary/30 transition-all border border-white/20">
                Get Jobs
              </Button>
            </a>
          </div>

          {/* Hamburger menu toggle button for mobile views */}
          <button className="md:hidden p-2 rounded-xl hover:bg-white/20 transition-colors" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile navigation dropdown links */}
        {isOpen && (
          <div className="md:hidden py-6 px-4 sm:px-6 border-t border-border/50 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="flex flex-col gap-4">
              <a
                href="#industries"
                className="text-lg text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                onClick={(e) => handleNavClick(e, "industries")}
              >
                Industries
              </a>
              <a
                href="#about"
                className="text-lg text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                onClick={(e) => handleNavClick(e, "about")}
              >
                About
              </a>
              <a
                href="#mission"
                className="text-lg text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                onClick={(e) => handleNavClick(e, "mission")}
              >
                Talent Solutions
              </a>
              <a
                href="#contact"
                className="text-lg text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                onClick={(e) => handleNavClick(e, "contact")}
              >
                Contact
              </a>
              <a href="#jobs" onClick={(e) => handleNavClick(e, "jobs")}>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full w-full mt-4">
                  Get Jobs
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
