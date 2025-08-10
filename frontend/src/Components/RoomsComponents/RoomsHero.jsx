import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Using single hero image instead of slideshow
const heroImage =
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&h=1080&fit=crop&crop=center";

export default function RoomsHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        {/* Single Background Image with Parallax */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: `url(${heroImage})`,
            x: mousePosition.x * 0.5,
            y: mousePosition.y * 0.5,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        />

        {/* Video Background (commented out for now) */}
        {/* 
        <video
          className="absolute inset-0 w-full h-full object-cover scale-110"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        */}

        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10" />

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 w-2 h-2 bg-white/30 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-1 h-1 bg-white/40 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Bottom Content - Enhanced Text and CTA */}
        <div className="absolute bottom-0 left-0 right-0 z-20 px-6 md:px-12 lg:px-20 pb-16 md:pb-20">
          <div className="max-w-7xl mx-auto">
            {/* Enhanced 24/7 Service Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center gap-4 text-white/90 mb-8 md:mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-full blur-lg"></div>
                <div className="relative w-12 h-12 flex items-center justify-center ">
                  <svg
                    className="w-6 h-6 transition-transform hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                    <polyline points="12,6 12,12 16,14" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-semibold tracking-wide">
                  24/7 Room Service
                </span>
                <span className="text-sm md:text-base text-white/70 font-light">
                  Always here for you
                </span>
              </div>
            </motion.div>

            {/* Main Content Flex Container */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 lg:gap-16">
              {/* Enhanced Hero Text */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex-1 max-w-4xl"
              >
                <h1 className="text-6xl max-w-7xl md:text-7xl font-bold mb-6 leading-tight text-white">
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="block"
                  >
                    Discover rooms
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/80"
                  >
                    tailored to your lifestyle
                  </motion.span>
                  {/* <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="block font-light text-white/95"
                  >
                    Comfort, style, and functionality—all in one place.
                  </motion.span> */}
                </h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  className="text-xl md:text-2xl lg:text-2xl font-extralight text-white/80 leading-relaxed max-w-3xl"
                >
                  Comfort, style, and functionality—all in one place.
                </motion.p>
              </motion.div>
            </div>

            {/* Bottom Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/60"
            >
              <span className="text-xs uppercase tracking-widest mb-2 font-light">
                Scroll Down To Explore
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <style jsx>{`
          .writing-mode-vertical {
            writing-mode: vertical-rl;
            text-orientation: mixed;
          }
        `}</style>
      </div>
    </>
  );
}
