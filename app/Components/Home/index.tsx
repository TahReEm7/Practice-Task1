'use client';

import { useEffect, useState } from 'react';
import { FiLoader } from 'react-icons/fi';
import AboutUs from './AboutUs';
import Availability from './Availability';
import Banner from './Banner';
import OurServices from './OurServices';
import Team from './Team';

function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <FiLoader className="animate-spin text-6xl text-blue-600" />
      </div>
    );
  }

  return (
    <div className=" max-w-[1440px] mx-auto ">
      <Banner />
      <AboutUs />
      <OurServices />
      <Availability />
      <Team />
    </div>
  );
}

export default HomePage;
