import { ChevronRight, MapPin } from "lucide-react";
import React from "react";

export default function Aboutstory() {
  // Multi-color gradient
  const MULTI_GRADIENT = `linear-gradient(to right, #F79724, #FF6B6B, #9B5DE5, #2CACE2)`;

  return (
    <div>
      <section className="relative py-24 px-6 md:px-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-block  py-2 text-black text-md font-semibold mb-2">
                  Our Story
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                  Welcome to Hotel{" "}
                  <span
                    className="bg-clip-text text-transparent bg-gradient-to-r from-[#F79724] to-[#2CACE2]"
                    // style={{ background: "linear-gradient(to right, #, #FF6B6B, #9B5DE5, #2CACE2)" }}
                  >
                    Sherpa Soul
                  </span>
                </h2>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-gray-600">
                <p>
                  Nestled in the heart of Thamel, Kathmandu, Hotel Sherpa Soul
                  offers a unique blend of cultural charm, comfort, and
                  convenience for both national and international travelers
                  exploring the wonders of Nepal.
                </p>
                <p>
                  Whether you're a local guest discovering your own country's
                  treasures or an international visitor exploring Nepal's
                  majestic landscapes and historic sites, our hotel serves as
                  the perfect base with warm hospitality and modern amenities.
                </p>
                <p>
                  At Hotel Sherpa Soul, we proudly welcome guests from across
                  Nepal and around the world, sharing the authentic essence of
                  Sherpa warmth in the capital's most vibrant neighborhood.
                </p>
              </div>

              <div className="pt-4">
                <button
                  className="group text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  style={{ background: MULTI_GRADIENT }}
                >
                  <MapPin className="inline-block mr-2 w-5 h-5" />
                  Explore Our Location
                  <ChevronRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Image with overlays */}
            <div className="relative">
              <div className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                <img
                  src="intro.jpg"
                  alt="Hotel Sherpa Soul View"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
