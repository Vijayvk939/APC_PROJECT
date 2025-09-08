import { MapPin, Phone, Mail, Users, Heart } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 9390232344",
      description: "Call us anytime for questions or prayer requests",
      color: "from-blue-500 to-teal-500",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email",
      content: "agapepentecostalchurchapc@gmail.com",
      description: "Send us a message and we'll respond within 24 hours",
      color: "from-purple-500 to-pink-500",
      action: "Send Email"
    }
  ];

  return (
    <section id="contact" className="pt-4 pb-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-indigo-50/30"></div>
      <div className="absolute top-20 left-20 animate-bounce">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full backdrop-blur-sm border border-white/20"></div>
      </div>
      <div className="absolute bottom-32 right-32 animate-pulse">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full backdrop-blur-sm border border-white/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/50 mb-6">
            <span className="text-sm font-medium text-blue-700">Get Connected</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
              Contact Us
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We'd love to hear from you! Whether you have questions, need prayer, or want to get involved, 
            we're here to connect and support you on your faith journey.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/90"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">{info.title}</h4>
                <p className="text-gray-800 font-semibold mb-2 break-words">{info.content}</p>
                <p className="text-gray-600 text-sm mb-4">{info.description}</p>
                {info.title === "Email" ? (
                  <a 
                    href="mailto:agapepentecostalchurchapc@gmail.com"
                    className={`w-full py-3 px-4 bg-gradient-to-r ${info.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-block text-center`}
                  >
                    {info.action}
                  </a>
                ) : info.title === "Phone" ? (
                  <a 
                    href="tel:+919390232344"
                    className={`w-full py-3 px-4 bg-gradient-to-r ${info.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-block text-center`}
                  >
                    {info.action}
                  </a>
                ) : (
                  <button className={`w-full py-3 px-4 bg-gradient-to-r ${info.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                    {info.action}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Maps Section - Now in the center */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Church Map */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/50">
              <div className="h-80 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative">
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
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                  <div className="text-center bg-white/95 backdrop-blur-sm rounded-2xl p-6 max-w-sm shadow-2xl">
                    <MapPin className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Main Church</h4>
                    <p className="text-gray-700 text-sm mb-4">Gurukrupa Rd, Kamakoti Nagar, VD Puram, Vijayawada</p>
                    <a 
                      href="https://maps.app.goo.gl/FzWhZsGQTtNoy49LA" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Gollapudi Church Map */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/50">
              <div className="h-80 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                <iframe
                  src="https://maps.app.goo.gl/yWjFoRix5TvbEhtx6"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                  <div className="text-center bg-white/95 backdrop-blur-sm rounded-2xl p-6 max-w-sm shadow-2xl">
                    <MapPin className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Gollapudi Church</h4>
                    <p className="text-gray-700 text-sm mb-4">Sunday Evening Service: 6:30 PM - 8:30 PM</p>
                    <a 
                      href="https://maps.app.goo.gl/yWjFoRix5TvbEhtx6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
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
        <div className="text-center">
          <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-12 text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10"></div>
            <div className="absolute top-8 right-8 opacity-20">
              <Heart className="w-20 h-20" />
            </div>
            <div className="absolute bottom-8 left-8 opacity-20">
              <Users className="w-16 h-16" />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Visit?</h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Experience the warmth of our community and the power of worship. 
                We can't wait to welcome you!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="tel:+919390232344"
                  className="group bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
                </a>
                <a 
                  href="mailto:agapepentecostalchurchapc@gmail.com"
                  className="group border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
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