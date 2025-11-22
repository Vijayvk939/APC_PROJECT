import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Cross, Heart, Youtube, Clock, Eye, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { videos } from '@/data/videos';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeVideo] = useState(0);

  // Auto-play first video when component mounts
  useEffect(() => {
    setIsPlaying(true);
  }, []);

  const handleCloseVideo = () => {
    setIsPlaying(false);
  };

  return (
    <section className="pt-8 md:pt-12 lg:pt-16 pb-4 md:pb-6 lg:pb-8 bg-slate-950 relative overflow-hidden">
      {/* Background lighting */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-slate-950 to-secondary-950" />
        <div className="absolute -top-20 -left-16 w-72 h-72 bg-primary-500/30 blur-[140px]" />
        <div className="absolute -bottom-32 right-0 w-[28rem] h-[28rem] bg-secondary-500/20 blur-[180px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_50%)] pointer-events-none" />
      </div>

      <div className="max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center px-3 xs:px-4 py-1.5 xs:py-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 backdrop-blur-sm rounded-full border border-primary-300/30 mb-4 xs:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Sparkles className="w-3 h-3 xs:w-4 xs:h-4 text-primary-300 mr-1.5 xs:mr-2" />
            <span className="text-primary-200 font-medium text-xs">Featured Content</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight px-2 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-secondary-300 to-primary-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transformative{' '}
            </motion.span>
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 via-accent-300 to-secondary-300"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Messages
            </motion.span>
          </motion.h2>
          
          <div className="w-24 xs:w-32 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto mb-4 xs:mb-6 rounded-full shadow-xl"></div>
          
          <motion.p 
            className="text-base xs:text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Dive into cinematic sermons, live worship nights, and faith-filled originals produced right here at Agape Pentecostal Church.
          </motion.p>
        </motion.div>

        {/* Elevated Video Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-[minmax(200px,_auto)] mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          {videos.map((video, index) => {
            const isFeatured = index === 0;

            return (
              <motion.article
                key={video.id}
                className={`group relative flex flex-col rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl shadow-2xl shadow-black/40 h-full ${isFeatured ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''}`}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.9,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10, rotateX: 1, rotateY: -1 }}
              >
                <div className="relative overflow-hidden h-full flex flex-col">
                  {!isPlaying || activeVideo !== index ? (
                    <a 
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block h-full flex flex-col"
                      onMouseEnter={() => setIsHovered(true)} 
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover transition duration-[1800ms] group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                      {/* category + label */}
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold text-black bg-gradient-to-r ${video.accent} backdrop-blur`}>{video.category}</span>
                        <span className="px-3 py-1 rounded-full text-[11px] uppercase tracking-wide text-white/80 border border-white/20">HD</span>
                      </div>

                      {/* Play button */}
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{
                          scale: isHovered ? [1, 1.1, 1] : 1,
                        }}
                        transition={{
                          duration: 1.8,
                          repeat: isHovered ? Infinity : 0,
                          ease: "easeInOut"
                        }}
                      >
                        <div className={`relative w-20 h-20 ${isFeatured ? 'sm:w-24 sm:h-24' : ''}`}>
                          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${video.color} opacity-90 blur-2xl`} />
                          <motion.div 
                            className="relative w-full h-full rounded-full bg-black/60 border border-white/30 flex items-center justify-center"
                            whileHover={{ scale: 1.08 }}
                          >
                            <Play className="w-8 h-8 text-white ml-1" />
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* featured metrics */}
                      <div className={`absolute bottom-4 left-4 right-4 space-y-2 ${isFeatured ? 'lg:space-y-2.5' : ''}`}>
                        <div>
                          {index === 0 && (
                            <p className="text-xs text-primary-200 font-semibold">{video.type}</p>
                          )}
                          <h3 className={`text-lg font-bold text-white leading-tight ${isFeatured ? 'sm:text-xl lg:text-2xl' : 'text-base'}`}>
                            {video.title}
                          </h3>
                          <p className="text-xs text-slate-200">{video.subtitle}</p>
                        </div>

                        <div className="flex flex-wrap gap-2 text-xs text-white/90">
                          <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full">
                            <Clock className="w-3 h-3" /> {video.duration}
                          </span>
                          <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full">
                            <Eye className="w-3 h-3" /> {video.views}
                          </span>
                          <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full">
                            <Heart className="w-3 h-3 text-rose-300" /> {video.likes}
                          </span>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="relative w-full h-full">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&rel=0&modestbranding=1&showinfo=0`}
                        title={video.title}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      
                      <button
                        onClick={handleCloseVideo}
                        className="absolute top-4 right-4 w-8 h-8 bg-black/70 hover:bg-black text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur border border-white/30 shadow-xl"
                      >
                        <Cross className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Enhanced Call to Action Section */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
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
                  href="https://www.youtube.com/@agapepentecostalchurch/videos"
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;