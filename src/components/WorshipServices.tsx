import { Music, Heart, Users, Clock, MapPin, Star, ArrowRight, Play } from 'lucide-react';

const WorshipServices = () => {
  const worshipServices = [
    {
      icon: Music,
      title: "Sunday 1st Service",
      subtitle: "Bhavanipuram",
      time: "8:30 AM - 11:00 AM",
      location: "Bhavanipuram",
      description: "Our main worship service featuring powerful messages, glorious songs, and community fellowship.",
      highlights: ["Live Worship", "Inspiring Sermons", "Children's Ministry", "Communion Service"],
      color: "from-blue-500 to-indigo-600",
      accentColor: "bg-blue-500",
      status: "Active"
    },
    {
      icon: Users,
      title: "Sunday School",
      subtitle: "Bhavanipuram",
      time: "9:00 AM - 11:00 AM",
      location: "Bhavanipuram",
      description: "Children's ministry and Sunday School program running alongside the main service.",
      highlights: ["Bible Stories", "Worship Songs", "Arts & Crafts", "Prayer Time"],
      color: "from-emerald-500 to-teal-600",
      accentColor: "bg-emerald-500",
      status: "Active"
    },
    {
      icon: Heart,
      title: "Sunday 2nd Service",
      subtitle: "Gollapudi",
      time: "6:30 PM - 8:30 PM",
      location: "Gollapudi",
      description: "Evening worship service with inspiring messages and community fellowship.",
      highlights: ["Evening Worship", "Inspiring Sermons", "Community Fellowship", "Prayer Ministry"],
      color: "from-rose-500 to-pink-600",
      accentColor: "bg-rose-500",
      status: "Active"
    },
    {
      icon: Star,
      title: "Sunday School",
      subtitle: "Gollapudi",
      time: "7:30 PM - 8:30 PM",
      location: "Gollapudi",
      description: "Evening Sunday School program for children during the second service.",
      highlights: ["Evening Bible Study", "Children's Worship", "Interactive Learning", "Family Time"],
      color: "from-amber-500 to-orange-600",
      accentColor: "bg-amber-500",
      status: "Active"
    }
  ];


  return (
    <section id="worship-services" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-indigo-50/30"></div>
      
      {/* Floating Elements with Animation */}
      <div className="absolute top-20 left-20 animate-bounce">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full backdrop-blur-sm border border-white/20"></div>
      </div>
      <div className="absolute top-32 right-32 animate-pulse">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full backdrop-blur-sm border border-white/20"></div>
      </div>
      <div className="absolute bottom-32 left-32 animate-bounce">
        <div className="w-20 h-20 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full backdrop-blur-sm border border-white/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/50 mb-6">
            <span className="text-sm font-medium text-blue-700">Join Us Every Sunday</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
              Worship Services
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experience the transformative power of worship through inspiring messages, 
            glorious songs, and meaningful fellowship in our vibrant community.
          </p>
        </div>

        {/* Modern Worship Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          {worshipServices.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:bg-white/90"
            >
              {/* Status Badge */}
              <div className="absolute top-6 right-6">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${service.accentColor} text-white`}>
                  {service.status}
                </span>
              </div>

              {/* Icon Container */}
              <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-10 h-10 text-white" />
              </div>
              
              {/* Service Title */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{service.title}</h3>
                <p className="text-lg font-medium text-gray-600">{service.subtitle}</p>
              </div>

              {/* Time and Location */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700 bg-gray-50 rounded-xl px-4 py-3">
                  <Clock className="w-5 h-5 mr-3 text-blue-500" />
                  <span className="font-semibold">{service.time}</span>
                </div>
                <div className="flex items-center text-gray-700 bg-gray-50 rounded-xl px-4 py-3">
                  <MapPin className="w-5 h-5 mr-3 text-purple-500" />
                  <span className="font-semibold">{service.location}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-base">{service.description}</p>
              
              {/* Highlights */}
              <div className="space-y-3 mb-6">
                {service.highlights.map((highlight, highlightIndex) => (
                  <div key={highlightIndex} className="flex items-center text-gray-700">
                    <div className={`w-2 h-2 ${service.accentColor} rounded-full mr-3`}></div>
                    <span className="text-sm font-medium">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>


        {/* Enhanced Call to Action */}
        <div className="text-center">
          <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-12 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10"></div>
            
            {/* Floating Icons */}
            <div className="absolute top-8 right-8 opacity-20">
              <Music className="w-20 h-20" />
            </div>
            <div className="absolute bottom-8 left-8 opacity-20">
              <Heart className="w-16 h-16" />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Join Us This Sunday</h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Experience the transformative power of worship and the Word of God in our welcoming community
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="https://maps.app.goo.gl/FdKWAgfJd1mNDVDz8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Plan Your Visit
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://www.youtube.com/@agapepentecostalchurch/streams" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Online
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorshipServices;
