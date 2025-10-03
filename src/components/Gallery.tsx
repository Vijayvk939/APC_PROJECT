import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';

// Import images
import img1 from '/images/Gallery/IMG1.jpg';
import img2 from '/images/Gallery/IMG2.jpg';
import img3 from '/images/Gallery/IMG3.jpg';
import img4 from '/images/Gallery/IMG4.jpg';
import img5 from '/images/Gallery/IMG5.jpg';
import img6 from '/images/Gallery/IMG6.jpg';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    {
      url: img1,
      title: "Blessed Family",
      description: "A beautiful family portrait showing the love and unity that God creates in our homes"
    },
    {
      url: img2,
      title: "Women's Prayer Meeting",
      description: "Sisters in Christ gathering for prayer, worship, and spiritual fellowship"
    },
    {
      url: img3,
      title: "Church Leadership",
      description: "Our dedicated church leaders serving God and our church with love and dedication"
    },
    {
      url: img4,
      title: "Church Candlelight Gathering",
      description: "Our church family coming together in prayer and fellowship, holding candles of hope and faith"
    },
    {
      url: img5,
      title: "Pastoral Ministry",
      description: "Spreading God's word and ministering to our congregation with passion and grace"
    },
    {
      url: img6,
      title: "Sunday School Celebration",
      description: "Children learning about God's love through music, stories, and joyful activities"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [galleryImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="gallery" className="pt-4 pb-16 md:pb-20 lg:pb-24 bg-gradient-to-br from-slate-50 via-primary-50 to-secondary-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-secondary-50/20 to-accent-50/30"></div>

      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12 xs:mb-14 sm:mb-16">
          <div className="inline-flex items-center px-3 xs:px-4 py-1.5 xs:py-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full border border-primary-200/50 mb-4 xs:mb-6">
            <Camera className="w-3 h-3 xs:w-4 xs:h-4 text-primary-600 mr-1.5 xs:mr-2" />
            <span className="text-xs font-medium text-primary-700">Our Moments</span>
          </div>
          
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 xs:mb-6 leading-tight px-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600">
              Church Gallery
            </span>
          </h2>
          <div className="w-24 xs:w-32 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-4 xs:mb-6"></div>
          <p className="text-base xs:text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Witness the joy, fellowship, and spiritual growth happening in our church
          </p>
        </div>

        {/* Main Gallery */}
        <div className="relative">
          <div className="relative h-64 xs:h-72 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl xs:rounded-3xl overflow-hidden shadow-2xl">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentSlide 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-105'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-4 xs:bottom-6 sm:bottom-8 left-4 xs:left-6 sm:left-8 right-4 xs:right-6 sm:right-8 text-white">
                  <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold mb-1 xs:mb-2 leading-tight">{image.title}</h3>
                  <p className="text-sm xs:text-base sm:text-lg opacity-90 leading-relaxed">{image.description}</p>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 xs:left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
            >
              <ChevronLeft className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-2 xs:right-3 sm:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
            >
              <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 xs:mt-8 space-x-2 xs:space-x-3">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 xs:w-3 xs:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default Gallery;