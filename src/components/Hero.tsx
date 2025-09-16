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
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/PRASAD_BANNER.jpg)',
        }}
      ></div>
      
      {/* Left side overlay for content readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center min-h-screen">
          {/* Left side content */}
          <div className="w-full lg:w-1/2 text-left">
          {/* Logo */}
          <div className="flex justify-start mb-8">
            <div className="relative">
              <img 
                src="/images/apclogo.png"
                alt="APC Logo"
                className="w-24 h-24 md:w-32 md:h-32 drop-shadow-2xl relative z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full blur-xl opacity-50"></div>
            </div>
          </div>

          {/* Main Heading with Enhanced Typography */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Welcome to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-secondary-300 to-accent-300 drop-shadow-lg">
              AGAPE
            </span>
            <span className="block text-2xl md:text-4xl lg:text-5xl font-light text-white/95 drop-shadow-xl">
              Pentecostal Church
            </span>
          </h1>

          {/* Subtitle with Enhanced Readability */}
          <p className="text-lg md:text-xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium">
            A place where love meets purpose, and faith transforms lives. 
            Join our community of believers as we grow together in God's love.
          </p>

          {/* Mission Statement with Glassmorphism Effect */}
          <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-4 md:p-6 border border-white/20 shadow-2xl group-hover:bg-white/15 transition-all duration-500 group-hover:scale-105 transform max-w-4xl mx-auto">
              {/* Decorative Elements */}
              <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-cyan-300/50 rounded-tl-lg"></div>
              <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-pink-300/50 rounded-br-lg"></div>
              
              <p className="text-lg md:text-xl text-white/95 italic leading-relaxed font-light relative z-10 text-center">
                <span className="text-cyan-300 font-medium">"Experience Powerful Messages</span> and 
                <span className="text-pink-300 font-medium"> Glorious Songs</span>. Join our community where 
                <span className="text-yellow-300 font-medium"> faith transforms lives</span> through God's 
                <span className="text-emerald-300 font-medium"> unconditional love</span> and divine purpose."
              </p>
            </div>

          {/* Call to Action Buttons with Enhanced Styling */}
          <div className="flex flex-col sm:flex-row gap-3 justify-start items-start mt-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="group bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-xl font-semibold text-base hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 flex items-center shadow-2xl hover:shadow-primary-500/25 hover:scale-105 transform"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="group border-2 border-white/60 text-white px-6 py-3 rounded-xl font-semibold text-base hover:bg-white/20 hover:border-white transition-all duration-300 flex items-center backdrop-blur-sm hover:scale-105 transform shadow-xl"
            >
              Join Our Service
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;