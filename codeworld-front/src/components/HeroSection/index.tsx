import React from "react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat overflow-hidden nav-poppins"
      style={{
        backgroundImage: `url("/images/Background.jpg")`,
      }}
    >
      <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent opacity-90 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col justify-center h-full px-[clamp(2rem,8vw,12rem)] max-w-[1440px] mx-auto">
        <div className="absolute top-[15%] left-0 z-10 max-w-[clamp(800px,100vw,1200px)] flex flex-col gap-[clamp(1.5rem,3vw,3rem)] text-left pl-[clamp(2rem,5vw,8rem)]">
          <h1
            className="font-extrabold text-white"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              lineHeight: "clamp(3rem, 7vw, 6rem)",
              letterSpacing: "0",
            }}
          >
            Bizimlə təhsildə yeniliyə doğru addım at!
          </h1>

          <div
            className="text-gray-200 font-medium"
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              lineHeight: "clamp(1.8rem, 2.5vw, 2.2rem)",
            }}
          >
            <p>Axtardığın ixtisaslar burda:</p>
            <p>Qrafik Dizayn · UX/UI design · Frontend proqramlaşdırma</p>
            <p>Backend proqramlaşdırma · Data Analitika</p>
          </div>

          <Link
            to="/register"
            className="inline-block rounded-bl-2xl rounded-tr-2xl bg-[#A25905] text-white font-semibold hover:bg-[#219EBC] hover:text-[#023047] transition-colors duration-300 w-fit"
            style={{
              padding: "clamp(0.8rem, 1.5vw, 1rem) clamp(1.5rem, 3vw, 2.5rem)",
              fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
            }}
          >
            Bizə qoşul
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
