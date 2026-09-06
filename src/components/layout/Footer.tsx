import { Mail, MapPin, Phone, Facebook, Instagram, Youtube, Twitter } from "lucide-react"
import logoImage from "/images/AGP.png"
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
  return (
    <footer className="bg-[#1a080c] text-white py-10 sm:py-14 relative overflow-hidden border-t border-white/10">
      {/* Background ambient lighting glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8B0000]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand & Contacts */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logoImage} alt="Agape Pentecostal Church logo" className="h-12 w-auto drop-shadow-lg" />
              <div>
                <span className="font-serif text-xl font-bold text-white block leading-tight">AGAPE</span>
                <span className="text-xs text-white/70 block font-medium">Pentecostal Church</span>
              </div>
            </div>
            <p className="text-white/75 leading-relaxed mb-6 max-w-sm text-xs sm:text-sm">
              Building a church where every heart finds home, every soul discovers purpose, and every life reflects God's unconditional love.
            </p>
            <div className="space-y-3 text-xs sm:text-sm text-white/75">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#B22222]" />
                <span>Gurukrupa Rd, Kamakoti Nagar, VD Puram, Vijayawada, AP 520012</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0 text-[#B22222]" />
                <span>+91 9390232344</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-[#B22222]" />
                <span className="break-all">agapepentecostalchurchapc@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Worship Services Links */}
          <div>
            <h4 className="font-serif font-bold text-white mb-4 text-sm sm:text-base">Worship Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <FooterNavLink href={link.href} className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </FooterNavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Church Links */}
          <div>
            <h4 className="font-serif font-bold text-white mb-4 text-sm sm:text-base">Our Church</h4>
            <ul className="space-y-2.5">
              {footerLinks.church.map((link) => (
                <li key={link.label}>
                  <FooterNavLink href={link.href} className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </FooterNavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Media Links */}
          <div>
            <h4 className="font-serif font-bold text-white mb-4 text-sm sm:text-base">Resources & Media</h4>
            <ul className="space-y-2.5">
              {footerLinks.media.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("http") || link.href.startsWith("/") ? (
                    <a href={link.href} className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  ) : (
                    <FooterNavLink href={link.href} className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors">
                      {link.label}
                    </FooterNavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Icons & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/60 text-center md:text-left">
            © 2026 Agape Pentecostal Church. All Rights Reserved.
          </p>

          <div className="flex gap-3">
            <a
              href="https://facebook.com/Agape-Pentecostal-Church-100304551730613"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all text-white border border-white/10"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com/prasadmachavarapu?igshid=1icl4cqfr69xz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:scale-110 transition-all text-white border border-white/10"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com/channel/UCjdJChq8HST_jDuZSElFz3Q"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 hover:scale-110 transition-all text-white border border-white/10"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com/PrasadMachavar2?s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:scale-110 transition-all text-white border border-white/10"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}