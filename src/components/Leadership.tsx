import { Phone, Heart, BookOpen, Users, Star, Sparkles, ArrowRight } from 'lucide-react';

// Import images
import pastorImage from '/images/SamuelPrasad.jpg';

const Leadership = () => {
  const pastorInfo = {
    name: "Pastor Prasad Machavarapu",
    title: "Senior Pastor",
    image: pastorImage,
    bio: "Pastor Prasad Machavarapu has been faithfully serving the Agape Pentecostal Church community in Vijayawada with passion, wisdom, and unwavering commitment to God's Word. His heart for people and dedication to biblical truth has helped countless individuals grow in their faith journey through powerful messages and glorious songs.",
    education: [
      "Diploma in Theology - South India Biblical Seminary",
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
    <section id="leadership" className="pt-4 pb-24 bg-gradient-to-br from-slate-50 via-primary-50 to-secondary-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-secondary-50/20 to-accent-50/30"></div>
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full border border-primary-200/50 mb-6">
            <Sparkles className="w-4 h-4 text-primary-600 mr-2" />
            <span className="text-xs font-medium text-primary-700">Meet Our Leaders</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600">
              Spiritual Leadership
            </span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto mb-6 rounded-full shadow-xl"></div>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated servants who guide our church family with wisdom, 
            compassion, and a heart for God's people. Experience the transformative 
            leadership that shapes our spiritual community.
          </p>
        </div>

        {/* Enhanced Senior Pastor Section */}
        <div className="mb-20">
          <div className="relative bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/50">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-secondary-500/3 to-accent-500/5"></div>
            
            <div className="grid lg:grid-cols-2 gap-0 relative z-10">
              {/* Enhanced Pastor Image */}
              <div className="relative">
                <div className="lg:h-[600px] h-80 flex items-center justify-center p-6">
                  <div className="relative w-full h-full">
                    <img 
                      src={pastorInfo.image}
                      alt={pastorInfo.name}
                      className="w-full h-full object-cover rounded-3xl shadow-2xl"
                      style={{ objectPosition: 'center top' }}
                    />
                    
                    {/* Enhanced Floating Stats */}
                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-2xl border border-white/50">
                      <div className="flex items-center text-primary-600">
                        <Star className="w-3 h-3 mr-2 text-yellow-500" />
                        <span className="font-semibold text-xs">{pastorInfo.experience}</span>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>

              {/* Enhanced Pastor Info */}
              <div className="p-6 lg:p-8 flex flex-col justify-center lg:min-h-[600px] bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm">
                <div className="mb-6">
                  <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full border border-primary-200/50 mb-3">
                    <span className="text-xs font-medium text-primary-700">Founding Pastor</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
                    {pastorInfo.name}
                  </h3>
                  <p className="text-lg text-primary-600 font-semibold mb-4">{pastorInfo.title}</p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6 text-base">
                    {pastorInfo.bio}
                  </p>
                </div>

                {/* Enhanced Education */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center text-base">
                    <BookOpen className="w-4 h-4 mr-2 text-primary-600" />
                    Education & Training
                  </h4>
                  <ul className="space-y-2">
                    {pastorInfo.education.map((edu, index) => (
                      <li key={index} className="text-gray-700 flex items-start text-sm">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enhanced Specialties */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center text-base">
                    <Heart className="w-4 h-4 mr-2 text-accent-600" />
                    Ministry Focus
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {pastorInfo.specialties.map((specialty, index) => (
                      <span 
                        key={index}
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <div className="relative bg-gradient-to-br from-primary-800 via-secondary-800 to-accent-800 rounded-3xl p-8 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10"></div>
            
            {/* Floating Icons */}
            <div className="absolute top-6 right-6 opacity-20">
              <Users className="w-16 h-16" />
            </div>
            <div className="absolute bottom-6 left-6 opacity-20">
              <Heart className="w-12 h-12" />
            </div>

            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Connect with Our Leadership</h3>
              <p className="text-base mb-4 opacity-90 max-w-3xl mx-auto leading-relaxed">
                Our pastors and ministry leaders are here to support you on your faith journey. 
                Don't hesitate to reach out with questions, prayer requests, or to learn more about our ministry.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                <a 
                  href="#contact" 
                  className="bg-white text-primary-600 px-4 py-2 rounded-xl font-semibold flex items-center shadow-lg text-sm"
                >
                  <Users className="w-3 h-3 mr-2" />
                  Get in Touch
                  <ArrowRight className="w-3 h-3 ml-2" />
                </a>
                <a 
                  href="tel:+919390232344"
                  className="border-2 border-white text-white px-4 py-2 rounded-xl font-semibold flex items-center text-sm"
                >
                  <Phone className="w-3 h-3 mr-2" />
                  Call Now
                  <ArrowRight className="w-3 h-3 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;