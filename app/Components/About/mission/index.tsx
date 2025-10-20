import { Box } from '@mantine/core'
import React from 'react'
import { FiHeart, FiTool, FiUsers } from 'react-icons/fi'

function Mission() {
  return (
    <Box>
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Our Mission & Values
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white shadow-md rounded-xl p-6 text-center">
                  <FiTool className="mx-auto text-3xl text-blue-600 mb-3" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Quality Service
                  </h3>
                  <p className="text-gray-600">
                    We ensure every repair and inspection meets the highest quality
                    standards with modern diagnostic tools.
                  </p>
                </div>
                <div className="bg-white shadow-md rounded-xl p-6 text-center">
                  <FiHeart className="mx-auto text-3xl text-blue-600 mb-3" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Customer Care
                  </h3>
                  <p className="text-gray-600">
                    Your satisfaction is our priority. We believe in honest
                    communication and friendly service.
                  </p>
                </div>
                <div className="bg-white shadow-md rounded-xl p-6 text-center">
                  <FiUsers className="mx-auto text-3xl text-blue-600 mb-3" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Expert Team
                  </h3>
                  <p className="text-gray-600">
                    Our certified mechanics and technicians bring years of experience
                    to deliver top-notch results.
                  </p>
                </div>
              </div>
    </Box>
  )
}

export default Mission