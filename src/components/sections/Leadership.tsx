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
          className="text-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full border border-primary-200/50 mb-3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary-600 mr-1.5" />
            <span className="text-xs font-medium text-primary-700">Meet Our Leader</span>
          </motion.div>
          
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight px-2"
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
            className="w-24 sm:w-32 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto mb-3 rounded-full shadow-xl"
            initial={{ width: 0 }}
            whileInView={{ width: "auto" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          
          <motion.p 
            className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Meet the compassionate leaders guiding our church family with wisdom and a heart for God.
          </motion.p>
        </motion.div>
      </div>

      {/* Enhanced Senior Pastor Section - Image breaks out of container */}
        <motion.div 
        className="mb-3 sm:mb-4 relative w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] lg:grid-cols-[3fr_2fr] gap-4 sm:gap-6 lg:gap-8 relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 overflow-visible">
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
          <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-center lg:min-h-[600px] md:col-span-1 lg:col-span-1 order-1 md:order-2">
            <div className="mb-3 sm:mb-4">
              <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full border border-primary-200/50 mb-2">
                <span className="text-xs font-medium text-primary-700">Visionary Pastor</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 leading-tight">
                {pastorInfo.name}
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-primary-600 font-semibold mb-2">{pastorInfo.title}</p>
              
              <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg">
                {pastorInfo.bio}
              </p>
            </div>

                {/* Enhanced Education - Desktop Only */}
                <div className="mb-3 sm:mb-4 hidden lg:block">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center text-base lg:text-lg">
                    <BookOpen className="w-4 h-4 mr-2 text-primary-600" />
                    Education & Training
                  </h4>
                  <ul className="space-y-1">
                    {pastorInfo.education.map((edu, index) => (
                      <li key={index} className="text-gray-700 flex items-start text-sm lg:text-base">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enhanced Specialties - Desktop Only */}
                <div className="mb-3 sm:mb-4 hidden lg:block">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center text-base lg:text-lg">
                    <Heart className="w-4 h-4 mr-2 text-accent-600" />
                    Ministry Focus
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {pastorInfo.specialties.slice(0, -2).map((specialty, index) => (
                      <span 
                        key={index}
                        className="text-gray-700 px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-1.5">
                    {pastorInfo.specialties.slice(-2).map((specialty, index) => (
                      <span 
                        key={pastorInfo.specialties.length - 2 + index}
                        className="text-gray-700 px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
            </div>

            {/* Additional Content Below - Education and Specialties - Mobile and Tablet Only */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-3 sm:mt-4 lg:hidden col-span-1 md:col-span-2 order-3">
              {/* Enhanced Education */}
              <div className="bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/50">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center text-sm sm:text-base">
                  <BookOpen className="w-4 h-4 mr-2 text-primary-600" />
                  Education & Training
                </h4>
                <ul className="space-y-1.5">
                  {pastorInfo.education.map((edu, index) => (
                    <li key={index} className="text-gray-700 flex items-start text-sm sm:text-base">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Enhanced Specialties */}
              <div className="bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/50">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center text-sm sm:text-base">
                  <Heart className="w-4 h-4 mr-2 text-accent-600" />
                  Ministry Focus
                </h4>
                <div className="flex flex-wrap gap-2">
                  {pastorInfo.specialties.slice(0, -2).map((specialty, index) => (
                    <span 
                      key={index}
                      className="text-gray-700 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-1.5">
                  {pastorInfo.specialties.slice(-2).map((specialty, index) => (
                    <span 
                      key={pastorInfo.specialties.length - 2 + index}
                      className="text-gray-700 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold"
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