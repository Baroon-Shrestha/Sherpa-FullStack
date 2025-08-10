import { ChevronRight, Heart } from "lucide-react";
import React from "react";

export default function AboutVision() {
  return (
    <div>
      <section className="relative py-12 px-4 md:px-10 bg-gradient-to-br from-red-100 via-orange-100 to-yellow-50 overflow-hidden">
        {/* Background Buddhist Logo */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <img
            src="/buddhist-logo.png"
            alt="Buddhist Symbol"
            className="w-[200px] opacity-10 blur-sm"
          />
        </div>

        {/* Soft Gradient Glows */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-red-300/30 to-orange-200/30 rounded-full filter blur-2xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-orange-300/30 to-yellow-200/30 rounded-full filter blur-2xl"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <div className="mb-8">
            <div className="inline-block p-5 bg-gradient-to-r from-orange-600 to-red-500 rounded-full mb-6 shadow-xl">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
                Vision
              </span>
            </h2>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
              To be the most trusted and beloved hotel in Kathmandu — where
              every guest, whether from Nepal or abroad, experiences the harmony
              of{" "}
              <span className="font-semibold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Sherpa hospitality
              </span>
              , cultural richness, and thoughtful comfort that bridges local
              warmth with international standards in the heart of the Himalayas.
            </p>
          </div>

          <div className="mt-8">
            <button className="group bg-gradient-to-r from-orange-600 to-red-500 text-white px-8 py-4 rounded-full font-bold text-base shadow-xl hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300">
              Start Your Journey
              <ChevronRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
