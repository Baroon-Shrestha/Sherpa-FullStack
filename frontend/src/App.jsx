import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import RoomsPage from "./Pages/RoomsPage";
import ContactPage from "./Pages/ContactPage";
import FullGallery from "./Pages/FullGallery";
import RoomDetails from "./Components/RoomsComponents/RoomDetails";
import ScrollToTop from "./Components/HelperComponents/ScrollToTop";
import Layout from "./Components/HelperComponents/Layout";
import BookNowPage from "./Pages/BookNowPage";

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        {/* English routes */}
        <Route path="/" element={<HomePage lang="en" />} />
        <Route path="/about" element={<AboutPage lang="en" />} />
        <Route path="/services" element={<ServicesPage lang="en" />} />
        <Route path="/rooms" element={<RoomsPage lang="en" />} />
        <Route path="/book-now" element={<BookNowPage lang="en" />} />
        <Route path="/room/:id" element={<RoomDetails lang="en" />} />
        <Route path="/contact" element={<ContactPage lang="en" />} />
        <Route path="/gallery" element={<FullGallery lang="en" />} />

        {/* Chinese routes */}
        <Route path="/zh" element={<HomePage lang="zh" />} />
        <Route path="/zh/about" element={<AboutPage lang="zh" />} />
        <Route path="/zh/services" element={<ServicesPage lang="zh" />} />
        <Route path="/zh/rooms" element={<RoomsPage lang="zh" />} />
        <Route path="/zh/book-now" element={<BookNowPage lang="zh" />} />
        <Route path="/zh/room/:id" element={<RoomDetails lang="zh" />} />
        <Route path="/zh/contact" element={<ContactPage lang="zh" />} />
        <Route path="/zh/gallery" element={<FullGallery lang="zh" />} />

        {/* Arabic routes */}
        <Route path="/ar" element={<HomePage lang="ar" />} />
        <Route path="/ar/about" element={<AboutPage lang="ar" />} />
        <Route path="/ar/services" element={<ServicesPage lang="ar" />} />
        <Route path="/ar/rooms" element={<RoomsPage lang="ar" />} />
        <Route path="/ar/book-now" element={<BookNowPage lang="ar" />} />
        <Route path="/ar/room/:id" element={<RoomDetails lang="ar" />} />
        <Route path="/ar/contact" element={<ContactPage lang="ar" />} />
        <Route path="/ar/gallery" element={<FullGallery lang="ar" />} />

        {/* Redirect unknown routes to English home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
