'use client';

import React, { useEffect, useState } from 'react';
import { FiLoader } from 'react-icons/fi';
import Intro from './intro';
import Mission from './mission';
import TeamSection from './teamSection';

const About: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading (e.g., fetching data)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
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
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className=" max-w-[1440px] mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          About Car Doctor
        </h1>

        {/* Intro Section */}
        <Intro></Intro>

        {/* Mission Section */}
        <Mission></Mission>

        {/* Team Section */}
        <TeamSection></TeamSection>
      </div>
    </div>
  );
};

export default About;
