import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';

// Import images
import img1 from '/images/Gallery/IMG1.jpg';
import img2 from '/images/Gallery/IMG2.jpg';
import img3 from '/images/Gallery/IMG3.jpg';
import img4 from '/images/Gallery/IMG4.jpg';
import img5 from '/images/Gallery/IMG5.jpg';
import img6 from '/images/Gallery/IMG6.jpg';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    {
      url: img1,
      title: "Blessed Family",
      description: "A beautiful family portrait showing the love and unity that God creates in our homes"
    },
    {
      url: img2,
      title: "Women's Prayer Meeting",
      description: "Sisters in Christ gathering for prayer, worship, and spiritual fellowship"
    },
    {
      url: img3,
      title: "Church Leadership",
      description: "Our dedicated church leaders serving God and our church with love and dedication"
    },
    {
      url: img4,
      title: "Church Candlelight Gathering",
      description: "Our church family coming together in prayer and fellowship, holding candles of hope and faith"
    },
    {
      url: img5,
      title: "Pastoral Ministry",
      description: "Spreading God's word and ministering to our congregation with passion and grace"
    },
    {
      url: img6,
      title: "Sunday School Celebration",
      description: "Children learning about God's love through music, stories, and joyful activities"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [galleryImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="gallery" className="py-8 md:py-12 lg:py-16 bg-gradient-to-br from-slate-50 via-primary-50 to-secondary-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-secondary-50/20 to-accent-50/30"></div>

      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div 
          className="text-center mb-8 xs:mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center px-3 xs:px-4 py-1.5 xs:py-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full border border-primary-200/50 mb-4 xs:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Camera className="w-3 h-3 xs:w-4 xs:h-4 text-primary-600 mr-1.5 xs:mr-2" />
            <span className="text-xs font-medium text-primary-700">Our Moments</span>
          </motion.div>
          
          <motion.h2 
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 xs:mb-6 leading-tight px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600">
              Church Gallery
            </span>
          </motion.h2>
          <motion.div 
            className="w-24 xs:w-32 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-4 xs:mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "auto" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <motion.p 
            className="text-base xs:text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Witness the joy, fellowship, and spiritual growth happening in our church
          </motion.p>
        </motion.div>

        {/* Main Gallery */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative h-64 xs:h-72 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl xs:rounded-3xl overflow-hidden shadow-2xl">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.1, filter: "blur(5px)" }}
                animate={{ 
                  opacity: index === currentSlide ? 1 : 0,
                  scale: index === currentSlide ? 1 : 1.1,
                  filter: index === currentSlide ? "blur(0px)" : "blur(5px)",
                  zIndex: index === currentSlide ? 10 : 1,
                }}
                transition={{ 
                  duration: 1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  opacity: { duration: 0.8 },
                  scale: { duration: 1 },
                  filter: { duration: 0.8 }
                }}
              >
                <motion.img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: index === currentSlide ? [1, 1.05, 1] : 1,
                  }}
                  transition={{
                    duration: 8,
                    repeat: index === currentSlide ? Infinity : 0,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentSlide ? 1 : 0 }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Content Overlay */}
                <motion.div 
                  className="absolute bottom-4 xs:bottom-6 sm:bottom-8 left-4 xs:left-6 sm:left-8 right-4 xs:right-6 sm:right-8 text-white"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ 
                    y: index === currentSlide ? 0 : 50,
                    opacity: index === currentSlide ? 1 : 0
                  }}
                  transition={{ 
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  <motion.h3 
                    className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold mb-1 xs:mb-2 leading-tight"
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ 
                      x: index === currentSlide ? 0 : -30,
                      opacity: index === currentSlide ? 1 : 0
                    }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {image.title}
                  </motion.h3>
                  <motion.p 
                    className="text-sm xs:text-base sm:text-lg opacity-90 leading-relaxed"
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ 
                      x: index === currentSlide ? 0 : -30,
                      opacity: index === currentSlide ? 1 : 0
                    }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {image.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}

            {/* Navigation Arrows */}
            <motion.button
              onClick={prevSlide}
              className="absolute left-2 xs:left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white z-20"
              whileHover={{ 
                scale: 1.2, 
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                rotate: -10
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <ChevronLeft className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
            </motion.button>
            
            <motion.button
              onClick={nextSlide}
              className="absolute right-2 xs:right-3 sm:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white z-20"
              whileHover={{ 
                scale: 1.2, 
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                rotate: 10
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
            </motion.button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 xs:mt-8 space-x-2 xs:space-x-3">
            {galleryImages.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 xs:w-3 xs:h-3 rounded-full ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600'
                    : 'bg-gray-300'
                }`}
                animate={{
                  scale: index === currentSlide ? 1.5 : 1,
                  opacity: index === currentSlide ? 1 : 0.6,
                }}
                whileHover={{ scale: 1.3, opacity: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  duration: 0.3
                }}
              />
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default Gallery;