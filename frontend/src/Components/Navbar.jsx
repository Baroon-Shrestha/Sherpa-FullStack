import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BookingModal from "./HelperComponents/BookingModal";

export default function Navbar() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const currentPath = location.pathname;

  const { t } = useTranslation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false); // New state for booking modal
  const [selectedLanguage, setSelectedLanguage] = useState(
    i18n.language.toUpperCase()
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  const home = t("nav.home");

  const navItems = [
    { id: "home", label: home, href: "/" },
    { id: "about", label: "About Us", href: "/about" },
    { id: "room", label: "Rooms", href: "/rooms" },
    { id: "gallery", label: "Gallery", href: "/gallery" },
    { id: "contact", label: "Contact", href: "/contact" },
  ];

  const languages = [
    { code: "EN", label: "English", prefix: "" },
    { code: "ZH", label: "Chinese", prefix: "/zh" },
    { code: "AR", label: "Arabic", prefix: "/ar" },
    { code: "JP", label: "Japanese", prefix: "/ja" },
  ];

  // Sync selectedLanguage state when i18n language changes
  useEffect(() => {
    setSelectedLanguage(i18n.language.toUpperCase());
  }, [i18n.language]);

  // Sync i18next language on mount and on URL path change based on prefix
  useEffect(() => {
    const langFromPath = languages.find(
      ({ prefix }) => prefix && currentPath.startsWith(prefix)
    );
    if (langFromPath && i18n.language !== langFromPath.code.toLowerCase()) {
      i18n.changeLanguage(langFromPath.code.toLowerCase());
    } else if (!langFromPath && i18n.language !== "en") {
      i18n.changeLanguage("en");
    }
  }, [currentPath]);

  // Scroll effect for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable body scroll on mobile menu open or booking modal open
  useEffect(() => {
    document.body.style.overflow =
      isMobileMenuOpen || isBookingModalOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen, isBookingModalOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLanguageDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle language change: update i18next language, selectedLanguage and navigate to new URL
  const handleLanguageChange = (code) => {
    if (code === selectedLanguage) {
      setIsLanguageDropdownOpen(false);
      return;
    }

    const lng = code.toLowerCase(); // 'en', 'zh', 'ar'
    i18n.changeLanguage(lng);
    setSelectedLanguage(code);
    setIsLanguageDropdownOpen(false);

    // Strip existing language prefix from currentPath
    let pathWithoutPrefix = currentPath;
    languages.forEach(({ prefix }) => {
      if (prefix && pathWithoutPrefix.startsWith(prefix)) {
        pathWithoutPrefix = pathWithoutPrefix.replace(prefix, "") || "/";
      }
    });

    // Find prefix for new language
    const langInfo = languages.find((l) => l.code === code);
    // Compose new path with prefix + pathWithoutPrefix
    const newPath =
      langInfo.prefix + (pathWithoutPrefix === "" ? "/" : pathWithoutPrefix);

    navigate(newPath);
  };

  // Handle booking button click
  const handleBookingClick = () => {
    setIsBookingModalOpen(true);
    setIsMobileMenuOpen(false); // Close mobile menu if open
  };

  const NavLink = ({ item, mobile = false, onClick }) => {
    // Determine active based on currentPath considering language prefixes
    const langPrefixes = languages.map((l) => l.prefix);
    const isActive = langPrefixes.some(
      (prefix) => currentPath === prefix + item.href
    );

    return (
      <motion.div
        className="relative"
        whileHover={{ y: mobile ? 0 : -1 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link
          to={
            (selectedLanguage === "EN"
              ? ""
              : selectedLanguage === "ZH"
              ? "/zh"
              : "/ar") + item.href
          }
          onClick={onClick}
          className={`relative transition-colors duration-300 font-medium ${
            mobile ? "block text-xl py-4 px-6 rounded-lg" : "py-3 px-1"
          } ${
            isActive
              ? "text-orange-500"
              : mobile
              ? "text-blue-700 hover:text-orange-500 hover:bg-orange-50"
              : "text-blue-700 hover:text-orange-500"
          }`}
        >
          {item.label}
          {!mobile && (
            <motion.span
              className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isActive ? 1 : 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          )}
          {mobile && isActive && (
            <motion.div
              className="absolute left-0 top-1/2 w-1 h-8 bg-orange-500 rounded-r-full"
              layoutId="mobileIndicator"
              style={{ translateY: "-50%" }}
            />
          )}
        </Link>
      </motion.div>
    );
  };

  const LanguageDropdown = ({ mobile = false }) => {
    if (mobile) {
      return (
        <div className="px-6 py-4 border-t border-blue-100">
          <h3 className="text-lg font-medium text-blue-700 mb-4">Language</h3>
          <div className="grid grid-cols-3 gap-3">
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                className={`px-4 py-3 rounded-lg border border-blue-700/20 text-sm font-medium transition-colors duration-200 ${
                  selectedLanguage === lang.code
                    ? "bg-orange-500 text-white shadow-md"
                    : "text-blue-700 hover:text-orange-500 hover:bg-orange-50"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleLanguageChange(lang.code)}
              >
                {lang.code}
              </motion.button>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="relative" ref={dropdownRef}>
        <motion.button
          onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
          className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-orange-50 ${
            isScrolled
              ? "text-blue-700 hover:text-blue-500"
              : "text-blue-700 hover:text-blue-500"
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Globe size={16} />
          <span>{selectedLanguage}</span>
          <motion.div
            animate={{ rotate: isLanguageDropdownOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={14} />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isLanguageDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 py-2 bg-white rounded-lg shadow-xl border border-gray-200 min-w-[140px] z-50"
            >
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${
                    selectedLanguage === lang.code
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-500"
                  }`}
                  whileHover={{ x: 2 }}
                  onClick={() => handleLanguageChange(lang.code)}
                >
                  <div className="flex items-center justify-between">
                    <span>{lang.label}</span>
                    <span className="text-xs opacity-75">{lang.code}</span>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 shadow-lg border-b border-blue-100 transition-all duration-300 z-50 ${
          isScrolled ? "bg-white/95 backdrop-blur-md" : "bg-white/70"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0 z-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" className="flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Sherpa Hotel Logo"
                  className={`h-20 w-auto max-w-[180px] object-contain transition-all duration-300 ${
                    isScrolled ? "brightness-100" : ""
                  }`}
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex space-x-8">
              {navItems.map((item) => (
                <NavLink key={item.id} item={item} />
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-3 lg:space-x-4 z-50">
              {/* Desktop Language Dropdown */}
              <div className="hidden lg:block">
                <LanguageDropdown />
              </div>

              {/* Book Now Button */}
              <motion.button
                onClick={handleBookingClick}
                className="hidden sm:flex items-center justify-center bg-orange-500 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-sm lg:text-base hover:bg-orange-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Quick Book
              </motion.button>

              {/* Mobile Book Now Button */}
              <motion.button
                onClick={handleBookingClick}
                className="sm:hidden flex items-center justify-center bg-orange-500 text-white px-3 py-2 rounded-full font-medium shadow-lg text-sm hover:bg-orange-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book
              </motion.button>

              {/* Mobile Hamburger Menu */}
              <motion.button
                onClick={toggleMobileMenu}
                className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50"
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle mobile menu"
              >
                <motion.span
                  className={`w-6 h-0.5 rounded-full transition-colors duration-300 ${
                    isScrolled ? "bg-blue-700" : "bg-white"
                  }`}
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 6 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className={`w-6 h-0.5 rounded-full transition-colors duration-300 ${
                    isScrolled ? "bg-blue-700" : "bg-white"
                  }`}
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                    scale: isMobileMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className={`w-6 h-0.5 rounded-full transition-colors duration-300 ${
                    isScrolled ? "bg-blue-700" : "bg-white"
                  }`}
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -6 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMobileMenu}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              className="fixed top-20 bottom-0 left-0 right-0 bg-white shadow-lg overflow-y-auto z-50 rounded-t-3xl"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <nav className="flex flex-col px-4 py-6">
                {navItems.map((item) => (
                  <NavLink
                    key={item.id}
                    item={item}
                    mobile
                    onClick={closeMobileMenu}
                  />
                ))}
                <LanguageDropdown mobile />

                {/* Mobile Book Now Button in Menu */}
                <div className="px-6 py-4 border-t border-blue-100">
                  <motion.button
                    onClick={handleBookingClick}
                    className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-base hover:bg-orange-600"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Quick Book
                  </motion.button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        selectedLanguage={selectedLanguage}
      />
    </>
  );
}
