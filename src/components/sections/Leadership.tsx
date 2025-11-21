import { motion } from 'framer-motion';
import { Heart, BookOpen, Sparkles } from 'lucide-react';

// Import images
import pastorImage from '/images/SamuelPrasad1.jpg';

const Leadership = () => {
  const pastorInfo = {
    name: "Pastor Prasad Machavarapu",
    title: "Senior Pastor",
    image: pastorImage,
    bio: "Pastor Prasad Machavarapu has been faithfully serving the Agape Pentecostal Church in Vijayawada with passion, wisdom, and unwavering commitment to God's Word. His heart for people and dedication to biblical truth has helped countless individuals grow in their faith journey through powerful messages and glorious songs.",
    education: [
      "Diploma in Theology - World Bible College",
      "Advanced Biblical Studies & Ministry Training",
      "Leadership Development & Church Administration"
    ],
    specialties: ["Powerful Preaching", "Gospel Speaker", "Church Growth", "Dedicated Faculty at Agape Bible School", "Glorious Worship"],
    achievements: [
      "Led church growth from 50 to 500+ members",
      "Established Agape Bible School",
      "Mentored 100+ ministry leaders",
      "Conducted 500+ worship services"
    ],
    contact: {
      email: "pastor@agapepentecostalchurch.com",
      phone: "+91 9390232344",
      location: "Vijayawada, Andhra Pradesh"
    }
  };

  return (
    <section id="leadership" className="pt-8 md:pt-12 lg:pt-16 pb-4 md:pb-6 lg:pb-8 bg-gradient-to-br from-slate-50 via-primary-50 to-secondary-50 relative overflow-x-visible overflow-y-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-secondary-50/20 to-accent-50/30"></div>
      

      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10 overflow-x-visible">
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
            <Sparkles className="w-3 h-3 xs:w-4 xs:h-4 text-primary-600 mr-1.5 xs:mr-2" />
            <span className="text-xs font-medium text-primary-700">Meet Our Leader</span>
          </motion.div>
          
          <motion.h2 
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 xs:mb-6 leading-tight px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600">
              Spiritual Leadership
            </span>
          </motion.h2>
          
          <motion.div 
            className="w-24 xs:w-32 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto mb-4 xs:mb-6 rounded-full shadow-xl"
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
            Meet the dedicated servants who guide our church family with wisdom, 
            compassion, and a heart for God's people. Experience the transformative 
            leadership that shapes our spiritual church.
          </motion.p>
        </motion.div>
      </div>

      {/* Enhanced Senior Pastor Section - Image breaks out of container */}
        <motion.div 
        className="mb-4 xs:mb-5 sm:mb-6 relative w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] lg:grid-cols-[3fr_2fr] gap-4 xs:gap-6 sm:gap-8 lg:gap-12 relative max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 overflow-visible">
          {/* Enhanced Pastor Image - Starts from left edge */}
          <div className="relative md:col-span-1 lg:col-span-1 order-2 md:order-1 overflow-visible">
            <div className="h-64 xs:h-72 sm:h-80 md:h-[400px] lg:h-[640px] xl:h-[680px] flex items-center justify-center md:justify-start relative overflow-visible md:overflow-visible rounded-xl sm:rounded-2xl md:rounded-none">
              <div className="h-full w-full md:w-auto flex justify-center md:justify-start md:absolute" style={{ 
                left: 'calc((100% - 100vw) / 2)'
              }}>
                <img 
                  src={pastorInfo.image}
                  alt={pastorInfo.name}
                  className="h-full w-full md:w-auto object-cover object-center md:object-left"
                />
              </div>
            </div>
          </div>

          {/* Enhanced Pastor Info - No Card, Content on Right */}
          <div className="p-4 xs:p-5 sm:p-6 md:p-6 lg:p-8 flex flex-col justify-center lg:min-h-[600px] md:col-span-1 lg:col-span-1 order-1 md:order-2">
            <div className="mb-4 xs:mb-5 sm:mb-6 md:mb-6">
              <div className="inline-flex items-center px-2.5 xs:px-3 sm:px-3 py-1 xs:py-1 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full border border-primary-200/50 mb-2 xs:mb-3 sm:mb-3">
                <span className="text-xs xs:text-xs sm:text-xs font-medium text-primary-700">Visionary Pastor</span>
              </div>
              
              <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1.5 xs:mb-2 sm:mb-2 leading-tight">
                {pastorInfo.name}
              </h3>
              <p className="text-base xs:text-lg sm:text-lg md:text-lg lg:text-xl text-primary-600 font-semibold mb-3 xs:mb-3 sm:mb-4">{pastorInfo.title}</p>
              
              <p className="text-gray-700 leading-relaxed mb-4 xs:mb-5 sm:mb-5 md:mb-6 text-sm xs:text-base sm:text-base md:text-base lg:text-lg">
                {pastorInfo.bio}
              </p>
            </div>

                {/* Enhanced Education - Desktop Only */}
                <div className="mb-4 xs:mb-5 sm:mb-6 hidden lg:block">
                  <h4 className="font-bold text-gray-900 mb-2 xs:mb-3 flex items-center text-sm xs:text-base lg:text-lg">
                    <BookOpen className="w-3 h-3 xs:w-4 xs:h-4 mr-1.5 xs:mr-2 text-primary-600" />
                    Education & Training
                  </h4>
                  <ul className="space-y-1.5 xs:space-y-2">
                    {pastorInfo.education.map((edu, index) => (
                      <li key={index} className="text-gray-700 flex items-start text-xs xs:text-sm lg:text-base">
                        <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mr-2 xs:mr-3 mt-1.5 xs:mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enhanced Specialties - Desktop Only */}
                <div className="mb-4 xs:mb-5 sm:mb-6 hidden lg:block">
                  <h4 className="font-bold text-gray-900 mb-2 xs:mb-3 flex items-center text-sm xs:text-base lg:text-lg">
                    <Heart className="w-3 h-3 xs:w-4 xs:h-4 mr-1.5 xs:mr-2 text-accent-600" />
                    Ministry Focus
                  </h4>
                  <div className="flex flex-wrap gap-1.5 xs:gap-2">
                    {pastorInfo.specialties.slice(0, -2).map((specialty, index) => (
                      <span 
                        key={index}
                        className="text-gray-700 px-2 xs:px-3 py-1 rounded-full text-xs lg:text-sm font-semibold"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-1.5 xs:gap-2 mt-1.5 xs:mt-2">
                    {pastorInfo.specialties.slice(-2).map((specialty, index) => (
                      <span 
                        key={pastorInfo.specialties.length - 2 + index}
                        className="text-gray-700 px-2 xs:px-3 py-1 rounded-full text-xs lg:text-sm font-semibold whitespace-nowrap"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
            </div>

            {/* Additional Content Below - Education and Specialties - Mobile and Tablet Only */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8 mt-4 xs:mt-5 sm:mt-6 lg:hidden col-span-1 md:col-span-2 order-3">
              {/* Enhanced Education */}
              <div className="bg-white/50 backdrop-blur-sm rounded-xl xs:rounded-xl sm:rounded-2xl p-4 xs:p-4 sm:p-5 md:p-6 border border-white/50">
                <h4 className="font-bold text-gray-900 mb-3 xs:mb-3 sm:mb-4 flex items-center text-sm xs:text-sm sm:text-base">
                  <BookOpen className="w-4 h-4 xs:w-4 xs:h-4 mr-2 xs:mr-2 text-primary-600" />
                  Education & Training
                </h4>
                <ul className="space-y-2 xs:space-y-2 sm:space-y-3">
                  {pastorInfo.education.map((edu, index) => (
                    <li key={index} className="text-gray-700 flex items-start text-sm xs:text-sm sm:text-base">
                      <div className="w-2 h-2 xs:w-2 xs:h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mr-2.5 xs:mr-3 mt-1.5 xs:mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Enhanced Specialties */}
              <div className="bg-white/50 backdrop-blur-sm rounded-xl xs:rounded-xl sm:rounded-2xl p-4 xs:p-4 sm:p-5 md:p-6 border border-white/50">
                <h4 className="font-bold text-gray-900 mb-3 xs:mb-3 sm:mb-4 flex items-center text-sm xs:text-sm sm:text-base">
                  <Heart className="w-4 h-4 xs:w-4 xs:h-4 mr-2 xs:mr-2 text-accent-600" />
                  Ministry Focus
                </h4>
                <div className="flex flex-wrap gap-2 xs:gap-2 sm:gap-3">
                  {pastorInfo.specialties.slice(0, -2).map((specialty, index) => (
                    <span 
                      key={index}
                      className="text-gray-700 px-2.5 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full text-xs xs:text-xs sm:text-sm font-semibold"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 xs:gap-2 sm:gap-3 mt-2 xs:mt-2 sm:mt-3">
                  {pastorInfo.specialties.slice(-2).map((specialty, index) => (
                    <span 
                      key={pastorInfo.specialties.length - 2 + index}
                      className="text-gray-700 px-2.5 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full text-xs xs:text-xs sm:text-sm font-semibold"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
    </section>
  );
};

export default Leadership;