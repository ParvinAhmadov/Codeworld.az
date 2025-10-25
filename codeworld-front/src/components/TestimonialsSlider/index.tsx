"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  text: string;
}

interface ColorScheme {
  bg: string;
  text: string;
}

const COLORS: Record<"bronze" | "lightBlue", ColorScheme> = {
  bronze: { bg: "#C8956C", text: "#023047" },
  lightBlue: { bg: "#B8D4E3", text: "#023047" },
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Vesper",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit .",
  },
  {
    id: 2,
    name: "Vesper",
    text: "Pellentesque habitr sit amet, consectetur adipiscing elitr sit amet, consectetur adipiscing elitant morbi tristique senectus et netus.",
  },
  {
    id: 3,
    name: "Vesper",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    name: "Vesper",
    text: "Vivamus lacinia odio vitar sit amet, consectetur adipiscing elite vestibulum vestibulum.",
  },
  {
    id: 5,
    name: "Vesper",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lore.",
  },
  {
    id: 6,
    name: "Vesper",
    text: "Curabitur sit amet, consectetur adipiscing elit sit amet, consectetur adipiscing elitr blandit tempus porttitor.",
  },
];

interface TestimonialCardProps {
  item: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ item, index }) => {
  const color = item.id === 1 ? COLORS.bronze : COLORS.lightBlue;
  const isLarge = index % 2 === 0;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="select-none p-6 snap-center shrink-0 "
      style={{
        backgroundColor: color.bg,
        color: color.text,
        height: isLarge
          ? "clamp(360px, 42vh, 460px)"
          : "clamp(320px, 38vh, 420px)",
      }}
    >
      <h3 className="font-semibold text-lg mb-3">{item.name}</h3>
      <p className="text-base leading-relaxed">{item.text}</p>
    </motion.div>
  );
};

const TestimonialsWithImage: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragWidth, setDragWidth] = useState(0);

  useEffect(() => {
    const calculateDragWidth = () => {
      if (!sliderRef.current || !containerRef.current) return;
      const scrollableWidth =
        sliderRef.current.scrollWidth - containerRef.current.offsetWidth;
      setDragWidth(scrollableWidth > 0 ? scrollableWidth : 0);
    };

    calculateDragWidth();
    window.addEventListener("resize", calculateDragWidth);
    return () => window.removeEventListener("resize", calculateDragWidth);
  }, []);

  return (
    <section className="max-w-[1440px] mx-auto px-6 sm:px-10 py-12 flex flex-col gap-10 nav-poppins ">
      <div className="flex items-center justify-start mb-8 gap-2">
        <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold text-[#023047]">
          Tələbələrimizin rəyləri
        </h2>
        <img
          src="/images/Compright.png"
          alt=""
          className="w-[29.5] h-[23px] sm:w-8 sm:h-8"
        />
      </div>

      <div className="flex flex-col items-center lg:flex-row gap-6 sm:gap-8">
        <div className="mx-auto md:m-0 w-[235px] h-[310px] md:w-[290px] md:h-[351px]">
          <motion.img
            src="images/Rectangle.png"
            alt="Student testimonial"
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>

        <div
          ref={containerRef}
          className="p-5 w-full md:w-[600px] lg:w-[1000px] h-full relative overflow-hidden"
          style={{
            background:
              "linear-gradient(to right, #0000002E 0%, #00000000 18%, #00000000 82%, #0000002E 100%)",
          }}
        >
          <motion.div
            ref={sliderRef}
            className="grid grid-flow-col gap-5 pb-4 snap-x snap-mandatory cursor-grab auto-cols-[100%] sm:auto-cols-[48%] md:auto-cols-[45%] lg:auto-cols-[23%]"
            drag="x"
            dragConstraints={{ left: -dragWidth, right: 0 }}
            dragElastic={0.2}
          >
            {testimonials.map((item, index) => (
              <TestimonialCard key={item.id} item={item} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsWithImage;
