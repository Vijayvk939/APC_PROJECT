import { useState } from 'react';
import { Play, Cross, Heart, Youtube, Clock, Eye, Share2, ArrowRight, Sparkles, Zap } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0);

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
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/3 to-blue-500/5"></div>
      
      {/* Floating Elements with Animation */}
      <div className="absolute top-20 left-20 animate-bounce">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full backdrop-blur-sm border border-white/20"></div>
      </div>
      <div className="absolute top-32 right-32 animate-pulse">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full backdrop-blur-sm border border-white/20"></div>
      </div>
      <div className="absolute bottom-32 left-32 animate-bounce">
        <div className="w-20 h-20 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full backdrop-blur-sm border border-white/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full border border-purple-300/30 mb-6">
            <Sparkles className="w-4 h-4 text-purple-300 mr-2" />
            <span className="text-purple-200 font-medium text-xs">Featured Content</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300">
              Transformative
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-blue-300">
              Messages
            </span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto mb-6 rounded-full shadow-xl"></div>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Experience powerful messages and glorious songs that transform lives and strengthen faith. 
            Join us on a spiritual journey of growth and inspiration.
          </p>
        </div>

        {/* Modern Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {videos.map((video, index) => (
            <div key={index} className="group relative">
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-1 shadow-xl border border-white/10">
                <div className="relative rounded-xl overflow-hidden bg-black">
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
                        className="w-full h-64 object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      
                      {/* Enhanced Play Button Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-center">
                        <div className={`relative w-20 h-20 bg-gradient-to-br ${video.color} rounded-full flex items-center justify-center transition-all duration-700 hover:scale-110 shadow-xl border-4 border-white/20 hover:border-white/40 ${
                          isHovered ? 'animate-pulse' : ''
                        }`}>
                          <Play className="w-10 h-10 text-white ml-1" />
                          <div className="absolute inset-0 w-20 h-20 border-4 border-white/40 rounded-full animate-ping opacity-75"></div>
                        </div>
                      </div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-purple-500/90 to-pink-500/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white border border-white/20">
                          {video.category}
                        </span>
                      </div>
                      
                      {/* Video Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-6">
                        <div className="mb-3">
                          <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                            {video.title}
                          </h3>
                          <p className="text-base text-purple-200 mb-2 font-medium">
                            {video.subtitle}
                          </p>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {video.description}
                          </p>
                        </div>
                        
                        {/* Video Stats */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 text-gray-300 text-xs">
                            <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                              <Clock className="w-3 h-3 mr-2 text-purple-300" />
                              <span>{video.duration}</span>
                            </div>
                            <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                              <Eye className="w-3 h-3 mr-2 text-blue-300" />
                              <span>{video.views}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-pink-300/30">
                              <Heart className="w-3 h-3 mr-2 text-pink-300" />
                              <span className="text-pink-200 text-xs">{video.likes}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="relative w-full h-64">
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
                        className="absolute top-3 right-3 w-8 h-8 bg-black/80 hover:bg-black text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-md border border-white/20 shadow-xl"
                      >
                        <Cross className="w-4 h-4" />
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
          <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl"></div>
            
            {/* Floating Icons */}
            <div className="absolute top-4 right-4 opacity-20">
              <Youtube className="w-12 h-12 text-red-400" />
            </div>
            <div className="absolute bottom-4 left-4 opacity-20">
              <Zap className="w-8 h-8 text-yellow-400" />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-xl">
                  <Youtube className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Join Our Growing Community</h3>
                <p className="text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Subscribe to our YouTube channel for powerful messages, glorious songs, and spiritual insights.
                </p>
              </div>
              
              {/* Enhanced Action Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <a
                  href="https://www.youtube.com/@agapepentecostalchurch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-xl shadow-lg text-xs"
                >
                  <Youtube className="w-4 h-4 mr-1.5 group-hover:scale-110 transition-transform duration-300" />
                  Subscribe to Channel
                  <ArrowRight className="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                
                <a
                  href="https://youtube.com/channel/UCjdJChq8HST_jDuZSElFz3Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-2 border-white/30 text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center backdrop-blur-sm hover:border-white transform hover:scale-105 text-xs"
                >
                  <Eye className="w-4 h-4 mr-1.5 group-hover:scale-110 transition-transform duration-300" />
                  View All Videos
                  <ArrowRight className="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                
                <button className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-xl shadow-lg text-xs">
                  <Share2 className="w-4 h-4 mr-1.5 group-hover:scale-110 transition-transform duration-300" />
                  Share Message
                  <ArrowRight className="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;