import { Mail, MapPin, Phone, Facebook, Instagram, Youtube, Twitter, ArrowUp, Heart, Sparkles } from "lucide-react"
import logoImage from "/images/AGP.webp"
import { FooterNavLink } from "@/components/footer-nav-link"

const footerLinks = {
  services: [
    { label: "Sunday 1st Service", href: "#services" },
    { label: "Sunday School", href: "#services" },
    { label: "Sunday 2nd Service", href: "#services" },
    { label: "Friday Fasting Prayer", href: "#events" },
    { label: "Saturday Weekend Service", href: "#events" },
  ],
  church: [
    { label: "About Us", href: "#about" },
    { label: "Spiritual Leadership", href: "#leadership" },
    { label: "Church Gallery", href: "#gallery" },
    { label: "Contact Us", href: "#contact" },
  ],
  media: [
    { label: "Sermons & Videos", href: "#videos" },
    { label: "Prayer Events", href: "#events" },
    { label: "YouTube Channel", href: "https://www.youtube.com/@agapepentecostalchurch" },
    { label: "Books & Downloads", href: "/books" },
  ],
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#140609] text-white py-12 sm:py-16 relative overflow-hidden border-t border-white/10">
      {/* Ambient background lighting glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8B0000]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8B0000]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand & Contacts */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 shadow-lg bg-black/40 shrink-0">
                <img src={logoImage} alt="Agape Pentecostal Church logo" className="w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold text-white block leading-tight">
                  AGAPE PENTECOSTAL
                </span>
                <span className="text-xs text-white/70 block font-medium tracking-wide">
                  Church • Pastor Samuel Prasad Machavarapu
                </span>
              </div>
            </div>

            <p className="text-white/75 leading-relaxed max-w-sm text-xs sm:text-sm">
              Building a church where every heart finds home, every soul discovers purpose, and every life reflects God's unconditional love.
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-white/80">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#8B0000]/20 flex items-center justify-center shrink-0 mt-0.5 border border-[#8B0000]/30">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                </div>
                <span className="leading-tight">Gurukrupa Rd, Kamakoti Nagar, VD Puram, Vijayawada, AP 520012</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-[#8B0000]/20 flex items-center justify-center shrink-0 border border-[#8B0000]/30">
                  <Phone className="w-3.5 h-3.5 text-rose-400" />
                </div>
                <span>+91 9390232344</span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#8B0000]/20 flex items-center justify-center shrink-0 mt-0.5 border border-[#8B0000]/30">
                  <Mail className="w-3.5 h-3.5 text-rose-400" />
                </div>
                <span className="break-all">agapepentecostalchurchapc@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Worship Services Links */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-1">Worship Services</h4>
            <div className="w-8 h-0.5 bg-[#8B0000] rounded-full mb-4" />
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <FooterNavLink href={link.href} className="text-xs sm:text-sm text-white/70 hover:text-rose-300 transition-colors inline-flex items-center gap-1.5 group">
                    <span className="text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>{link.label}</span>
                  </FooterNavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Church Links */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-1">Our Church</h4>
            <div className="w-8 h-0.5 bg-[#8B0000] rounded-full mb-4" />
            <ul className="space-y-2.5">
              {footerLinks.church.map((link) => (
                <li key={link.label}>
                  <FooterNavLink href={link.href} className="text-xs sm:text-sm text-white/70 hover:text-rose-300 transition-colors inline-flex items-center gap-1.5 group">
                    <span className="text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>{link.label}</span>
                  </FooterNavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Media */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-1">Resources & Media</h4>
            <div className="w-8 h-0.5 bg-[#8B0000] rounded-full mb-4" />
            <ul className="space-y-2.5">
              {footerLinks.media.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("http") || link.href.startsWith("/") ? (
                    <a href={link.href} className="text-xs sm:text-sm text-white/70 hover:text-rose-300 transition-colors inline-flex items-center gap-1.5 group">
                      <span className="text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                      <span>{link.label}</span>
                    </a>
                  ) : (
                    <FooterNavLink href={link.href} className="text-xs sm:text-sm text-white/70 hover:text-rose-300 transition-colors inline-flex items-center gap-1.5 group">
                      <span className="text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                      <span>{link.label}</span>
                    </FooterNavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Social Links & Scroll To Top */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/60 text-center md:text-left">
            © 2026 Agape Pentecostal Church. All Rights Reserved. • Vijayawada, AP
          </p>

          <div className="flex items-center gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://facebook.com/Agape-Pentecostal-Church-100304551730613"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8B0000] hover:scale-110 transition-all text-white border border-white/10"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/prasadmachavarapu?igshid=1icl4cqfr69xz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8B0000] hover:scale-110 transition-all text-white border border-white/10"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/channel/UCjdJChq8HST_jDuZSElFz3Q"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8B0000] hover:scale-110 transition-all text-white border border-white/10"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/PrasadMachavar2?s=09"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8B0000] hover:scale-110 transition-all text-white border border-white/10"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-9 h-9 rounded-full bg-[#8B0000] text-white flex items-center justify-center hover:bg-[#6c0000] hover:scale-110 transition-all shadow-md border border-white/20"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}