import { Calendar, Clock, Users, ArrowRight, Heart, BookOpen } from 'lucide-react';

const Events = () => {
  const regularPrograms = [
    {
      icon: Heart,
      title: "Friday Fasting Prayer",
      schedule: "Fridays 6:30 PM - 9:00 PM",
      description: "Weekly fasting prayer meeting focused on spiritual growth.",
      color: "from-primary-500 to-secondary-500",
      status: "Active",
      accentColor: "bg-primary-500"
    },
    {
      icon: Users,
      title: "Women's Prayer Meeting",
      schedule: "Every Wednesday",
      description: "Dedicated prayer time for women to gather and support each other in faith.",
      color: "from-primary-500 to-secondary-500",
      status: "Active",
      accentColor: "bg-primary-500"
    },
    {
      icon: BookOpen,
      title: "5 Hours Prayer",
      schedule: "2nd Tuesday Monthly",
      description: "Extended prayer session for deep intercession and spiritual breakthrough.",
      color: "from-primary-500 to-secondary-500",
      status: "Active",
      accentColor: "bg-primary-500"
    },
    {
      icon: Heart,
      title: "Preparation Prayer (Holy Communion)",
      schedule: "Last Saturday Monthly",
      description: "Special prayer meeting to prepare hearts before Holy Communion service.",
      color: "from-primary-500 to-secondary-500",
      status: "Active",
      accentColor: "bg-primary-500"
    }
  ];

  const specialPrayerEvents = [
    {
      title: "APC(Bhavanipuram)",
      date: "April 13",
      time: "Special Service",
      location: "Bhavanipuram",
      description: "Celebrating the anniversary of our Bhavanipuram church with special worship and testimonies.",
      image: "/images/Events/APC_Bhavanipuram_ChurchAnniversary.jpg",
      category: "Church Anniversary",
      attendees: "All Members",
      status: "Upcoming",
      accentColor: "bg-green-500"
    },
    {
      title: "APC(Gollapudi)",
      date: "February 13",
      time: "Special Service",
      location: "Gollapudi",
      description: "Celebrating the anniversary of our Gollapudi church with special worship and testimonies.",
      image: "/images/Events/APC_Gollapudi_ChurchAnniversary.jpg",
      category: "Church Anniversary",
      attendees: "All Members",
      status: "Completed",
      accentColor: "bg-gray-500"
    },
    {
      title: "21 Days Fasting Prayer",
      date: "July 14 - August 3",
      time: "Daily Prayer Times",
      location: "Main Sanctuary",
      description: "Intensive 21-day fasting prayer program for spiritual breakthrough and renewal.",
      image: "https://images.pexels.com/photos/8468419/pexels-photo-8468419.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Fasting Prayer",
      attendees: "All Members",
      status: "Upcoming",
      accentColor: "bg-primary-500"
    },
    {
      title: "40 Days Family Growth & Safety Prayer",
      date: "September 16 - October 26",
      time: "Daily Prayer Times",
      location: "Main Sanctuary",
      description: "Extended prayer focus on family growth, safety, and spiritual protection.",
      image: "https://images.pexels.com/photos/8468526/pexels-photo-8468526.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Family Prayer",
      attendees: "All Families",
      status: "Upcoming",
      accentColor: "bg-purple-500"
    },
    {
      title: "December Family Semi-Christmas Prayers",
      date: "December 1-31",
      time: "Daily Prayer Times",
      location: "Main Sanctuary",
      description: "Month-long prayer focus leading up to Christmas, emphasizing family unity and Christ's birth.",
      image: "https://images.pexels.com/photos/8468421/pexels-photo-8468421.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Christmas Prayer",
      attendees: "All Families",
      status: "Upcoming",
      accentColor: "bg-red-500"
    },
    {
      title: "New Year Gospel Meeting",
      date: "January 1st",
      time: "Special Service",
      location: "Main Sanctuary",
      description: "Annual gospel meeting to start the new year with God's word and renewed commitment.",
      image: "https://images.pexels.com/photos/8468419/pexels-photo-8468419.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Gospel Meeting",
      attendees: "All Ages Welcome",
      status: "Upcoming",
      accentColor: "bg-indigo-500"
    }
  ];

  return (
    <section id="events" className="pt-4 pb-20 bg-gradient-to-br from-slate-50 via-primary-50 to-secondary-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-secondary-50/20 to-accent-50/30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full border border-primary-200/50 mb-6">
            <span className="text-sm font-medium text-primary-700">Join Us for Prayer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600">
              Prayer Events
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Join us for powerful prayer meetings and special events designed to strengthen your faith, 
            build relationships, and experience spiritual breakthrough.
          </p>
        </div>

        {/* Regular Programs */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Regular Prayer Programs</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Consistent prayer opportunities to grow spiritually and connect with your church family throughout the week.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16">
          {regularPrograms.map((program, index) => (
            <div 
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:bg-white/90 flex flex-col h-full"
            >
              {/* Header Row with Icon and Status */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${program.color} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className="w-7 h-7 text-white" />
                </div>
                <span className={`inline-flex items-center px-2 py-1 text-xs font-medium ${program.accentColor} text-white rounded-full`}>
                  {program.status}
                </span>
              </div>
              
              {/* Program Title */}
              <div className="mb-4">
                <h4 className="text-xl font-bold text-gray-900 mb-1">{program.title}</h4>
                <p className="text-base font-medium text-primary-600">{program.schedule}</p>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed text-base flex-grow">{program.description}</p>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Special Prayer Events */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Special Prayer Events</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Extended prayer programs and special events for deeper spiritual growth and breakthrough.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {specialPrayerEvents.map((event, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-white/50 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 text-primary-700 rounded-full text-sm font-medium border border-primary-200/50">
                    {event.category}
                  </span>
                  <span className="text-sm text-gray-500">{event.attendees}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2 text-primary-500" />
                  <span className="mr-4">{event.date}</span>
                  <Clock className="w-4 h-4 mr-2 text-secondary-500" />
                  <span>{event.time}</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">{event.description}</p>
                <button className="flex items-center text-primary-600 font-semibold hover:text-secondary-600 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Working Hours */}
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Church Working Hours</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            We're open throughout the week to serve our community and provide spiritual guidance.
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden h-32 md:h-36 flex items-center">
              <div className="absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary-100/50 to-secondary-100/50 rounded-full -translate-y-10 md:-translate-y-12 translate-x-10 md:translate-x-12 opacity-50"></div>
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-3">
                <div className="flex-1">
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-primary-700 transition-colors duration-300 leading-tight">Monday - Thursday</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-tight">Regular working days</p>
                </div>
                <div className="sm:ml-6">
                  <p className="text-primary-600 font-bold text-lg md:text-xl bg-gradient-to-r from-primary-50 to-secondary-50 px-4 md:px-6 py-3 md:py-4 rounded-xl shadow-sm border border-primary-200/50">9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden h-32 md:h-36 flex items-center">
              <div className="absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary-100/50 to-secondary-100/50 rounded-full -translate-y-10 md:-translate-y-12 translate-x-10 md:translate-x-12 opacity-50"></div>
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-3">
                <div className="flex-1">
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-primary-700 transition-colors duration-300 leading-tight">Friday</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-tight">Fasting prayer day</p>
                </div>
                <div className="sm:ml-6">
                  <p className="text-primary-600 font-bold text-lg md:text-xl bg-gradient-to-r from-primary-50 to-secondary-50 px-4 md:px-6 py-3 md:py-4 rounded-xl shadow-sm border border-primary-200/50">6:30 PM - 9:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden h-32 md:h-36 flex items-center">
              <div className="absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-secondary-100/50 to-accent-100/50 rounded-full -translate-y-10 md:-translate-y-12 translate-x-10 md:translate-x-12 opacity-50"></div>
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-3">
                <div className="flex-1">
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-secondary-700 transition-colors duration-300 leading-tight">Saturday</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-tight">Weekend service day</p>
                </div>
                <div className="sm:ml-6">
                  <p className="text-secondary-600 font-bold text-lg md:text-xl bg-gradient-to-r from-secondary-50 to-accent-50 px-4 md:px-6 py-3 md:py-4 rounded-xl shadow-sm border border-secondary-200/50">9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden h-32 md:h-36 flex items-center">
              <div className="absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-accent-100/50 to-primary-100/50 rounded-full -translate-y-10 md:-translate-y-12 translate-x-10 md:translate-x-12 opacity-50"></div>
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-3">
                <div className="flex-1">
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-accent-700 transition-colors duration-300 leading-tight">Sunday</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-tight">Main worship service</p>
                </div>
                <div className="sm:ml-6">
                  <p className="text-accent-600 font-bold text-lg md:text-xl bg-gradient-to-r from-accent-50 to-primary-50 px-4 md:px-6 py-3 md:py-4 rounded-xl shadow-sm border border-accent-200/50">8:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;