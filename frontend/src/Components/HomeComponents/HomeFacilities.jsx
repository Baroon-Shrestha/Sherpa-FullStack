import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const HomeFacilities = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-stone-50 py-20 px-5" ref={sectionRef}>
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm tracking-widest uppercase text-amber-600 mb-5 font-light">
            {t("facilities.title1")}
          </p>
          <h2 className="text-6xl md:text-7xl font-light text-gray-900 tracking-tight">
            {t("facilities.title2")}
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 relative gap-x-6">
          {/* First Card */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Luxury Room"
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="max-w-xl bg-[#AB8865] text-white flex items-start justify-center flex-col absolute -bottom-5 left-5 p-6 rounded-xl shadow-2xl backdrop-blur-sm border border-amber-600/20 hover:scale-105 transition-all duration-300 group-hover:shadow-amber-900/25">
              <div className="text-4xl font-light mb-3 tracking-wide">
                <span className="mr-2">5+</span>
                <span className="text-lg font-normal">
                  {t("facilities.room.title")}
                </span>
              </div>
              <div className="text-amber-100 leading-relaxed text-sm">
                {t("facilities.room.desc")}
              </div>
            </div>
          </motion.div>

          {/* Second Card */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-[15%] relative group"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Food and Beverage"
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="max-w-xl bg-[#AB8865] text-white flex items-start justify-center flex-col absolute -bottom-10 left-5 p-6 rounded-xl shadow-2xl backdrop-blur-sm border border-amber-600/20 hover:scale-105 transition-all duration-300 group-hover:shadow-amber-900/25">
              <div className="text-4xl font-light mb-3 tracking-wide">
                <span className="mr-2">25+</span>
                <span className="text-lg font-normal">
                  {t("facilities.food.title")}
                </span>
              </div>
              <div className="text-amber-100 leading-relaxed text-sm">
                {t("facilities.food.desc")}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Decoration Circles */}
        <div className="absolute top-20 right-10 w-2 h-2 bg-amber-300 rounded-full opacity-60 animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-3 h-3 bg-amber-400 rounded-full opacity-40 animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-20 w-1 h-1 bg-amber-500 rounded-full opacity-80 animate-ping"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </div>
  );
};

export default HomeFacilities;
