import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Calendar, Clock, MapPin, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { SpecialPrayerCardData } from "@/types/events";
import "./SpecialPrayerSlider.css";

// Individual SpecialPrayerCard component preserved for standalone use
interface SpecialPrayerCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  href?: string;
  themeColor?: string;
  cardIndex?: number;
  isActive?: boolean;
}

const SpecialPrayerCard = React.forwardRef<HTMLDivElement, SpecialPrayerCardProps>(
  ({ className, imageUrl, title, date, time, description, href = "#contact", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("group relative w-full h-full rounded-[20px] overflow-hidden border border-white/10 shadow-2xl", className)}
        {...props}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-start justify-end p-6 text-white z-10">
          <h3 className="font-serif text-2xl font-bold mb-2 text-white drop-shadow-md">
            {title}
          </h3>
          <div className="flex flex-col gap-1 text-xs text-white/90 mb-2">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{time}</span>
            </div>
          </div>
          <p className="text-xs text-white/80 line-clamp-2 leading-relaxed mb-3">
            {description}
          </p>
          <a
            href={href}
            className="inline-block px-4 py-1.5 text-xs font-semibold bg-white/90 text-black rounded-lg hover:bg-white transition-colors"
          >
            See More
          </a>
        </div>
      </div>
    );
  }
);

SpecialPrayerCard.displayName = "SpecialPrayerCard";

// Default fallback items from template
const defaultSampleCards: SpecialPrayerCardData[] = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1074&auto=format&fit=crop",
    title: "Special Prayer Nights",
    date: "Every Friday",
    time: "7:00 PM",
    location: "Main Sanctuary",
    description: "Experience deep worship, united intercession, and personal breakthrough.",
    category: "Prayer Night",
    themeColor: "222 47% 11%",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?q=80&w=1173&auto=format&fit=crop",
    title: "21 Days Fasting Prayer",
    date: "July 14 - August 3",
    time: "Daily Prayer Times",
    location: "Main Sanctuary",
    description: "21-day fasting prayer journey for spiritual breakthrough and renewal.",
    category: "Fasting Prayer",
    themeColor: "222 47% 11%",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=1170&auto=format&fit=crop",
    title: "Family Growth & Safety",
    date: "September 16 - October 26",
    time: "Daily Prayer Times",
    location: "Main Sanctuary",
    description: "Prayer focus on family growth, safety, and spiritual covering.",
    category: "Family Prayer",
    themeColor: "222 47% 11%",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=2070&auto=format&fit=crop",
    title: "New Year Gospel Meeting",
    date: "January 1st",
    time: "Special Service",
    location: "Main Sanctuary",
    description: "Start the new year with a gospel meeting of renewal and commitment.",
    category: "Gospel Meeting",
    themeColor: "222 47% 11%",
  },
];

// Carousel Component Props
interface SpecialPrayerCardCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  cards?: SpecialPrayerCardData[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showIndicators?: boolean;
  showNavigation?: boolean;
  cardHeight?: string;
  headerTitle?: string;
  headerSubtitle?: string;
}

