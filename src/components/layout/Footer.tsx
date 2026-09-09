import { Mail, MapPin, Phone, Facebook, Instagram, Youtube, Twitter, ArrowUp } from "lucide-react"
import logoImage from "/images/AGP.webp"
import { FooterNavLink } from "@/components/footer-nav-link"
import footerData from "@/data/json/footer.json"

const socialIconMap: Record<string, typeof Facebook> = {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
}

export default function Footer() {
  const { brand, contact, links: footerLinks, socialLinks, copyright } = footerData

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#140609] text-white py-10 sm:py-14 lg:py-16 relative overflow-hidden border-t border-white/10">
      {/* Ambient background lighting glow */}
      <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#8B0000]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#8B0000]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid: 1 col on mobile, 3 cols on tablet, 5 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-8 lg:gap-8 mb-10 sm:mb-12">
          {/* Brand & Contacts: Full-width on mobile, spans 3 cols on tablet, 2 cols on desktop */}
          <div className="sm:col-span-3 lg:col-span-2 space-y-5 sm:space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-white/20 shadow-lg bg-black/40 shrink-0">
                <img src={logoImage} alt="Agape Pentecostal Church logo" className="w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
              <div className="min-w-0">
                <span className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-white block leading-tight">
                  {brand.name}
                </span>
                <span className="text-[11px] sm:text-xs text-white/70 block font-medium tracking-wide">
                  {brand.subtitle}
                </span>
              </div>
            </div>

            <p className="text-white/75 leading-relaxed max-w-md text-xs sm:text-sm">
              {brand.description}
            </p>

            <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-white/80">
              <a
                href={contact.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group hover:text-white transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-[#8B0000]/20 flex items-center justify-center shrink-0 mt-0.5 border border-[#8B0000]/30 group-hover:bg-[#8B0000]/40 transition-colors">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                </div>
                <span className="leading-tight">{contact.address}</span>
              </a>

              <a
                href={`tel:${contact.phoneRaw || contact.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-3 group hover:text-white transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-[#8B0000]/20 flex items-center justify-center shrink-0 border border-[#8B0000]/30 group-hover:bg-[#8B0000]/40 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-rose-400" />
                </div>
                <span>{contact.phone}</span>
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="flex items-start gap-3 group hover:text-white transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-[#8B0000]/20 flex items-center justify-center shrink-0 mt-0.5 border border-[#8B0000]/30 group-hover:bg-[#8B0000]/40 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-rose-400" />
                </div>
                <span className="break-all">{contact.email}</span>
              </a>
            </div>
          </div>

          {/* Worship Services Links */}
          <div className="space-y-3">
            <div>
              <h4 className="font-serif font-bold text-white text-sm sm:text-base mb-1">Worship Services</h4>
              <div className="w-8 h-0.5 bg-[#8B0000] rounded-full" />
            </div>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <FooterNavLink href={link.href} className="text-xs sm:text-sm text-white/70 hover:text-rose-300 transition-colors inline-flex items-center gap-1.5 group py-0.5">
                    <span className="text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>{link.label}</span>
                  </FooterNavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Church Links */}
          <div className="space-y-3">
            <div>
              <h4 className="font-serif font-bold text-white text-sm sm:text-base mb-1">Our Church</h4>
              <div className="w-8 h-0.5 bg-[#8B0000] rounded-full" />
            </div>
            <ul className="space-y-2">
              {footerLinks.church.map((link) => (
                <li key={link.label}>
                  <FooterNavLink href={link.href} className="text-xs sm:text-sm text-white/70 hover:text-rose-300 transition-colors inline-flex items-center gap-1.5 group py-0.5">
                    <span className="text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>{link.label}</span>
                  </FooterNavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Media Links */}
          <div className="space-y-3">
            <div>
              <h4 className="font-serif font-bold text-white text-sm sm:text-base mb-1">Resources & Media</h4>
              <div className="w-8 h-0.5 bg-[#8B0000] rounded-full" />
            </div>
            <ul className="space-y-2">
              {footerLinks.media.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("http") || link.href.startsWith("/") ? (
                    <a href={link.href} className="text-xs sm:text-sm text-white/70 hover:text-rose-300 transition-colors inline-flex items-center gap-1.5 group py-0.5">
                      <span className="text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                      <span>{link.label}</span>
                    </a>
                  ) : (
                    <FooterNavLink href={link.href} className="text-xs sm:text-sm text-white/70 hover:text-rose-300 transition-colors inline-flex items-center gap-1.5 group py-0.5">
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
        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col-reverse md:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="text-[11px] sm:text-xs text-white/60 text-center md:text-left leading-relaxed">
            {copyright}
          </p>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {socialLinks.map((social) => {
                const IconComponent = socialIconMap[social.icon] || Facebook
                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8B0000] hover:scale-110 active:scale-95 transition-all text-white border border-white/10"
                  >
                    <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                )
              })}
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#8B0000] text-white flex items-center justify-center hover:bg-[#6c0000] hover:scale-110 active:scale-95 transition-all shadow-md border border-white/20"
            >
              <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}