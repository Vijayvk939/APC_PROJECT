import { Calendar, Clock, Users, ArrowRight, Heart, BookOpen } from 'lucide-react';

const Events = () => {
  const regularPrograms = [
    {
      icon: Heart,
      title: "Friday Fasting Prayer",
      schedule: "Fridays 6:30 PM - 9:00 PM",
      description: "Weekly fasting prayer meeting focused on spiritual growth and community needs.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Women's Prayer Meeting",
      schedule: "Every Wednesday",
      description: "Dedicated prayer time for women to gather, pray, and support each other in faith.",
      color: "from-blue-500 to-teal-500"
    },
    {
      icon: BookOpen,
      title: "5 Hours Prayer",
      schedule: "2nd Tuesday Monthly",
      description: "Extended prayer session for deep intercession and spiritual breakthrough.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Heart,
      title: "Preparation Prayer (Holy Communion)",
      schedule: "Last Saturday Monthly",
      description: "Special prayer meeting to prepare hearts before Holy Communion service.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const specialPrayerEvents = [
    {
      title: "Agape Church Anniversary(Bhavanipuram)",
      date: "April 13",
      time: "Special Service",
      location: "Bhavanipuram",
      description: "Celebrating the anniversary of our Bhavanipuram church with special worship, testimonies, and community fellowship.",
      image: "https://images.pexels.com/photos/8468526/pexels-photo-8468526.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Church Anniversary",
      attendees: "All Members"
    },
    {
      title: "Agape Church Anniversary(Gollapudi)",
      date: "February 13",
      time: "Special Service",
      location: "Gollapudi",
      description: "Celebrating the anniversary of our Gollapudi church with special worship, testimonies, and community fellowship.",
      image: "https://images.pexels.com/photos/8468419/pexels-photo-8468419.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Church Anniversary",
      attendees: "All Members"
    },
    {
      title: "21 Days Fasting Prayer",
      date: "July 14 - August 3",
      time: "Daily Prayer Times",
      location: "Main Sanctuary",
      description: "Intensive 21-day fasting prayer program for spiritual breakthrough and renewal.",
      image: "https://images.pexels.com/photos/8468419/pexels-photo-8468419.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Fasting Prayer",
      attendees: "All Members"
    },
    {
      title: "40 Days Family Growth & Safety Prayer",
      date: "September 16 - October 26",
      time: "Daily Prayer Times",
      location: "Main Sanctuary",
      description: "Extended prayer focus on family growth, safety, and spiritual protection.",
      image: "https://images.pexels.com/photos/8468526/pexels-photo-8468526.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Family Prayer",
      attendees: "All Families"
    },
    {
      title: "December Family Semi-Christmas Prayers",
      date: "December 1-31",
      time: "Daily Prayer Times",
      location: "Main Sanctuary",
      description: "Month-long prayer focus leading up to Christmas, emphasizing family unity and Christ's birth.",
      image: "https://images.pexels.com/photos/8468421/pexels-photo-8468421.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Christmas Prayer",
      attendees: "All Families"
    },
    {
      title: "New Year Gospel Meeting",
      date: "January 1st",
      time: "Special Service",
      location: "Main Sanctuary",
      description: "Annual gospel meeting to start the new year with God's word and renewed commitment.",
      image: "https://images.pexels.com/photos/8468419/pexels-photo-8468419.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Gospel Meeting",
      attendees: "All Ages Welcome"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {regularPrograms.map((program, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${program.color} rounded-xl flex items-center justify-center mb-4`}>
                <program.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{program.title}</h4>
              <p className="text-primary-600 font-semibold text-sm mb-3">{program.schedule}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
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

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {specialPrayerEvents.map((event, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-2">Monday - Thursday</h4>
              <p className="text-primary-600 font-semibold">9:00 AM - 9:00 PM</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-2">Friday</h4>
              <p className="text-primary-600 font-semibold">6:30 PM - 9:00 PM</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-2">Saturday</h4>
              <p className="text-primary-600 font-semibold">9:00 AM - 9:00 PM</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-2">Sunday</h4>
              <p className="text-primary-600 font-semibold">8:00 AM - 12:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;