import React, { useEffect, useState } from "react";
import { ArrowRight, Play, X } from "lucide-react";
import { motion } from "framer-motion";

export default function HomeIntro() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const heroSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
      title: "Luxury Redefined",
      subtitle: "Premium Comfort",
    },
    {
      image:
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&h=800&fit=crop",
      title: "Nepalese Heritage",
      subtitle: "Modern Elegance",
    },
    {
      image:
        "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?w=1200&h=800&fit=crop",
      title: "Unforgettable Experience",
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

  return (
    <div className="relative">
      <section className="h-[90vh] flex relative overflow-hidden">
        {/* Background Image Slideshow */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-[3000ms] ease-in-out ${
                index === currentSlide
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-110"
              }`}
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url('${slide.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          ))}
        </div>

        {/* Content Panel */}
        <div className="w-full flex flex-col justify-end px-6 sm:px-12 lg:px-20 pb-6 relative">
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(to top, 
                  rgba(171, 136, 101, 0.95) 0%, 
                  rgba(171, 136, 101, 0.8) 20%, 
                  rgba(171, 136, 101, 0.4) 40%, 
                  rgba(171, 136, 101, 0.1) 70%,
                  rgba(171, 136, 101, 0) 100%
                )
              `,
            }}
          />

          {/* Animated Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative z-10 space-y-8 max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-none tracking-tight">
                Hotel Sherpa Soul
                <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl block mt-2 text-white/90 font-light tracking-wider"></span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-white/80 text-lg leading-relaxed max-w-2xl font-light"
            >
              Experience unparalleled hospitality in the heart of Kathmandu. Our
              boutique hotel seamlessly blends traditional Nepalese charm with
              contemporary luxury, creating memories that last a lifetime.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-start sm:justify-end gap-4 pt-4"
            >
              <button className="group bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2">
                <span>Book Your Stay</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button
                onClick={openModal}
                className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-800 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Virtual Tour</span>
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
                Virtual Tour - Hotel Sherpa Soul
              </h3>
              <p className="text-white/80">
                Take a virtual journey through our luxurious accommodations and
                discover the perfect blend of tradition and modernity.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
