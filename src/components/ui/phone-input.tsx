import React, { useState, useRef, useEffect } from "react"
import { Search, ChevronDown, ChevronUp } from "lucide-react"
import { countries, Country } from "@/data/countries"

export interface CustomPhoneInputProps {
  value: string
  onChange: (value: string, country: Country, fullNumber: string) => void
  disabled?: boolean
  error?: boolean
  placeholder?: string
  id?: string
}

// Format phone number dynamically with dashes as the user types
export function formatPhoneNumber(rawDigits: string, maxDigits: number = 10): string {
  if (!rawDigits) return ""
  const digits = rawDigits.replace(/\D/g, "")
  if (!digits) return ""

  // 8-digit countries (e.g. 1234-5678)
  if (maxDigits === 8) {
    if (digits.length <= 4) return digits
    return `${digits.slice(0, 4)}-${digits.slice(4, 8)}`
  }

  // 9-digit countries (e.g. 123-456-789)
  if (maxDigits === 9) {
    if (digits.length <= 3) return digits
    if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6, 9)}`
  }

  // 10-digit countries (e.g. 444-444-4444 or 939-023-2344)
  if (maxDigits === 10) {
    if (digits.length <= 3) return digits
    if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6, 10)}`
  }

  // 11-digit countries (e.g. 0712-345-6789)
  if (maxDigits === 11) {
    if (digits.length <= 4) return digits
    if (digits.length <= 7) return `${digits.slice(0, 4)}-${digits.slice(4)}`
    return `${digits.slice(0, 4)}-${digits.slice(4, 7)}-${digits.slice(7, 11)}`
  }

  // 12+ digits fallback
  if (digits.length <= 4) return digits
  if (digits.length <= 8) return `${digits.slice(0, 4)}-${digits.slice(4)}`
  if (digits.length <= 12) return `${digits.slice(0, 4)}-${digits.slice(4, 8)}-${digits.slice(8, 12)}`
  return `${digits.slice(0, 4)}-${digits.slice(4, 8)}-${digits.slice(8, 12)}-${digits.slice(12, 16)}`
}

