import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About Us", href: "/about" },
    { id: "room", label: "Rooms", href: "/rooms" },
    { id: "gallery", label: "Gallery", href: "/gallery" },
    { id: "contact", label: "Contact", href: "/contact" },
  ];

  const languages = [
    { code: "EN", label: "English" },
    { code: "中文", label: "Chinese" },
    { code: "عربي", label: "Arabic" },
  ];

  // Handle scroll effect for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable/enable body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "0px"; // Prevent layout shift
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }

    // Cleanup function to reset scroll when component unmounts
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [isMobileMenuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLanguageDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const NavLink = ({ item, mobile = false, onClick }) => {
    const isActive = currentPath === item.href;
    return (
      <motion.div
        className="relative"
        whileHover={{ y: mobile ? 0 : -1 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link
          to={item.href}
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
                onClick={() => setSelectedLanguage(lang.code)}
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
                  onClick={() => {
                    setSelectedLanguage(lang.code);
                    setIsLanguageDropdownOpen(false);
                  }}
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
              <Link to="/" className="flex items-center justify-center" />
              <img
                src="logo.png"
                alt="Sherpa Hotel Logo"
                className={`h-20 w-auto max-w-[180px] object-contain transition-all duration-300 ${
                  isScrolled ? "brightness-100" : ""
                }`}
              />
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
              <motion.div
                className="hidden sm:block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/book-now"
                  className="bg-orange-500 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-sm lg:text-base hover:bg-orange-600"
                >
                  Book Now
                </Link>
              </motion.div>

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
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-40 lg:hidden overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.4,
              }}
            >
              {/* Mobile Menu Header */}
              <div className="px-6 py-8 border-b border-blue-100">
                <div className="flex items-center justify-center">
                  <img
                    src="logo.png"
                    alt="Sherpa Hotel Logo"
                    className="h-12 w-auto max-w-[120px] object-contain"
                  />
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <div className="py-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.1 + 0.2,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                  >
                    <NavLink
                      item={item}
                      mobile={true}
                      onClick={closeMobileMenu}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Mobile Language Selection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
              >
                <LanguageDropdown mobile={true} />
              </motion.div>

              {/* Mobile Book Now Button */}
              <motion.div
                className="px-6 py-6 border-t border-blue-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                <motion.a
                  href="#"
                  className="block w-full bg-orange-500 text-white text-center px-6 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-lg hover:bg-orange-600"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={closeMobileMenu}
                >
                  Book Now
                </motion.a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
