import { useEffect, useRef, useState } from "react"
import { Mail, MapPin, Phone, User, Send, MessageCircle, Clock, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollBlurText } from "@/components/scroll-blur-text"
import { toast } from "sonner"

const contactCards = [
  {
    icon: Mail,
    title: "Email Us",
    value: "agapepentecostalchurchapc@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=agapepentecostalchurchapc@gmail.com",
    description: "Send us your prayer requests or inquiries"
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 9390232344",
    href: "tel:+919390232344",
    description: "Mon-Sat 9AM-9PM IST"
  },
  {
    icon: MapPin,
    title: "Bhavanipuram Church",
    value: "Gurukrupa Rd, Kamakoti Nagar, VD Puram, Vijayawada",
    href: "https://maps.app.goo.gl/TtSY3e6czcttqpndA",
    description: "Sunday 8:30 AM Service"
  },
  {
    icon: MapPin,
    title: "Gollapudi Church",
    value: "Gollapudi, Vijayawada, Andhra Pradesh",
    href: "https://maps.app.goo.gl/Gv4g4vY5BAHWFkMAA",
    description: "Sunday 6:30 PM Service"
  }
]

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || (!formData.email && !formData.phone) || !formData.message) {
      toast.error("Please fill in your name, contact info, and message.")
      return
    }

    setIsSubmitting(true)
    setTimeout(() => {
      toast.success("Thank you! Your message has been sent to Agape Pentecostal Church.")
      setFormData({ name: "", email: "", phone: "", message: "" })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <section ref={sectionRef} id="contact" className="py-10 sm:py-14 lg:py-16 relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="reveal opacity-0 flex items-center justify-center gap-2 mb-4">
            <MessageCircle className="w-5 h-5 text-primary" />
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">
              Get Connected
            </p>
          </div>
          <ScrollBlurText
            text="Let's Start a Conversation"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance mb-6"
          />
          <p className="reveal opacity-0 animation-delay-200 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Reach out for prayer requests, questions, or to get connected.
          </p>
          <div className="reveal opacity-0 animation-delay-300 flex items-center justify-center gap-6 mt-6 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>Quick Response</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>Personal Prayer Care</span>
            </div>
          </div>
        </div>

        {/* 3-Column Content Grid (LLC Layout) */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Column 1: Contact Info Cards */}
          <div className="space-y-4">
            {contactCards.map((item, idx) => (
              <a
                key={item.title}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`reveal opacity-0 ${idx === 0 ? "" : idx === 1 ? "animation-delay-100" : idx === 2 ? "animation-delay-200" : "animation-delay-300"} group block p-5 bg-card/70 backdrop-blur-md rounded-2xl border border-border/40 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 group-hover:scale-110 transition-all shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-serif text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-1">{item.description}</p>
                    <p className="text-xs sm:text-sm text-foreground font-medium truncate">{item.value}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Column 2: Send a Message Form */}
          <div className="reveal opacity-0 animation-delay-200">
            <div className="bg-card/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-border/40 shadow-xl">
              <h3 className="font-serif text-xl font-bold text-foreground mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="pl-10 bg-background/60 rounded-xl border-border/40 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-10 bg-background/60 rounded-xl border-border/40 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="pl-10 bg-background/60 rounded-xl border-border/40 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>

                <Textarea
                  placeholder="Your prayer request or message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[120px] bg-background/60 rounded-xl resize-none border-border/40 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-95 py-3.5 font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-primary/25 transition-all hover:scale-[1.01]"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </Button>
              </form>
            </div>
          </div>

          {/* Column 3: Google Map Location */}
          <div className="reveal opacity-0 animation-delay-300">
            <div className="bg-card/70 backdrop-blur-md rounded-3xl overflow-hidden border border-border/40 shadow-xl h-full flex flex-col">
              <div className="p-5 border-b border-border/20">
                <h3 className="font-serif text-lg font-bold text-foreground">Visit Bhavanipuram Church</h3>
                <p className="text-xs text-muted-foreground">Kamakoti Nagar, Vijayawada</p>
              </div>
              <div className="relative flex-1 min-h-[240px]">
                <iframe
                  src="https://maps.google.com/maps?q=Agape+Pentecostal+Church&hl=en&ll=16.5263063,80.5999032&z=16&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
              <div className="p-4 bg-muted/40">
                <a
                  href="https://maps.app.goo.gl/TtSY3e6czcttqpndA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground text-xs font-semibold hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-primary/25"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}