import { Heart, Users, BookOpen, Sparkles, ArrowRight, MapPin, Phone } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Love",
      description: "We believe in God's unconditional love and strive to share it with everyone we meet."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building authentic relationships where everyone belongs and no one walks alone."
    },
    {
      icon: BookOpen,
      title: "Truth",
      description: "Grounded in Biblical truth, we seek to understand and live by God's Word."
    },
    {
      icon: Sparkles,
      title: "Transformation",
      description: "Witnessing lives changed through the power of the Holy Spirit and God's grace."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Agape</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over two decades, Agape Pentecostal Church has been a beacon of hope, 
            love, and spiritual growth in our community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded in 2006, Agape Pentecostal Church began as a small gathering of believers 
                with a big vision: to create a place where God's love could transform lives and 
                build a stronger community. What started with just a few families has grown into 
                a vibrant congregation of hundreds.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we continue to be guided by the same principles that founded our church - 
                unconditional love, authentic worship, and a commitment to serving both our 
                congregation and the broader community with excellence and compassion.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="leading-relaxed text-lg">
                To create a welcoming community where people can encounter God's love, 
                grow in their faith, and discover their purpose through meaningful 
                relationships and transformative worship experiences.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-6 h-6 text-primary-600 mr-3" />
                Our Location
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  We are located in the heart of Vijayawada, serving the community of Kamakoti Nagar and surrounding areas. 
                  Our church is easily accessible and provides a welcoming environment for all visitors.
                </p>
                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 mb-2">Church Address:</p>
                  <p className="text-primary-600 font-medium">
                    Gurukrupa Rd, Kamakoti Nagar, VD Puram, Vijayawada, Andhra Pradesh 520012
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="https://maps.app.goo.gl/FzWhZsGQTtNoy49LA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-3 rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 font-medium"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </a>
                  <a 
                    href="tel:+919390232344"
                    className="inline-flex items-center justify-center bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-all duration-300 font-medium"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/8468103/pexels-photo-8468103.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Church Community" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-semibold">Building Community</p>
                <p className="text-white/80">One heart at a time</p>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-600">20+</p>
                <p className="text-gray-600 text-sm">Years Serving</p>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="text-center">
                <p className="text-3xl font-bold text-secondary-600">200+</p>
                <p className="text-gray-600 text-sm">Church Family</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do and shape who we are as a church community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center mb-6">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Be Part of Our Family?</h3>
            <p className="text-lg mb-6 opacity-90">
              We'd love to welcome you with open arms. Come experience the love and community that makes Agape special.
            </p>
            <button className="bg-white text-primary-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center group">
              Plan Your Visit
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;