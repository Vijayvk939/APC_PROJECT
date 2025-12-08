import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Heart, Users, BookOpen, Sparkles, MapPin, Phone } from 'lucide-react';

// Import images
import churchImage from '/images/BVPM_CHURCH.jpg';

// Component for animated counting number
const CountUpNumber = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        const displayValue = Math.floor(latest);
        ref.current.textContent = displayValue.toString();
      }
    });
    return () => unsubscribe();
  }, [springValue]);

  return <span ref={ref} className="tabular-nums">0</span>;
};

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Love",
      description: "We believe in God's unconditional love and strive to share it with everyone we meet."
    },
    {
      icon: Users,
      title: "Church",
      description: "Building authentic relationships where everyone belongs and no one walks alone."
    },
    {
      icon: BookOpen,
      title: "Truth",
      description: "Grounded in Biblical truth, we seek to understand and live by God's Word."
    },
    {
      icon: Sparkles,
      title: "Transformation",
      description: "Witnessing lives changed through the power of the Holy Spirit and God's grace."
    }
  ];

  return (
    <section id="about" className="pt-8 md:pt-12 lg:pt-16 pb-4 md:pb-6 lg:pb-8 bg-gradient-to-br from-slate-50 via-primary-50 to-secondary-50 relative overflow-hidden">
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
            <BookOpen className="w-3 h-3 xs:w-4 xs:h-4 text-primary-600 mr-1.5 xs:mr-2" />
            <span className="text-xs xs:text-sm font-medium text-primary-700">Our Story</span>
          </motion.div>
          <motion.h2 
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 xs:mb-6 leading-tight px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600">
              About Agape
            </span>
          </motion.h2>
          <motion.div 
            className="w-24 xs:w-32 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto mb-4 xs:mb-6 sm:mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "auto" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <motion.p 
            className="text-base xs:text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            For two years, Agape Pentecostal Church has been a beacon of hope, love, and spiritual growth.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 md:gap-14 lg:gap-16 items-center mb-10 xs:mb-12 sm:mb-14">
          {/* Left Content */}
          <div className="space-y-6 xs:space-y-7 sm:space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 xs:mb-4 inline-flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary-500/15 to-secondary-500/15 border border-primary-100">
                  <BookOpen className="w-5 h-5 text-primary-600" />
                </span>
                Our Story
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3 xs:mb-4 text-sm xs:text-base">
                Founded in 2006, Agape Pentecostal Church began as a small gathering of believers 
                with a big vision: to create a place where God's love could transform lives and 
                build a stronger church. What started with just a few families has grown into 
                a vibrant congregation of hundreds.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm xs:text-base">
                Today, we continue to be guided by the same principles that founded our church - 
                unconditional love, authentic worship, and a commitment to serving both our 
                congregation and the broader church with excellence and compassion.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-800 via-secondary-800 to-accent-800 rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10"></div>
              <div className="relative z-10">
                <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold mb-3 xs:mb-4 inline-flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/15 border border-white/20">
                    <Heart className="w-5 h-5 text-white" />
                  </span>
                  Our Mission
                </h3>
                <p className="leading-relaxed text-sm xs:text-base sm:text-lg">
                  To create a welcoming church where people can encounter God's love, 
                  grow in their faith, and discover their purpose through meaningful 
                  relationships and transformative worship experiences.
                </p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <h3 className="text-base xs:text-lg sm:text-xl md:text-2xlf font-bold text-gray-900 mb-3 xs:mb-4 inline-flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary-500/15 to-secondary-500/15 border border-primary-100">
                  <MapPin className="w-5 h-5 text-primary-600" />
                </span>
                Our Location
              </h3>
              <div className="space-y-3 xs:space-y-4">
                <p className="text-gray-600 leading-relaxed text-sm xs:text-base">
                  We are located in the heart of Vijayawada, serving the church of Kamakoti Nagar and surrounding areas. 
                  Our church is easily accessible and provides a welcoming environment for all visitors.
                </p>
                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg xs:rounded-xl p-3 xs:p-4 border border-primary-200/50">
                  <p className="font-semibold text-gray-900 mb-1 xs:mb-2 text-sm xs:text-base">Church Address:</p>
                  <p className="text-primary-600 font-medium text-xs xs:text-sm sm:text-base">
                    Gurukrupa Rd, Kamakoti Nagar, VD Puram, Vijayawada, Andhra Pradesh 520012
                  </p>
                </div>
                <div className="flex flex-row gap-2 xs:gap-3">
                  <a 
                    href="https://maps.app.goo.gl/FzWhZsGQTtNoy49LA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-3 xs:px-4 sm:px-6 py-2 xs:py-3 rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl text-xs xs:text-sm sm:text-base w-full sm:w-auto"
                  >
                    <MapPin className="w-3 h-3 xs:w-4 xs:h-4 mr-1.5 xs:mr-2 flex-shrink-0" />
                    <span className="truncate">Get Directions</span>
                  </a>
                  <a 
                    href="tel:+919390232344"
                    className="inline-flex items-center justify-center bg-white/80 backdrop-blur-sm text-gray-700 px-3 xs:px-4 sm:px-6 py-2 xs:py-3 rounded-lg hover:bg-white transition-all duration-300 font-medium border border-gray-200/50 shadow-lg hover:shadow-xl text-xs xs:text-sm sm:text-base w-full sm:w-auto"
                  >
                    <Phone className="w-3 h-3 xs:w-4 xs:h-4 mr-1.5 xs:mr-2 flex-shrink-0" />
                    <span className="truncate">Call Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image with Value Cards */}
          <div className="relative space-y-4 xs:space-y-5 sm:space-y-6">
            {/* 2 Cards Above Image */}
            <motion.div 
              className="grid grid-cols-2 gap-3 xs:gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              {values.slice(0, 2).map((value, index) => (
                <motion.div 
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-lg xs:rounded-xl p-2 xs:p-3 sm:p-3 border border-white/50 hover:bg-white shadow-lg hover:shadow-xl overflow-hidden relative flex items-start gap-2 xs:gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.1,
                    }
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -4,
                    scale: 1.02,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 20,
                      duration: 0.3
                    }
                  }}
                >
                  <motion.div 
                    className="flex items-center justify-center flex-shrink-0"
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <value.icon className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-primary-600" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm xs:text-base sm:text-lg font-bold text-gray-900 mb-0.5 xs:mb-1">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed text-xs xs:text-sm">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Image */}
            <div className="relative rounded-xl xs:rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={churchImage} 
                alt="Church" 
                className="w-full h-64 xs:h-72 sm:h-80 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
              
              {/* Floating Stats - On Image at Edges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute top-0 right-0 bg-white/80 backdrop-blur-sm rounded-bl-xl xs:rounded-bl-2xl rounded-tr-xl xs:rounded-tr-2xl p-3 xs:p-4 sm:p-6 shadow-xl border border-white/50 z-10"
              >
                <div className="text-center">
                  <p className="text-xl xs:text-2xl sm:text-3xl font-bold text-primary-600">
                    <CountUpNumber value={20} />+
                  </p>
                  <p className="text-gray-600 text-xs xs:text-sm">Years Serving</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                className="absolute bottom-0 left-0 bg-white/80 backdrop-blur-sm rounded-tr-xl xs:rounded-tr-2xl rounded-bl-xl xs:rounded-bl-2xl p-3 xs:p-4 sm:p-6 shadow-xl border border-white/50 z-10"
              >
                <div className="text-center">
                  <p className="text-xl xs:text-2xl sm:text-3xl font-bold text-secondary-600">
                    <CountUpNumber value={200} />+
                  </p>
                  <p className="text-gray-600 text-xs xs:text-sm">Church Family</p>
                </div>
              </motion.div>
            </div>

            {/* 2 Cards Below Image */}
            <motion.div 
              className="grid grid-cols-2 gap-3 xs:gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              {values.slice(2, 4).map((value, index) => (
                <motion.div 
                  key={index + 2}
                  className="group bg-white/80 backdrop-blur-sm rounded-lg xs:rounded-xl p-2 xs:p-3 sm:p-3 border border-white/50 hover:bg-white shadow-lg hover:shadow-xl overflow-hidden relative flex items-start gap-2 xs:gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.1,
                    }
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -4,
                    scale: 1.02,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 20,
                      duration: 0.3
                    }
                  }}
                >
                  <motion.div 
                    className="flex items-center justify-center flex-shrink-0"
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <value.icon className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-primary-600" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm xs:text-base sm:text-lg font-bold text-gray-900 mb-0.5 xs:mb-1">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed text-xs xs:text-sm">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;