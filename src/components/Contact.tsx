import { MapPin, Phone, Mail, Users, Heart } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 9390232344",
      description: "Call us anytime for questions or prayer requests",
      color: "from-primary-500 to-secondary-500",
      action: "Call Now",
      status: "Available",
      accentColor: "bg-green-500"
    },
    {
      icon: Mail,
      title: "Email",
      content: "agapepentecostalchurchapc@gmail.com",
      description: "Send us a message and we'll respond within 24 hours",
      color: "from-secondary-500 to-accent-500",
      action: "Send Email",
      status: "Active",
      accentColor: "bg-purple-500"
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-primary-50 to-secondary-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-secondary-50/20 to-accent-50/30"></div>

      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12 xs:mb-14 sm:mb-16">
          <div className="inline-flex items-center px-3 xs:px-4 py-1.5 xs:py-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full border border-primary-200/50 mb-4 xs:mb-6">
            <span className="text-xs xs:text-sm font-medium text-primary-700">Get Connected</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 xs:mb-6 leading-tight px-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600">
              Contact Us
            </span>
          </h2>
          <div className="w-24 xs:w-32 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto mb-4 xs:mb-6 sm:mb-8 rounded-full"></div>
          <p className="text-base xs:text-lg sm:text-xl text-gray-600 max-w-3xl md:max-w-4xl mx-auto leading-relaxed px-4">
            We'd love to hear from you! Whether you have questions, need prayer, or want to get involved, 
            we're here to connect and support you on your faith journey.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 xs:gap-8 md:gap-10 lg:gap-12 mb-12 xs:mb-14 sm:mb-16 md:mb-20">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-4 xs:space-y-5 sm:space-y-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/90"
              >
                <div className={`w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${info.color} rounded-xl xs:rounded-2xl flex items-center justify-center mb-3 xs:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-sm xs:text-base sm:text-lg">{info.title}</h4>
                <p className="text-gray-800 font-semibold mb-2 break-words text-xs xs:text-sm sm:text-base">{info.content}</p>
                <p className="text-gray-600 text-xs xs:text-sm mb-3 xs:mb-4 leading-relaxed">{info.description}</p>
                {info.title === "Email" ? (
                  <a 
                    href="mailto:agapepentecostalchurchapc@gmail.com"
                    className={`w-full py-2 xs:py-2.5 sm:py-3 px-3 xs:px-4 bg-gradient-to-r ${info.color} text-white rounded-lg xs:rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-block text-center text-xs xs:text-sm sm:text-base`}
                  >
                    {info.action}
                  </a>
                ) : info.title === "Phone" ? (
                  <a 
                    href="tel:+919390232344"
                    className={`w-full py-2 xs:py-2.5 sm:py-3 px-3 xs:px-4 bg-gradient-to-r ${info.color} text-white rounded-lg xs:rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-block text-center text-xs xs:text-sm sm:text-base`}
                  >
                    {info.action}
                  </a>
                ) : (
                  <button className={`w-full py-2 xs:py-2.5 sm:py-3 px-3 xs:px-4 bg-gradient-to-r ${info.color} text-white rounded-lg xs:rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-xs xs:text-sm sm:text-base`}>
                    {info.action}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Maps Section - Now in the center */}
          <div className="lg:col-span-2 space-y-4 xs:space-y-5 sm:space-y-6">
            {/* Main Church Map */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl xs:rounded-2xl shadow-xl overflow-hidden border border-white/50">
              <div className="h-48 xs:h-52 sm:h-56 md:h-64 lg:h-72 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.1234567890123!2d80.6489!3d16.5069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDMwJzI0LjgiTiA4MMKwMzgnNTYuMCJF!5e0!3m2!1sen!2sin!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center p-3 xs:p-4">
                  <div className="text-center bg-white/95 backdrop-blur-sm rounded-xl xs:rounded-2xl p-2 xs:p-3 sm:p-4 max-w-xs shadow-2xl">
                    <MapPin className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-primary-600 mx-auto mb-1 xs:mb-2" />
                    <h4 className="text-sm xs:text-base sm:text-lg font-bold text-gray-900 mb-1 xs:mb-2">Bhavanipuram Church</h4>
                    <p className="text-gray-700 text-xs mb-1 xs:mb-2 leading-relaxed">Gurukrupa Rd, Kamakoti Nagar, VD Puram, Vijayawada</p>
                    <div className="bg-primary-50 rounded-lg p-1.5 xs:p-2 mb-2 xs:mb-3">
                      <p className="text-primary-800 font-semibold text-xs mb-1">Service Times:</p>
                      <p className="text-primary-700 text-xs">Sunday Morning: 8:30 AM - 11:00 AM</p>
                      <p className="text-primary-700 text-xs">Sunday School: 9:00 AM - 11:00 AM</p>
                    </div>
                    <a 
                      href="https://maps.app.goo.gl/FzWhZsGQTtNoy49LA" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl text-xs sm:text-sm"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Gollapudi Church Map */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl xs:rounded-2xl shadow-xl overflow-hidden border border-white/50">
              <div className="h-48 xs:h-52 sm:h-56 md:h-64 lg:h-72 bg-gradient-to-br from-secondary-100 to-accent-100 flex items-center justify-center relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.1234567890123!2d80.6489!3d16.5069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDMwJzI0LjgiTiA4MMKwMzgnNTYuMCJF!5e0!3m2!1sen!2sin!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center p-3 xs:p-4">
                  <div className="text-center bg-white/95 backdrop-blur-sm rounded-xl xs:rounded-2xl p-2 xs:p-3 sm:p-4 max-w-xs shadow-2xl">
                    <MapPin className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-secondary-600 mx-auto mb-1 xs:mb-2" />
                    <h4 className="text-sm xs:text-base sm:text-lg font-bold text-gray-900 mb-1 xs:mb-2">Gollapudi Church</h4>
                    <p className="text-gray-700 text-xs mb-1 xs:mb-2 leading-relaxed">Gollapudi, Vijayawada, Andhra Pradesh</p>
                    <div className="bg-secondary-50 rounded-lg p-1.5 xs:p-2 mb-2 xs:mb-3">
                      <p className="text-secondary-800 font-semibold text-xs mb-1">Service Times:</p>
                      <p className="text-secondary-700 text-xs">Sunday Evening: 6:30 PM - 8:30 PM</p>
                      <p className="text-secondary-700 text-xs">Sunday School: 7:30 PM - 8:30 PM</p>
                    </div>
                    <a 
                      href="https://maps.app.goo.gl/aigoDKEeq5YVC9Ac6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-gradient-to-r from-secondary-600 to-accent-600 text-white px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-lg hover:from-secondary-700 hover:to-accent-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl text-xs sm:text-sm"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-8 xs:mt-10 sm:mt-12">
          <div className="relative bg-gradient-to-br from-primary-900 via-secondary-900 to-accent-900 rounded-xl xs:rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8 text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10"></div>
            <div className="absolute top-3 xs:top-4 sm:top-6 right-3 xs:right-4 sm:right-6 opacity-20">
              <Heart className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            </div>
            <div className="absolute bottom-3 xs:bottom-4 sm:bottom-6 left-3 xs:left-4 sm:left-6 opacity-20">
              <Users className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            </div>

            <div className="relative z-10">
              <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold mb-2 xs:mb-3 px-2">Ready to Visit?</h3>
              <p className="text-sm xs:text-base sm:text-lg mb-3 xs:mb-4 sm:mb-6 opacity-90 max-w-xl md:max-w-2xl mx-auto leading-relaxed px-4">
                Experience the warmth of our church and the power of worship. 
                We can't wait to welcome you!
              </p>
              
              <div className="flex flex-row gap-2 xs:gap-3 justify-center items-center px-4">
                <a 
                  href="tel:+919390232344"
                  className="group bg-white text-primary-600 px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg xs:rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl text-xs xs:text-sm sm:text-base w-full sm:w-auto"
                >
                  <Phone className="w-3 h-3 xs:w-4 xs:h-4 mr-1.5 xs:mr-2 flex-shrink-0" />
                  <span className="truncate">Call Us Now</span>
                </a>
                <a 
                  href="mailto:agapepentecostalchurchapc@gmail.com"
                  className="group border-2 border-white text-white px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg xs:rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 flex items-center text-xs xs:text-sm sm:text-base w-full sm:w-auto"
                >
                  <Mail className="w-3 h-3 xs:w-4 xs:h-4 mr-1.5 xs:mr-2 flex-shrink-0" />
                  <span className="truncate">Send Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;