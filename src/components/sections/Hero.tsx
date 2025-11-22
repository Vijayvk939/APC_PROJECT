import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Import images
import bannerImage from '/images/Prasad_DAS_Banner.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundPosition: 'right top',
        }}
        initial={{ scale: 1.15, opacity: 0, filter: "blur(10px)" }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          filter: "blur(0px)",
        }}
        transition={{ 
          duration: 1.5, 
          ease: [0.25, 0.46, 0.45, 0.94],
          opacity: { duration: 1.2 },
          filter: { duration: 1.5 }
        }}
      ></motion.div>
      
      {/* Responsive overlay for content readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20 sm:from-black/80 sm:via-black/40 sm:to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-8 w-full pt-24 sm:pt-28">
        <motion.div 
          className="flex items-center min-h-[calc(100vh-5rem)] xs:min-h-[calc(100vh-5.5rem)] sm:min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-7rem)] lg:min-h-[calc(100vh-8rem)] py-3 xs:py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content container with responsive width */}
          <div className="w-full lg:w-1/2 text-left">

          {/* Main Heading with Enhanced Responsive Typography */}
          <motion.h1 
            className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 xs:mb-3 sm:mb-4 md:mb-6 leading-tight drop-shadow-2xl"
            variants={itemVariants}
          >
            Welcome to
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-secondary-300 to-accent-300 drop-shadow-lg"
              initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotateX: 0,
              }}
              transition={{ 
                duration: 1.2, 
                delay: 0.4, 
                ease: [0.34, 1.56, 0.64, 1],
                type: "spring",
                stiffness: 100,
                damping: 12,
              }}
            >
              AGAPE
            </motion.span>
            <motion.span 
              className="block text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-white/95 drop-shadow-xl"
              initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
              animate={{ 
                opacity: 1, 
                x: 0,
                filter: "blur(0px)",
              }}
              transition={{ 
                duration: 1, 
                delay: 0.6, 
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 80,
                damping: 15,
              }}
            >
              Pentecostal Church
            </motion.span>
          </motion.h1>

          {/* Subtitle with Enhanced Responsive Readability */}
          <motion.p 
            className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-lg text-white/80 mb-3 xs:mb-4 sm:mb-6 max-w-3xl leading-relaxed drop-shadow-lg font-medium"
            variants={itemVariants}
          >
            A place where love meets purpose, and faith transforms lives. 
            Join our church of believers as we grow together in God's love.
          </motion.p>

          {/* Mission Statement with Responsive Glassmorphism Effect */}
          <motion.div 
            className="relative bg-white/10 backdrop-blur-xl rounded-lg xs:rounded-lg sm:rounded-xl md:rounded-2xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 border border-white/20 shadow-2xl max-w-4xl mx-auto mb-3 xs:mb-4 sm:mb-6 md:mb-8"
            variants={itemVariants}
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
            transition={{ duration: 0.3 }}
          >
              {/* Decorative Elements */}
              <motion.div 
                className="absolute top-1 left-1 xs:top-2 xs:left-2 sm:top-3 sm:left-3 w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 border-l-2 border-t-2 border-cyan-300/50 rounded-tl-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              ></motion.div>
              <motion.div 
                className="absolute bottom-1 right-1 xs:bottom-2 xs:right-2 sm:bottom-3 sm:right-3 w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 border-r-2 border-b-2 border-pink-300/50 rounded-br-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              ></motion.div>
              
              <p className="text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg text-white/95 italic leading-relaxed font-light relative z-10 text-center">
                <span className="text-cyan-300 font-medium">"Experience Powerful Messages</span> and 
                <span className="text-pink-300 font-medium"> Glorious Songs</span>. Join our church where 
                <span className="text-yellow-300 font-medium"> faith transforms lives</span> through God's 
                <span className="text-emerald-300 font-medium"> unconditional love</span> and divine purpose."
              </p>
            </motion.div>

          {/* Call to Action Buttons with Enhanced Responsive Styling */}
          <motion.div 
            className="flex flex-col xs:flex-col sm:flex-row gap-2 xs:gap-2 sm:gap-3 justify-start items-stretch sm:items-center mt-3 xs:mt-4 sm:mt-6 md:mt-8"
            variants={itemVariants}
          >
            <motion.button 
              onClick={() => scrollToSection('about')}
              className="group bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-2 xs:px-3 sm:px-4 md:px-6 py-1.5 xs:py-2 sm:py-2.5 md:py-3 rounded-lg xs:rounded-lg sm:rounded-xl font-semibold text-xs xs:text-sm sm:text-sm md:text-base hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-primary-500/25 w-full sm:w-auto relative overflow-hidden"
              whileHover={{ scale: 1.08, y: -4, rotateX: 5 }}
              whileTap={{ scale: 0.96 }}
              transition={{ 
                type: "spring", 
                stiffness: 500, 
                damping: 20,
                scale: { type: "spring", stiffness: 400, damping: 15 }
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              <span className="truncate relative z-10">Learn More About Us</span>
              <ArrowRight className="w-3 h-3 xs:w-3 xs:h-3 sm:w-4 sm:h-4 ml-1 xs:ml-1 sm:ml-2 group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0 relative z-10" />
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('services')}
              className="group border-2 border-white/60 text-white px-2 xs:px-3 sm:px-4 md:px-6 py-1.5 xs:py-2 sm:py-2.5 md:py-3 rounded-lg xs:rounded-lg sm:rounded-xl font-semibold text-xs xs:text-sm sm:text-sm md:text-base hover:bg-white/20 hover:border-white transition-all duration-300 flex items-center justify-center backdrop-blur-sm shadow-xl w-full sm:w-auto relative overflow-hidden"
              whileHover={{ scale: 1.08, y: -4, rotateX: 5 }}
              whileTap={{ scale: 0.96 }}
              transition={{ 
                type: "spring", 
                stiffness: 500, 
                damping: 20,
                scale: { type: "spring", stiffness: 400, damping: 15 }
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              <span className="truncate relative z-10">Join Our Service</span>
              <ArrowRight className="w-3 h-3 xs:w-3 xs:h-3 sm:w-4 sm:h-4 ml-1 xs:ml-1 sm:ml-2 group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0 relative z-10" />
            </motion.button>
          </motion.div>

          </div>
        </motion.div>
      </div>


    </section>
  );
};

export default Hero;