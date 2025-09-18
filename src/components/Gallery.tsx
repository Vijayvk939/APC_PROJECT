import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Cross, Camera } from 'lucide-react';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    {
      url: "/images/Gallery/family.png",
      title: "Blessed Family",
      description: "A beautiful family portrait showing the love and unity that God creates in our homes"
    },
    {
      url: "/images/Gallery/church2.jpg",
      title: "Women's Prayer Meeting",
      description: "Sisters in Christ gathering for prayer, worship, and spiritual fellowship"
    },
    {
      url: "/images/Gallery/P_J.JPG",
      title: "Church Leadership",
      description: "Our dedicated church leaders serving God and our community with love and dedication"
    },
    {
      url: "/images/Gallery/church.jpg",
      title: "Community Candlelight Gathering",
      description: "Our church family coming together in prayer and fellowship, holding candles of hope and faith"
    },
    {
      url: "/images/Gallery/P_M.jpg",
      title: "Pastoral Ministry",
      description: "Spreading God's word and ministering to our congregation with passion and grace"
    },
    {
      url: "/images/Gallery/Sundayschool.jpg",
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
    <section id="gallery" className="pt-4 pb-24 bg-gradient-to-br from-slate-50 via-primary-50 to-secondary-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-secondary-50/20 to-accent-50/30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full border border-primary-200/50 mb-6">
            <Camera className="w-4 h-4 text-primary-600 mr-2" />
            <span className="text-xs font-medium text-primary-700">Our Moments</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600">
              Church Gallery
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Witness the joy, fellowship, and spiritual growth happening in our church community
          </p>
        </div>

        {/* Main Gallery */}
        <div className="relative">
          <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
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
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">{image.title}</h3>
                  <p className="text-lg opacity-90">{image.description}</p>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative h-24 rounded-xl overflow-hidden transition-all duration-300 ${
                index === currentSlide
                  ? 'ring-4 ring-primary-500 scale-105'
                  : ''
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 transition-opacity duration-300 ${
                index === currentSlide ? 'bg-primary-500/20' : 'bg-black/20 hover:bg-black/10'
              }`}></div>
            </button>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-800 to-secondary-800 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-4 right-4 opacity-20">
              <Cross className="w-16 h-16" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">Be Part of Our Story</h3>
            <p className="text-lg mb-6 opacity-90">
              Join us for worship services filled with powerful messages and glorious songs
            </p>
            <button className="bg-white text-primary-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Visit Us This Sunday
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;