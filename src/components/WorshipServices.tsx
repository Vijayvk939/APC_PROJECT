import { motion } from 'framer-motion';
import { Church, Users, Clock, MapPin, ArrowRight, Play } from 'lucide-react';

const WorshipServices = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.85, rotateY: -15 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };
  const worshipServices = [
    {
      icon: Church,
      title: "Sunday 1st Service",
      subtitle: "Bhavanipuram",
      time: "8:30 AM - 11:00 AM",
      location: "Bhavanipuram",
      description: "Our main worship service featuring powerful messages, glorious songs, and church fellowship.",
      highlights: ["Live Worship", "Church Fellowship", "Inspiring Sermons", "Communion Service"],
      color: "from-primary-500 to-secondary-600",
      accentColor: "bg-primary-500",
      status: "Active"
    },
    {
      icon: Users,
      title: "Sunday School",
      subtitle: "Bhavanipuram",
      time: "9:00 AM - 11:00 AM",
      location: "Bhavanipuram",
      description: "Children's ministry and Sunday School program running alongside the main service.",
      highlights: ["Bible Stories", "Worship Songs", "Arts & Crafts", "Prayer Time"],
      color: "from-secondary-500 to-accent-600",
      accentColor: "bg-secondary-500",
      status: "Active"
    },
    {
      icon: Church,
      title: "Sunday 2nd Service",
      subtitle: "Gollapudi",
      time: "6:30 PM - 8:30 PM",
      location: "Gollapudi",
      description: "Evening worship service with inspiring messages and church fellowship.",
      highlights: ["Evening Worship", "Inspiring Sermons", "Church Fellowship", "Prayer Ministry"],
      color: "from-accent-500 to-primary-600",
      accentColor: "bg-accent-500",
      status: "Active"
    },
    {
      icon: Users,
      title: "Sunday School",
      subtitle: "Gollapudi",
      time: "7:30 PM - 8:30 PM",
      location: "Gollapudi",
      description: "Evening Sunday School program for children during the second service.",
      highlights: ["Evening Bible Study", "Children's Worship", "Interactive Learning", "Family Time"],
      color: "from-primary-500 to-accent-600",
      accentColor: "bg-primary-500",
      status: "Active"
    }
  ];


  return (
    <section id="services" className="py-8 md:py-12 lg:py-16 bg-gradient-to-br from-slate-50 via-primary-50 to-secondary-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-secondary-50/20 to-accent-50/30"></div>
      

      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div 
          className="text-center mb-6 xs:mb-8 sm:mb-10"
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
            <Church className="w-3 h-3 xs:w-4 xs:h-4 text-primary-600 mr-1.5 xs:mr-2" />
            <span className="text-xs xs:text-sm font-medium text-primary-700">Join Us Every Sunday</span>
          </motion.div>
          <motion.h2 
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 xs:mb-6 leading-tight px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600">
              Worship Services
            </span>
          </motion.h2>
          <motion.div 
            className="w-24 xs:w-32 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto mb-6 xs:mb-8 rounded-full"
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
            Experience the transformative power of worship through inspiring messages, 
            glorious songs, and meaningful fellowship in our vibrant church.
          </motion.p>
        </motion.div>

        {/* Modern Worship Services Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 sm:gap-8 mb-6 xs:mb-8 sm:mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {worshipServices.map((service, index) => (
            <motion.div 
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-lg xs:rounded-xl p-4 xs:p-5 sm:p-6 shadow-xl border border-white/50 hover:shadow-2xl hover:bg-white/90 flex flex-col h-full overflow-hidden"
              variants={cardVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                rotateY: 2,
                rotateX: 2,
                transition: { 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 20,
                  duration: 0.4
                }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Animated gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-secondary-500/0 to-accent-500/0 opacity-0 group-hover:opacity-10"
                initial={false}
                transition={{ duration: 0.5 }}
              />
              {/* Header Row with Icon and Status */}
              <div className="flex items-start justify-between mb-3 xs:mb-4">
                <motion.div 
                  className={`w-12 h-12 xs:w-14 xs:h-14 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center shadow-lg`}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <service.icon className="w-6 h-6 xs:w-7 xs:h-7 text-white" />
                </motion.div>
                <span className={`inline-flex items-center px-2 py-1 text-xs font-medium ${service.accentColor} text-white rounded-full`}>
                  {service.status}
                </span>
              </div>
              
              {/* Service Title */}
              <div className="mb-3 xs:mb-4">
                <h3 className="text-lg xs:text-xl lg:text-2xl font-bold text-gray-900 mb-1 leading-tight">{service.title}</h3>
                <p className="text-sm xs:text-base lg:text-lg font-medium text-gray-600">{service.subtitle}</p>
              </div>

              {/* Time and Location - Responsive Layout */}
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 xs:gap-3 mb-3 xs:mb-4">
                <div className="flex items-center text-gray-700 bg-gray-50 rounded-md px-2 xs:px-3 py-1.5 xs:py-2">
                  <Clock className="w-3 h-3 xs:w-4 xs:h-4 mr-1.5 xs:mr-2 text-primary-500 flex-shrink-0" />
                  <span className="font-semibold text-xs xs:text-sm lg:text-base truncate">{service.time}</span>
                </div>
                <div className="flex items-center text-gray-700 bg-gray-50 rounded-md px-2 xs:px-3 py-1.5 xs:py-2">
                  <MapPin className="w-3 h-3 xs:w-4 xs:h-4 mr-1.5 xs:mr-2 text-secondary-500 flex-shrink-0" />
                  <span className="font-semibold text-xs xs:text-sm lg:text-base truncate">{service.location}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-3 xs:mb-4 leading-relaxed text-sm xs:text-base lg:text-lg flex-grow">{service.description}</p>
              
              {/* Highlights - Responsive Grid Layout */}
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-1.5 xs:gap-2">
                {service.highlights.map((highlight, highlightIndex) => (
                  <div key={highlightIndex} className="flex items-center text-gray-700">
                    <div className={`w-1.5 h-1.5 xs:w-2 xs:h-2 ${service.accentColor} mr-1.5 xs:mr-2 flex-shrink-0 rounded-full`}></div>
                    <span className="text-xs xs:text-sm lg:text-base font-medium leading-tight">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-lg xs:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>


        {/* Enhanced Call to Action */}
        <div className="text-center">
          <div className="relative bg-gradient-to-br from-primary-800 via-secondary-800 to-accent-800 rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10"></div>
            
            {/* Floating Icons - Responsive Sizing */}
            <div className="absolute top-3 xs:top-4 right-3 xs:right-4 opacity-20">
              <Church className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12" />
            </div>
            <div className="absolute bottom-3 xs:bottom-4 left-3 xs:left-4 opacity-20">
              <Users className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10" />
            </div>

            <div className="relative z-10">
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-2 xs:mb-3 px-2">Join Us This Sunday</h3>
              <p className="text-sm xs:text-base sm:text-lg mb-4 xs:mb-5 sm:mb-6 opacity-90 max-w-xl mx-auto leading-relaxed px-4">
                Experience the transformative power of worship and the Word of God in our welcoming church
              </p>
              
              <div className="flex flex-row gap-2 xs:gap-3 justify-center items-center px-4 max-w-md mx-auto">
                <a 
                  href="https://maps.app.goo.gl/FdKWAgfJd1mNDVDz8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-white text-primary-600 px-3 xs:px-4 py-2 xs:py-2.5 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl text-xs xs:text-sm"
                >
                  <MapPin className="w-3 h-3 mr-1.5 flex-shrink-0" />
                  <span className="truncate">Plan Visit</span>
                  <ArrowRight className="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </a>
                <a 
                  href="https://www.youtube.com/@agapepentecostalchurch/streams" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group border-2 border-white text-white px-3 xs:px-4 py-2 xs:py-2.5 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 flex items-center justify-center text-xs xs:text-sm"
                >
                  <Play className="w-3 h-3 mr-1.5 flex-shrink-0" />
                  <span className="truncate">Watch Online</span>
                  <ArrowRight className="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorshipServices;
