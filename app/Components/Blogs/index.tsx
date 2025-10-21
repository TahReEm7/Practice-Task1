'use client';
import React, { useEffect, useState } from 'react';
import { FiLoader } from 'react-icons/fi';
import BlogList from './blogList';
import FAQs from './faq';




const BlogPage: React.FC = () => {
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
    <div className="bg-gray-50 py-4 px-6 mb-12">
      <div className=" max-w-[1440px] mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">
          Car Doctor Blog
        </h1>

        {/* Blog List */}
        <BlogList></BlogList>

        {/* Q&A Section */}
        <FAQs></FAQs>
      </div>
    </div>
  );
};

export default BlogPage;
