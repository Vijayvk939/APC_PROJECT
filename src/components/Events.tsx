import { Calendar, Clock, Users, ArrowRight, Heart, BookOpen } from 'lucide-react';

const Events = () => {
  const regularPrograms = [
    {
      icon: Heart,
      title: "Friday Fasting Prayer",
      schedule: "Fridays 6:30 PM - 9:00 PM",
      description: "Weekly fasting prayer meeting focused on spiritual growth.",
      color: "from-red-500 to-orange-500",
      status: "Active",
      accentColor: "bg-red-500"
    },
    {
      icon: Users,
      title: "Women's Prayer Meeting",
      schedule: "Every Wednesday",
      description: "Dedicated prayer time for women to gather and support each other in faith.",
      color: "from-blue-500 to-teal-500",
      status: "Active",
      accentColor: "bg-blue-500"
    },
    {
      icon: BookOpen,
      title: "5 Hours Prayer",
      schedule: "2nd Tuesday Monthly",
      description: "Extended prayer session for deep intercession and spiritual breakthrough.",
      color: "from-purple-500 to-pink-500",
      status: "Active",
      accentColor: "bg-purple-500"
    },
    {
      icon: Heart,
      title: "Preparation Prayer (Holy Communion)",
      schedule: "Last Saturday Monthly",
      description: "Special prayer meeting to prepare hearts before Holy Communion service.",
      color: "from-orange-500 to-red-500",
      status: "Active",
      accentColor: "bg-orange-500"
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
      accentColor: "bg-blue-500"
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
    <section id="events" className="pt-4 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Prayer <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Events</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join us for powerful prayer meetings and special events designed to strengthen your faith, 
            build relationships, and experience spiritual breakthrough.
          </p>
        </div>

        {/* Regular Programs */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Regular Prayer Programs</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Consistent prayer opportunities to grow spiritually and connect with your church family throughout the week.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16">
          {regularPrograms.map((program, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 md:p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 h-40 md:h-44 flex flex-col"
            >
              {/* Status Badge */}
              <div className="absolute top-4 md:top-5 right-4 md:right-5">
                <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium ${program.accentColor} text-white shadow-sm`}>
                  {program.status}
                </span>
              </div>
              
              <div className="flex items-start space-x-4 md:space-x-6 flex-1 pt-2">
                <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r ${program.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                  <program.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="flex-1 min-w-0 pr-2 md:pr-4">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 line-clamp-1 leading-tight">{program.title}</h4>
                  <p className="text-primary-600 font-semibold text-sm md:text-base mb-3 md:mb-4 leading-tight">{program.schedule}</p>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed line-clamp-3">{program.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Prayer Events */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Special Prayer Events</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Extended prayer programs and special events for deeper spiritual growth and breakthrough.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {specialPrayerEvents.map((event, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    {event.category}
                  </span>
                  <span className="text-sm text-gray-500">{event.attendees}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{event.date}</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{event.time}</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">{event.description}</p>
                <button className="flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Working Hours */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Church Working Hours</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            We're open throughout the week to serve our community and provide spiritual guidance.
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
            <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 md:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden h-32 md:h-36 flex items-center">
              <div className="absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full -translate-y-10 md:-translate-y-12 translate-x-10 md:translate-x-12 opacity-50"></div>
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-3">
                <div className="flex-1">
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-primary-700 transition-colors duration-300 leading-tight">Monday - Thursday</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-tight">Regular working days</p>
                </div>
                <div className="sm:ml-6">
                  <p className="text-primary-600 font-bold text-lg md:text-xl bg-primary-50 px-4 md:px-6 py-3 md:py-4 rounded-xl shadow-sm">9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 md:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden h-32 md:h-36 flex items-center">
              <div className="absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full -translate-y-10 md:-translate-y-12 translate-x-10 md:translate-x-12 opacity-50"></div>
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-3">
                <div className="flex-1">
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-blue-700 transition-colors duration-300 leading-tight">Friday</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-tight">Fasting prayer day</p>
                </div>
                <div className="sm:ml-6">
                  <p className="text-blue-600 font-bold text-lg md:text-xl bg-blue-50 px-4 md:px-6 py-3 md:py-4 rounded-xl shadow-sm">6:30 PM - 9:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 md:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden h-32 md:h-36 flex items-center">
              <div className="absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -translate-y-10 md:-translate-y-12 translate-x-10 md:translate-x-12 opacity-50"></div>
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-3">
                <div className="flex-1">
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-purple-700 transition-colors duration-300 leading-tight">Saturday</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-tight">Weekend service day</p>
                </div>
                <div className="sm:ml-6">
                  <p className="text-purple-600 font-bold text-lg md:text-xl bg-purple-50 px-4 md:px-6 py-3 md:py-4 rounded-xl shadow-sm">9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 md:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden h-32 md:h-36 flex items-center">
              <div className="absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-orange-100 to-red-100 rounded-full -translate-y-10 md:-translate-y-12 translate-x-10 md:translate-x-12 opacity-50"></div>
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-3">
                <div className="flex-1">
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-orange-700 transition-colors duration-300 leading-tight">Sunday</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-tight">Main worship service</p>
                </div>
                <div className="sm:ml-6">
                  <p className="text-orange-600 font-bold text-lg md:text-xl bg-orange-50 px-4 md:px-6 py-3 md:py-4 rounded-xl shadow-sm">8:00 AM - 12:00 PM</p>
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