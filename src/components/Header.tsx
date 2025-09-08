import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          
          // Update active section based on scroll position
          const sections = ['home', 'services', 'events', 'leadership', 'about', 'contact'];
          const scrollPosition = window.scrollY + 120; // Reduced offset for minimal padding
          
          for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section && section.offsetTop <= scrollPosition) {
              setActiveSection(sections[i]);
              break;
            }
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Reduced header height for minimal padding
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-colors duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-2xl border-b border-primary-200/20' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      {/* Top Bar - Hidden when scrolled */}
      {!isScrolled && (
        <div className="bg-gradient-to-r from-primary-800 via-secondary-800 to-accent-800 text-white py-3 px-4 shadow-lg transition-colors duration-300">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 hover:text-primary-200 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+91 9390232344</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-primary-200 transition-colors">
                <MapPin className="w-4 h-4" />
                <span>Vijayawada-520012, Andhra Pradesh</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 hover:text-primary-200 transition-colors">
              <Clock className="w-4 h-4" />
              <span>Sunday: Bhavanipuram 8:30-11AM, Gollapudi 6:30-8:30PM</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="relative mr-4">
              <img 
                src="/images/APCcircle.png" 
                alt="Agape Pentecostal Church Logo" 
                className="h-16 w-16 relative z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full blur-lg opacity-30"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">AGAPE... MINISTRIES</h1>
              <p className="text-sm text-gray-600">Pastor Prasad Machavarapu</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={`font-medium transition-all duration-500 ease-out relative group ${
                activeSection === 'home' 
                  ? 'text-primary-600 transform scale-105' 
                  : 'text-gray-700 hover:text-primary-600 hover:transform hover:scale-105'
              }`}
            >
              <span className={`transition-all duration-500 ease-out ${
                activeSection === 'home' 
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600' 
                  : 'text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-secondary-600'
              }`}>
                Home
              </span>
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 transition-all duration-500 ease-out ${
                activeSection === 'home' ? 'w-full' : 'w-0'
              }`}></div>
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`font-medium transition-all duration-500 ease-out relative group ${
                activeSection === 'services' 
                  ? 'text-primary-600 transform scale-105' 
                  : 'text-gray-700 hover:text-primary-600 hover:transform hover:scale-105'
              }`}
            >
              <span className={`transition-all duration-500 ease-out ${
                activeSection === 'services' 
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600' 
                  : 'text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-secondary-600'
              }`}>
                Services
              </span>
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 transition-all duration-500 ease-out ${
                activeSection === 'services' ? 'w-full' : 'w-0'
              }`}></div>
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className={`font-medium transition-all duration-500 ease-out relative group ${
                activeSection === 'events' 
                  ? 'text-primary-600 transform scale-105' 
                  : 'text-gray-700 hover:text-primary-600 hover:transform hover:scale-105'
              }`}
            >
              <span className={`transition-all duration-500 ease-out ${
                activeSection === 'events' 
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600' 
                  : 'text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-secondary-600'
              }`}>
                Events
              </span>
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 transition-all duration-500 ease-out ${
                activeSection === 'events' ? 'w-full' : 'w-0'
              }`}></div>
            </button>
            <button 
              onClick={() => scrollToSection('leadership')}
              className={`font-medium transition-all duration-500 ease-out relative group ${
                activeSection === 'leadership' 
                  ? 'text-primary-600 transform scale-105' 
                  : 'text-gray-700 hover:text-primary-600 hover:transform hover:scale-105'
              }`}
            >
              <span className={`transition-all duration-500 ease-out ${
                activeSection === 'leadership' 
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600' 
                  : 'text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-secondary-600'
              }`}>
                Leadership
              </span>
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 transition-all duration-500 ease-out ${
                activeSection === 'leadership' ? 'w-full' : 'w-0'
              }`}></div>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-all duration-500 ease-out relative group ${
                activeSection === 'about' 
                  ? 'text-primary-600 transform scale-105' 
                  : 'text-gray-700 hover:text-primary-600 hover:transform hover:scale-105'
              }`}
            >
              <span className={`transition-all duration-500 ease-out ${
                activeSection === 'about' 
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600' 
                  : 'text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-secondary-600'
              }`}>
                About
              </span>
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 transition-all duration-500 ease-out ${
                activeSection === 'about' ? 'w-full' : 'w-0'
              }`}></div>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`px-6 py-3 rounded-xl transition-colors duration-300 shadow-lg font-semibold ${
                activeSection === 'contact'
                  ? 'bg-gradient-to-r from-primary-700 via-secondary-700 to-accent-700 text-white shadow-primary-500/25'
                  : 'bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 text-white hover:from-primary-700 hover:via-secondary-700 hover:to-accent-700'
              }`}
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-primary-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-200/20 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-xl">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className={`font-medium transition-all duration-500 ease-out text-left px-4 py-2 rounded-lg relative overflow-hidden group ${
                  activeSection === 'home'
                    ? 'bg-primary-50 transform scale-105'
                    : 'hover:bg-primary-50 hover:transform hover:scale-105'
                }`}
              >
                <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary-600 to-secondary-600 transition-all duration-500 ease-out ${
                  activeSection === 'home' ? 'opacity-100' : 'opacity-0'
                }`}></div>
                <span className={`relative z-10 transition-all duration-500 ease-out ${
                  activeSection === 'home'
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600'
                    : 'text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-secondary-600'
                }`}>
                  Home
                </span>
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={`font-medium transition-all duration-500 ease-out text-left px-4 py-2 rounded-lg relative overflow-hidden group ${
                  activeSection === 'services'
                    ? 'bg-primary-50 transform scale-105'
                    : 'hover:bg-primary-50 hover:transform hover:scale-105'
                }`}
              >
                <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary-600 to-secondary-600 transition-all duration-500 ease-out ${
                  activeSection === 'services' ? 'opacity-100' : 'opacity-0'
                }`}></div>
                <span className={`relative z-10 transition-all duration-500 ease-out ${
                  activeSection === 'services'
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600'
                    : 'text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-secondary-600'
                }`}>
                  Services
                </span>
              </button>
              <button 
                onClick={() => scrollToSection('events')}
                className={`font-medium transition-all duration-500 ease-out text-left px-4 py-2 rounded-lg relative overflow-hidden group ${
                  activeSection === 'events'
                    ? 'bg-primary-50 transform scale-105'
                    : 'hover:bg-primary-50 hover:transform hover:scale-105'
                }`}
              >
                <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary-600 to-secondary-600 transition-all duration-500 ease-out ${
                  activeSection === 'events' ? 'opacity-100' : 'opacity-0'
                }`}></div>
                <span className={`relative z-10 transition-all duration-500 ease-out ${
                  activeSection === 'events'
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600'
                    : 'text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-secondary-600'
                }`}>
                  Events
                </span>
              </button>
              <button 
                onClick={() => scrollToSection('leadership')}
                className={`font-medium transition-all duration-500 ease-out text-left px-4 py-2 rounded-lg relative overflow-hidden group ${
                  activeSection === 'leadership'
                    ? 'bg-primary-50 transform scale-105'
                    : 'hover:bg-primary-50 hover:transform hover:scale-105'
                }`}
              >
                <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary-600 to-secondary-600 transition-all duration-500 ease-out ${
                  activeSection === 'leadership' ? 'opacity-100' : 'opacity-0'
                }`}></div>
                <span className={`relative z-10 transition-all duration-500 ease-out ${
                  activeSection === 'leadership'
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600'
                    : 'text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-secondary-600'
                }`}>
                  Leadership
                </span>
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`font-medium transition-all duration-500 ease-out text-left px-4 py-2 rounded-lg relative overflow-hidden group ${
                  activeSection === 'about'
                    ? 'bg-primary-50 transform scale-105'
                    : 'hover:bg-primary-50 hover:transform hover:scale-105'
                }`}
              >
                <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary-600 to-secondary-600 transition-all duration-500 ease-out ${
                  activeSection === 'about' ? 'opacity-100' : 'opacity-0'
                }`}></div>
                <span className={`relative z-10 transition-all duration-500 ease-out ${
                  activeSection === 'about'
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600'
                    : 'text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-secondary-600'
                }`}>
                  About
                </span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-left w-fit font-semibold ${
                  activeSection === 'contact'
                    ? 'bg-gradient-to-r from-primary-700 via-secondary-700 to-accent-700 text-white shadow-primary-500/25'
                    : 'bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 text-white hover:from-primary-700 hover:via-secondary-700 hover:to-accent-700'
                }`}
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;