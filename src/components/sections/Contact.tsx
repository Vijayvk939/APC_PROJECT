import { useEffect, useRef, useState } from "react"
import { Mail, MapPin, User, Send, MessageCircle, Clock, Loader2, ExternalLink, HeartHandshake, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollBlurText } from "@/components/scroll-blur-text"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import { contactCards, mapLocations } from "@/data/contact"
import { countries, Country } from "@/data/countries"
import { PhoneInputField } from "@/components/ui/phone-input"
import getConnectedBg from "/images/Design/Get_Connected.webp"


export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeMapTab, setActiveMapTab] = useState<"bhavanipuram" | "gollapudi">("bhavanipuram")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })
  const [selectedCountry, setSelectedCountry] = useState<Country>(() => {
    return countries.find((c) => c.code === "IN") || countries[0]
  })
  const [formError, setFormError] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const getValidationError = (data = formData): string => {
    const trimmedName = data.name.trim()
    const trimmedEmail = data.email.trim()
    const trimmedPhone = data.phone.trim()
    const trimmedMessage = data.message.trim()

    if (!trimmedName) return "Please enter your name."
    if (trimmedName.length < 2) return "Name must be at least 2 characters."
    if (trimmedName.length > 80) return "Name cannot exceed 80 characters."

    if (!trimmedEmail) return "Please enter your email."
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(trimmedEmail)) return "Enter valid email (e.g. name@example.com)"

    if (trimmedPhone) {
      const minDigits = selectedCountry?.minDigits || 10
      const maxDigits = selectedCountry?.maxDigits || 15
      const digits = trimmedPhone.replace(/\D/g, "")
      if (digits.length < minDigits || digits.length > maxDigits) {
        return `Please enter a valid ${minDigits}-digit phone number.`
      }
    }

    if (!trimmedMessage) return "Please enter your message."
    if (trimmedMessage.length < 10) return "Message must be at least 10 characters."

    return ""
  }

  const handleChange = (field: keyof typeof formData, value: string) => {
    let cleanValue = value
    if (field === "phone") {
      // Allow only digits and dashes for formatted display
      cleanValue = value.replace(/[^\d-]/g, "").slice(0, 20)
    }
    const updated = { ...formData, [field]: cleanValue }
    setFormData(updated)
    if (formError) {
      setFormError(getValidationError(updated))
    }
  }

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

    const error = getValidationError()
    if (error) {
      setFormError(error)
      toast.error(error)
      return
    }

    setFormError("")
    setIsSubmitting(true)
    try {
      const cleanDigits = formData.phone.trim().replace(/\D/g, "")
      const submitPhone = cleanDigits
        ? `${selectedCountry?.dialCode || "+91"} ${cleanDigits}`
        : ""

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: submitPhone,
          message: formData.message.trim(),
        }),
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(data.error || "Failed to send your message. Please try again later.")
      }

      toast.success("Thank you! Your message has been sent to Agape Pentecostal Church.")
      setFormData({ name: "", email: "", phone: "", message: "" })
      setFormError("")
    } catch (error: any) {
      console.error("Error submitting contact form:", error)
      toast.error(error.message || "Failed to send message. Please contact us directly by phone or email.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const currentMap = mapLocations[activeMapTab]

  return (
    <section ref={sectionRef} id="contact" className="py-10 sm:py-14 lg:py-16 relative overflow-hidden bg-background">
      {/* Background Image Overlay (Full Width) */}
      <div className="absolute inset-x-0 top-0 w-full pointer-events-none select-none z-0 overflow-hidden">
        <img
          src={getConnectedBg}
          alt=""
          className="w-full h-auto min-w-full object-cover opacity-40 dark:opacity-15 select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/90 pointer-events-none" />
      </div>

      {/* Background Orbs & Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
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
            Reach out for prayer requests, pastoral guidance, or to visit our services.
          </p>

          <div className="reveal opacity-0 animation-delay-300 w-16 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-6" />

          {/* Quick Feature Badges */}
          <div className="reveal opacity-0 animation-delay-300 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mt-5 text-[11px] sm:text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-card/80 backdrop-blur-md border border-border/40 shadow-sm">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
              <span className="font-medium text-foreground">Quick Response</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-card/80 backdrop-blur-md border border-border/40 shadow-sm">
              <HeartHandshake className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
              <span className="font-medium text-foreground">Personal Prayer Care</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-card/80 backdrop-blur-md border border-border/40 shadow-sm">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
              <span className="font-medium text-foreground">2 Sanctuary Locations</span>
            </div>
          </div>
        </div>

        {/* 3-Column Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {/* Column 1: Contact Info Cards */}
          <div className="space-y-3.5 sm:space-y-4">

            {contactCards.map((item, idx) => (
              <a
                key={item.title}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`reveal opacity-0 ${idx === 0 ? "" : idx === 1 ? "animation-delay-100" : idx === 2 ? "animation-delay-200" : "animation-delay-300"
                  } group block p-4 sm:p-5 bg-card/80 backdrop-blur-md rounded-2xl border border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden`}
              >
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="p-2.5 sm:p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 group-hover:scale-105 transition-all shrink-0">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <h4 className="font-serif text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">{item.description}</p>
                    <p className="text-xs sm:text-sm text-foreground font-medium break-all">{item.value}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Column 2: Send a Message Form */}
          <div className="reveal opacity-0 animation-delay-200">
            <div className="bg-card/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="mb-4 sm:mb-6">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground mb-1 leading-snug">Send Us a Message</h3>
                <p className="text-xs text-muted-foreground">We welcome your prayer requests and inquiries</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4" noValidate>
                {/* Name Field */}
                <div className="relative">
                  <User className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  <Input
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="pl-9 sm:pl-10 h-10 sm:h-11 bg-white dark:bg-card rounded-xl border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-xs sm:text-sm"
                  />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <Mail className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="pl-9 sm:pl-10 h-10 sm:h-11 bg-white dark:bg-card rounded-xl border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-xs sm:text-sm"
                  />
                </div>

                {/* Phone Field with Searchable Country Code */}
                <PhoneInputField
                  value={formData.phone}
                  onChange={(value, countryData) => {
                    setSelectedCountry(countryData)
                    handleChange("phone", value)
                  }}
                  disabled={isSubmitting}
                  error={Boolean(formError && formError.toLowerCase().includes("phone"))}
                  placeholder="Phone Number"
                />

                {/* Message Field */}
                <div className="space-y-1">
                  <div className="relative">
                    <Textarea
                      placeholder="Your prayer request or message... *"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      maxLength={2000}
                      className="min-h-[120px] sm:min-h-[130px] p-3 sm:p-3.5 bg-white dark:bg-card rounded-xl resize-none border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-xs sm:text-sm"
                    />
                  </div>
                  <div className="flex items-center justify-between px-1 text-[10px] sm:text-[11px] text-muted-foreground">
                    <span>Min. 10 characters</span>
                    <span className="font-mono">{formData.message.length}/2000</span>
                  </div>
                </div>

                {/* Single Validation Error Message */}
                {formError && (
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-destructive/10 border border-destructive/25 text-destructive text-xs font-medium animate-in fade-in slide-in-from-top-1">
                    <AlertCircle className="w-4 h-4 shrink-0 text-destructive" />
                    <span>{formError}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-2xl sm:rounded-full bg-gradient-to-r from-[#6b0000] via-[#8B0000] to-[#a80e22] text-white hover:opacity-95 py-3 sm:py-3.5 font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all hover:scale-[1.01] border border-white/10"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                  ) : (
                    <Send className="w-4 h-4 text-white" />
                  )}
                  <span className="text-white font-bold">{isSubmitting ? "Sending..." : "Send Message"}</span>
                </Button>
              </form>
            </div>
          </div>

          {/* Column 3: Interactive Google Map with Tab Toggle */}
          <div className="reveal opacity-0 animation-delay-300 md:col-span-2 lg:col-span-1">
            <div className="bg-card/90 backdrop-blur-md rounded-2xl sm:rounded-3xl overflow-hidden border border-border/50 shadow-xl h-full flex flex-col justify-between">
              {/* Map Header with Sanctuary Location Tabs */}
              <div className="p-4 sm:p-5 border-b border-border/30">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-foreground">Sanctuary Locations</h3>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border border-primary/20 text-[10px]">
                    Interactive Map
                  </Badge>
                </div>

                {/* Tab Switcher Pills */}
                <div className="grid grid-cols-2 gap-1.5 p-1 bg-background/60 rounded-xl border border-border/40">
                  <button
                    type="button"
                    onClick={() => setActiveMapTab("bhavanipuram")}
                    className={`py-1.5 px-3 rounded-lg text-xs font-semibold transition-all duration-300 ${activeMapTab === "bhavanipuram"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    Bhavanipuram
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveMapTab("gollapudi")}
                    className={`py-1.5 px-3 rounded-lg text-xs font-semibold transition-all duration-300 ${activeMapTab === "gollapudi"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    Gollapudi
                  </button>
                </div>
              </div>

              {/* Map Embed Container */}
              <div className="relative flex-1 min-h-[240px] sm:min-h-[260px] bg-muted/20">
                <iframe
                  key={activeMapTab}
                  src={currentMap.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title={`Map showing ${currentMap.title}`}
                />
              </div>

              {/* Map Bottom Bar */}
              <div className="p-3.5 sm:p-4 bg-card border-t border-border/30">
                <p className="text-xs font-medium text-foreground mb-2 leading-tight break-words">{currentMap.subtitle}</p>
                <a
                  href={currentMap.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-3 py-2.5 rounded-2xl sm:rounded-full bg-gradient-to-r from-[#6b0000] via-[#8B0000] to-[#a80e22] text-white text-xs font-bold hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-md text-center leading-tight border border-white/10"
                >
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0" />
                  <span className="text-white font-bold">Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}