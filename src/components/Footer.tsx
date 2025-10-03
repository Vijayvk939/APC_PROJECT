
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8">
          {/* Church Info */}
          <div className="lg:col-span-2">
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
            <div className="flex space-x-2 xs:space-x-3 sm:space-x-4">
              <a
                href="https://facebook.com/Agape-Pentecostal-Church-100304551730613"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-md rounded-lg xs:rounded-xl flex items-center justify-center text-white hover:text-blue-400 transition-all duration-300 border border-white/20 hover:border-white/40 hover:bg-white/20 hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Facebook className="w-4 h-4 xs:w-5 xs:h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://instagram.com/prasadmachavarapu?igshid=1icl4cqfr69xz"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-md rounded-lg xs:rounded-xl flex items-center justify-center text-white hover:text-pink-400 transition-all duration-300 border border-white/20 hover:border-white/40 hover:bg-white/20 hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Instagram className="w-4 h-4 xs:w-5 xs:h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://youtube.com/channel/UCjdJChq8HST_jDuZSElFz3Q"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-md rounded-lg xs:rounded-xl flex items-center justify-center text-white hover:text-red-400 transition-all duration-300 border border-white/20 hover:border-white/40 hover:bg-white/20 hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Youtube className="w-4 h-4 xs:w-5 xs:h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://twitter.com/PrasadMachavar2?s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-md rounded-lg xs:rounded-xl flex items-center justify-center text-white hover:text-blue-400 transition-all duration-300 border border-white/20 hover:border-white/40 hover:bg-white/20 hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <MessageSquare className="w-4 h-4 xs:w-5 xs:h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>



          {/* Quick Links */}
          <div>
            <h4 className="text-base xs:text-lg font-bold mb-4 xs:mb-5 sm:mb-6 text-primary-200">Quick Links</h4>
            <ul className="space-y-2 xs:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button className="flex items-center text-white hover:text-primary-200 transition-colors group text-sm xs:text-base">
                    <ChevronRight className="w-3 h-3 xs:w-4 xs:h-4 mr-1.5 xs:mr-2 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    <span className="truncate">{link}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h4 className="text-base xs:text-lg font-bold mb-4 xs:mb-5 sm:mb-6 text-primary-200">Ministries</h4>
            <ul className="space-y-2 xs:space-y-3">
              {ministries.map((ministry, index) => (
                <li key={index}>
                  <button className="text-white hover:text-primary-200 transition-colors text-sm xs:text-base">
                    {ministry}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Service Times */}
        <div className="border-t border-white/20 mt-8 xs:mt-10 sm:mt-12 pt-6 xs:pt-7 sm:pt-8">
          <div className="bg-gradient-to-br from-white/20 via-white/10 to-white/5 rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 border border-white/30 backdrop-blur-sm shadow-2xl">
            <h4 className="text-lg xs:text-xl font-bold mb-4 xs:mb-5 sm:mb-6 text-center text-white">Service Times</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 text-center">
              <div className="bg-gradient-to-br from-primary-900/40 to-primary-800/30 rounded-lg xs:rounded-xl p-3 xs:p-4 border border-primary-400/30 hover:border-primary-300/50 transition-all duration-300 hover:scale-105">
                <p className="font-semibold text-primary-200 text-sm xs:text-base">Sunday Service</p>
                <p className="text-base xs:text-lg font-bold text-white">8:30 AM - 11:00 AM</p>
                <p className="text-white/80 text-xs xs:text-sm">Bhavanipuram</p>
              </div>
              <div className="bg-gradient-to-br from-secondary-900/40 to-secondary-800/30 rounded-lg xs:rounded-xl p-3 xs:p-4 border border-secondary-400/30 hover:border-secondary-300/50 transition-all duration-300 hover:scale-105">
                <p className="font-semibold text-secondary-200 text-sm xs:text-base">Sunday 2nd Service</p>
                <p className="text-base xs:text-lg font-bold text-white">6:30 PM - 8:30 PM</p>
                <p className="text-white/80 text-xs xs:text-sm">Gollapudi</p>
              </div>
              <div className="bg-gradient-to-br from-accent-900/40 to-accent-800/30 rounded-lg xs:rounded-xl p-3 xs:p-4 border border-accent-400/30 hover:border-accent-300/50 transition-all duration-300 hover:scale-105">
                <p className="font-semibold text-accent-200 text-sm xs:text-base">Friday Fasting Prayer</p>
                <p className="text-lg xs:text-xl sm:text-2xl font-bold text-white">6:30 PM</p>
                <p className="text-white/80 text-xs xs:text-sm">Fridays</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20 relative z-10">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-4 xs:py-5 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 xs:gap-4">
            <p className="text-white text-xs xs:text-sm text-center md:text-left">
              © 2025 Agape Pentecostal Church. All rights reserved.
            </p>
            
             <div className="flex items-center">
               <p className="text-white text-xs xs:text-sm">
                 Need a professional website? We'd love to help!{' '} Contact us at:
                 <a 
                   href="mailto:vsnextgentech@gmail.com" 
                   className="text-primary-300 hover:text-primary-200 transition-colors underline font-medium"
                 >
                   vsnextgentech@gmail.com
                 </a>
               </p>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;