import { Box } from '@mantine/core'
import React from 'react'

interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'How to Maintain Your Car Engine Like a Pro',
    date: 'October 10, 2025',
    author: 'Tahreem Hossain',
    content:
      'Regular oil changes, checking coolant levels, and timely servicing can significantly extend your car engine’s life. Learn the essential habits that keep your engine healthy.',
  },
  {
    id: 2,
    title: 'Top 5 Signs Your Car Needs Immediate Service',
    date: 'September 28, 2025',
    author: 'Car Doctor Team',
    content:
      'From strange noises to smoke under the hood — we cover the top warning signs that indicate it’s time to visit your mechanic before it’s too late.',
  },
  {
    id: 3,
    title: 'Best Tips for Saving Fuel While Driving in the City',
    date: 'August 18, 2025',
    author: 'Tahreem Hossain',
    content:
      'Smooth acceleration, maintaining steady speed, and regular tire checks can save you a lot of fuel. Here’s a guide for smarter, more efficient driving.',
  },
];


function BlogList() {
  return (
    <Box>        
      <div className="space-y-8 mb-12">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
                >
                  <h2 className="text-2xl font-semibold text-black mb-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">
                    {post.date} • {post.author}
                  </p>
                  <p className="text-gray-700 leading-relaxed">{post.content}</p>
                  <button className="mt-4 text-blue-600 font-medium hover:underline">
                    Read More →
                  </button>
                </div>
              ))}
            </div>
      </Box>
  )
}

export default BlogList