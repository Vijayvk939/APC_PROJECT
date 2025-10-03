import { Calendar, Clock, Users, Heart, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';

// Import images
import bvmpCA from '/images/Events/BVMP_CA.jpg';
import glpCA from '/images/Events/GLP_CA.jpg';
import fasting21Days from '/images/Events/21days_fastings.jpg';
import prayer40Days from '/images/Events/40DaysPrayers.jpg';
import semiChristmas from '/images/Events/Semi_Christmas.jpg';
import newYearGM from '/images/Events/New-year_GM.jpg';

const Events = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      try {
        if (window && window.innerWidth) {
          if (window.innerWidth < 640) {
            setCardsPerView(1); // Mobile: 1 card
          } else if (window.innerWidth < 1024) {
            setCardsPerView(2); // Tablet: 2 cards
          } else {
            setCardsPerView(3); // Desktop: 3 cards
          }
          // Reset to first page when screen size changes
          setCurrentEventIndex(0);
        }
      } catch (error) {
        console.error('Error handling resize:', error);
        // Fallback to default values
        setCardsPerView(3);
        setCurrentEventIndex(0);
      }
    };

    handleResize();
    if (window) {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const specialPrayerEvents = useMemo(() => [
    {
      title: "APC(Bhavanipuram)",
      date: "April 13",
      time: "Special Service",
      location: "Bhavanipuram",
      description: "Celebrating the anniversary of our Bhavanipuram church with special worship and testimonies.",
      image: bvmpCA,
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
      image: glpCA,
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
      image: fasting21Days,
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
        image: prayer40Days,
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
      image: semiChristmas,
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
      image: newYearGM,
      category: "Gospel Meeting",
      attendees: "All Ages Welcome",
      status: "Upcoming",
      accentColor: "bg-indigo-500"
    }
  ], []);

  // Auto-movement functionality
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      try {
        setCurrentEventIndex((prevIndex) => {
          if (specialPrayerEvents && specialPrayerEvents.length > 0 && cardsPerView > 0) {
            const maxIndex = Math.ceil(specialPrayerEvents.length / cardsPerView) - 1;
            return prevIndex === maxIndex ? 0 : prevIndex + 1;
          }
          return prevIndex;
        });
      } catch (error) {
        console.error('Error in auto-movement:', error);
      }
    }, 2000); // Auto-advance every 2 seconds

    return () => clearInterval(interval);
  }, [isHovered, cardsPerView, specialPrayerEvents]);

  const nextEvent = () => {
    try {
      if (specialPrayerEvents && specialPrayerEvents.length > 0 && cardsPerView > 0) {
        const maxIndex = Math.ceil(specialPrayerEvents.length / cardsPerView) - 1;
        setCurrentEventIndex((prevIndex) => 
          prevIndex === maxIndex ? 0 : prevIndex + 1
        );
      }
    } catch (error) {
      console.error('Error in nextEvent:', error);
    }
  };

  const prevEvent = () => {
    try {
      if (specialPrayerEvents && specialPrayerEvents.length > 0 && cardsPerView > 0) {
        const maxIndex = Math.ceil(specialPrayerEvents.length / cardsPerView) - 1;
        setCurrentEventIndex((prevIndex) => 
          prevIndex === 0 ? maxIndex : prevIndex - 1
        );
      }
    } catch (error) {
      console.error('Error in prevEvent:', error);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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

  return (
    <section id="events" className="pt-4 pb-16 md:pb-20 bg-gradient-to-br from-slate-50 via-primary-50 to-secondary-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-secondary-50/20 to-accent-50/30"></div>
      
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center px-3 xs:px-4 py-1.5 xs:py-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full border border-primary-200/50 mb-4 xs:mb-6">
            <span className="text-xs xs:text-sm font-medium text-primary-700">Join Us for Prayer</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 xs:mb-6 leading-tight px-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600">
              Prayer Events
            </span>
          </h2>
          <div className="w-24 xs:w-32 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto mb-6 xs:mb-8 rounded-full"></div>
          <p className="text-base xs:text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Join us for powerful prayer meetings and special events designed to strengthen your faith, 
            build relationships, and experience spiritual breakthrough.
          </p>
        </div>

        {/* Regular Programs */}
        <div className="text-center mb-8 xs:mb-10 sm:mb-12">
          <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900 mb-3 xs:mb-4 px-2">Regular Prayer Programs</h3>
          <p className="text-base xs:text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Consistent prayer opportunities to grow spiritually and connect with your church family throughout the week.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-6 mb-12 xs:mb-14 sm:mb-16">
          {regularPrograms.map((program, index) => (
            <div 
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-lg xs:rounded-xl p-4 xs:p-5 sm:p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 hover:bg-white/90 flex flex-col h-full"
            >
              {/* Header Row with Icon and Status */}
              <div className="flex items-start justify-between mb-3 xs:mb-4">
                <div className={`w-12 h-12 xs:w-14 xs:h-14 bg-gradient-to-br ${program.color} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className="w-6 h-6 xs:w-7 xs:h-7 text-white" />
                </div>
                <span className={`inline-flex items-center px-2 py-1 text-xs font-medium ${program.accentColor} text-white rounded-full`}>
                  {program.status}
                </span>
              </div>
              
              {/* Program Title */}
              <div className="mb-3 xs:mb-4">
                <h4 className="text-lg xs:text-xl lg:text-2xl font-bold text-gray-900 mb-1 leading-tight">{program.title}</h4>
                <p className="text-sm xs:text-base lg:text-lg font-medium text-primary-600">{program.schedule}</p>
              </div>
              
              <p className="text-gray-600 mb-3 xs:mb-4 leading-relaxed text-sm xs:text-base lg:text-lg flex-grow">{program.description}</p>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-lg xs:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Special Prayer Events Carousel */}
        <div className="text-center mb-8 xs:mb-10 sm:mb-12">
          <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900 mb-3 xs:mb-4 px-2">Special Prayer Events</h3>
          <p className="text-base xs:text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Extended prayer programs and special events for deeper spiritual growth and breakthrough.
          </p>
        </div>

        <div className="max-w-7xl mx-auto mb-12 xs:mb-14 sm:mb-16">
          {/* Navigation Arrows */}
          <div className="flex justify-end mb-4 sm:mb-6">
            <div className="flex gap-1 sm:gap-2">
              <button
                onClick={prevEvent}
                className="p-1.5 sm:p-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={nextEvent}
                className="p-1.5 sm:p-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
          
          <div 
            className="relative overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentEventIndex * 100}%)`
              }}
            >
              {specialPrayerEvents.map((event, index) => (
                <div 
                  key={index}
                  className={`${cardsPerView === 1 ? 'w-full' : cardsPerView === 2 ? 'w-1/2' : 'w-1/3'} flex-shrink-0 px-1 sm:px-2`}
                >
                   <div className="group bg-white/80 backdrop-blur-sm rounded-lg xs:rounded-xl shadow-xl border border-white/50 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-[26rem] sm:h-[30rem] lg:h-[32rem] flex flex-col">
                    <div className="h-48 xs:h-56 sm:h-64 overflow-hidden flex-shrink-0">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
                    <div className="p-4 xs:p-5 sm:p-6 flex flex-col flex-grow">
                <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between mb-3 gap-2">
                  <span className="px-2 xs:px-3 py-1 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 text-primary-700 rounded-full text-xs xs:text-sm font-medium border border-primary-200/50 w-fit">
                    {event.category}
                  </span>
                  <span className="text-xs xs:text-sm text-gray-500">{event.attendees}</span>
                </div>
                      <h3 className="text-sm xs:text-base lg:text-lg font-bold text-gray-900 mb-2 leading-tight">{event.title}</h3>
                      <div className="flex flex-col xs:flex-row xs:items-center text-gray-600 text-xs mb-3 gap-1 xs:gap-0">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 xs:w-4 xs:h-4 mr-1.5 xs:mr-2 text-primary-500 flex-shrink-0" />
                    <span className="truncate">{event.date}</span>
                  </div>
                  <div className="flex items-center xs:ml-4">
                    <Clock className="w-3 h-3 xs:w-4 xs:h-4 mr-1.5 xs:mr-2 text-secondary-500 flex-shrink-0" />
                    <span className="truncate">{event.time}</span>
                  </div>
                </div>
                      <p className="text-gray-600 leading-relaxed text-xs flex-grow">{event.description}</p>
                     </div>
                   </div>
                 </div>
               ))}
            </div>
            
             {/* Event Indicators */}
             <div className="flex justify-center mt-6 space-x-2">
               {Array.from({ length: Math.ceil(specialPrayerEvents.length / cardsPerView) }).map((_, index) => (
                 <button
                   key={index}
                   onClick={() => setCurrentEventIndex(index)}
                   className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                     index === currentEventIndex
                       ? 'bg-gradient-to-r from-primary-500 to-secondary-500 scale-125'
                       : 'bg-gray-300 hover:bg-gray-400'
                   }`}
                 />
               ))}
             </div>
             
          </div>
        </div>

        {/* Working Hours */}
        <div className="text-center mb-12 xs:mb-14 sm:mb-16">
          <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900 mb-3 xs:mb-4 px-2">Church Working Hours</h3>
          <p className="text-base xs:text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-6 xs:mb-8 leading-relaxed px-4">
            We're open throughout the week to serve our church and provide spiritual guidance.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-lg xs:rounded-xl p-4 xs:p-5 sm:p-6 md:p-7 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden h-32 xs:h-36 sm:h-40 md:h-44 flex items-center">
              <div className="absolute top-0 right-0 w-18 h-18 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-primary-100/50 to-secondary-100/50 rounded-full -translate-y-9 xs:-translate-y-10 sm:-translate-y-12 md:-translate-y-14 translate-x-9 xs:translate-x-10 sm:translate-x-12 md:translate-x-14 opacity-50"></div>
              <div className="relative z-10 flex flex-col w-full gap-3">
                <div className="flex-1">
                  <h4 className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-gray-900 mb-1 xs:mb-2 group-hover:text-primary-700 transition-colors duration-300 leading-tight">Monday - Thursday</h4>
                  <p className="text-gray-600 text-xs xs:text-sm sm:text-base lg:text-lg leading-tight">Regular working days</p>
                </div>
                <div className="flex justify-center">
                  <p className="text-primary-600 font-bold text-sm xs:text-base sm:text-lg md:text-lg lg:text-xl bg-gradient-to-r from-primary-50 to-secondary-50 px-2 xs:px-3 sm:px-4 md:px-5 py-2 xs:py-2.5 sm:py-3 md:py-3.5 rounded-lg xs:rounded-xl shadow-sm border border-primary-200/50">9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-lg xs:rounded-xl p-4 xs:p-5 sm:p-6 md:p-7 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden h-32 xs:h-36 sm:h-40 md:h-44 flex items-center">
              <div className="absolute top-0 right-0 w-18 h-18 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-primary-100/50 to-secondary-100/50 rounded-full -translate-y-9 xs:-translate-y-10 sm:-translate-y-12 md:-translate-y-14 translate-x-9 xs:translate-x-10 sm:translate-x-12 md:translate-x-14 opacity-50"></div>
              <div className="relative z-10 flex flex-col w-full gap-3">
                <div className="flex-1">
                  <h4 className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-black mb-1 xs:mb-2 group-hover:text-primary-700 transition-colors duration-300 leading-tight">Friday</h4>
                  <p className="text-gray-600 text-xs xs:text-sm sm:text-base lg:text-lg leading-tight">Fasting prayer day</p>
                </div>
                <div className="flex justify-center">
                  <p className="text-primary-600 font-bold text-sm xs:text-base sm:text-lg md:text-lg lg:text-xl bg-gradient-to-r from-primary-50 to-secondary-50 px-2 xs:px-3 sm:px-4 md:px-5 py-2 xs:py-2.5 sm:py-3 md:py-3.5 rounded-lg xs:rounded-xl shadow-sm border border-primary-200/50">6:30 PM - 9:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-lg xs:rounded-xl p-4 xs:p-5 sm:p-6 md:p-7 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden h-32 xs:h-36 sm:h-40 md:h-44 flex items-center">
              <div className="absolute top-0 right-0 w-18 h-18 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-secondary-100/50 to-accent-100/50 rounded-full -translate-y-9 xs:-translate-y-10 sm:-translate-y-12 md:-translate-y-14 translate-x-9 xs:translate-x-10 sm:translate-x-12 md:translate-x-14 opacity-50"></div>
              <div className="relative z-10 flex flex-col w-full gap-3">
                <div className="flex-1">
                  <h4 className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-gray-900 mb-1 xs:mb-2 group-hover:text-secondary-700 transition-colors duration-300 leading-tight">Saturday</h4>
                  <p className="text-gray-600 text-xs xs:text-sm sm:text-base lg:text-lg leading-tight">Weekend service day</p>
                </div>
                <div className="flex justify-center">
                  <p className="text-secondary-600 font-bold text-sm xs:text-base sm:text-lg md:text-lg lg:text-xl bg-gradient-to-r from-secondary-50 to-accent-50 px-2 xs:px-3 sm:px-4 md:px-5 py-2 xs:py-2.5 sm:py-3 md:py-3.5 rounded-lg xs:rounded-xl shadow-sm border border-secondary-200/50">9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-lg xs:rounded-xl p-4 xs:p-5 sm:p-6 md:p-7 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden h-32 xs:h-36 sm:h-40 md:h-44 flex items-center">
              <div className="absolute top-0 right-0 w-18 h-18 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-accent-100/50 to-primary-100/50 rounded-full -translate-y-9 xs:-translate-y-10 sm:-translate-y-12 md:-translate-y-14 translate-x-9 xs:translate-x-10 sm:translate-x-12 md:translate-x-14 opacity-50"></div>
              <div className="relative z-10 flex flex-col w-full gap-3">
                <div className="flex-1">
                  <h4 className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-gray-900 mb-1 xs:mb-2 group-hover:text-accent-700 transition-colors duration-300 leading-tight">Sunday</h4>
                  <p className="text-gray-600 text-xs xs:text-sm sm:text-base lg:text-lg leading-tight">Main worship service</p>
                </div>
                <div className="flex justify-center">
                  <p className="text-accent-600 font-bold text-sm xs:text-base sm:text-lg md:text-lg lg:text-xl bg-gradient-to-r from-accent-50 to-primary-50 px-2 xs:px-3 sm:px-4 md:px-5 py-2 xs:py-2.5 sm:py-3 md:py-3.5 rounded-lg xs:rounded-xl shadow-sm border border-accent-200/50">8:00 AM - 12:00 PM</p>
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