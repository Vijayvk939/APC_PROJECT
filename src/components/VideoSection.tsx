import { useState } from 'react';
import { Play, Cross, Heart, Youtube, Clock, Eye, Share2, ArrowRight, Sparkles, Zap } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeVideo] = useState(0);

  const handleCloseVideo = () => {
    setIsPlaying(false);
  };

  const videos = [
    {
      id: "PR2HWPsBBMY",
      title: "Yesayya Nee Krupa",
      subtitle: "Official Full Song | Bro.Moses",
      description: "Experience this beautiful worship song that touches hearts and uplifts spirits with its powerful message of God's grace.",
      duration: "Full Song",
      type: "Worship Song",
      views: "12.5K views",
      likes: "150+ likes",
      thumbnail: "https://img.youtube.com/vi/PR2HWPsBBMY/maxresdefault.jpg",
      category: "Worship",
      color: "from-pink-500 to-rose-600"
    },
    {
      id: "5pDkNN5uJuA",
      title: "Powerful Message",
      subtitle: "Pastor Samuel Prasad",
      description: "Join us for this inspiring message that will strengthen your faith and transform your spiritual journey.",
      duration: "45:32",
      type: "Sermon",
      views: "10.5K views",
      likes: "120+ likes",
      thumbnail: "https://img.youtube.com/vi/5pDkNN5uJuA/maxresdefault.jpg",
      category: "Teaching",
      color: "from-blue-500 to-indigo-600"
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-primary-900 to-secondary-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-secondary-500/3 to-accent-500/5"></div>
      

      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12 xs:mb-14 sm:mb-16">
          <div className="inline-flex items-center px-3 xs:px-4 py-1.5 xs:py-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 backdrop-blur-sm rounded-full border border-primary-300/30 mb-4 xs:mb-6">
            <Sparkles className="w-3 h-3 xs:w-4 xs:h-4 text-primary-300 mr-1.5 xs:mr-2" />
            <span className="text-primary-200 font-medium text-xs">Featured Content</span>
          </div>
          
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 xs:mb-6 leading-tight px-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-secondary-300 to-primary-300">
              Transformative
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 via-accent-300 to-secondary-300">
              Messages
            </span>
          </h2>
          
          <div className="w-24 xs:w-32 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto mb-4 xs:mb-6 rounded-full shadow-xl"></div>
          
          <p className="text-base xs:text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light px-4">
            Experience powerful messages and glorious songs that transform lives and strengthen faith. 
            Join us on a spiritual journey of growth and inspiration.
          </p>
        </div>

        {/* Modern Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 mb-12 xs:mb-14 sm:mb-16">
          {videos.map((video, index) => (
            <div key={index} className="group relative">
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl xs:rounded-2xl p-1 shadow-xl border border-white/10">
                <div className="relative rounded-lg xs:rounded-xl overflow-hidden bg-black">
                  {!isPlaying || activeVideo !== index ? (
                    <a 
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block cursor-pointer"
                      onMouseEnter={() => setIsHovered(true)} 
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 xs:h-56 sm:h-64 object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      
                      {/* Enhanced Play Button Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-center">
                        <div className={`relative w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 bg-gradient-to-br ${video.color} rounded-full flex items-center justify-center transition-all duration-700 hover:scale-110 shadow-xl border-4 border-white/20 hover:border-white/40 ${
                          isHovered ? 'animate-pulse' : ''
                        }`}>
                          <Play className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 text-white ml-1" />
                          <div className="absolute inset-0 w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 border-4 border-white/40 rounded-full animate-ping opacity-75"></div>
                        </div>
                      </div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-2 xs:top-3 left-2 xs:left-3">
                        <span className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-primary-500/90 to-secondary-500/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white border border-white/20">
                          {video.category}
                        </span>
                      </div>
                      
                      {/* Video Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-4 xs:p-5 sm:p-6">
                        <div className="mb-2 xs:mb-3">
                          <h3 className="text-lg xs:text-xl font-bold text-white mb-1 xs:mb-2 leading-tight">
                            {video.title}
                          </h3>
                          <p className="text-sm xs:text-base text-primary-200 mb-1 xs:mb-2 font-medium">
                            {video.subtitle}
                          </p>
                          <p className="text-gray-300 text-xs xs:text-sm leading-relaxed">
                            {video.description}
                          </p>
                        </div>
                        
                        {/* Video Stats */}
                        <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-2 xs:gap-0">
                          <div className="flex items-center space-x-2 xs:space-x-3 text-gray-300 text-xs">
                            <div className="flex items-center bg-white/10 backdrop-blur-sm px-2 xs:px-3 py-1 rounded-full">
                              <Clock className="w-3 h-3 mr-1.5 xs:mr-2 text-primary-300" />
                              <span className="truncate">{video.duration}</span>
                            </div>
                            <div className="flex items-center bg-white/10 backdrop-blur-sm px-2 xs:px-3 py-1 rounded-full">
                              <Eye className="w-3 h-3 mr-1.5 xs:mr-2 text-secondary-300" />
                              <span className="truncate">{video.views}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center bg-gradient-to-r from-accent-500/20 to-primary-500/20 backdrop-blur-sm px-2 xs:px-3 py-1 rounded-full border border-accent-300/30">
                              <Heart className="w-3 h-3 mr-1.5 xs:mr-2 text-accent-300" />
                              <span className="text-accent-200 text-xs">{video.likes}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="relative w-full h-48 xs:h-56 sm:h-64">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1&showinfo=0`}
                        title={video.title}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      
                      {/* Enhanced Close Button */}
                      <button
                        onClick={handleCloseVideo}
                        className="absolute top-2 xs:top-3 right-2 xs:right-3 w-7 h-7 xs:w-8 xs:h-8 bg-black/80 hover:bg-black text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-md border border-white/20 shadow-xl"
                      >
                        <Cross className="w-3 h-3 xs:w-4 xs:h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action Section */}
        <div className="relative">
          <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 border border-white/20 shadow-xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-xl xs:rounded-2xl"></div>
            
            {/* Floating Icons - Responsive Sizing */}
            <div className="absolute top-3 xs:top-4 right-3 xs:right-4 opacity-20">
              <Youtube className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 text-red-400" />
            </div>
            <div className="absolute bottom-3 xs:bottom-4 left-3 xs:left-4 opacity-20">
              <Zap className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-yellow-400" />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-4 xs:mb-5 sm:mb-6">
                <div className="w-10 h-10 xs:w-12 xs:h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-2 xs:mb-3 shadow-xl">
                  <Youtube className="w-5 h-5 xs:w-6 xs:h-6 text-white" />
                </div>
                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-white mb-1 xs:mb-2 px-2">Join Our Growing Church</h3>
                <p className="text-xs xs:text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
                  Subscribe to our YouTube channel for powerful messages, glorious songs, and spiritual insights.
                </p>
              </div>
              
              {/* Enhanced Action Buttons */}
              <div className="flex flex-row items-center justify-center gap-2 xs:gap-3 max-w-md mx-auto">
                <a
                  href="https://www.youtube.com/@agapepentecostalchurch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-3 xs:px-4 py-2 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-xl shadow-lg text-xs w-full sm:w-auto"
                >
                  <Youtube className="w-3 h-3 xs:w-4 xs:h-4 mr-1.5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                  <span className="truncate">Subscribe</span>
                  <ArrowRight className="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                </a>
                
                <a
                  href="https://youtube.com/channel/UCjdJChq8HST_jDuZSElFz3Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-2 border-white/30 text-white px-3 xs:px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center backdrop-blur-sm hover:border-white transform hover:scale-105 text-xs w-full sm:w-auto"
                >
                  <Eye className="w-3 h-3 xs:w-4 xs:h-4 mr-1.5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                  <span className="truncate">View Videos</span>
                  <ArrowRight className="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;