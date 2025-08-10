import React, { useState } from "react";
import {
  Mountain,
  Wifi,
  ShieldCheck,
  Smile,
  MapPin,
  Globe,
  MessageCircle,
} from "lucide-react";

// Buddhist-inspired palette
const SAFFRON = "#F6A823"; // marigold/saffron
const MAROON = "#7B2D26"; // monk robe maroon
const IVORY = "#FFFBF5"; // soft background

function Badge({ children }) {
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium mr-2 mb-2"
      style={{
        color: "#374151", // gray-700
        border: `1px solid ${MAROON}33`,
        background: "#ffffff",
      }}
    >
      {children}
    </span>
  );
}

export default function AboutWhy() {
  const [showMoreLangs, setShowMoreLangs] = useState(false);

  const features = [
    {
      title: "Authentic Sherpa Culture",
      description:
        "Experience the warmth and traditions of Sherpa hospitality, welcoming both Nepali and international guests with equal care.",
      icon: Mountain,
    },
    {
      title: "Prime Thamel Location",
      description:
        "Ideal for Kathmandu explorers — close to markets, eateries, and heritage sites.",
      icon: MapPin,
    },
    {
      title: "Inclusive Hospitality",
      description:
        "Thoughtful service and amenities tailored for solo travelers, families, and groups.",
      icon: Smile,
    },
    {
      title: "Multilingual Support",
      description:
        "No language barrier — guided help from check‑in to check‑out.",
      icon: Globe,
      primaryLangs: [
        { label: "العربية" }, // Arabic
        { label: "中文" }, // Chinese
        { label: "English" },
      ],
      otherLangs: [
        "नेपाली (Nepali)",
        "हिन्दी (Hindi)",
        "日本語 (Japanese)",
        "한국어 (Korean)",
        "Deutsch",
        "Français",
        "Español",
      ],
    },
    {
      title: "Complimentary Wi‑Fi",
      description: "Reliable high‑speed internet throughout your stay.",
      icon: Wifi,
    },
    {
      title: "Clean & Secure",
      description:
        "Daily housekeeping and secure access so you can feel at ease.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-16" style={{ background: IVORY }}>
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        {/* Heading (smaller/compact) */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Why Choose{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F79724] to-[#2CACE2]">
              Sherpa Soul
            </span>
          </h2>
          <p className="mt-2 text-base md:text-lg text-gray-600">
            What makes our guest house a peaceful, practical base in Kathmandu
          </p>
        </div>

        {/* Cards — tighter grid, smaller padding & icons */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isMultilingual = feature.title === "Multilingual Support";

            return (
              <div
                key={index}
                className="group relative rounded-2xl p-5 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{
                  border: `1px solid ${MAROON}22`,
                  boxShadow: `0 6px 14px 0 ${MAROON}12`,
                }}
              >
                {/* subtle saffron→maroon hover wash */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${SAFFRON}, ${MAROON})`,
                  }}
                />

                <div className="relative z-10">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm"
                    style={{
                      background: `linear-gradient(90deg, ${SAFFRON}, ${MAROON})`,
                      boxShadow: `0 6px 12px ${SAFFRON}29`,
                    }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-gray-600">
                    {feature.description}
                  </p>

                  {isMultilingual && (
                    <div className="mt-3">
                      <div className="mb-1">
                        {feature.primaryLangs.map((l, i) => (
                          <Badge key={i}>{l.label}</Badge>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => setShowMoreLangs((s) => !s)}
                        className="inline-flex items-center gap-2 text-xs font-semibold"
                        style={{ color: MAROON }}
                        aria-expanded={showMoreLangs}
                      >
                        <MessageCircle className="w-4 h-4" />
                        {showMoreLangs
                          ? "Hide other languages"
                          : "Show other languages"}
                      </button>

                      {showMoreLangs && (
                        <div className="mt-2">
                          {feature.otherLangs.map((name, i) => (
                            <Badge key={i}>{name}</Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* thin saffron bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px] rounded-b-2xl"
                  style={{ background: SAFFRON }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
