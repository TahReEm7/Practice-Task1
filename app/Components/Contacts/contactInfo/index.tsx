import { Box } from '@mantine/core'
import React from 'react'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

function ContactInfo() {
  return (
    <Box>
              <div className="grid md:grid-cols-3 gap-6 mb-8 text-center">
          <div>
            <FiMail className="mx-auto text-2xl text-blue-600" />
            <p className="mt-2 text-gray-700">info@cardoctor.com</p>
          </div>
          <div>
            <FiPhone className="mx-auto text-2xl text-blue-600" />
            <p className="mt-2 text-gray-700">+880 1936532058</p>
          </div>
          <div>
            <FiMapPin className="mx-auto text-2xl text-blue-600" />
            <p className="mt-2 text-gray-700">Uttara, Dhaka</p>
          </div>
        </div>
    </Box>
  )
}

export default ContactInfo