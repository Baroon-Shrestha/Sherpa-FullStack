import { Mountain } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <div>
      <div
        className="relative min-h-[110vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('sitter2.jpg')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>

        {/* Floating decorative icons */}
        {/* <div className="absolute inset-0 overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-30"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${i * 1}s`,
                animationDuration: `${4 + Math.random() * 2}s`,
              }}
            >
              <Mountain className="w-6 h-6 text-white/40" />
            </div>
          ))}
        </div> */}

        {/* Text content with animation */}
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              backgroundPosition: "200% center",
              transition: { duration: 0.6 },
            }}
            className="text-5xl md:text-7xl font-extrabold tracking-wide drop-shadow-2xl mb-6 
                       bg-gradient-to-r from-white via-orange-200 to-orange-500 
                       bg-clip-text text-transparent bg-[length:200%_200%] bg-left"
          >
            About Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
          >
            Welcoming National & International Guests with Authentic Sherpa
            Hospitality
          </motion.p>
        </div>
      </div>
    </div>
  );
}
