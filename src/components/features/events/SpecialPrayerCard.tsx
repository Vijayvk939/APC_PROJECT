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
          className="relative block w-full h-full rounded-3xl overflow-hidden 
                     transition-all duration-500 ease-in-out"
          aria-label={`Explore details for ${title}`}
          style={{
             boxShadow: `0 0 40px -15px hsl(${themeColor} / 0.5)`,
             transition: 'all 0.5s ease-in-out'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = `0 0 60px -15px hsl(${themeColor} / 0.6)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = `0 0 40px -15px hsl(${themeColor} / 0.5)`;
          }}
        >
          {/* Background Image with Parallax Zoom */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat
                       transition-all duration-500 ease-in-out group-hover:scale-[1.05]"
            style={{ 
              backgroundImage: `url(${imageUrl})`,
              transformOrigin: 'center center',
              filter: isActive ? 'grayscale(0%)' : 'grayscale(100%)',
            }}
          />

          {/* Gradient Overlay - Matching project pattern */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          {/* Content - Only show when card is active, aligned to bottom left */}
          {isActive && (
            <div 
              className="absolute inset-0 flex flex-col items-start justify-end text-left px-4 xs:px-5 sm:px-6 pb-4 xs:pb-5 sm:pb-6 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-white mb-0.5 xs:mb-1 leading-tight">
              {title}
            </h3>
              
              {/* Divider Line */}
              <div className="w-12 h-0.5 bg-white my-1 xs:my-1.5" />
            
            {/* Date and Time */}
              <div className="flex flex-col items-start gap-0.5 xs:gap-1 text-[10px] xs:text-xs sm:text-sm text-white/90 leading-tight">
                <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                  <Calendar className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-white/80" />
                <span>{date}</span>
              </div>
                <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                  <Clock className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-white/80" />
                <span>{time}</span>
              </div>
            </div>
            
              <p className="text-[9px] xs:text-[10px] sm:text-xs text-white/90 mt-1 xs:mt-1.5 max-w-md leading-tight">{description}</p>
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

      return {
        transform: `translateX(${position * 260}px) translateZ(${isActive ? 0 : -180}px) rotateY(${position * -6}deg) scale(${isActive ? 1.04 : 0.86})`,
        opacity: isActive ? 1 : 0.65,
        zIndex: isActive ? 20 : 10 - Math.abs(diff),
        filter: isActive ? 'brightness(1)' : 'brightness(0.65)',
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
                className="absolute transition-all duration-700 ease-out rounded-3xl overflow-hidden"
                style={{
                  ...getCardStyle(index),
                  width: '88vw',
                  maxWidth: '440px',
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

        {/* Navigation Buttons - Matching project pattern */}
        {showNavigation && cards.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 sm:left-8 lg:left-12 top-1/2 -translate-y-1/2 z-30 
                         bg-white/10 backdrop-blur-sm hover:bg-white/20 
                         text-white p-3 sm:p-4 rounded-full 
                         transition-all duration-300"
              aria-label="Previous card"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 sm:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-30 
                         bg-white/10 backdrop-blur-sm hover:bg-white/20 
                         text-white p-3 sm:p-4 rounded-full 
                         transition-all duration-300"
              aria-label="Next card"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
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

