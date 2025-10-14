'use client';
import { NavLinks } from '@/app/Constant/Constant';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { LuNetwork } from 'react-icons/lu';

const Nav = () => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) setNavBg(true);
      else setNavBg(false);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full z-[10000] transition-all duration-300 ${
        navBg ? 'bg-gray-50 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center w-[92%] mx-auto p-5">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center">
            <LuNetwork className="w-5 h-5 text-white" />
          </div>
          <div className="text-xl hidden sm:block md:text-2xl text-cyan-800 font-bold">
            HireDev
          </div>
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex space-x-10 items-center">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="hover:text-cyan-800 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden lg:flex items-center">
          <button className="bg-gray-200 px-4 py-2 rounded-md ml-5 hover:bg-cyan-700 hover:text-white transition-all duration-200">
            Login/Registration
          </button>
          <button className="bg-cyan-800 text-white px-4 py-2 rounded-md ml-5 hover:bg-cyan-700 transition-all duration-200">
            Post a Job
          </button>
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <HiBars3BottomRight className="w-7 h-7 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
