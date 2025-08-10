import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { rooms } from "../HelperComponents/RoomsData";
import {
  ChevronLeft,
  MapPin,
  Users,
  Bed,
  Calendar,
  Star,
  Wifi,
  Car,
  Coffee,
  Utensils,
} from "lucide-react";

export default function RoomDetail() {
  const { id } = useParams();
  const roomId = Number(id);
  const room = rooms.find((r) => r.id === roomId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedServices, setSelectedServices] = useState([]);
  const navigate = useNavigate();

  if (!room)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Room not found
          </h2>
          <p className="text-gray-600">
            The room you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );

  // Handle both single image and array of images
  const images = Array.isArray(room.image) ? room.image : [room.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const toggleService = (serviceId) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const getAmenityIcon = (amenity) => {
    const amenityLower = amenity.toLowerCase();
    if (amenityLower.includes("wifi") || amenityLower.includes("internet"))
      return <Wifi className="w-4 h-4" />;
    if (amenityLower.includes("parking") || amenityLower.includes("car"))
      return <Car className="w-4 h-4" />;
    if (amenityLower.includes("coffee") || amenityLower.includes("tea"))
      return <Coffee className="w-4 h-4" />;
    if (amenityLower.includes("dining") || amenityLower.includes("restaurant"))
      return <Utensils className="w-4 h-4" />;
    return <Star className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Hero Section with Carousel */}
      <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden bg-black">
        <div className="relative w-full h-full">
          <img
            src={images[currentImageIndex]}
            alt={`${room.name} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-opacity duration-500"
          />

          <div className="z-50 absolute top-8 left-6">
            <button
              className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-2 rounded-2xl hover:bg-white transition-all duration-200 shadow-lg"
              onClick={() => navigate(-1)}
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="font-bold">Back</span>
            </button>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

          {/* Navigation Arrows (only show if multiple images) */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
                aria-label="Previous image"
              >
                <svg
                  className="w-6 h-6"
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
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
                aria-label="Next image"
              >
                <svg
                  className="w-6 h-6"
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
            </>
          )}

          {/* Image Indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentImageIndex
                      ? "bg-amber-400 w-8"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Room Title Overlay */}
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{room.name}</h1>
            <div className="flex flex-wrap gap-6 text-lg opacity-90">
              <span className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                {room.guests} Guests
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {room.size} sq ft
              </span>
              <span className="flex items-center gap-2">
                <Bed className="w-5 h-5" />
                {room.beds}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Enhanced Room Details - Takes 2/3 of the space */}
          <div className="lg:col-span-2 space-y-8">
            {/* Interactive Tab Navigation */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="flex border-b border-gray-200">
                {[
                  {
                    id: "overview",
                    label: "Overview",
                    icon: <Star className="w-4 h-4" />,
                  },
                  {
                    id: "amenities",
                    label: "Amenities",
                    icon: <Wifi className="w-4 h-4" />,
                  },
                  {
                    id: "features",
                    label: "Features",
                    icon: <Calendar className="w-4 h-4" />,
                  },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-4 font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? "bg-amber-50 text-amber-600 border-b-2 border-amber-500"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="p-8">
                {/* Overview Tab */}
                {activeTab === "overview" && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        About This Room
                      </h2>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {room.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center">
                        <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <div className="font-semibold text-gray-900">
                          {room.guests}
                        </div>
                        <div className="text-sm text-gray-600">Max Guests</div>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg text-center">
                        <MapPin className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <div className="font-semibold text-gray-900">
                          {room.size}
                        </div>
                        <div className="text-sm text-gray-600">Square Feet</div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg text-center">
                        <Bed className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                        <div className="font-semibold text-gray-900">
                          {room.beds}
                        </div>
                        <div className="text-sm text-gray-600">Bed Type</div>
                      </div>
                      <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-lg text-center">
                        <Star className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                        <div className="font-semibold text-gray-900">
                          Rs. {room.price}
                        </div>
                        <div className="text-sm text-gray-600">Per Night</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Amenities Tab */}
                {activeTab === "amenities" && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Room Amenities
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {room.amenities.map((amenity, idx) => (
                        <div
                          key={idx}
                          className="group flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg hover:from-amber-50 hover:to-amber-100 transition-all duration-300 cursor-pointer transform hover:scale-105"
                        >
                          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md transition-all duration-300">
                            <div className="text-amber-600 group-hover:text-amber-700">
                              {getAmenityIcon(amenity)}
                            </div>
                          </div>
                          <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
                            {amenity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features Tab */}
                {activeTab === "features" && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Special Features
                    </h3>
                    {room.features && room.features.length > 0 ? (
                      <div className="space-y-4">
                        {room.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="group flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-all duration-300"
                          >
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-600 transition-colors duration-300">
                              <svg
                                className="w-4 h-4 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                />
                              </svg>
                            </div>
                            <span className="text-gray-700 group-hover:text-gray-900 font-medium transition-colors duration-300">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Calendar className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="text-gray-500 italic text-lg">
                          No special features listed for this room.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 px-8 py-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-amber-600" />
                  Check In & Check Out Times
                </h3>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Check-In Card */}
                  <div className="group bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl hover:from-green-100 hover:to-emerald-100 transition-all duration-300 border border-green-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 group-hover:text-green-800 transition-colors duration-300">
                          Check-In Time
                        </h4>
                        <p className="text-sm text-gray-600">
                          Welcome to your stay
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <svg
                          className="w-4 h-4 text-green-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-2xl font-bold text-green-700">
                        12:00 PM
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      Early check-in may be available upon request and subject
                      to availability.
                    </p>
                  </div>

                  {/* Check-Out Card */}
                  <div className="group bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-xl hover:from-red-100 hover:to-rose-100 transition-all duration-300 border border-red-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 group-hover:text-red-800 transition-colors duration-300">
                          Check-Out Time
                        </h4>
                        <p className="text-sm text-gray-600">
                          Safe travels ahead
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <svg
                          className="w-4 h-4 text-red-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-2xl font-bold text-red-700">
                        12:00 PM
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      Late check-out may be available for an additional fee,
                      subject to availability.
                    </p>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">
                        Important Information
                      </h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Valid photo ID required at check-in</li>

                        <li>
                          • Please contact reception for early check-in or late
                          check-out requests
                        </li>
                        <li>
                          • Luggage storage available before check-in and after
                          check-out
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Booking Form with Background Image - Sticky sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div
                className="relative rounded-2xl p-8 shadow-2xl overflow-hidden"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50"></div>

                {/* Content */}
                <div className="relative z-10 text-white">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">
                      Reserve Your Stay
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-amber-400">
                        Rs. {room.price}
                      </span>
                      <span className="text-gray-300">/ night</span>
                    </div>
                  </div>

                  {/* Date Selection */}
                  <div className="space-y-4 mb-6">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-200">
                          Check In
                        </label>
                        <input
                          type="date"
                          className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-200 text-white placeholder-white/60"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-200">
                          Check Out
                        </label>
                        <input
                          type="date"
                          className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-200 text-white placeholder-white/60"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Guest & Room Details */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-200">
                        Adults
                      </label>
                      <input
                        type="number"
                        defaultValue={1}
                        min="1"
                        className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-200 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-200">
                        Children
                      </label>
                      <input
                        type="number"
                        defaultValue={0}
                        min="0"
                        className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-200 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-200">
                        Rooms
                      </label>
                      <input
                        type="number"
                        defaultValue={1}
                        min="1"
                        className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-200 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-200">
                        Extra Beds
                      </label>
                      <input
                        type="number"
                        defaultValue={0}
                        min="0"
                        className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-200 text-white"
                      />
                    </div>
                  </div>

                  {/* Total & Book */}
                  <div className="border-t border-white/20 pt-6 mb-6">
                    <div className="flex justify-between items-center text-xl">
                      <span className="font-medium text-gray-200">
                        Total Cost
                      </span>
                      <span className="font-bold text-amber-400">
                        Rs. {room.price}
                      </span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-xl">
                    Book Your Stay
                  </button>

                  <p className="text-xs text-gray-300 text-center mt-4">
                    Free cancellation up to 24 hours before check-in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
