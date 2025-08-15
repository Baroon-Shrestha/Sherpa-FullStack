import React, { useEffect, useState } from "react";
import { ArrowRight, Play, X } from "lucide-react";
import { motion as Motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import BookingModal from "../HelperComponents/BookingModal";

export default function HomeIntro() {
  const { t, i18n } = useTranslation();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const heroSlides = [
    {
      image: "/singlesitter.jpg",
      subtitle: t("home.hero.subtitle"),
    },
    {
      image: "/sitter2.jpg",
      subtitle: t("home.hero.subtitle"),
    },
    {
      image: "/singlesitter.jpg",
      subtitle: t("home.hero.subtitle"),
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying, heroSlides.length]);

  const openModal = () => {
    setIsModalOpen(true);
    setIsPlaying(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsPlaying(true);
  };

  const isArabic = i18n.language.toLowerCase() === "ar";

  return (
    <div
      className={`relative ${isArabic ? "direction-rtl" : "direction-ltr"}`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <section className="w-screen h-screen relative overflow-hidden flex">
        {/* Background Image Slideshow */}
        {/* Background Image Slideshow */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-[3000ms] ease-in-out ${
                index === currentSlide
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url('${slide.image}')`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>
          ))}
        </div>

        {/* Content Panel */}
        <div
          className={`relative z-10 w-full flex flex-col justify-end px-6 sm:px-12 lg:px-20 pb-12 max-w-6xl text-white ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          <Motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {/* Text + Buttons container */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              {/* Text Block */}
              <div className="space-y-4 max-w-3xl">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-none tracking-tight">
                  {t("home.hero.title")}
                </h1>
                <h2 className="text-xl sm:text-2xl font-semibold text-amber-300">
                  {heroSlides[currentSlide].subtitle}
                </h2>
                <p className="text-white/90 text-lg leading-relaxed font-light">
                  {t("home.hero.paragraph")}
                </p>
              </div>

              {/* Buttons Block */}
              <div
                className={`flex flex-col justify-between gap-4 ${
                  isArabic ? "sm:flex-row-reverse" : ""
                }`}
              >
                <button
                  onClick={() => {
                    setIsBookingModalOpen(true);
                    setIsModalOpen(false);
                  }}
                  className="group bg-white text-gray-800 px-6 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
                >
                  <span>{t("home.hero.bookButton")}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <button
                  onClick={openModal}
                  className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-800 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>{t("home.hero.tourButton")}</span>
                </button>
              </div>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl mx-4 bg-black rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative aspect-video">
              <iframe
                src="https://www.youtube.com/embed/8IoDrKmbeBs?si=fQZBO4KHYiGJvmt4"
                title="Hotel Sherpa Soul Virtual Tour"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="p-6 bg-gradient-to-r from-amber-900/50 to-amber-800/50">
              <h3 className="text-xl font-bold text-white mb-2">
                {t("home.hero.modalTitle")}
              </h3>
              <p className="text-white/80">{t("home.hero.modalDesc")}</p>
            </div>
          </div>
        </div>
      )}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        selectedLanguage={i18n.language.toUpperCase()}
      />
    </div>
  );
}
