"use client";

import { Carousel } from "@mantine/carousel";
import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Slide {
  id: number;
  image: string;
  title: string;
  describe: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/hero1.jpg",
    title: "Expert Car Care",
    describe: "Precision. Performance. Perfection.",
  },
  {
    id: 2,
    image: "/hero2.jpg",
    title: "Professional Auto Services",
    describe: "Reliable, Efficient, and Affordable.",
  },
  {
    id: 3,
    image: "/hero3.jpg",
    title: "Your Car, Our Priority",
    describe: "Top-notch maintenance and repair services.",
  },
];

const Banner: React.FC = () => {
  return (
    <section className="relative w-full">
     <Carousel
  withIndicators
  height="70vh"
  loop
  nextControlIcon={<IconArrowRight size={22} />}
  previousControlIcon={<IconArrowLeft size={22} />}
  align="center"
  slideGap="md"
  classNames={{
    indicator:
      "w-2 h-2 bg-gray-300 transition-all duration-300 data-[active]:w-6 data-[active]:bg-blue-600 rounded-full",
  }}
>
        {slides.map((slide) => (
          <Carousel.Slide key={slide.id}>
            <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] rounded-xl overflow-hidden">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start px-6 sm:px-12 md:px-20 text-white">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                  {slide.title}
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl mb-6">
                  {slide.describe}
                </p>
                <div className="flex gap-4">
                  <Link
                    href="/services"
                    className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base"
                  >
                    Discover More
                  </Link>
                  <Link
                    href="/blogs"
                    className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition text-sm sm:text-base"
                  >
                    Latest Project
                  </Link>
                </div>
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </section>
  );
};

export default Banner;