// Special Prayer Events Expanding Card Slider Component
const SpecialPrayerCardCarousel = React.forwardRef<HTMLDivElement, SpecialPrayerCardCarouselProps>(
  ({
    className,
    cards = [],
    autoPlay = true,
    autoPlayInterval = 5000,
    showNavigation = true,
    headerTitle,
    headerSubtitle,
    ...props
  }, ref) => {
    const initialList = cards.length > 0 ? cards : defaultSampleCards;
    const [items, setItems] = useState<SpecialPrayerCardData[]>(initialList);
    const [isPaused, setIsPaused] = useState(false);
    const touchStartX = useRef<number | null>(null);
    const isAnimating = useRef(false);

    // Keep items in sync if cards prop changes
    useEffect(() => {
      if (cards && cards.length > 0) {
        setItems(cards);
      }
    }, [cards]);

    // Slide forward: First element moves to the end of the array
    const handleNext = () => {
      if (isAnimating.current) return;
      isAnimating.current = true;
      setTimeout(() => {
        isAnimating.current = false;
      }, 550);

      setItems((prev) => {
        if (prev.length <= 1) return prev;
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    };

    // Slide backward: Last element moves to the beginning of the array
    const handlePrev = () => {
      if (isAnimating.current) return;
      isAnimating.current = true;
      setTimeout(() => {
        isAnimating.current = false;
      }, 550);

      setItems((prev) => {
        if (prev.length <= 1) return prev;
        const last = prev[prev.length - 1];
        const rest = prev.slice(0, prev.length - 1);
        return [last, ...rest];
      });
    };

    // Clicking a preview card advances it into active view
    const handleCardClick = (clickedIndex: number) => {
      if (clickedIndex < 2 || isAnimating.current) return; // Index 0 and 1 are background/active
      isAnimating.current = true;
      setTimeout(() => {
        isAnimating.current = false;
      }, 550);

      const steps = clickedIndex - 1;
      setItems((prev) => {
        if (prev.length <= 1) return prev;
        const toMove = prev.slice(0, steps);
        const remaining = prev.slice(steps);
        return [...remaining, ...toMove];
      });
    };

    // Auto-play timer with pause on hover
    useEffect(() => {
      if (!autoPlay || isPaused || items.length <= 1) return;

      const timer = setInterval(() => {
        handleNext();
      }, autoPlayInterval);

      return () => clearInterval(timer);
    }, [autoPlay, autoPlayInterval, isPaused, items.length]);

    // Mobile touch swipe gestures
    const handleTouchStart = (e: React.TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
      if (touchStartX.current === null) return;
      const diff = touchStartX.current - e.changedTouches[0].clientX;
      if (diff > 50) {
        handleNext();
      } else if (diff < -50) {
        handlePrev();
      }
      touchStartX.current = null;
    };

    // Keyboard accessibility
    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    if (!items || items.length === 0) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={cn("special-prayer-slider-wrapper", className)}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        aria-label="Special Prayer Events Slider"
        {...props}
      >
        <div className="slider-container">
          {/* Section Header */}
          {headerTitle && (
            <div className="section-header">
              <h2 className="section-title">{headerTitle}</h2>
              <div className="section-divider" />
              {headerSubtitle && <p className="section-subtitle">{headerSubtitle}</p>}
            </div>
          )}

          {/* Slides Track */}
          <div className="slide">
            {items.map((item, index) => (
              <div
                key={item.title}
                className="item"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
                onClick={() => handleCardClick(index)}
                role={index >= 2 ? "button" : undefined}
                aria-label={index >= 2 ? `Go to ${item.title}` : undefined}
                tabIndex={index >= 2 ? 0 : -1}
              >
                {/* Preview tag shown only on cards deck */}
                <div className="preview-tag">{item.title}</div>

                {/* Content block shown on active slide (nth-child(2)) */}
                <div className="content">
                  {item.category && (
                    <div className="category-pill">
                      <span className="text-[#B22222] font-sans font-bold">†</span>
                      <span>{item.category}</span>
                    </div>
                  )}
                  <div className="name">{item.title}</div>
                  <div className="accent-bar" />
                  {(item.date || item.time || item.location) && (
                    <div className="meta">
                      {item.date && (
                        <div className="meta-item">
                          <Calendar className="w-3.5 h-3.5 text-[#B22222] shrink-0" />
                          <span>{item.date}</span>
                        </div>
                      )}
                      {item.time && (
                        <div className="meta-item">
                          <Clock className="w-3.5 h-3.5 text-[#B22222] shrink-0" />
                          <span>{item.time}</span>
                        </div>
                      )}
                      {item.location && (
                        <div className="meta-item">
                          <MapPin className="w-3.5 h-3.5 text-[#B22222] shrink-0" />
                          <span>{item.location}</span>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="des">{item.description}</div>
                  <a
                    className="seeMore group"
                    href={item.href || "#contact"}
                    onClick={(e) => {
                      if (!item.href || item.href === "#") {
                        e.preventDefault();
                        const contactElem = document.getElementById("contact");
                        if (contactElem) {
                          contactElem.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }}
                  >
                    <button type="button">
                      <span>See More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {showNavigation && items.length > 1 && (
            <div className="button">
              <button
                type="button"
                className="prev"
                onClick={handlePrev}
                aria-label="Previous event"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                className="next"
                onClick={handleNext}
                aria-label="Next event"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
);

SpecialPrayerCardCarousel.displayName = "SpecialPrayerCardCarousel";

export { SpecialPrayerCard, SpecialPrayerCardCarousel };
export type { SpecialPrayerCardData };
