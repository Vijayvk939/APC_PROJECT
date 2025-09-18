import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image - positioned to start below header */}
      <div 
        className="absolute top-20 xs:top-22 sm:top-24 md:top-28 lg:top-32 left-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/Prasad_DAS_Banner.jpg)',
          backgroundPosition: 'right top',
        }}
      ></div>
      
      {/* Responsive overlay for content readability */}
      <div className="absolute top-20 xs:top-22 sm:top-24 md:top-28 lg:top-32 left-0 right-0 bottom-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20 sm:from-black/80 sm:via-black/40 sm:to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-8 w-full pt-20 xs:pt-22 sm:pt-24 md:pt-28 lg:pt-32">
        <div className="flex items-center min-h-[calc(100vh-5rem)] xs:min-h-[calc(100vh-5.5rem)] sm:min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-7rem)] lg:min-h-[calc(100vh-8rem)] py-3 xs:py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16">
          {/* Content container with responsive width */}
          <div className="w-full lg:w-1/2 text-left">

          {/* Main Heading with Enhanced Responsive Typography */}
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 xs:mb-3 sm:mb-4 md:mb-6 leading-tight drop-shadow-2xl">
            Welcome to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-secondary-300 to-accent-300 drop-shadow-lg">
              AGAPE
            </span>
            <span className="block text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-white/95 drop-shadow-xl">
              Pentecostal Church
            </span>
          </h1>

          {/* Subtitle with Enhanced Responsive Readability */}
          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-lg text-white/95 mb-3 xs:mb-4 sm:mb-6 max-w-3xl leading-relaxed drop-shadow-lg font-medium">
            A place where love meets purpose, and faith transforms lives. 
            Join our community of believers as we grow together in God's love.
          </p>

          {/* Mission Statement with Responsive Glassmorphism Effect */}
          <div className="relative bg-white/10 backdrop-blur-xl rounded-lg xs:rounded-lg sm:rounded-xl md:rounded-2xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 border border-white/20 shadow-2xl group-hover:bg-white/15 transition-all duration-500 group-hover:scale-105 transform max-w-4xl mx-auto mb-3 xs:mb-4 sm:mb-6 md:mb-8">
              {/* Decorative Elements */}
              <div className="absolute top-1 left-1 xs:top-2 xs:left-2 sm:top-3 sm:left-3 w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 border-l-2 border-t-2 border-cyan-300/50 rounded-tl-lg"></div>
              <div className="absolute bottom-1 right-1 xs:bottom-2 xs:right-2 sm:bottom-3 sm:right-3 w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 border-r-2 border-b-2 border-pink-300/50 rounded-br-lg"></div>
              
              <p className="text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg text-white/95 italic leading-relaxed font-light relative z-10 text-center">
                <span className="text-cyan-300 font-medium">"Experience Powerful Messages</span> and 
                <span className="text-pink-300 font-medium"> Glorious Songs</span>. Join our community where 
                <span className="text-yellow-300 font-medium"> faith transforms lives</span> through God's 
                <span className="text-emerald-300 font-medium"> unconditional love</span> and divine purpose."
              </p>
            </div>

          {/* Call to Action Buttons with Enhanced Responsive Styling */}
          <div className="flex flex-col xs:flex-col sm:flex-row gap-2 xs:gap-2 sm:gap-3 justify-start items-stretch sm:items-center mt-3 xs:mt-4 sm:mt-6 md:mt-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="group bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-2 xs:px-3 sm:px-4 md:px-6 py-1.5 xs:py-2 sm:py-2.5 md:py-3 rounded-lg xs:rounded-lg sm:rounded-xl font-semibold text-xs xs:text-sm sm:text-sm md:text-base hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-primary-500/25 hover:scale-105 transform w-full sm:w-auto"
            >
              <span className="truncate">Learn More About Us</span>
              <ArrowRight className="w-3 h-3 xs:w-3 xs:h-3 sm:w-4 sm:h-4 ml-1 xs:ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="group border-2 border-white/60 text-white px-2 xs:px-3 sm:px-4 md:px-6 py-1.5 xs:py-2 sm:py-2.5 md:py-3 rounded-lg xs:rounded-lg sm:rounded-xl font-semibold text-xs xs:text-sm sm:text-sm md:text-base hover:bg-white/20 hover:border-white transition-all duration-300 flex items-center justify-center backdrop-blur-sm hover:scale-105 transform shadow-xl w-full sm:w-auto"
            >
              <span className="truncate">Join Our Service</span>
              <ArrowRight className="w-3 h-3 xs:w-3 xs:h-3 sm:w-4 sm:h-4 ml-1 xs:ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
            </button>
          </div>

          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;