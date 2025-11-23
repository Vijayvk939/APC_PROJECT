// Import video
import bgVideo from '/images/APC-BG.mp4';

const Hero = () => {
  return (
    <section id="home" className="relative h-[100vh] flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
      </div>
      
      {/* Black overlay layer */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Light gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-secondary-500/20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full pt-64 md:pt-80">
        <div className="flex items-center justify-center min-h-screen py-12">
          <div className="w-full text-center">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-relaxed">
              Welcome to
              <span className="block mt-2 bg-gradient-to-r from-primary-300 via-white to-secondary-300 bg-clip-text text-transparent pb-2" style={{ lineHeight: '1.2' }}>
                Agape Pentecostal Church
              </span>
            </h1>

            {/* Mission Statement */}
            <div className="max-w-3xl mx-auto mt-4 md:mt-6">
              <p className="text-sm sm:text-base md:text-lg text-white/90 italic leading-relaxed">
                "Experience Powerful Messages and Glorious Songs. Join our church where faith transforms lives through God's unconditional love and divine purpose."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;