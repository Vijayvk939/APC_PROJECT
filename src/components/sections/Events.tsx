import { motion } from 'framer-motion';
import { Calendar, Clock, Church, Heart } from 'lucide-react';
import { SpecialPrayerCardCarousel } from '@/components/features/events';
import { specialPrayerEvents, regularPrograms } from '@/data/events';

const Events = () => {

  return (
    <section id="events" className="pt-8 md:pt-12 lg:pt-16 pb-4 md:pb-6 lg:pb-8 bg-gradient-to-br from-slate-50 via-primary-50 to-secondary-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-secondary-50/20 to-accent-50/30"></div>
      
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div 
          className="text-center mb-4 xs:mb-6 sm:mb-8"
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
            <Heart className="w-3 h-3 xs:w-4 xs:h-4 text-primary-600 mr-1.5 xs:mr-2" />
            <span className="text-xs xs:text-sm font-medium text-primary-700">Join Us for Prayer</span>
          </motion.div>
          <motion.h2 
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 xs:mb-6 leading-tight px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600">
              Prayer Events
            </span>
          </motion.h2>
          <motion.div 
            className="w-24 xs:w-32 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto mb-4 xs:mb-6 rounded-full"
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
            Join us for powerful prayer meetings and special events designed to strengthen your faith, 
            build relationships, and experience spiritual breakthrough.
          </motion.p>
        </motion.div>

        {/* Regular Programs */}
        <div className="text-center mb-4 xs:mb-6 sm:mb-8">
          <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900 mb-3 xs:mb-4 px-2">Regular Prayer Programs</h3>
          <p className="text-base xs:text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Consistent prayer opportunities to grow spiritually and connect with your church family throughout the week.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-6 mb-8 xs:mb-10 sm:mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {regularPrograms.map((program, index) => (
            <motion.div 
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full"
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
            >
              {/* Header Row with Icon, Content, and Status */}
              <div className="flex items-start gap-3 xs:gap-4 mb-3 xs:mb-4">
                <div 
                  className={`w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${program.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                >
                  <program.icon className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors duration-300 leading-tight">{program.title}</h4>
                    <span className={`inline-flex items-center px-2 py-1 text-xs font-medium ${program.accentColor} text-white rounded-full flex-shrink-0 ml-2`}>
                      {program.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-gradient-to-r from-primary-50 to-secondary-50 px-3 xs:px-4 py-2 rounded-lg border border-primary-200/50">
                    <Clock className="w-4 h-4 text-primary-600" />
                    <p className="text-primary-600 font-bold text-sm xs:text-base">{program.schedule}</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-sm xs:text-base flex-grow">{program.description}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Special Prayer Events Section with Dark Background - Matching Transformative Messages */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 pt-6 md:pt-8 lg:pt-10 pb-0 bg-slate-950 relative overflow-hidden">
        {/* Background lighting - Matching Transformative Messages */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-slate-950 to-secondary-950" />
          <div className="absolute -top-20 -left-16 w-72 h-72 bg-primary-500/30 blur-[140px]" />
          <div className="absolute -bottom-32 right-0 w-[28rem] h-[28rem] bg-secondary-500/20 blur-[180px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_50%)] pointer-events-none" />
        </div>

        <div className="w-full relative z-10">
          {/* Section Header - Matching Transformative Messages pattern */}
          <div className="max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-6 sm:mb-8 space-y-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              
              <motion.h2 
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight px-2 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-secondary-300 to-primary-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Special{' '}
                </motion.span>
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 via-accent-300 to-secondary-300"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Prayer Events
                </motion.span>
              </motion.h2>
              
              <div className="w-24 xs:w-32 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto mb-3 xs:mb-4 rounded-full shadow-xl"></div>
              
              <motion.p 
                className="text-base xs:text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light px-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Extended prayer programs and special events for deeper spiritual growth and breakthrough.
              </motion.p>
            </motion.div>
          </div>

          {/* Special Prayer Events Carousel - Full Width */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SpecialPrayerCardCarousel
              cards={specialPrayerEvents}
              autoPlay={true}
              autoPlayInterval={3000}
              showIndicators={true}
              showNavigation={true}
              cardHeight="h-[26rem] sm:h-[30rem] lg:h-[32rem]"
            />
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Working Hours */}
        <div className="text-center pt-8 xs:pt-10 sm:pt-12 mb-8 xs:mb-10 sm:mb-12">
          <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900 mb-3 xs:mb-4 px-2">Church Working Hours</h3>
          <p className="text-base xs:text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-6 xs:mb-8 leading-relaxed px-4">
            We're open throughout the week to serve our church and provide spiritual guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-3 xs:gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto">
            {/* Monday - Thursday */}
            <motion.div 
              className="group relative bg-white/80 backdrop-blur-sm rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex-1 min-w-[200px] xs:min-w-[220px] sm:min-w-[240px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-base xs:text-lg sm:text-xl font-bold text-gray-900 mb-1 group-hover:text-primary-700 transition-colors duration-300">Monday - Thursday</h4>
                  <p className="text-gray-600 text-xs xs:text-sm mb-2">Regular working days</p>
                </div>
                <div className="flex items-center gap-2 bg-gradient-to-r from-primary-50 to-secondary-50 px-3 xs:px-4 py-2 rounded-lg border border-primary-200/50">
                  <Clock className="w-4 h-4 text-primary-600" />
                  <p className="text-primary-600 font-bold text-sm xs:text-base">9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </motion.div>
            
            {/* Friday */}
            <motion.div 
              className="group relative bg-white/80 backdrop-blur-sm rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex-1 min-w-[200px] xs:min-w-[220px] sm:min-w-[240px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-base xs:text-lg sm:text-xl font-bold text-gray-900 mb-1 group-hover:text-primary-700 transition-colors duration-300">Friday</h4>
                  <p className="text-gray-600 text-xs xs:text-sm mb-2">Fasting prayer day</p>
                </div>
                <div className="flex items-center gap-2 bg-gradient-to-r from-primary-50 to-accent-50 px-3 xs:px-4 py-2 rounded-lg border border-primary-200/50">
                  <Clock className="w-4 h-4 text-primary-600" />
                  <p className="text-primary-600 font-bold text-sm xs:text-base">6:30 PM - 9:00 PM</p>
                </div>
              </div>
            </motion.div>
            
            {/* Saturday */}
            <motion.div 
              className="group relative bg-white/80 backdrop-blur-sm rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex-1 min-w-[200px] xs:min-w-[220px] sm:min-w-[240px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Church className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-base xs:text-lg sm:text-xl font-bold text-gray-900 mb-1 group-hover:text-secondary-700 transition-colors duration-300">Saturday</h4>
                  <p className="text-gray-600 text-xs xs:text-sm mb-2">Weekend service day</p>
                </div>
                <div className="flex items-center gap-2 bg-gradient-to-r from-secondary-50 to-accent-50 px-3 xs:px-4 py-2 rounded-lg border border-secondary-200/50">
                  <Clock className="w-4 h-4 text-secondary-600" />
                  <p className="text-secondary-600 font-bold text-sm xs:text-base">9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </motion.div>
            
            {/* Sunday */}
            <motion.div 
              className="group relative bg-white/80 backdrop-blur-sm rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex-1 min-w-[200px] xs:min-w-[220px] sm:min-w-[240px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Church className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-base xs:text-lg sm:text-xl font-bold text-gray-900 mb-1 group-hover:text-accent-700 transition-colors duration-300">Sunday</h4>
                  <p className="text-gray-600 text-xs xs:text-sm mb-2">Main worship service</p>
                </div>
                <div className="flex items-center gap-2 bg-gradient-to-r from-accent-50 to-primary-50 px-3 xs:px-4 py-2 rounded-lg border border-accent-200/50">
                  <Clock className="w-4 h-4 text-accent-600" />
                  <p className="text-accent-600 font-bold text-sm xs:text-base">8:00 AM - 12:00 PM</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;