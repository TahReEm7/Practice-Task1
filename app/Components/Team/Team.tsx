"use client";

import { Carousel } from "@mantine/carousel";
import React from "react";
import Image from "next/image";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const team: TeamMember[] = [
  { id: 1, name: "John Smith", role: "Lead Mechanic", image: "/team1.jpg" },
  { id: 2, name: "Sophia Rahman", role: "Car Specialist", image: "/team2.jpg" },
  { id: 3, name: "David Khan", role: "Engine Expert", image: "/team3.jpg" },
  { id: 4, name: "Maria Islam", role: "Customer Advisor", image: "/team4.jpg" },
  { id: 5, name: "Michael Roy", role: "Technician", image: "/team5.jpg" },
];

const Team: React.FC = () => {
  return (
    <section className="my-12 md:py-12 text-center">
      <p className="text-blue-500 text-xl font-bold">Team</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        Meet Our Expert Team
      </h2>

      <div className="max-w-[1440px] mx-auto">
        <Carousel
          slideSize="33.3333%" 
          slideGap="md"
          height={340}
          emblaOptions={{
            loop: true,
            dragFree: false,
            align: "center",
          }}
        >
          {team.map((member) => (
            <Carousel.Slide key={member.id}>
              <div className="bg-white shadow-xl rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
                <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Team;
