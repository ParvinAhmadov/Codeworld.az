"use client";

import React from "react";

interface Scholarship {
  id: number;
  title: string;
  description: string;
  icon: "check" | "arrow";
}

const scholarships: Scholarship[] = [
  {
    id: 1,
    title: "Akademik Təqaüd",
    description:
      "Yüksək nəticə göstərən və tədrisdə faallığı ilə seçilən tələbələrə təqdim olunur.",
    icon: "check",
  },
  {
    id: 2,
    title: "Sosial Dəstək Təqaüdü",
    description:
      "Maddi imkanı məhdud olan, lakin öyrənmək həvəsi güclü olan tələbələr üçün nəzərdə tutulub.",
    icon: "arrow",
  },
  {
    id: 3,
    title: "Erkən Qeydiyyat Endirimi",
    description:
      "Semestr başlamazdan əvvəl qeydiyyatdan keçən tələbələr üçün xüsusi endirimlər tətbiq olunur.",
    icon: "check",
  },
  {
    id: 4,
    title: "Qızlar üçün IT Dəstəyi Proqramı",
    description:
      "Texnologiya və dizayn sahəsində təhsil alan xanım tələbələr üçün qismən təqaüd imkanı yaradır.",
    icon: "arrow",
  },
];

const ScholarshipsSection: React.FC = () => {
  return (
    <>
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 py-12 flex flex-col gap-10 nav-poppins relative z-10">
        <div className="flex items-center justify-start gap-2 mb-8">
          <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold text-[#023047]">
            Təqaüdlər
          </h2>
          <img
            src="/images/Compright.png"
            alt="Right arrow"
            className="w-6 h-6"
          />
        </div>
        <div className="w-full flex justify-center ">
          <img
            src="/images/Line4.png"
            alt="Bottom line"
            className="w-[700px] h-5 object-contain "
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {scholarships.map((item) => (
            <div
              key={item.id}
              className="relative w-full sm:max-w-[280px] lg:w-[303px] h-[406px] p-6 flex flex-col items-start justify-between text-left"
              style={{
                background: `linear-gradient(to bottom , white 0%, #8ECAE6 13%, #8ECAE6 80%, white 100%)`,
              }}
            >
              <div className="flex gap-2 mb-4">
                <img
                  src="/images/Curseimages/Compcard.png"
                  alt="Check icon"
                  className="w-[50px] h-[50px]"
                />
                <img
                  src="/images/Compright.png"
                  alt="Arrow icon"
                  className="w-5 h-5"
                />
              </div>

              <div className="mb-7">
                <h3 className="font-semibold text-[clamp(1rem,2vw,1.6rem)] text-[#023047]">
                  {item.title}
                </h3>
                <p className="text-[#023047] text-[clamp(0.875rem,1.5vw,1rem)] mt-auto">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center ">
          <img
            src="/images/Line4.png"
            alt="Bottom line"
            className="w-[700px] h-5 object-contain "
          />
        </div>
        <div className="flex justify-end">
          <button className="inline-block rounded-bl-2xl rounded-tr-2xl bg-[#A25905] text-white  hover:bg-[#219EBC] hover:text-[#023047] transition-colors duration-300 w-[200px] p-4">
            İndi müraciət et
          </button>
        </div>
      </section>
    </>
  );
};

export default ScholarshipsSection;
