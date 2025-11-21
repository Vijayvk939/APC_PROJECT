import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter, ChevronRight } from 'lucide-react';

// Import images
import logoImage from '/images/AGP.png';

const Footer = () => {

  const quickLinks = [
    "About Us",
    "Service Times", 
    "Ministries",
    "Events",
    "Leadership",
    "Contact"
  ];

  const ministries = [
    "Children's Ministry",
    "Youth Group",
    "Worship Team",
    "Church Outreach",
    "Small Groups",
    "Prayer Ministry"
  ];

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      {/* Background lighting - Matching Transformative Messages */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-slate-950 to-secondary-950" />
        <div className="absolute -top-20 -left-16 w-72 h-72 bg-primary-500/30 blur-[140px]" />
        <div className="absolute -bottom-32 right-0 w-[28rem] h-[28rem] bg-secondary-500/20 blur-[180px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_50%)] pointer-events-none" />
      </div>
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16 relative z-10">
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {/* Church Info */}
          <motion.div 
            className="col-span-2 sm:col-span-2 lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center mb-4 sm:mb-5 md:mb-6">
              <div className="relative mr-2 sm:mr-3">
                <img 
                  src={logoImage} 
                  alt="Agape Pentecostal Church Logo" 
                  className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full blur-lg opacity-30"></div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-primary-300 to-secondary-300 bg-clip-text text-transparent">AGAPE</h3>
                <p className="text-white text-xs sm:text-sm md:text-base">Pentecostal Church</p>
              </div>
            </div>
            
            <p className="text-white leading-relaxed mb-4 sm:mb-5 md:mb-6 max-w-md text-xs sm:text-sm md:text-base">
              Building a church where every heart finds home, every soul discovers purpose, 
              and every life reflects God's unconditional love.
            </p>
            
            <div className="space-y-2 sm:space-y-2.5 md:space-y-3 mb-4 sm:mb-5 md:mb-6">
              <div className="flex items-start text-white hover:text-white transition-colors">
                <MapPin className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-2 sm:mr-2.5 md:mr-3 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-xs md:text-sm leading-relaxed">Gurukrupa Rd, Kamakoti Nagar, VD Puram, Vijayawada, Andhra Pradesh 520012</span>
              </div>
              <div className="flex items-center text-white hover:text-white transition-colors">
                <Phone className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-2 sm:mr-2.5 md:mr-3 text-primary-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base">+91 9390232344</span>
              </div>
              <div className="flex items-start text-white hover:text-white transition-colors">
                <Mail className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-2 sm:mr-2.5 md:mr-3 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-xs md:text-sm leading-relaxed break-all">agapepentecostalchurchapc@gmail.com</span>
              </div>
            </div>
            
            {/* Social Links */}
            <motion.div 
              className="flex space-x-2 sm:space-x-3 md:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a
                href="https://facebook.com/Agape-Pentecostal-Church-100304551730613"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl flex items-center justify-center text-white hover:text-blue-400 transition-all duration-300 border border-white/20 hover:border-white/40 hover:bg-white/20 shadow-lg hover:shadow-xl touch-manipulation"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Facebook className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300" />
              </motion.a>
              <motion.a
                href="https://instagram.com/prasadmachavarapu?igshid=1icl4cqfr69xz"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl flex items-center justify-center text-white hover:text-pink-400 transition-all duration-300 border border-white/20 hover:border-white/40 hover:bg-white/20 shadow-lg hover:shadow-xl touch-manipulation"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Instagram className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300" />
              </motion.a>
              <motion.a
                href="https://youtube.com/channel/UCjdJChq8HST_jDuZSElFz3Q"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl flex items-center justify-center text-white hover:text-red-400 transition-all duration-300 border border-white/20 hover:border-white/40 hover:bg-white/20 shadow-lg hover:shadow-xl touch-manipulation"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Youtube className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300" />
              </motion.a>
              <motion.a
                href="https://twitter.com/PrasadMachavar2?s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl flex items-center justify-center text-white hover:text-blue-400 transition-all duration-300 border border-white/20 hover:border-white/40 hover:bg-white/20 shadow-lg hover:shadow-xl touch-manipulation"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Twitter className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300" />
              </motion.a>
            </motion.div>
          </motion.div>



          {/* Quick Links */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-5 text-primary-200">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-1.5 md:space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                >
                  <button className="flex items-center text-white hover:text-primary-200 transition-colors group text-[10px] sm:text-xs md:text-sm lg:text-base touch-manipulation w-full text-left">
                    <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 mr-0.5 sm:mr-1 md:mr-1.5 lg:mr-2 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    <span className="truncate">{link}</span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Ministries */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-5 text-primary-200">Ministries</h4>
            <ul className="space-y-1 sm:space-y-1.5 md:space-y-2">
              {ministries.map((ministry, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                >
                  <button className="text-white hover:text-primary-200 transition-colors text-[10px] sm:text-xs md:text-sm lg:text-base touch-manipulation w-full text-left">
                    {ministry}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        
      </div>

      {/* Bottom Footer */}
      <motion.div 
        className="border-t border-white/20 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 py-4 sm:py-5 md:py-6">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-white text-xs sm:text-xs md:text-sm text-center md:text-left">
              © 2025 Agape Pentecostal Church. All rights reserved.
            </p>
            
             <div className="flex items-center w-full md:w-auto">
               <p className="text-white text-[10px] sm:text-xs md:text-sm text-center md:text-right leading-relaxed">
                 Need a professional website? We'd love to help!{' '}
                 <span className="block sm:inline mt-1 sm:mt-0">
                   Contact us at:{' '}
                 <a 
                   href="https://mail.google.com/mail/?view=cm&fs=1&to=vsnextgentech@gmail.com" 
                   target="_blank"
                   rel="noopener noreferrer"
                     className="text-primary-300 hover:text-primary-200 transition-colors underline font-medium text-[10px] sm:text-xs md:text-sm font-semibold inline-flex items-center gap-1 touch-manipulation break-all"
                 >
                     <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                     <span className="break-all">vsnextgentech@gmail.com</span>
                 </a>
                 {' '}or{' '}
                 <a 
                   href="tel:+919491917188" 
                     className="text-primary-300 hover:text-primary-200 transition-colors underline font-medium text-[10px] sm:text-xs md:text-sm font-semibold inline-flex items-center gap-1 touch-manipulation"
                 >
                     <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                     +91 9491917188
                 </a>
                 </span>
               </p>
             </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;