export function PhoneInputField({
  value,
  onChange,
  disabled = false,
  error = false,
  placeholder = "Phone Number",
  id = "contact-phone-input",
}: CustomPhoneInputProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCountry, setSelectedCountry] = useState<Country>(() => {
    return countries.find((c) => c.code === "IN") || countries[0]
  })

  const containerRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const phoneInputRef = useRef<HTMLInputElement>(null)

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus()
      }, 50)
    } else {
      setSearchQuery("")
    }
  }, [isOpen])

  // Filter countries by search query
  const filteredCountries = countries.filter((c) => {
    const q = searchQuery.toLowerCase().trim()
    if (!q) return true
    return (
      c.name.toLowerCase().includes(q) ||
      c.dialCode.includes(q) ||
      c.code.toLowerCase().includes(q)
    )
  })

  const handleSelectCountry = (country: Country) => {
    setSelectedCountry(country)
    setIsOpen(false)
    let clean = value.replace(/\D/g, "")
    const dialDigits = country.dialCode.replace(/\D/g, "")
    if (clean.startsWith(dialDigits) && clean.length > country.maxDigits) {
      clean = clean.slice(dialDigits.length)
    }
    clean = clean.slice(0, country.maxDigits)
    const formatted = formatPhoneNumber(clean, country.maxDigits)
    const full = formatted ? `${country.dialCode} ${formatted}` : ""
    onChange(formatted, country, full)
    phoneInputRef.current?.focus()
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let clean = e.target.value.replace(/\D/g, "")
    const dialDigits = selectedCountry.dialCode.replace(/\D/g, "")
    if (clean.startsWith(dialDigits) && clean.length > selectedCountry.maxDigits) {
      clean = clean.slice(dialDigits.length)
    }
    clean = clean.slice(0, selectedCountry.maxDigits)
    const formatted = formatPhoneNumber(clean, selectedCountry.maxDigits)
    const full = formatted ? `${selectedCountry.dialCode} ${formatted}` : ""
    onChange(formatted, selectedCountry, full)
  }

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Unified Input Box matching Name and Email exactly */}
      <div
        className={`flex items-center w-full h-10 sm:h-11 bg-white dark:bg-card rounded-xl border transition-all ${
          error
            ? "border-destructive focus-within:ring-2 focus-within:ring-destructive/20"
            : isOpen
            ? "border-primary ring-2 ring-primary/20"
            : "border-border/50 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20"
        } ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
      >
        {/* Country Selector Button */}
        <button
          type="button"
          disabled={disabled}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center gap-1.5 pl-3 pr-2 h-full hover:bg-black/5 dark:hover:bg-white/5 rounded-l-xl transition-colors shrink-0 outline-none cursor-pointer"
          title={`${selectedCountry.name} (${selectedCountry.dialCode})`}
        >
          {/* Flag Image with Emoji Fallback */}
          <img
            src={`https://flagcdn.com/w40/${selectedCountry.code.toLowerCase()}.png`}
            alt={selectedCountry.name}
            width="20"
            height="15"
            className="w-5 h-3.5 object-cover rounded-[2px] shadow-xs shrink-0"
            onError={(e) => {
              // Hide broken image and show emoji
              ;(e.target as HTMLImageElement).style.display = "none"
              const span = (e.target as HTMLElement).nextElementSibling as HTMLElement
              if (span) span.style.display = "inline"
            }}
          />
          <span className="text-sm hidden" style={{ display: "none" }}>
            {selectedCountry.flag}
          </span>

          {/* Caret Arrow */}
          {isOpen ? (
            <ChevronUp className="w-3.5 h-3.5 text-foreground/70 shrink-0" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
          )}

          {/* Vertical Divider */}
          <div className="h-5 w-[1px] bg-border/60 mx-1 shrink-0" />

          {/* Dial Code */}
          <span className="text-xs sm:text-sm font-medium text-foreground/80 font-mono select-none">
            {selectedCountry.dialCode}
          </span>
        </button>

        {/* National Phone Number Input */}
        <input
          ref={phoneInputRef}
          id={id}
          type="tel"
          inputMode="numeric"
          pattern="[0-9-]*"
          placeholder={placeholder}
          value={value}
          onChange={handlePhoneChange}
          onKeyDown={(e) => {
            // Handle backspace when cursor is directly after a dash
            if (e.key === "Backspace") {
              const input = e.currentTarget
              const { selectionStart, selectionEnd } = input
              if (selectionStart === selectionEnd && selectionStart !== null && selectionStart > 0) {
                if (input.value[selectionStart - 1] === "-") {
                  e.preventDefault()
                  const newVal =
                    input.value.slice(0, selectionStart - 2) + input.value.slice(selectionStart)
                  const clean = newVal.replace(/\D/g, "").slice(0, selectedCountry.maxDigits)
                  const formatted = formatPhoneNumber(clean, selectedCountry.maxDigits)
                  const full = formatted ? `${selectedCountry.dialCode} ${formatted}` : ""
                  onChange(formatted, selectedCountry, full)
                  return
                }
              }
            }

            if (
              !/[0-9-]/.test(e.key) &&
              !["Backspace", "Tab", "Delete", "ArrowLeft", "ArrowRight", "Enter"].includes(e.key) &&
              !e.ctrlKey &&
              !e.metaKey
            ) {
              e.preventDefault()
            }
          }}
          disabled={disabled}
          maxLength={selectedCountry.maxDigits + 4}
          className="flex-1 min-w-0 h-full bg-transparent border-none outline-none px-2 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground"
        />
      </div>

      {/* Floating Searchable Country Dropdown Popover */}
      {isOpen && (
        <div className="absolute left-0 top-full mt-1.5 w-full min-w-[280px] sm:min-w-[320px] max-w-full bg-card rounded-2xl border border-border/70 shadow-2xl z-50 overflow-hidden animate-in fade-in-50 zoom-in-95 duration-150">
          {/* Search Box Header */}
          <div className="p-2.5 border-b border-border/40 bg-card sticky top-0 z-10">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-muted-foreground absolute left-3 pointer-events-none" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for country"
                className="w-full pl-9 pr-3 py-2 bg-background/70 rounded-xl text-xs sm:text-sm text-foreground placeholder:text-muted-foreground border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
          </div>

          {/* Scrollable Country List */}
          <ul className="max-h-[240px] overflow-y-auto py-1 divide-y divide-border/20">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => {
                const isSelected = country.code === selectedCountry.code
                return (
                  <li key={country.code}>
                    <button
                      type="button"
                      onClick={() => handleSelectCountry(country)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 text-left text-xs sm:text-sm transition-colors cursor-pointer ${
                        isSelected
                          ? "bg-primary/10 text-primary font-semibold"
                          : "hover:bg-muted/60 text-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        {/* Flag Image with Emoji Fallback */}
                        <img
                          src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                          alt={country.name}
                          width="20"
                          height="15"
                          className="w-5 h-3.5 object-cover rounded-[2px] shadow-xs shrink-0"
                          onError={(e) => {
                            ;(e.target as HTMLImageElement).style.display = "none"
                            const span = (e.target as HTMLElement).nextElementSibling as HTMLElement
                            if (span) span.style.display = "inline"
                          }}
                        />
                        <span className="text-sm hidden" style={{ display: "none" }}>
                          {country.flag}
                        </span>
                        <span className="truncate">{country.name}</span>
                      </div>
                      <span className="text-muted-foreground font-mono text-xs shrink-0 ml-2">
                        ({country.dialCode})
                      </span>
                    </button>
                  </li>
                )
              })
            ) : (
              <li className="px-4 py-6 text-center text-xs text-muted-foreground">
                No country found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
