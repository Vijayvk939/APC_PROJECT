import * as React from "react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { SpecialPrayerCardData } from "@/types/events";

// Define the props for the SpecialPrayerCard component
interface SpecialPrayerCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  href?: string;
  themeColor: string; // e.g., "150 50% 25%" for a deep green
  cardIndex?: number; // For displaying card number in carousel
  isActive?: boolean; // Whether this card is the active one in carousel
}

const SpecialPrayerCard = React.forwardRef<HTMLDivElement, SpecialPrayerCardProps>(
  ({ className, imageUrl, title, date, time, description, href = "#", themeColor, isActive, ...props }, ref) => {
    return (
      // The 'group' class enables hover effects on child elements
      <div
        ref={ref}
        style={{
          "--theme-color": themeColor,
        } as React.CSSProperties}
        className={cn("group w-full h-full", className)}
        {...props}
      >
        <a
          href={href}
          className="relative block w-full h-full rounded-[24px] sm:rounded-[32px] overflow-hidden 
                     transition-all duration-500 ease-in-out border border-white/10"
          aria-label={`Explore details for ${title}`}
          style={{
             boxShadow: isActive ? `0 20px 50px -10px rgba(0,0,0,0.8), 0 0 30px -5px hsl(${themeColor} / 0.4)` : 'none',
             transition: 'all 0.5s ease-in-out'
          }}
        >
          {/* Background Image with Parallax Zoom */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat
                       transition-all duration-500 ease-in-out group-hover:scale-[1.04]"
            style={{ 
              backgroundImage: `url(${imageUrl})`,
              transformOrigin: 'center center',
              filter: isActive ? 'grayscale(0%)' : 'grayscale(85%)',
            }}
          />

          {/* Gradient Overlay - Smooth dark fade for crisp text readability */}
          <div className={cn(
            "absolute inset-0 transition-opacity duration-500",
            isActive 
              ? "bg-gradient-to-t from-black/90 via-black/45 to-transparent" 
              : "bg-black/50"
          )} />
          
          {/* Content - Aligned cleanly to bottom left */}
          {isActive && (
            <div 
              className="absolute inset-0 flex flex-col items-start justify-end text-left px-5 sm:px-7 pb-6 sm:pb-8 text-white z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 leading-snug drop-shadow-md">
                {title}
              </h3>
              
              {/* Date and Time Details */}
              <div className="flex flex-col items-start gap-1.5 text-xs sm:text-sm text-white/90 font-sans mb-2">
                <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/80 shrink-0" />
                  <span className="font-medium">{date}</span>
                </div>
                <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/80 shrink-0" />
                  <span className="font-medium">{time}</span>
                </div>
              </div>
            
              <p className="text-xs sm:text-sm text-white/80 max-w-md leading-relaxed font-sans line-clamp-2">
                {description}
              </p>
            </div>
          )}
        </a>
      </div>
    );
  }
);

SpecialPrayerCard.displayName = "SpecialPrayerCard";

// Carousel Props
interface SpecialPrayerCardCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  cards: SpecialPrayerCardData[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showIndicators?: boolean;
  showNavigation?: boolean;
  cardHeight?: string;
}

// Carousel Component - 3D Style
const SpecialPrayerCardCarousel = React.forwardRef<HTMLDivElement, SpecialPrayerCardCarouselProps>(
  ({ 
    className, 
    cards, 
    autoPlay = true, 
    autoPlayInterval = 5000,
    showNavigation = true,
    cardHeight = "h-[26rem] sm:h-[30rem] lg:h-[32rem]",
    ...props 
  }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-play functionality
    useEffect(() => {
      if (!autoPlay || isPaused || cards.length <= 1) return;

      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % cards.length);
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }, [autoPlay, autoPlayInterval, isPaused, cards.length]);

    const goToPrevious = () => {
      setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
    };

    const goToNext = () => {
      setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    };

    if (!cards || cards.length === 0) {
      return null;
    }


    const getCardStyle = (index: number): React.CSSProperties => {
      // Calculate circular difference for proper looping
      let diff = index - currentIndex;
      
      // Handle wrapping: if diff is too large, wrap around
      if (diff > cards.length / 2) {
        diff = diff - cards.length;
      } else if (diff < -cards.length / 2) {
        diff = diff + cards.length;
      }
      
      const isActive = diff === 0;
      const position = diff;

      // Hide cards that are too far away
      if (Math.abs(diff) > 2) {
        return { display: 'none' };
      }

      const offset = typeof window !== 'undefined' && window.innerWidth < 640 ? 140 : 260;

      return {
        transform: `translateX(${position * offset}px) translateZ(${isActive ? 0 : -200}px) rotateY(${position * -4}deg) scale(${isActive ? 1.05 : 0.85})`,
        opacity: isActive ? 1 : 0.45,
        zIndex: isActive ? 20 : 10 - Math.abs(diff),
        filter: isActive ? 'brightness(1)' : 'brightness(0.4) grayscale(85%)',
        pointerEvents: isActive ? 'auto' : 'none',
      };
    };

    return (
      <div
        ref={ref}
        className={cn("relative w-full", className)}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        {...props}
      >
        {/* 3D Carousel Container */}
        <div 
          className={cn("relative flex items-center justify-center overflow-visible my-2", cardHeight)}
          style={{
            perspective: '2000px',
            perspectiveOrigin: 'center center',
          }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {cards.map((card, index) => (
              <div
                key={index}
                className="absolute transition-all duration-700 ease-out rounded-[24px] sm:rounded-[32px] overflow-hidden"
                style={{
                  ...getCardStyle(index),
                  width: '85vw',
                  maxWidth: '420px',
                  height: '100%',
                }}
              >
                <SpecialPrayerCard
                  {...card}
                  cardIndex={index}
                  isActive={index === currentIndex}
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons - Circular translucent dark style */}
        {showNavigation && cards.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 sm:left-6 lg:left-10 top-1/2 -translate-y-1/2 z-30 
                         bg-black/40 hover:bg-black/70 border border-white/10 
                         text-white p-2.5 sm:p-3.5 rounded-full shadow-2xl backdrop-blur-md
                         transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Previous card"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-30 
                         bg-black/40 hover:bg-black/70 border border-white/10 
                         text-white p-2.5 sm:p-3.5 rounded-full shadow-2xl backdrop-blur-md
                         transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Next card"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </>
        )}

      </div>
    );
  }
);

SpecialPrayerCardCarousel.displayName = "SpecialPrayerCardCarousel";

export { SpecialPrayerCard, SpecialPrayerCardCarousel };
export type { SpecialPrayerCardData };

