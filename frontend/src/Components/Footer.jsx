import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, MapPin, Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#1a1a1a] text-white px-6 md:px-20 py-12 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-1">
          <h2 className="text-2xl font-bold text-[#AB8865] mb-4">
            {t("footer.brand.title")}
          </h2>
          <p className="text-sm text-gray-300">
            {t("footer.brand.description")}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#AB8865]">
            {t("footer.quickLinks.title")}
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-white">{t("footer.quickLinks.links.home")}</Link></li>
            <li><Link to="/about" className="hover:text-white">{t("footer.quickLinks.links.aboutUs")}</Link></li>
            <li><Link to="/rooms" className="hover:text-white">{t("footer.quickLinks.links.rooms")}</Link></li>
            <li><Link to="/gallery" className="hover:text-white">{t("footer.quickLinks.links.gallery")}</Link></li>
            <li><Link to="/contact" className="hover:text-white">{t("footer.quickLinks.links.contact")}</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#AB8865]">
            {t("footer.contactUs.title")}
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <Phone size={16} /> <span>{t("footer.contactUs.phone")}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> <span>{t("footer.contactUs.email")}</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> <span>{t("footer.contactUs.address")}</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#AB8865]">
            {t("footer.followUs.title")}
          </h3>
          <div className="flex gap-4 text-gray-300">
            <a href="#" className="hover:text-white" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-white" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-white" aria-label="TripAdvisor">
              <img src="/tripadvisor-icon.png" alt={t("footer.followUs.tripAdvisor")} className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <hr className="my-8 border-gray-600" />

      <div className="text-center text-xs text-gray-400">
        {t("footer.copyright.prefix")} {new Date().getFullYear()} {t("footer.copyright.hotelName")}。
        {t("footer.copyright.suffix")}
      </div>
    </footer>
  );
}
