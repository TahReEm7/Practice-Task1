import { Box } from '@mantine/core'
import React from 'react'

function Intro() {
  return (
    <Box className="bg-white rounded-2xl shadow-md p-8 mb-12">
             <p className="text-gray-700 leading-relaxed text-lg mb-4">
               Welcome to{' '}
               <span className="font-semibold text-blue-600">Car Doctor</span> —
               your trusted automotive partner. We specialize in maintaining,
               repairing, and improving vehicles with the utmost care and
               professionalism. Our goal is to keep your car performing at its
               best, ensuring safety and reliability on every drive.
             </p>
             <p className="text-gray-700 leading-relaxed text-lg">
               Founded in 2025 by{' '}
               <span className="font-semibold">Tahreem Hossain</span>, Car Doctor
               began as a small garage and has grown into a modern car service
               platform dedicated to providing high-quality, affordable, and
               transparent auto care solutions.
             </p>
           </Box>
  )
}

export default Intro