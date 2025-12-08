import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Library } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

// Import images
import logoImage from '/images/AGP.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(true);
  const [isPastHero, setIsPastHero] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();

  // Set active section based on path
  useEffect(() => {
    if (location.pathname === '/books') {
      setActiveSection('books');
      setIsPastHero(true);
    } else {
      // Reset to home or calculate based on scroll
      if (window.scrollY < 100) {
        setIsPastHero(false);
        setActiveSection('home');
      }
    }
  }, [location.pathname]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          try {
            if (window && window.scrollY !== undefined) {
              const currentScrollY = window.scrollY;

              // Detect scroll direction - hide on scroll down, show on scroll up
              if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
              } else if (currentScrollY < lastScrollY) {
                setIsVisible(true);
              }

              setLastScrollY(currentScrollY);

              // Check if past hero section (home section)
              const homeSection = document.getElementById('home');
              if (homeSection) {
                const homeHeight = homeSection.offsetHeight;
                setIsPastHero(currentScrollY > homeHeight * 0.8); // Past 80% of hero section
              } else if (location.pathname !== '/') {
                setIsPastHero(true);
              }

              // Update active section based on scroll position
              const sections = ['home', 'services', 'events', 'leadership', 'about', 'contact'];
              const scrollPosition = currentScrollY + 120; // Reduced offset for minimal padding

              for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                  setActiveSection(sections[i]);
                  break;
                }
              }
            }
          } catch (error) {
            console.error('Error handling scroll:', error);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    if (window) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    try {
      // Close menu immediately for better UX
      setIsMenuOpen(false);

      if (location.pathname !== '/') {
        navigate('/');
        // Small delay to ensure navigation completes before scrolling
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const headerHeight = window.innerWidth >= 640 ? 80 : 70;
            const elementPosition = element.offsetTop - headerHeight;
            window.scrollTo({
              top: Math.max(0, elementPosition),
              behavior: 'smooth'
            });
          }
        }, 100);
        return;
      }

      // Small delay to ensure menu closes before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element && window) {
          // Responsive header height: 56px (h-14) on mobile, 64px (h-16) on larger screens
          const headerHeight = window.innerWidth >= 640 ? 80 : 70;
          const elementPosition = element.offsetTop - headerHeight;

          window.scrollTo({
            top: Math.max(0, elementPosition),
            behavior: 'smooth'
          });
        }
      }, 100);
    } catch (error) {
      console.error('Error scrolling to section:', error);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isPastHero
        ? 'backdrop-blur-md bg-white/90'
        : 'backdrop-blur-md bg-transparent'
        } ${isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      {/* Main Navigation */}
      <div className="px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-2.5 lg:space-x-3 hover:opacity-80 transition-opacity cursor-pointer text-left flex-shrink-0 min-w-0 md:flex-none"
          >
            <img
              src={logoImage}
              alt="Agape Pentecostal Church Logo"
              className="h-9 w-9 sm:h-10 sm:w-10 md:h-8 md:w-8 lg:h-9 lg:w-9 xl:h-10 xl:w-10 flex-shrink-0"
            />
            <div className="block text-left min-w-0 flex-1 md:flex-none overflow-hidden">
              <h1 className={`text-xs xs:text-sm sm:text-sm md:text-xs lg:text-sm xl:text-base font-semibold text-left leading-tight truncate ${isPastHero ? 'text-gray-900' : 'text-white/80'
                }`}>AGAPE PENTECOSTAL CHURCH</h1>
              <p className={`text-[9px] xs:text-[10px] sm:text-xs md:text-[9px] lg:text-[10px] xl:text-xs text-left truncate ${isPastHero ? 'text-gray-700' : 'text-white/80'
                }`}>Pastor Prasad Machavarapu</p>
            </div>
          </button>

          {/* Tablet & Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-3 xl:space-x-4 ml-2 lg:ml-4">
            <button
              onClick={() => scrollToSection('services')}
              className={`font-medium text-[10px] md:text-xs lg:text-sm transition-all duration-300 whitespace-nowrap ${activeSection === 'services'
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500'
                : isPastHero
                  ? 'text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500'
                  : 'text-white/80 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500'
                }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className={`font-medium text-[10px] md:text-xs lg:text-sm transition-all duration-300 whitespace-nowrap ${activeSection === 'events'
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500'
                : isPastHero
                  ? 'text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500'
                  : 'text-white/80 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500'
                }`}
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection('leadership')}
              className={`font-medium text-[10px] md:text-xs lg:text-sm transition-all duration-300 whitespace-nowrap ${activeSection === 'leadership'
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500'
                : isPastHero
                  ? 'text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500'
                  : 'text-white/80 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500'
                }`}
            >
              Leadership
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`font-medium text-[10px] md:text-xs lg:text-sm transition-all duration-300 whitespace-nowrap ${activeSection === 'about'
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500'
                : isPastHero
                  ? 'text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500'
                  : 'text-white/80 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500'
                }`}
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-medium text-[10px] md:text-xs lg:text-sm transition-all duration-300 whitespace-nowrap ${activeSection === 'books'
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500'
                : isPastHero
                  ? 'text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500'
                  : 'text-white/80 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500'
                }`}
            >
              Contact Us
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center ml-2 lg:ml-3 xl:ml-4">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                navigate('/books');
              }}
              className={`px-2 md:px-3 lg:px-4 py-1.5 xl:py-2 rounded-lg font-semibold text-[10px] md:text-xs lg:text-sm transition-all duration-200 flex items-center shadow-sm whitespace-nowrap gap-1 ${isPastHero
                ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-700 hover:to-secondary-700'
                : 'border border-white text-white hover:bg-white/10'
                }`}
            >
              <Library className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />
              Get Books
              <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors p-2 -mr-2 touch-manipulation ${isPastHero
              ? 'text-gray-700 hover:text-blue-600'
              : 'text-white hover:text-blue-300'
              }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <Menu className="w-6 h-6 sm:w-7 sm:h-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={`md:hidden py-2 border-t pointer-events-auto overflow-hidden ${isPastHero ? 'border-gray-200 bg-white/95' : 'border-white/20'
                }`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div
                className="flex flex-col space-y-0.5 pointer-events-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.05 }}
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    scrollToSection('services');
                  }}
                  className={`text-left px-3 py-1.5 text-xs font-medium transition-all duration-300 touch-manipulation relative z-10 cursor-pointer ${activeSection === 'services'
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500'
                    : isPastHero
                      ? 'text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500'
                      : 'text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500'
                    }`}
                >
                  Services
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    scrollToSection('events');
                  }}
                  className={`text-left px-3 py-1.5 text-xs font-medium transition-all duration-300 touch-manipulation relative z-10 cursor-pointer ${activeSection === 'events'
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500'
                    : isPastHero
                      ? 'text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500'
                      : 'text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500'
                    }`}
                >
                  Events
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    scrollToSection('leadership');
                  }}
                  className={`text-left px-3 py-1.5 text-xs font-medium transition-all duration-300 touch-manipulation relative z-10 cursor-pointer ${activeSection === 'leadership'
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500'
                    : isPastHero
                      ? 'text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500'
                      : 'text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500'
                    }`}
                >
                  Leadership
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    scrollToSection('about');
                  }}
                  className={`text-left px-3 py-1.5 text-xs font-medium transition-all duration-300 touch-manipulation relative z-10 cursor-pointer ${activeSection === 'about'
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500'
                    : isPastHero
                      ? 'text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500'
                      : 'text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500'
                    }`}
                >
                  About Us
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsMenuOpen(false);
                    navigate('/books');
                  }}
                  className={`text-left px-3 py-1.5 text-xs font-medium transition-all duration-300 touch-manipulation relative z-10 cursor-pointer flex items-center gap-2 ${activeSection === 'books'
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500'
                    : isPastHero
                      ? 'text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500'
                      : 'text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500'
                    }`}
                >
                  <Library className="w-4 h-4" />
                  <span>Get Books</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className={`flex flex-col pt-2 border-t mt-1 ${isPastHero ? 'border-gray-200' : 'border-white/20'
                  }`}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      scrollToSection('contact');
                    }}
                    className={`px-3 py-1.5 rounded-md font-semibold text-xs transition-all duration-200 flex items-center justify-center shadow-sm touch-manipulation relative z-10 cursor-pointer ${isPastHero
                      ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-700 hover:to-secondary-700'
                      : 'border border-white text-white hover:bg-white/10'
                      }`}
                  >
                    Contact Us
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;