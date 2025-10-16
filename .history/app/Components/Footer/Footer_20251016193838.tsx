"use client";

import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import React from "react";

const footerData = [
  {
    title: "About",
    links: ["Features", "Pricing", "Support", "Forums"],
  },
  {
    title: "Project",
    links: ["Contribute", "Media assets", "Changelog", "Releases"],
  },
  {
    title: "Community",
    links: ["Join Discord", "Follow on Twitter", "Email newsletter", "GitHub discussions"],
  },
];

const Footer = () => {
  return (
    <footer className="mt-28 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      {/* Upper Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col sm:flex-row justify-between gap-8">
        {/* Logo & Description */}
        <div className="max-w-xs text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              CD
            </div>
            <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Car Doctor
            </span>
          </div>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            Build fully functional, accessible web applications faster than ever.
          </p>
        </div>

        {/* Footer Link Groups */}
        <div className="hidden sm:flex flex-wrap gap-12">
          {footerData.map((group) => (
            <div key={group.title} className="min-w-[150px]">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {group.title}
              </h3>
              <ul>
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="block text-sm text-gray-600 dark:text-gray-400 hover:underline py-1"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Car Doctor. All rights reserved.</p>
          <div className="flex gap-3 mt-3 sm:mt-0">
            <a href="#" className="p-2 hover:text-blue-500 transition-colors">
              <IconBrandTwitter size={20} />
            </a>
            <a href="#" className="p-2 hover:text-blue-500 transition-colors">
              <IconBrandYoutube size={20} />
            </a>
            <a href="#" className="p-2 hover:text-pink-500 transition-colors">
              <IconBrandInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
