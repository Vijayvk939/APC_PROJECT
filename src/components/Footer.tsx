import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, MessageSquare, ChevronRight } from 'lucide-react';

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
    <footer className="bg-gradient-to-br from-primary-800 via-secondary-800 to-accent-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-purple-mesh opacity-10"></div>
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-12 xs:py-14 sm:py-16 relative z-10">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {/* Church Info */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center mb-4 xs:mb-5 sm:mb-6">
              <div className="relative mr-2 xs:mr-3">
                <img 
                  src={logoImage} 
                  alt="Agape Pentecostal Church Logo" 
                  className="h-10 w-10 xs:h-12 xs:w-12 relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full blur-lg opacity-30"></div>
              </div>
              <div>
                <h3 className="text-xl xs:text-2xl font-bold bg-gradient-to-r from-primary-300 to-secondary-300 bg-clip-text text-transparent">AGAPE</h3>
                <p className="text-white text-sm xs:text-base">Pentecostal Church</p>
              </div>
            </div>
            
            <p className="text-white leading-relaxed mb-4 xs:mb-5 sm:mb-6 max-w-md text-sm xs:text-base">
              Building a church where every heart finds home, every soul discovers purpose, 
              and every life reflects God's unconditional love.
            </p>
            
            <div className="space-y-2 xs:space-y-3 mb-4 xs:mb-5 sm:mb-6">
              <div className="flex items-start text-white hover:text-white transition-colors">
                <MapPin className="w-4 h-4 xs:w-5 xs:h-5 mr-2 xs:mr-3 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-xs xs:text-sm leading-relaxed">Gurukrupa Rd, Kamakoti Nagar, VD Puram, Vijayawada, Andhra Pradesh 520012</span>
              </div>
              <div className="flex items-center text-white hover:text-white transition-colors">
                <Phone className="w-4 h-4 xs:w-5 xs:h-5 mr-2 xs:mr-3 text-primary-400 flex-shrink-0" />
                <span className="text-sm xs:text-base">+91 9390232344</span>
              </div>
              <div className="flex items-start text-white hover:text-white transition-colors">
                <Mail className="w-4 h-4 xs:w-5 xs:h-5 mr-2 xs:mr-3 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-xs xs:text-sm leading-relaxed break-all">agapepentecostalchurchapc@gmail.com</span>
              </div>
            </div>
            
            {/* Social Links */}
            <motion.div 
              className="flex space-x-2 xs:space-x-3 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a
                href="https://facebook.com/Agape-Pentecostal-Church-100304551730613"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-md rounded-lg xs:rounded-xl flex items-center justify-center text-white hover:text-blue-400 transition-all duration-300 border border-white/20 hover:border-white/40 hover:bg-white/20 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Facebook className="w-4 h-4 xs:w-5 xs:h-5 group-hover:scale-110 transition-transform duration-300" />
              </motion.a>
              <motion.a
                href="https://instagram.com/prasadmachavarapu?igshid=1icl4cqfr69xz"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-md rounded-lg xs:rounded-xl flex items-center justify-center text-white hover:text-pink-400 transition-all duration-300 border border-white/20 hover:border-white/40 hover:bg-white/20 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Instagram className="w-4 h-4 xs:w-5 xs:h-5 group-hover:scale-110 transition-transform duration-300" />
              </motion.a>
              <motion.a
                href="https://youtube.com/channel/UCjdJChq8HST_jDuZSElFz3Q"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-md rounded-lg xs:rounded-xl flex items-center justify-center text-white hover:text-red-400 transition-all duration-300 border border-white/20 hover:border-white/40 hover:bg-white/20 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Youtube className="w-4 h-4 xs:w-5 xs:h-5 group-hover:scale-110 transition-transform duration-300" />
              </motion.a>
              <motion.a
                href="https://twitter.com/PrasadMachavar2?s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-md rounded-lg xs:rounded-xl flex items-center justify-center text-white hover:text-blue-400 transition-all duration-300 border border-white/20 hover:border-white/40 hover:bg-white/20 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <MessageSquare className="w-4 h-4 xs:w-5 xs:h-5 group-hover:scale-110 transition-transform duration-300" />
              </motion.a>
            </motion.div>
          </motion.div>



          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-base xs:text-lg font-bold mb-4 xs:mb-5 sm:mb-6 text-primary-200">Quick Links</h4>
            <ul className="space-y-2 xs:space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                >
                  <button className="flex items-center text-white hover:text-primary-200 transition-colors group text-sm xs:text-base">
                    <ChevronRight className="w-3 h-3 xs:w-4 xs:h-4 mr-1.5 xs:mr-2 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    <span className="truncate">{link}</span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Ministries */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-base xs:text-lg font-bold mb-4 xs:mb-5 sm:mb-6 text-primary-200">Ministries</h4>
            <ul className="space-y-2 xs:space-y-3">
              {ministries.map((ministry, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                >
                  <button className="text-white hover:text-primary-200 transition-colors text-sm xs:text-base">
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
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-4 xs:py-5 sm:py-6">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center gap-3 xs:gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-white text-xs xs:text-sm text-center md:text-left">
              © 2025 Agape Pentecostal Church. All rights reserved.
            </p>
            
             <div className="flex items-center">
               <p className="text-white text-xs xs:text-sm text-center md:text-right">
                 Need a professional website? We'd love to help!{' '}Contact us at:{' '}
                 <a 
                   href="https://mail.google.com/mail/?view=cm&fs=1&to=vsnextgentech@gmail.com" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-primary-300 hover:text-primary-200 transition-colors underline font-medium text-xs xs:text-sm sm:text-base font-semibold inline-flex items-center gap-1.5"
                 >
                   <Mail className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 flex-shrink-0 mt-0.5" />vsnextgentech@gmail.com
                 </a>
                 {' '}or{' '}
                 <a 
                   href="tel:+919491917188" 
                   className="text-primary-300 hover:text-primary-200 transition-colors underline font-medium text-xs xs:text-sm sm:text-base font-semibold inline-flex items-center gap-1.5"
                 >
                   <Phone className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 flex-shrink-0 mt-0.5" />+91 9491917188
                 </a>
               </p>
             </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;