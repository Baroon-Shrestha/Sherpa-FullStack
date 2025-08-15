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
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const [showMoreLangs, setShowMoreLangs] = useState(false);

  const features = [
    {
      title: t("aboutWhy.authenticSherpaCulture.title"),
      description: t("aboutWhy.authenticSherpaCulture.description"),
      icon: Mountain,
    },
    {
      title: t("aboutWhy.primeThamelLocation.title"),
      description: t("aboutWhy.primeThamelLocation.description"),
      icon: MapPin,
    },
    {
      title: t("aboutWhy.inclusiveHospitality.title"),
      description: t("aboutWhy.inclusiveHospitality.description"),
      icon: Smile,
    },
    {
      title: t("aboutWhy.multilingualSupport.title"),
      description: t("aboutWhy.multilingualSupport.description"),
      icon: Globe,
      primaryLangs: [
        { label: "العربية" }, // Arabic (could translate or keep labels)
        { label: "中文" },
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
      title: t("aboutWhy.complimentaryWifi.title"),
      description: t("aboutWhy.complimentaryWifi.description"),
      icon: Wifi,
    },
    {
      title: t("aboutWhy.cleanAndSecure.title"),
      description: t("aboutWhy.cleanAndSecure.description"),
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-16" style={{ background: IVORY }}>
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {t("aboutWhy.whyChoose")}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F79724] to-[#2CACE2]">
              {t("aboutWhy.sherpaSoul")}
            </span>
          </h2>
          <p className="mt-2 text-base md:text-lg text-gray-600">
            {t("aboutWhy.subtitle")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isMultilingual = feature.title === t("aboutWhy.multilingualSupport.title");

            return (
              <div
                key={index}
                className="group relative rounded-2xl p-5 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{
                  border: `1px solid ${MAROON}22`,
                  boxShadow: `0 6px 14px 0 ${MAROON}12`,
                }}
              >
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

                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-1.5 text-sm text-gray-600">{feature.description}</p>

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
                          ? t("aboutWhy.hideOtherLanguages")
                          : t("aboutWhy.showOtherLanguages")}
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
