import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

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
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
      </div>
      
      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/15"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 w-full pt-32 sm:pt-48 md:pt-64 lg:pt-80">
        <div className="flex items-center justify-center min-h-screen py-8 sm:py-12">
          <motion.div 
            className="w-full text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main Heading */}
            <motion.h1 
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-2 sm:mb-3 md:mb-4 leading-normal tracking-tight overflow-visible px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs sm:text-sm uppercase tracking-[0.4em] font-thin"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Sparkles className="w-4 h-4" />
              Welcome to Agape
            </motion.div>
              <motion.span 
                className="block bg-gradient-to-r from-primary-400 via-white to-secondary-400 bg-clip-text text-transparent drop-shadow-2xl relative z-50 overflow-visible"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ lineHeight: '1.25' }}
              >
                Agape Pentecostal Church
              </motion.span>
            </motion.h1>

            {/* Mission Statement with modern glassmorphism */}
            <motion.div 
              className="max-w-3xl mx-auto mt-4 sm:mt-6 md:mt-8 px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 shadow-2xl">
                <p className="text-xs xs:text-sm sm:text-base md:text-lg text-white/95 italic leading-relaxed font-light">
                  "Experience Powerful Messages and Glorious Songs. Join our church where faith transforms lives through God's unconditional love and divine purpose."
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;