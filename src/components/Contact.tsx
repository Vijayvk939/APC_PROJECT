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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full border border-primary-200/50 mb-4 md:mb-6">
            <span className="text-sm font-medium text-primary-700">Get Connected</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600">
              Contact Us
            </span>
          </h2>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto mb-6 md:mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl md:max-w-4xl mx-auto leading-relaxed px-4">
            We'd love to hear from you! Whether you have questions, need prayer, or want to get involved, 
            we're here to connect and support you on your faith journey.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-16 md:mb-20">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-4 md:space-y-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-5 md:p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/90"
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mb-3 md:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-base md:text-lg">{info.title}</h4>
                <p className="text-gray-800 font-semibold mb-2 break-words text-sm md:text-base">{info.content}</p>
                <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">{info.description}</p>
                {info.title === "Email" ? (
                  <a 
                    href="mailto:agapepentecostalchurchapc@gmail.com"
                    className={`w-full py-2.5 md:py-3 px-3 md:px-4 bg-gradient-to-r ${info.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-block text-center text-sm md:text-base`}
                  >
                    {info.action}
                  </a>
                ) : info.title === "Phone" ? (
                  <a 
                    href="tel:+919390232344"
                    className={`w-full py-2.5 md:py-3 px-3 md:px-4 bg-gradient-to-r ${info.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-block text-center text-sm md:text-base`}
                  >
                    {info.action}
                  </a>
                ) : (
                  <button className={`w-full py-2.5 md:py-3 px-3 md:px-4 bg-gradient-to-r ${info.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm md:text-base`}>
                    {info.action}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Maps Section - Now in the center */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            {/* Main Church Map */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/50">
              <div className="h-56 md:h-64 lg:h-72 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center relative">
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
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center p-4">
                  <div className="text-center bg-white/95 backdrop-blur-sm rounded-2xl p-3 md:p-4 max-w-xs shadow-2xl">
                    <MapPin className="w-6 h-6 md:w-8 md:h-8 text-primary-600 mx-auto mb-2" />
                    <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2">Bhavanipuram Church</h4>
                    <p className="text-gray-700 text-xs mb-2 leading-relaxed">Gurukrupa Rd, Kamakoti Nagar, VD Puram, Vijayawada</p>
                    <div className="bg-primary-50 rounded-lg p-2 mb-3">
                      <p className="text-primary-800 font-semibold text-xs mb-1">Service Times:</p>
                      <p className="text-primary-700 text-xs">Sunday Morning: 8:30 AM - 11:00 AM</p>
                      <p className="text-primary-700 text-xs">Sunday School: 9:00 AM - 11:00 AM</p>
                    </div>
                    <a 
                      href="https://maps.app.goo.gl/FzWhZsGQTtNoy49LA" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl text-xs md:text-sm"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Gollapudi Church Map */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/50">
              <div className="h-56 md:h-64 lg:h-72 bg-gradient-to-br from-secondary-100 to-accent-100 flex items-center justify-center relative">
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
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center p-4">
                  <div className="text-center bg-white/95 backdrop-blur-sm rounded-2xl p-3 md:p-4 max-w-xs shadow-2xl">
                    <MapPin className="w-6 h-6 md:w-8 md:h-8 text-secondary-600 mx-auto mb-2" />
                    <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2">Gollapudi Church</h4>
                    <p className="text-gray-700 text-xs mb-2 leading-relaxed">Gollapudi, Vijayawada, Andhra Pradesh</p>
                    <div className="bg-secondary-50 rounded-lg p-2 mb-3">
                      <p className="text-secondary-800 font-semibold text-xs mb-1">Service Times:</p>
                      <p className="text-secondary-700 text-xs">Sunday Evening: 6:30 PM - 8:30 PM</p>
                      <p className="text-secondary-700 text-xs">Sunday School: 7:30 PM - 8:30 PM</p>
                    </div>
                    <a 
                      href="https://maps.app.goo.gl/aigoDKEeq5YVC9Ac6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-gradient-to-r from-secondary-600 to-accent-600 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg hover:from-secondary-700 hover:to-accent-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl text-xs md:text-sm"
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
        <div className="text-center mt-8 md:mt-12">
          <div className="relative bg-gradient-to-br from-primary-900 via-secondary-900 to-accent-900 rounded-2xl md:rounded-3xl p-6 md:p-8 text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10"></div>
            <div className="absolute top-4 md:top-6 right-4 md:right-6 opacity-20">
              <Heart className="w-12 h-12 md:w-16 md:h-16" />
            </div>
            <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 opacity-20">
              <Users className="w-8 h-8 md:w-12 md:h-12" />
            </div>

            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3">Ready to Visit?</h3>
              <p className="text-base md:text-lg mb-4 md:mb-6 opacity-90 max-w-xl md:max-w-2xl mx-auto leading-relaxed px-4">
                Experience the warmth of our community and the power of worship. 
                We can't wait to welcome you!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center px-4">
                <a 
                  href="tel:+919390232344"
                  className="group bg-white text-primary-600 px-4 md:px-6 py-2.5 md:py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl text-sm md:text-base w-full sm:w-auto"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us Now
                </a>
                <a 
                  href="mailto:agapepentecostalchurchapc@gmail.com"
                  className="group border-2 border-white text-white px-4 md:px-6 py-2.5 md:py-3 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 flex items-center text-sm md:text-base w-full sm:w-auto"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
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