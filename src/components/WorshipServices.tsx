import { Church, Users, Clock, MapPin, ArrowRight, Play } from 'lucide-react';

const WorshipServices = () => {
  const worshipServices = [
    {
      icon: Church,
      title: "Sunday 1st Service",
      subtitle: "Bhavanipuram",
      time: "8:30 AM - 11:00 AM",
      location: "Bhavanipuram",
      description: "Our main worship service featuring powerful messages, glorious songs, and community fellowship.",
      highlights: ["Live Worship", "Community Fellowship", "Inspiring Sermons", "Communion Service"],
      color: "from-primary-500 to-secondary-600",
      accentColor: "bg-primary-500",
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
      color: "from-secondary-500 to-accent-600",
      accentColor: "bg-secondary-500",
      status: "Active"
    },
    {
      icon: Church,
      title: "Sunday 2nd Service",
      subtitle: "Gollapudi",
      time: "6:30 PM - 8:30 PM",
      location: "Gollapudi",
      description: "Evening worship service with inspiring messages and community fellowship.",
      highlights: ["Evening Worship", "Inspiring Sermons", "Community Fellowship", "Prayer Ministry"],
      color: "from-accent-500 to-primary-600",
      accentColor: "bg-accent-500",
      status: "Active"
    },
    {
      icon: Users,
      title: "Sunday School",
      subtitle: "Gollapudi",
      time: "7:30 PM - 8:30 PM",
      location: "Gollapudi",
      description: "Evening Sunday School program for children during the second service.",
      highlights: ["Evening Bible Study", "Children's Worship", "Interactive Learning", "Family Time"],
      color: "from-primary-500 to-accent-600",
      accentColor: "bg-primary-500",
      status: "Active"
    }
  ];


  return (
    <section id="services" className="pt-4 pb-12 bg-gradient-to-br from-slate-50 via-primary-50 to-secondary-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-secondary-50/20 to-accent-50/30"></div>
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full border border-primary-200/50 mb-6">
            <span className="text-sm font-medium text-primary-700">Join Us Every Sunday</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600">
              Worship Services
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experience the transformative power of worship through inspiring messages, 
            glorious songs, and meaningful fellowship in our vibrant community.
          </p>
        </div>

        {/* Modern Worship Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {worshipServices.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:bg-white/90 flex flex-col h-full"
            >
              {/* Header Row with Icon and Status */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <span className={`inline-flex items-center px-2 py-1 text-xs font-medium ${service.accentColor} text-white rounded-full`}>
                  {service.status}
                </span>
              </div>
              
              {/* Service Title */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{service.title}</h3>
                <p className="text-base font-medium text-gray-600">{service.subtitle}</p>
              </div>

              {/* Time and Location - Side by Side */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex items-center text-gray-700 bg-gray-50 rounded-md px-3 py-2">
                  <Clock className="w-4 h-4 mr-2 text-primary-500 flex-shrink-0" />
                  <span className="font-semibold text-sm">{service.time}</span>
                </div>
                <div className="flex items-center text-gray-700 bg-gray-50 rounded-md px-3 py-2">
                  <MapPin className="w-4 h-4 mr-2 text-secondary-500 flex-shrink-0" />
                  <span className="font-semibold text-sm">{service.location}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed text-base flex-grow">{service.description}</p>
              
              {/* Highlights - Grid Layout */}
              <div className="grid grid-cols-2 gap-2">
                {service.highlights.map((highlight, highlightIndex) => (
                  <div key={highlightIndex} className="flex items-center text-gray-700">
                    <div className={`w-2 h-2 ${service.accentColor} mr-2 flex-shrink-0`}></div>
                    <span className="text-sm font-medium">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>


        {/* Enhanced Call to Action */}
        <div className="text-center">
          <div className="relative bg-gradient-to-br from-primary-800 via-secondary-800 to-accent-800 rounded-2xl p-6 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10"></div>
            
            {/* Floating Icons */}
            <div className="absolute top-4 right-4 opacity-20">
              <Church className="w-12 h-12" />
            </div>
            <div className="absolute bottom-4 left-4 opacity-20">
              <Users className="w-10 h-10" />
            </div>

            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold mb-3">Join Us This Sunday</h3>
              <p className="text-lg mb-6 opacity-90 max-w-xl mx-auto">
                Experience the transformative power of worship and the Word of God in our welcoming community
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a 
                  href="https://maps.app.goo.gl/FdKWAgfJd1mNDVDz8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Plan Your Visit
                  <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://www.youtube.com/@agapepentecostalchurch/streams" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 flex items-center"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Watch Online
                  <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
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
