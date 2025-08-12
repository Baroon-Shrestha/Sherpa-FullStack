import React, { useEffect, useState } from "react";
import { ArrowRight, Play, X } from "lucide-react";
import { motion } from "framer-motion";
import BookingModal from "../HelperComponents/BookingModal";

const texts = {
  EN: {
    title: "Hotel Sherpa Soul",
    paragraph:
      "Experience unparalleled hospitality in the heart of Kathmandu. Our boutique hotel seamlessly blends traditional Nepalese charm with contemporary luxury, creating memories that last a lifetime.",
    bookButton: "Book Your Stay",
    tourButton: "Virtual Tour",
    modalTitle: "Virtual Tour - Hotel Sherpa Soul",
    modalDesc:
      "Take a virtual journey through our luxurious accommodations and discover the perfect blend of tradition and modernity.",
  },
  zh: {
    title: "夏尔巴灵魂酒店",
    paragraph:
      "在加德满都的心脏地带体验无与伦比的热情好客。我们的精品酒店完美融合了传统尼泊尔魅力与现代奢华，创造终生难忘的回忆。",
    bookButton: "预订您的住宿",
    tourButton: "虚拟导览",
    modalTitle: "虚拟导览 - 夏尔巴灵魂酒店",
    modalDesc: "通过虚拟之旅体验我们的豪华住宿，发现传统与现代的完美融合。",
  },
  ar: {
    title: "فندق شيربا سول",
    paragraph:
      "اختبر ضيافة لا مثيل لها في قلب كاتماندو. يجمع فندقنا البوتيكي بسلاسة بين سحر النيبالي التقليدي والفخامة العصرية، ليخلق ذكريات تدوم مدى الحياة.",
    bookButton: "احجز إقامتك",
    tourButton: "الجولة الافتراضية",
    modalTitle: "الجولة الافتراضية - فندق شيربا سول",
    modalDesc:
      "قم برحلة افتراضية عبر أماكن إقامتنا الفاخرة واكتشف المزيج المثالي بين التقليد والحداثة.",
  },
};

export default function HomeIntro({ language = "EN" }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const heroSlides = [
    {
      image: "/singlesitter.jpg",
      title: texts[language].title,
      subtitle: "Premium Comfort",
    },
    {
      image: "/sitter2.jpg",
      title: texts[language].title,
      subtitle: "Modern Elegance",
    },
    {
      image: "/singlesitter.jpg",
      title: texts[language].title,
      subtitle: "Heart of Thamel",
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

  // Detect if language is Arabic to add RTL styles
  const isArabic = language.toLowerCase() === "ar";

  return (
    <div
      className={`relative ${isArabic ? "direction-rtl" : "direction-ltr"}`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <section className="w-screen h-screen relative overflow-hidden flex">
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
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          ))}
        </div>

        {/* Content Panel */}
        <div
          className={`relative z-10 w-full flex flex-col justify-end px-6 sm:px-12 lg:px-20 pb-12 max-w-4xl text-white ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-none tracking-tight">
                {texts[language].title}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-white/90 text-lg leading-relaxed font-light"
            >
              {texts[language].paragraph}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className={`flex flex-col sm:flex-row justify-start sm:justify-end gap-4 pt-4 ${
                isArabic ? "flex-row-reverse" : ""
              }`}
            >
              <button className="group bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2">
                <span>{texts[language].bookButton}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button
                onClick={openModal}
                className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-800 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>{texts[language].tourButton}</span>
              </button>
            </motion.div>
          </motion.div>
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
                {texts[language].modalTitle}
              </h3>
              <p className="text-white/80">{texts[language].modalDesc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
