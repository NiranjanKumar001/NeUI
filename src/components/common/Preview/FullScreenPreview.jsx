import { useState, useRef, useEffect } from "react";
import { TbRefresh, TbPlayerPlay, TbLoader3 } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";

const FullScreenPreview = ({ children, height = 600, videoSrc = null, autoPlay = true, loop = true, muted = true }) => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showRefreshButton, setShowRefreshButton] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Handle video load events and progress
  useEffect(() => {
    if (videoRef.current && videoSrc) {
      const video = videoRef.current;
      
      const handleLoadedData = () => {
        setIsVideoLoaded(true);
        setShowRefreshButton(false);
      };

      const handleError = () => {
        console.error('Failed to load video:', videoSrc);
        setIsVideoLoaded(false);
        setShowRefreshButton(true);
      };

      const handleEnded = () => {
        if (!loop) {
          setShowRefreshButton(true);
        }
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);
      video.addEventListener('ended', handleEnded);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
        video.removeEventListener('ended', handleEnded);
      };
    }
  }, [videoSrc, loop]);

  const handleRefreshVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setShowRefreshButton(false);
    }
  };

  return (
    <motion.div
      className={clsx(
        "relative w-fit max-w-full mx-auto",
        "group perspective-1000"
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {videoSrc ? (
        <motion.div
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 via-neutral-900 to-stone-900"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(239, 68, 68, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
              linear-gradient(135deg, #0c0a09 0%, #1c1917 50%, #292524 100%)
            `
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Animated border */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: `
                conic-gradient(from 0deg, 
                  transparent 0deg, 
                  rgba(168, 85, 247, 0.3) 90deg, 
                  rgba(239, 68, 68, 0.3) 180deg,
                  rgba(34, 197, 94, 0.25) 270deg,
                  transparent 360deg
                )
              `,
              padding: '1px',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full rounded-2xl bg-stone-900" />
          </motion.div>

          {/* Video container with advanced styling */}
          <motion.div 
            className="relative z-10 p-4"
            initial={{ scale: 0.98 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <video
              ref={videoRef}
              src={videoSrc}
              autoPlay={autoPlay}
              loop={loop}
              muted={muted}
              playsInline
              className={clsx(
                "max-w-full h-auto rounded-xl shadow-2xl",
                "transition-all duration-500 ease-out",
                isVideoLoaded ? "opacity-100 scale-100" : "opacity-0 scale-98"
              )}
              style={{
                filter: isVideoLoaded ? 'blur(0px) brightness(1)' : 'blur(2px) brightness(0.8)',
                boxShadow: `
                  0 20px 40px -12px rgba(0, 0, 0, 0.7),
                  0 0 0 1px rgba(255, 255, 255, 0.05),
                  inset 0 1px 0 0 rgba(255, 255, 255, 0.05)
                `
              }}
            />

            {/* Loading state */}
            <AnimatePresence>
              {!isVideoLoaded && !showRefreshButton && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="flex items-center space-x-3 text-neutral-300 bg-black/30 backdrop-blur-md rounded-xl px-5 py-3"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <TbLoader3 className="w-4 h-4" />
                    </motion.div>
                    <span className="text-sm font-medium">Loading...</span>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {(showRefreshButton || !isVideoLoaded) && (
                <motion.button
                  onClick={handleRefreshVideo}
                  className={clsx(
                    "absolute top-6 right-6 z-20",
                    "w-10 h-10 rounded-full",
                    "bg-gradient-to-br from-white/8 to-white/4",
                    "backdrop-blur-lg border border-white/10",
                    "text-neutral-300 hover:text-white",
                    "shadow-lg hover:shadow-xl",
                    "transition-all duration-300 ease-out",
                    "flex items-center justify-center",
                    "group/btn"
                  )}
                  initial={{ opacity: 0, scale: 0, rotate: -90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0, rotate: 90 }}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgba(255, 255, 255, 0.12)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ 
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <motion.div
                    animate={{ rotate: showRefreshButton ? [0, 360] : 0 }}
                    transition={{ 
                      duration: 0.5,
                      ease: "easeInOut",
                      repeat: showRefreshButton ? Infinity : 0,
                      repeatDelay: 3
                    }}
                  >
                    <TbRefresh className="w-4 h-4" />
                  </motion.div>
                  
                  {/* Ripple effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full border border-white/20"
                    initial={{ scale: 1, opacity: 0 }}
                    animate={isHovered ? { 
                      scale: [1, 1.3, 1.5], 
                      opacity: [0, 0.3, 0] 
                    } : {}}
                    transition={{ 
                      duration: 1.2, 
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Play overlay for ended videos */}
            <AnimatePresence>
              {showRefreshButton && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="flex items-center space-x-6 text-neutral-200 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10"
                    style={{
                      padding: '20px 32px',
                      minWidth: '200px',
                      justifyContent: 'center'
                    }}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    <TbPlayerPlay className="w-5 h-5" />
                    <span className="text-base font-medium">Video Ended</span>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Ambient glow effect */}
          <motion.div
            className="absolute -inset-3 bg-gradient-to-r from-purple-600/10 via-red-600/10 to-green-600/10 rounded-2xl blur-xl -z-10"
            animate={{
              opacity: isHovered ? 0.4 : 0.2,
            }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      ) : (
        // Fallback for JSX components with modern styling
        <motion.div
          className="relative w-full flex items-center justify-center rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-900 to-stone-900 border border-neutral-700/40"
          style={{ height }}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="relative z-10"
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {children}
          </motion.div>
          
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-red-500/10" />
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)
                `,
                backgroundSize: '24px 24px'
              }}
            />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default FullScreenPreview;
