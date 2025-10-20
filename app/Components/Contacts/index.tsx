"use client";

import { Box } from "@mantine/core";
import React, { useState, useEffect } from "react";
import { FiLoader } from "react-icons/fi";
import ContactInfo from "./contactInfo";
import ContactForm from "./contactForm";


const Contact: React.FC = () => {
  const [pageLoading, setPageLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setPageLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (pageLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <FiLoader className="animate-spin text-6xl text-blue-600" />
      </div>
    );
  }

  return (
    <Box className="bg-gray-50 flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-[1440px] w-full bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h2>

        {/* Contact Info */}
        <ContactInfo />

        {/* Contact Form */}
        <ContactForm />
      </div>
    </Box>
  );
};

export default Contact;
