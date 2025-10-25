import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
  color: string;
}

const Footer: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { icon: <FaLinkedin />, href: "#", label: "LinkedIn", color: "#0A66C2" },
    { icon: <FaInstagram />, href: "#", label: "Instagram", color: "#E1306C" },
    { icon: <FaFacebookF />, href: "#", label: "Facebook", color: "#1877F2" },
  ];

  return (
    <footer className="bg-[#023047] text-white py-10">
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col items-center text-center gap-8 md:flex-row md:items-start md:text-left justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <img
              src="/images/WorldLogo.svg"
              alt="Logo"
              className="w-9 h-9 object-cover"
            />
            <h2
              className="font-bold"
              style={{ fontSize: "clamp(1.5rem, 2vw, 2rem)", lineHeight: 1.2 }}
            >
              codeworld
            </h2>
          </div>
          <div
            className="space-y-1 nav-poppins text-gray-300 leading-[1.2] md:leading-[1.4] lg:leading-[1.6]"
            style={{ fontSize: "clamp(0.875rem, 1vw, 1rem)" }}
          >
            <p>İxtisaslar:</p>
            <p>Qrafik Dizayn, UI/UX Dizayn</p>
            <p>Frontend, Backend</p>
            <p>Data Analitika, QA</p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex gap-4">
            {socialLinks.map(({ icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 border flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-110"
                style={{ color, fontSize: "1.25rem" }}
              >
                {icon}
              </a>
            ))}
          </div>
          <div
            className="flex flex-col nav-poppins text-gray-300 items-center md:items-start leading-[1.4] md:leading-[1.6] lg:leading-[1.8]"
            style={{ fontSize: "clamp(0.875rem, 1vw, 1rem)" }}
          >
            <p>Digər</p>
            <p>Məxfilik</p>
            <p>Bizimlə Əlaqə</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
