import React, { useState } from "react";
import {
  Facebook,
  Instagram,
  MapPin,
  Mail,
  Phone,
  Mountain,
  Heart,
  Send,
  ArrowUp,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-emerald-500 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <img src="/logo.png" alt="" className="w-[260px]" />
            </div>

            <p className="text-slate-300 leading-relaxed max-w-md">
              Experience the authentic warmth of Sherpa hospitality in the
              vibrant heart of Thamel. Where mountain serenity meets urban
              convenience, creating unforgettable memories for every traveler.
            </p>
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-slate-200">
                Follow Our Journey
              </h4>
              <div className="flex space-x-4">
                <Link
                  to="#"
                  className="p-3 bg-slate-800 hover:bg-blue-600 rounded-xl transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="p-3 bg-slate-800 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 rounded-xl transition-all duration-300 transform hover:scale-110 "
                >
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-blue-400 flex items-center space-x-2">
              <span>Quick Links</span>
              <div className="h-px bg-gradient-to-r from-blue-400 to-transparent flex-1 ml-3"></div>
            </h3>
            <nav className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Rooms & Suites", path: "/rooms" },
                { name: "Gallery", path: "/gallery" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  className="block text-slate-300 hover:text-blue-400 transition-colors duration-300 transform hover:translate-x-2 hover:scale-105 py-1"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-blue-400 flex items-center space-x-2">
              <span>Get in Touch</span>
              <div className="h-px bg-gradient-to-r from-blue-400 to-transparent flex-1 ml-3"></div>
            </h3>

            {/* Contact Info */}
            <div className="space-y-4">
              <a
                href="tel:+9779851068219"
                className="flex items-center space-x-3 text-slate-300 hover:text-blue-400 transition-colors duration-300 group"
              >
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-blue-500 transition-colors duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+977 9851068219</span>
              </a>

              <a
                href="mailto:mingmasaino@gmail.com"
                className="flex items-center space-x-3 text-slate-300 hover:text-blue-400 transition-colors duration-300 group"
              >
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-blue-500 transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <span>mingmasaino@gmail.com</span>
              </a>

              <div className="flex items-center space-x-3 text-slate-300">
                <div className="p-2 bg-slate-800 rounded-lg">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Thamel, Kathmandu, Nepal</span>
              </div>
            </div>

            {/* Social Media */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-slate-400 text-center md:text-left">
            <p>
              © {new Date().getFullYear()} Hotel Sherpa Soul. Crafted with love
              in the Himalayas.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="/privacy"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
            >
              Terms of Service
            </a>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-800 hover:bg-blue-500 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
    </footer>
  );
}
