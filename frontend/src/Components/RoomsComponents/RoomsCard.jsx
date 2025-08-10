import React, { useState } from "react";
import { Link } from "react-router-dom";

const RoomsCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const roomsPerPage = 9;

  const rooms = [
    {
      id: 1,
      name: "Standard Single Room",
      guests: 1,
      size: "20 Feets Size",
      beds: "1 Single Bed",
      features: [],
      description:
        "A cozy room perfect for solo travelers. Equipped with essential amenities for a comfortable stay.",
      amenities: ["Free WiFi", "Work Desk", "Cable TV", "Shower", "Safebox"],
      price: 70,
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 2,
      name: "Deluxe Double Room",
      guests: 2,
      size: "35 Feets Size",
      beds: "1 King Bed",
      features: ["Connecting Rooms"],
      description:
        "Spacious and elegant room with a king-size bed and modern decor. Ideal for couples or business stays.",
      amenities: [
        "Free WiFi",
        "Cable TV",
        "Work Desk",
        "Refrigerator",
        "Shower",
        "Bathtub",
        "City View",
      ],
      price: 200,
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 3,
      name: "Twin Room",
      guests: 2,
      size: "30 Feets Size",
      beds: "2 Single Beds",
      features: [],
      description:
        "Perfect for friends or colleagues, this room features twin beds and all essential amenities.",
      amenities: ["Free WiFi", "Work Desk", "Shower", "Cable TV", "Balcony"],
      price: 120,
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    },
    {
      id: 4,
      name: "Family Room",
      guests: 4,
      size: "45 Feets Size",
      beds: "1 Double Bed, 2 Single Beds",
      features: ["Connecting Rooms"],
      description:
        "Ideal for families with a combination of beds and spacious interior for a comfortable stay.",
      amenities: [
        "Free WiFi",
        "Cable TV",
        "Refrigerator",
        "Bathtub",
        "Safebox",
      ],
      price: 250,
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 5,
      name: "Superior Double Room",
      guests: 2,
      size: "40 Feets Size",
      beds: "1 Queen Bed",
      features: [],
      description:
        "Modern and well-appointed room with elegant design, perfect for leisure or business travelers.",
      amenities: [
        "Free WiFi",
        "Work Desk",
        "Refrigerator",
        "Shower",
        "Cable TV",
      ],
      price: 180,
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 6,
      name: "Economy Room",
      guests: 2,
      size: "22 Feets Size",
      beds: "1 Double Bed",
      features: [],
      description:
        "Budget-friendly option with all the basics. Great for short stays or solo travelers looking for value.",
      amenities: ["Free WiFi", "Shower", "Cable TV"],
      price: 60,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80",
    },
  ];

  // Pagination logic
  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = rooms.slice(indexOfFirstRoom, indexOfLastRoom);
  const totalPages = Math.ceil(rooms.length / roomsPerPage);

  // const handleBookNow = (roomId, roomName) => {
  //   alert(`Booking ${roomName} (Room ID: ${roomId})`);
  // };

  // const handleViewDetails = (roomId, roomName) => {
  //   alert(`Viewing details for ${roomName} (Room ID: ${roomId})`);
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 md:py-16">
      <div className="text-center mb-12 px-4">
        <p className="text-xs text-amber-600 uppercase tracking-[0.3em] mb-3 font-medium">
          Rooms & Suites
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
          Our Rooms
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Discover comfort and elegance in our thoughtfully designed
          accommodations
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-4">
        {currentRooms.map((room, index) => (
          <div
            key={room.id}
            className="group relative bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-200 ease-out overflow-hidden transform hover:-translate-y-1"
            style={{
              animationDelay: `${index * 100}ms`,
              animation: "fadeInUp 0.8s ease-out forwards",
              willChange: "transform, box-shadow",
            }}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-200 pointer-events-none"
              style={{
                backgroundImage: `url(${room.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />

            {/* Main Image */}
            <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover transform transition duration-300 ease-out group-hover:scale-105"
              />

              {/* Price Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                from ${room.price}
              </div>

              {/* Features Badge */}
              {room.features.length > 0 && (
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
                  {room.features[0]}
                </div>
              )}

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative p-5 sm:p-6 space-y-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">
                  {room.name}
                </h3>

                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-3">
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {room.guests} Guest{room.guests > 1 ? "s" : ""}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2v8h12V6H4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {room.size}
                  </span>
                </div>

                <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                  {room.beds}
                </p>

                <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                  {room.description}
                </p>
              </div>

              {/* Amenities */}
              <div className="flex flex-wrap gap-1">
                {room.amenities.slice(0, 3).map((amenity, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded-full border border-amber-200"
                  >
                    {amenity}
                  </span>
                ))}
                {room.amenities.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    +{room.amenities.length - 3} more
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
                <Link to={`/room/${room.id}`}>
                  <button
                    // onClick={() => handleViewDetails(room.id, room.name)}
                    className="flex-1 px-4 py-2.5 border border-amber-600 text-amber-700 rounded-lg font-medium text-sm hover:bg-amber-50 transition-all duration-300 hover:shadow-md"
                  >
                    View Details
                  </button>
                </Link>
                <button
                  // onClick={() => handleBookNow(room.id, room.name)}
                  className="flex-1 px-4 py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg font-medium text-sm hover:from-amber-700 hover:to-amber-800 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Pagination */}
      {totalPages > 1 && (
        <div className="mt-16 flex justify-center items-center space-x-2 px-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-amber-50 hover:border-amber-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-10 h-10 text-sm rounded-full border transition-all duration-300 ${
                currentPage === index + 1
                  ? "bg-gradient-to-r from-amber-600 to-amber-700 text-white border-amber-600 shadow-lg"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-amber-50 hover:border-amber-300"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-amber-50 hover:border-amber-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default RoomsCard;
