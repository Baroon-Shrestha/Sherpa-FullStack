import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Award, Heart, Star, Users } from "lucide-react";

/**
 * Brand palette (from the logo):
 *  - Blue:   #2CACE2 (primary) / #50B8E6 (hover accent)
 *  - Orange: #F79724 (primary)
 * Neutrals:  white / gray-800/700 for text only
 */
const BRAND_BLUE = "#2CACE2";
const BRAND_BLUE_HOVER = "#50B8E6";
const BRAND_ORANGE = "#F79724";

const stats = [
  { number: "15+", label: "Years of Hospitality", icon: Award },
  { number: "500+", label: "National & International Guests", icon: Users },
  { number: "24/7", label: "Guest Support", icon: Heart },
  { number: "4.8", label: "Guest Rating", icon: Star },
];

export default function AboutStats() {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut", staggerChildren: 0.08 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 14, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  return (
    <div className="px-3 sm:px-4 md:px-6 mt-6 md:mt-10">
      {/* Subtle brand bar (blue) */}
      <div
        aria-hidden="true"
        className="pointer-events-none -z-10 absolute inset-x-0 top-0 h-16"
        style={{
          background: `linear-gradient(to bottom, ${BRAND_BLUE}22, transparent)`,
        }}
      />

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-stretch"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Intro card */}
        <motion.section
          variants={cardVariants}
          className="relative isolate overflow-hidden rounded-2xl border p-4 sm:p-6 md:p-8 shadow-md md:shadow-lg bg-white"
          style={{ borderColor: `${BRAND_ORANGE}55` }}
          aria-labelledby="intro-heading"
        >
          {/* Blue/Orange corner accents only */}
          <span
            aria-hidden="true"
            className="absolute -top-2 -left-2 h-6 w-16 rounded-full"
            style={{ background: BRAND_BLUE, opacity: 0.12 }}
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-3 -right-3 h-6 w-16 rounded-full"
            style={{ background: BRAND_ORANGE, opacity: 0.12 }}
          />

          <motion.h2
            id="intro-heading"
            variants={statVariants}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-center"
            style={{ color: BRAND_ORANGE }}
          >
            Welcome to Our Guest House
          </motion.h2>

          <motion.p
            variants={statVariants}
            className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl leading-relaxed text-center text-gray-800"
          >
            Your home away from home — we proudly serve guests from all over the
            world, offering authentic Sherpa hospitality filled with warmth and
            comfort.
          </motion.p>

          {/* Nepali */}
          <motion.p
            variants={statVariants}
            className="mt-3 sm:mt-4 text-sm sm:text-base text-center text-gray-700"
          >
            हाम्रो गेष्ट हाउसमा तपाईंलाई स्वागत छ। यहाँ तपाईंलाई घरझैँको सुविधा
            र अतिथ्य सत्कारको अनुभव गराउन पाउँदा हामी गौरवान्वित छौं।
          </motion.p>

          {/* Chinese */}
          <motion.p
            variants={statVariants}
            className="mt-3 sm:mt-4 text-sm sm:text-base text-center text-gray-700"
          >
            欢迎来到我们的宾馆，我们以热情好客和舒适的环境欢迎来自世界各地的客人。
          </motion.p>

          {/* Arabic (RTL) */}
          <motion.p
            variants={statVariants}
            dir="rtl"
            className="mt-3 sm:mt-4 text-sm sm:text-base text-center text-gray-700"
          >
            مرحبًا بكم في دار الضيافة الخاصة بنا — منزلكم الثاني حيث نرحب
            بالضيوف من جميع أنحاء العالم ونقدم لهم دفء الضيافة وراحة الإقامة.
          </motion.p>
        </motion.section>

        {/* Stats grid */}
        <motion.section
          variants={cardVariants}
          className="rounded-2xl p-4 sm:p-6 md:p-8 shadow-md md:shadow-lg bg-white"
          style={{
            border: `1px solid ${BRAND_BLUE}55`,
          }}
          aria-label="Guest house statistics"
        >
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.article
                  key={idx}
                  variants={statVariants}
                  whileHover={{
                    y: reduceMotion ? 0 : -4,
                    scale: reduceMotion ? 1 : 1.02,
                  }}
                  whileTap={{ scale: reduceMotion ? 1 : 0.98 }}
                  className="group relative flex flex-col items-center justify-center rounded-xl py-4 sm:py-5 px-3 shadow-sm bg-white"
                  style={{
                    border: `1px solid ${BRAND_ORANGE}33`,
                  }}
                  role="group"
                  aria-label={stat.label}
                >
                  {/* Icon circle (blue), tiny orange ring on hover */}
                  <motion.div
                    aria-hidden="true"
                    className="relative mb-2 flex h-12 w-12 items-center justify-center rounded-full shadow"
                    style={{ background: BRAND_BLUE }}
                    initial={false}
                    whileHover={{ rotate: reduceMotion ? 0 : 3 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                  >
                    <Icon className="h-5 w-5 text-white" />
                    <span
                      className="absolute inset-0 rounded-full"
                      style={{ boxShadow: `0 0 0 0 ${BRAND_ORANGE}00` }}
                    />
                    <span
                      className="absolute inset-0 rounded-full transition-all"
                      style={{
                        boxShadow: `0 0 0 0 ${BRAND_ORANGE}00`,
                      }}
                    />
                  </motion.div>

                  {/* Number */}
                  <div className="text-lg sm:text-xl font-bold leading-none text-gray-900">
                    {stat.number}
                  </div>

                  {/* Label */}
                  <div className="mt-1 text-[11px] sm:text-xs md:text-sm leading-snug text-gray-700 max-w-[180px] text-center">
                    {stat.label}
                  </div>

                  {/* Hover outline using brand blue */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-xl transition-all duration-200"
                    style={{
                      boxShadow: "none",
                    }}
                  />
                  <style>{`
                    .group:hover > span[aria-hidden="true"] {
                      box-shadow: 0 0 0 2px ${BRAND_BLUE}33, 0 4px 14px ${BRAND_BLUE}22;
                    }
                    .group:hover .h-12.w-12 {
                      background: ${BRAND_BLUE_HOVER};
                    }
                  `}</style>
                </motion.article>
              );
            })}
          </motion.div>
        </motion.section>
      </motion.div>
    </div>
  );
}
