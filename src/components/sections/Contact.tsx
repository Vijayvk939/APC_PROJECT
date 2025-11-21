import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import { contactInfo } from '@/data/contact';

const Contact = () => {

  return (
    <section id="contact" className="pt-8 md:pt-12 lg:pt-16 pb-4 md:pb-6 lg:pb-8 bg-gradient-to-br from-slate-50 via-primary-50 to-secondary-50 relative overflow-hidden">
      {/* Background Elements */}
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
            <Phone className="w-3 h-3 xs:w-4 xs:h-4 text-primary-600 mr-1.5 xs:mr-2" />
            <span className="text-xs xs:text-sm font-medium text-primary-700">Get Connected</span>
          </motion.div>
          <motion.h2 
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 xs:mb-6 leading-tight px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600">
              Contact Us
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
            className="text-base xs:text-lg sm:text-xl text-gray-600 max-w-3xl md:max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We'd love to hear from you! Whether you have questions, need prayer, or want to get involved, 
            we're here to connect and support you on your faith journey.
          </motion.p>
        </motion.div>

        {/* Maps Section - Bottom Section */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {/* Bhavanipuram Church Map */}
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-xl xs:rounded-2xl shadow-xl overflow-hidden border border-white/50"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-64 xs:h-72 sm:h-80 md:h-96 relative">
              <iframe
                src="https://maps.google.com/maps?q=Agape+Pentecostal+Church&hl=en&ll=16.5263063,80.5999032&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
            <div className="p-4 xs:p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg xs:text-xl font-bold text-gray-900">Bhavanipuram Church</h4>
                  <p className="text-sm text-gray-600">Gurukrupa Rd, Kamakoti Nagar, VD Puram, Vijayawada</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-3 xs:p-4 mb-4 border border-primary-200/50">
                <p className="text-primary-800 font-semibold text-sm mb-2">Service Times:</p>
                <p className="text-primary-700 text-sm mb-1">Sunday Morning: 8:30 AM - 11:00 AM</p>
                <p className="text-primary-700 text-sm">Sunday School: 9:00 AM - 11:00 AM</p>
              </div>
              <a 
                href="https://maps.app.goo.gl/TtSY3e6czcttqpndA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-2.5 rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl text-sm"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Get Directions
              </a>
            </div>
          </motion.div>

          {/* Gollapudi Church Map */}
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-xl xs:rounded-2xl shadow-xl overflow-hidden border border-white/50"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="h-64 xs:h-72 sm:h-80 md:h-96 relative">
              <iframe
                src="https://maps.google.com/maps?q=Agape+Pentecostal+church+Gollapudi&hl=en&ll=16.5509275,80.5827769&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
            <div className="p-4 xs:p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg xs:text-xl font-bold text-gray-900">Gollapudi Church</h4>
                  <p className="text-sm text-gray-600">Gollapudi, Vijayawada, Andhra Pradesh</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-secondary-50 to-accent-50 rounded-lg p-3 xs:p-4 mb-4 border border-secondary-200/50">
                <p className="text-secondary-800 font-semibold text-sm mb-2">Service Times:</p>
                <p className="text-secondary-700 text-sm mb-1">Sunday Evening: 6:30 PM - 8:30 PM</p>
                <p className="text-secondary-700 text-sm">Sunday School: 7:30 PM - 8:30 PM</p>
              </div>
              <a 
                href="https://maps.app.goo.gl/Gv4g4vY5BAHWFkMAA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-gradient-to-r from-secondary-600 to-accent-600 text-white px-4 py-2.5 rounded-lg hover:from-secondary-700 hover:to-accent-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl text-sm"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Get Directions
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Information Cards - Matching Regular Prayer Programs Style */}
        <motion.div 
          className="mt-8 xs:mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-xl xs:rounded-2xl p-3 xs:p-4 sm:p-5 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col"
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
                <div className="flex items-start gap-3 xs:gap-4 mb-2 xs:mb-2.5">
                  <div 
                    className={`w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                  >
                    <info.icon className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-base xs:text-lg sm:text-xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors duration-300 leading-tight">{info.title}</h4>
                      <span className={`inline-flex items-center px-2 py-0.5 text-xs font-medium ${info.accentColor} text-white rounded-full flex-shrink-0 ml-2`}>
                        {info.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-gradient-to-r from-primary-50 to-secondary-50 px-2 xs:px-3 py-1.5 rounded-lg border border-primary-200/50">
                      <p className="text-primary-600 font-bold text-xs xs:text-sm break-words">{info.content}</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-xs xs:text-sm mb-3">{info.description}</p>
                
                {/* Action Button */}
                {info.title === "Email" ? (
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=agapepentecostalchurchapc@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${info.color} text-white px-3 py-2 rounded-lg hover:shadow-xl transition-all duration-300 font-semibold shadow-lg text-xs xs:text-sm`}
                  >
                    <info.icon className="w-3.5 h-3.5 mr-2" />
                    {info.action}
                  </a>
                ) : info.title === "Phone" ? (
                  <a 
                    href="tel:+919390232344"
                    className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${info.color} text-white px-3 py-2 rounded-lg hover:shadow-xl transition-all duration-300 font-semibold shadow-lg text-xs xs:text-sm`}
                  >
                    <info.icon className="w-3.5 h-3.5 mr-2" />
                    {info.action}
                  </a>
                ) : (
                  <button className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${info.color} text-white px-3 py-2 rounded-lg hover:shadow-xl transition-all duration-300 font-semibold shadow-lg text-xs xs:text-sm`}>
                    <info.icon className="w-3.5 h-3.5 mr-2" />
                    {info.action}
                  </button>
                )}
              </motion.div>
            ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;