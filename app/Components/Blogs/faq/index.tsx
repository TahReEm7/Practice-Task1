import { Accordion, Box } from '@mantine/core';
import React from 'react'


interface QA {
  id: number;
  question: string;
  answer: string;
}



const qnaData: QA[] = [
  {
    id: 1,
    question: 'How often should I change my car oil?',
    answer:
      'Typically, every 5,000 to 7,000 kilometers, but it depends on your vehicle model and driving conditions. Always check your manufacturer’s manual for exact intervals.',
  },
  {
    id: 2,
    question: 'What are the most common reasons for engine overheating?',
    answer:
      'Low coolant levels, broken radiator fans, or a faulty thermostat are common causes. Regular maintenance helps prevent overheating issues.',
  },
  {
    id: 3,
    question: 'Can I wash my car engine myself?',
    answer:
      'Yes, but do it carefully. Cover electrical parts, use mild pressure, and avoid soaking sensitive areas. If unsure, let a professional handle it.',
  },
];


function FAQs() {
  return (
    <Box>        
      <h2 className="text-3xl font-bold text-blue-600 my-12 text-center">
          FAQs & Q&A
        </h2>

        <div className="flex justify-center">
          <Accordion
            chevronPosition="right"
            variant="separated"
            className="w-full  max-w-[1440px] shadow-xl p-4 rounded-xl"
          >
            {qnaData.map((qa) => (
              <Accordion.Item key={qa.id} value={qa.id.toString()}>
                <Accordion.Control>{qa.question}</Accordion.Control>
                <Accordion.Panel>{qa.answer}</Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </Box>
  )
}

export default FAQs