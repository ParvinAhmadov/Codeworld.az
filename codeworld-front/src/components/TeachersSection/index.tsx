"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

interface Teacher {
  id: number;
  name: string;
  role: string;
  image: string;
}

const TeachersSection: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const teachers: Teacher[] = [
    {
      id: 1,
      name: "James Bond",
      role: "Qrafik Dizayner",
      image: "/images/teachers/teacher1.jpg",
    },
    {
      id: 2,
      name: "Katniss Everdeen",
      role: "Qrafik Dizayner",
      image: "/images/teachers/teacher2.jpg",
    },
    {
      id: 3,
      name: "Jack Sparrow",
      role: "Qrafik Dizayner",
      image: "/images/teachers/teacher3.jpg",
    },
    {
      id: 4,
      name: "Jane Doe",
      role: "Qrafik Dizayner",
      image: "/images/teachers/teacher4.jpg",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out", once: true });
  }, []);

  return (
    <section className="max-w-[1440px] mx-auto  px-6 py-12 flex flex-col gap-10 overflow-hidden nav-poppins">
      <div className="flex items-center justify-start mb-8 gap-2">
        <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold text-[#023047]">
          Müəllimlərimiz
        </h2>
        <img
          src="/images/Compright.png"
          alt=""
          className="w-[29.5] h-[23px] sm:w-8 sm:h-8"
        />
      </div>

      <motion.div
        ref={sliderRef}
        className="flex gap-5 cursor-grab"
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }}
      >
        {[...teachers, ...teachers].map((teacher, index) => (
          <div
            key={teacher.id + index}
            className="
       shrink-0

         w-full           
         sm:max-w-[280px]
         lg:w-[330px]     
         h-[435px]
         flex flex-col items-center
       "
            data-aos="fade-left"
            data-aos-delay={index * 100}
          >
            <div className="w-full h-[300px] rounded-bl-[100px] rounded-tr-[100px] rounded-tl-0 rounded-br-0 overflow-hidden ">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-[#023047] font-semibold text-lg mt-4 text-center">
              {teacher.name}
            </h3>
            <p className="text-[#023047] text-sm font-normal text-center">
              {teacher.role}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default TeachersSection;
