import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const LazyMotionItem = ({ type, src }) => {
  if (type === "video") {
    return (
      <video
        src={src}
        className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
        controls={false}
        autoPlay
        loop
        muted
        playsInline
      />
    );
  }
  return (
    <motion.img
      src={src}
      alt=""
      className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
      loading="lazy"
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    />
  );
};

const SkeletonShimmer = () => (
  <div className="animate-pulse h-full">
    <div
      className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-3xl h-full w-full"
      style={{
        backgroundSize: "200% 100%",
        animation: "shimmer 2.5s infinite linear",
      }}
    ></div>
  </div>
);

const GallerySkeletonGrid = ({ count = 12 }) => {
  const skeletons = Array.from({ length: count }, (_, i) => i);
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 lg:gap-8 space-y-6 lg:space-y-8">
      {skeletons.map((_, index) => (
        <div
          key={index}
          className="break-inside-avoid mb-6 lg:mb-8"
          style={{
            aspectRatio:
              index % 3 === 0 ? "4/5" : index % 4 === 0 ? "3/4" : "1/1",
          }}
        >
          <SkeletonShimmer />
        </div>
      ))}
    </div>
  );
};

export default function ProfessionalGallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Updated gallery array with description for each image
  const gallery = [
    {
      src: "/sitter2.jpg",
      type: "image",
      description:
        "Our cozy sitter rooms offer a peaceful environment with top-notch facilities suitable for families and solo travelers alike. Perfect for relaxing stays with easy access to hotel amenities.",
    },
    {
      src: "/singlesitter.jpg",
      type: "image",
      description:
        "The single sitter rooms are designed for comfort and convenience, ideal for guests looking for a quiet, private space with modern decor and essential amenities.",
    },
    {
      src: "/Rooms.jpeg",
      type: "image",
      description:
        "Spacious rooms featuring elegant furnishings and a king-size bed, perfect for couples or business travelers seeking luxury and convenience.",
    },
    {
      src: "/room6.jpg",
      type: "image",
      description:
        "Deluxe rooms with scenic views, equipped with high-speed Wi-Fi and premium services tailored for an exceptional stay.",
    },
    {
      src: "room5.jpg",
      type: "image",
      description:
        "Our executive suite offers an exquisite blend of comfort and style, designed to meet the needs of discerning guests.",
    },
    {
      src: "/room4.jpg",
      type: "image",
      description:
        "Comfortable rooms with contemporary design elements, ensuring a relaxing atmosphere and all necessary conveniences.",
    },
    {
      src: "/room3.jpg",
      type: "image",
      description:
        "Standard rooms featuring cozy bedding and access to all hotel services, ideal for budget-conscious travelers.",
    },
    {
      src: "room2.jpg",
      type: "image",
      description:
        "Well-appointed rooms perfect for families, offering ample space and child-friendly facilities.",
    },
    {
      src: "/room1.jpg",
      type: "image",
      description:
        "Classic rooms with modern amenities and easy access to hotel dining and recreational options.",
    },
    {
      src: "room1.jpeg",
      type: "image",
      description:
        "Comfort and elegance combined in these rooms, suited for both short and long stays with a focus on guest satisfaction.",
    },
    {
      src: "washroom.jpg",
      type: "image",
      description:
        "Pristine bathrooms equipped with modern fixtures, providing a spa-like experience for guests.",
    },
    {
      src: "/download (9).jpeg",
      type: "image",
      description:
        "Beautiful hotel lobby and reception area showcasing our commitment to hospitality and service excellence.",
    },
  ];

  const openModal = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scroll when modal open
  };

  const closeModal = () => {
    setSelectedIndex(null);
    setIsModalOpen(false);
    document.body.style.overflow = "unset"; // Restore scroll
  };

  const nextMedia = () =>
    setSelectedIndex((prev) => (prev + 1) % gallery.length);
  const prevMedia = () =>
    setSelectedIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));

  const renderGrid = () => (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 lg:gap-8 space-y-6 lg:space-y-8">
      {gallery.map((file, index) => (
        <div
          key={index}
          className="group cursor-pointer relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] bg-white break-inside-avoid mb-6 lg:mb-8"
          onClick={() => openModal(index)}
          style={{
            aspectRatio:
              index % 3 === 0 ? "4/5" : index % 4 === 0 ? "3/4" : "1/1",
          }}
        >
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 relative h-full">
            <LazyMotionItem type={file.type} src={file.src} />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="bg-white/95 backdrop-blur-md rounded-full px-6 py-3 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
                <span className="text-gray-800 font-semibold text-sm">
                  View Image
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>

      <section className="relative w-full h-[70vh] lg:h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            src="/Gallery.jpg"
            alt="Gallery Hero"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 lg:px-8 text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Our Gallery
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-gray-200 font-light leading-relaxed">
              A curated collection showcasing moments that define our journey
              and vision
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Collection
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our carefully selected images that capture the essence of
              our brand and story
            </p>
          </div>
          {isLoading ? <GallerySkeletonGrid count={12} /> : renderGrid()}
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4">
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 z-60 text-white/80 hover:text-white hover:bg-white/10 rounded-full p-3 transition-all duration-200"
            aria-label="Close modal"
          >
            <X size={28} />
          </button>
          <button
            onClick={prevMedia}
            className="absolute left-6 z-60 text-white/80 hover:text-white hover:bg-white/10 rounded-full p-4 transition-all duration-200"
            aria-label="Previous image"
          >
            <ChevronLeft size={36} />
          </button>
          <button
            onClick={nextMedia}
            className="absolute right-6 z-60 text-white/80 hover:text-white hover:bg-white/10 rounded-full p-4 transition-all duration-200"
            aria-label="Next image"
          >
            <ChevronRight size={36} />
          </button>

          <div className="max-w-4xl max-h-[85vh] mx-auto px-4 lg:px-6 relative bg-white rounded-lg shadow-xl flex flex-col overflow-hidden">
            <div className="flex-shrink-0 p-4 bg-gray-100 border-b border-gray-300 flex justify-between items-center">
              <span className="font-semibold text-lg text-gray-900">
                Image {selectedIndex + 1} of {gallery.length}
              </span>
            </div>

            <div className="overflow-auto p-4 flex flex-col md:flex-row gap-6">
              {/* Image or video */}
              <div className="flex-shrink-0 md:w-1/2 max-h-[70vh]">
                {gallery[selectedIndex].type === "image" ? (
                  <img
                    src={gallery[selectedIndex].src}
                    alt=""
                    className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-md"
                  />
                ) : (
                  <video
                    src={gallery[selectedIndex].src}
                    autoPlay
                    muted
                    loop
                    className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-md"
                  />
                )}
              </div>

              {/* Description */}
              <div className="md:w-1/2 overflow-auto max-h-[70vh]">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  Description
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                  {gallery[selectedIndex].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
