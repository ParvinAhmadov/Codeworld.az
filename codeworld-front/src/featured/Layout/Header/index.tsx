import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  to: string;
}

const navItems: NavItem[] = [
  { label: "Haqqımızda", to: "/About" },
  { label: "İxtisaslar", to: "/courses" },
  { label: "Təqaüdlər", to: "/scholarships" },
  { label: "Əlaqə", to: "/contact" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-[#A2580533] w-full">
      <div className="max-w-[1440px] h-[86px] mx-auto flex justify-between items-center px-5 py-3">
        <div className="flex items-center gap-2">
          <img
            className="w-[36px] h-[36px]"
            src="/images/WorldLogo.png"
            alt="Logo"
          />
          <NavLink
            to="/"
            className="font-bold text-[#023047]"
            style={{ fontSize: "clamp(1.5rem, 2vw, 2rem)" }}
          >
            codeworld
          </NavLink>
        </div>

        <nav className="hidden md:flex space-x-6 font-medium nav-poppins">
          {navItems.map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                `block relative rounded-bl-lg rounded-tr-lg p-2 transition-all duration-300
                 ${
                   isActive
                     ? "bg-[#A25905] text-white "
                     : "text-[#023047] hover:text-[#023047] hover:bg-[#219EBC]  hover:border-yellow-400"
                 }`
              }
              style={{
                fontSize: "clamp(1.5rem, 2vw, 1.5rem)",
                lineHeight: "100%",
                letterSpacing: "0%",
                fontWeight: 500,
              }}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/register"
          className={({ isActive }) =>
            `hidden md:flex nav-poppins px-4 py-2 rounded-4xl font-bold transition text-sm sm:text-base
           ${
             isActive
               ? "bg-[#A25905] text-white "
               : "text-[#023047] hover:text-[#023047] bg-[#D1B200] hover:bg-[#219EBC] hover:border-yellow-400"
           }`
          }
          style={{ fontSize: "clamp(0.875rem, 1vw, 1rem)" }}
        >
          Qeydiyyat
        </NavLink>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? (
              <HiX className="w-6 h-6 text-[#023047]" />
            ) : (
              <HiMenu className="w-6 h-6 text-[#023047]" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#A2580533] w-full p-6 overflow-hidden flex flex-col space-y-3 nav-poppins"
          >
            {navItems.map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-lg font-medium transition ${
                    isActive
                      ? "text-[#A25905]"
                      : "text-[#023047] hover:text-[#023047]"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <NavLink
              to="/register"
              onClick={closeMenu}
              className="bg-[#A25805] text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition text-sm sm:text-base nav-poppins"
              style={{ fontSize: "clamp(0.875rem, 1vw, 1rem)" }}
            >
              Qeydiyyat
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
