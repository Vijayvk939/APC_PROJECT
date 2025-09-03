import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('leadership')}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              Leadership
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className="text-gray-600 font-medium transition-colors duration-200"
            >
              Events
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 text-white px-6 py-3 rounded-xl hover:from-primary-700 hover:via-secondary-700 hover:to-accent-700 transition-colors duration-300 shadow-lg font-semibold"
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
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors text-left px-4 py-2 hover:bg-primary-50 rounded-lg"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors text-left px-4 py-2 hover:bg-primary-50 rounded-lg"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors text-left px-4 py-2 hover:bg-primary-50 rounded-lg"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('leadership')}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors text-left px-4 py-2 hover:bg-primary-50 rounded-lg"
              >
                Leadership
              </button>
              <button 
                onClick={() => scrollToSection('events')}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors text-left px-4 py-2 hover:bg-primary-50 rounded-lg"
              >
                Events
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 text-white px-6 py-3 rounded-xl hover:from-primary-700 hover:via-secondary-700 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl text-left w-fit font-semibold"
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