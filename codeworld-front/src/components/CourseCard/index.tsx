"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface CourseCardProps {
  title: string;
  iconSrc: string;
  sub: string;
  desc: string;
}

const CoursesSection: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const courses: CourseCardProps[] = [
    {
      title: "Qrafik Dizayn",
      iconSrc: "/images/Curseimages/graphicdesign.png",
      sub: "Adobe Photoshop/ Illustrator",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing ",
    },
    {
      title: "UX/UI Dizayn  ",
      iconSrc: "/images/Curseimages/Compcard.png",
      sub: "Adobe Photoshop/ Illustrator",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing ",
    },
    {
      title: "Frontend",
      iconSrc: "/images/Curseimages/Component front.png",
      sub: "Adobe Photoshop/ Illustrator",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing ",
    },
    {
      title: "Backend",
      iconSrc: "/images/Curseimages/Component 2.png",
      sub: "Adobe Photoshop/ Illustrator",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing ",
    },
    {
      title: "Data Analitika",
      iconSrc: "/images/Curseimages/Component da.png",
      sub: "Adobe Photoshop/ Illustrator",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing ",
    },
    {
      title: "QA",
      iconSrc: "/images/Curseimages/Component qa.png",
      sub: "Adobe Photoshop/ Illustrator",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing ",
    },
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-6 py-10">
      <div className="flex items-center justify-start mb-8 gap-2">
        <h2 className="text-[clamp(1.5rem,4vw,2.5rem)]  font-bold text-start text-[#023047] nav-poppins">
          Kurslarımız
        </h2>
        <img
          src="/images/Compright.png"
          alt=""
          className="w-[29.5] h-[23px] sm:w-8 sm:h-8"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-start nav-poppins">
        {courses.map((course, index) => (
          <div
            key={course.title}
            data-aos="fade-right"
            data-aos-delay={index * 100}
            className="relative bg-[#D1B200] w-[clamp(280px,90%,372px)] min-h-[135px] p-4 cursor-pointer overflow-hidden transition-transform duration-300 "
          >
            <img
              src={course.iconSrc}
              alt={`${course.title} icon`}
              className="absolute top-2 right-2 w-6 h-6 sm:w-7 sm:h-7"
            />

            <h3 className="text-[#023047] font-medium text-lg sm:text-xl absolute top-2 left-3">
              {course.title}
            </h3>

            <div className="group relative w-full h-full overflow-hidden rounded-md lg:p-3">
              <div className="absolute bottom-0 left-0 z-10 h-[20px] w-full hidden lg:flex">
                <img
                  src="/images/Line.png"
                  alt="Wave line overlay"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="absolute lg:-left-full bottom-0 z-20 h-[60px] w-full lg:px-3 transition-all duration-400 ease-in-out lg:group-hover:left-0 bg-[#D1B200] backdrop-blur-sm flex items-center justify-between">
                <div>
                  <h2 className="text-[#023047] text-[13px] sm:text-[14px] font-bold">
                    {course.sub}
                  </h2>
                  <p className="text-[#023047] text-[11px] sm:text-[12px] font-normal">
                    {course.desc}
                  </p>
                </div>

                <img
                  src="/images/Compright.png"
                  alt=""
                  className="w-[22px] h-[18px] sm:w-6 sm:h-5"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
