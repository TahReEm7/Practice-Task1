import { Box } from '@mantine/core'
import Image from 'next/image'
import React from 'react'

function TeamSection() {
  return (
    <Box>        
      <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Image
              src="/team1.jpg"
              alt="John Smith"
              width={120}
              height={120}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">John Smith</h3>
            <p className="text-blue-600 mb-2">Lead Mechanic</p>
            <p className="text-gray-600 text-sm">
              Expert in engine repair and diagnostics with over 10 years of
              experience.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Image
              src="/team2.jpg"
              alt="Sarah Khan"
              width={120}
              height={120}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Sarah Khan</h3>
            <p className="text-blue-600 mb-2">Customer Advisor</p>
            <p className="text-gray-600 text-sm">
              Passionate about ensuring every customer receives transparent and
              friendly service.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Image
              src="/team3.jpg"
              alt="Ali Ahmed"
              width={120}
              height={120}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Ali Ahmed</h3>
            <p className="text-blue-600 mb-2">Electrical Specialist</p>
            <p className="text-gray-600 text-sm">
              Skilled in car electrical systems, wiring, and diagnostic
              troubleshooting.
            </p>
          </div>
        </div></Box>
  )
}

export default TeamSection