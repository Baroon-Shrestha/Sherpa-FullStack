import React from "react";
import {
  Tv2,
  Wifi,
  ShieldCheck,
  ShowerHead,
  Utensils,
  BedDouble,
  Briefcase,
} from "lucide-react";
import { motion } from "framer-motion";

export default function HomeServices() {
  const services = [
    {
      icon: <BedDouble className="w-8 h-8 text-[#8B4513]" />,
      title: "Clean & Airy Rooms",
      desc: "Spacious, well-ventilated rooms with daily cleaning service.",
    },
    {
      icon: <Wifi className="w-8 h-8 text-[#8B4513]" />,
      title: "Free Wi-Fi",
      desc: "High-speed internet available throughout the property.",
    },
    {
      icon: <Tv2 className="w-8 h-8 text-[#8B4513]" />,
      title: "Cable TV",
      desc: "Access to local and international channels.",
    },
    {
      icon: <Utensils className="w-8 h-8 text-[#8B4513]" />,
      title: "Room Service",
      desc: "Delicious meals and drinks delivered to your room.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-[#8B4513]" />,
      title: "Secure Storage",
      desc: "Safeboxes available for your valuables.",
    },
    {
      icon: <ShowerHead className="w-8 h-8 text-[#8B4513]" />,
      title: "Hot Shower",
      desc: "24/7 hot water for your comfort.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="min-h-screen bg-[#fff5ed] py-16"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] text-amber-600 uppercase mb-4 font-light">
            SERVICES
          </p>
          <h1 className="text-5xl font-light text-gray-900 tracking-wide">
            Our SERVICES
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side with Image */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-red-100 rounded-2xl md:rounded-r-full h-[75vh] overflow-hidden flex items-center justify-center"
          >
            <img
              src="/sitter2.jpg"
              alt="Services"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Right Side with Icons and Features */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-0 md:mt-16 px-4 md:pr-12"
          >
            <div className="flex items-start flex-col mb-6">
              <div className="text-2xl font-extrabold mb-2">
                What We Provide
              </div>
              <div className="max-w-xl">
                We offer a comfortable stay with all the basic amenities you’d
                expect from a modern guest house. Enjoy a relaxing experience
                with dependable service.
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div>{service.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#1a1a1a]">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
