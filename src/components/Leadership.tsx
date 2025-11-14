import { motion } from 'framer-motion';
import { Phone, Heart, BookOpen, Users, Star, Sparkles, ArrowRight } from 'lucide-react';

// Import images
import pastorImage from '/images/SamuelPrasad.jpg';

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
    experience: "20+ Years in Ministry",
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
    <section id="leadership" className="py-8 md:py-12 lg:py-16 bg-gradient-to-br from-slate-50 via-primary-50 to-secondary-50 relative overflow-hidden">
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

        {/* Enhanced Senior Pastor Section */}
        <motion.div 
          className="mb-10 xs:mb-12 sm:mb-14"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="relative bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm rounded-2xl xs:rounded-3xl shadow-2xl overflow-hidden border border-white/50">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-secondary-500/3 to-accent-500/5"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 relative z-10">
              {/* Enhanced Pastor Image */}
              <div className="relative md:col-span-1 lg:col-span-1">
                <div className="lg:h-[600px] h-64 xs:h-72 sm:h-80 md:h-80 lg:h-[600px] flex items-center justify-center p-4 xs:p-5 sm:p-6">
                  <div className="relative w-full h-full lg:h-full aspect-square lg:aspect-auto">
                    <img 
                      src={pastorInfo.image}
                      alt={pastorInfo.name}
                      className="w-full h-full object-cover rounded-2xl xs:rounded-3xl shadow-2xl lg:object-cover"
                      style={{ objectPosition: 'center top' }}
                    />
                    
                    {/* Enhanced Floating Stats */}
                    <div className="absolute top-3 xs:top-4 sm:top-6 left-3 xs:left-4 sm:left-6 bg-white/95 backdrop-blur-md rounded-xl xs:rounded-2xl p-2 xs:p-3 shadow-2xl border border-white/50">
                      <div className="flex items-center text-primary-600">
                        <Star className="w-3 h-3 mr-1.5 xs:mr-2 text-yellow-500" />
                        <span className="font-semibold text-xs">{pastorInfo.experience}</span>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>

              {/* Enhanced Pastor Info */}
              <div className="p-4 xs:p-5 sm:p-6 lg:p-8 flex flex-col justify-center lg:min-h-[600px] bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm md:col-span-1 lg:col-span-1">
                <div className="mb-4 xs:mb-5 sm:mb-6">
                  <div className="inline-flex items-center px-2 xs:px-3 py-1 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full border border-primary-200/50 mb-2 xs:mb-3">
                    <span className="text-xs font-medium text-primary-700">Visionary Pastor</span>
                  </div>
                  
                  <h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 xs:mb-2 leading-tight">
                    {pastorInfo.name}
                  </h3>
                  <p className="text-base xs:text-lg lg:text-xl text-primary-600 font-semibold mb-3 xs:mb-4">{pastorInfo.title}</p>
                  
                  <p className="text-gray-700 leading-relaxed mb-4 xs:mb-5 sm:mb-6 text-sm xs:text-base lg:text-lg">
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
                    {pastorInfo.specialties.map((specialty, index) => (
                      <span 
                        key={index}
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-2 xs:px-3 py-1 rounded-full text-xs lg:text-sm font-semibold shadow-lg"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Content Below - Education and Specialties - Tablet Only */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 mt-0 xs:mt-1 sm:mt-2 lg:hidden">
              {/* Enhanced Education */}
              <div className="bg-white/50 backdrop-blur-sm rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 border border-white/50">
                <h4 className="font-bold text-gray-900 mb-3 xs:mb-4 flex items-center text-sm xs:text-base lg:text-lg">
                  <BookOpen className="w-4 h-4 mr-2 text-primary-600" />
                  Education & Training
                </h4>
                <ul className="space-y-2 xs:space-y-3">
                  {pastorInfo.education.map((edu, index) => (
                    <li key={index} className="text-gray-700 flex items-start text-sm xs:text-base lg:text-lg">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Enhanced Specialties */}
              <div className="bg-white/50 backdrop-blur-sm rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 border border-white/50">
                <h4 className="font-bold text-gray-900 mb-3 xs:mb-4 flex items-center text-sm xs:text-base lg:text-lg">
                  <Heart className="w-4 h-4 mr-2 text-accent-600" />
                  Ministry Focus
                </h4>
                <div className="flex flex-wrap gap-2 xs:gap-3">
                  {pastorInfo.specialties.map((specialty, index) => (
                    <span 
                      key={index}
                      className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm lg:text-base font-semibold shadow-lg"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <div className="relative bg-gradient-to-br from-primary-800 via-secondary-800 to-accent-800 rounded-2xl xs:rounded-3xl p-4 xs:p-6 sm:p-8 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10"></div>
            
            {/* Floating Icons - Responsive Sizing */}
            <div className="absolute top-3 xs:top-4 sm:top-6 right-3 xs:right-4 sm:right-6 opacity-20">
              <Users className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16" />
            </div>
            <div className="absolute bottom-3 xs:bottom-4 sm:bottom-6 left-3 xs:left-4 sm:left-6 opacity-20">
              <Heart className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12" />
            </div>

            <div className="relative z-10">
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-1 xs:mb-2 px-2">Connect with Our Leadership</h3>
              <p className="text-sm xs:text-base mb-3 xs:mb-4 opacity-90 max-w-3xl mx-auto leading-relaxed px-4">
                Our pastors and ministry leaders are here to support you on your faith journey. 
                Don't hesitate to reach out with questions, prayer requests, or to learn more about our ministry.
              </p>
              
              <div className="flex flex-row gap-2 xs:gap-3 justify-center items-center">
                <motion.a 
                  href="#contact" 
                  className="bg-white text-primary-600 px-3 xs:px-4 py-2 rounded-xl font-semibold flex items-center shadow-lg text-xs xs:text-sm relative overflow-hidden group"
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-50 to-secondary-50"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                  <Users className="w-3 h-3 mr-1.5 xs:mr-2 flex-shrink-0 relative z-10" />
                  <span className="truncate relative z-10">Get in Touch</span>
                  <ArrowRight className="w-3 h-3 ml-1.5 xs:ml-2 flex-shrink-0 relative z-10 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a 
                  href="tel:+919390232344"
                  className="border-2 border-white text-white px-3 xs:px-4 py-2 rounded-xl font-semibold flex items-center text-xs xs:text-sm relative overflow-hidden group"
                  whileHover={{ scale: 1.08, y: -3, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                  <Phone className="w-3 h-3 mr-1.5 xs:mr-2 flex-shrink-0 relative z-10" />
                  <span className="truncate relative z-10">Call Now</span>
                  <ArrowRight className="w-3 h-3 ml-1.5 xs:ml-2 flex-shrink-0 relative z-10 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;