import React, { useEffect } from "react";
import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const ErrorBoundry: React.FC = () => {
  const error = useRouteError();

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  let message = "Unknown error";
  let statusCode: number | null = null;

  if (isRouteErrorResponse(error)) {
    message = error.statusText || `${error.status}`;
    statusCode = error.status;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen text-center px-4 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url("/images/Background.jpg")`,
      }}
    >
      <div className="absolute inset-0 bg-[#023047]/80 z-0"></div>

      <div className="relative z-10 max-w-[640px] w-full mx-auto">
        <div
          className="flex items-center justify-center gap-2 mb-6"
          data-aos="fade-down"
        >
          <img
            src="/images/WorldLogo.svg"
            alt="Codeworld Logo"
            className="w-10 h-10"
          />
          <h1
            className="font-bold text-yellow-400"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Codeworld
          </h1>
        </div>

        <h2
          className="text-white font-extrabold mb-4"
          style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)" }}
          data-aos="fade-up"
        >
          Oops!
        </h2>
        <p
          className="text-yellow-400 font-semibold mb-2"
          style={{ fontSize: "clamp(1.25rem, 2vw, 1.5rem)" }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {message}
        </p>
        {statusCode && (
          <p
            className="text-gray-200 mb-6"
            style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)" }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Status Code: <span className="font-mono">{statusCode}</span>
          </p>
        )}

        <div
          className="flex flex-col sm:flex-row justify-center gap-4 mt-4"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <Link
            to="/"
            className="px-6 py-2 rounded-lg bg-yellow-400 text-[#023047] font-semibold hover:bg-yellow-500 transition"
          >
            Go Home
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 rounded-lg border-2 border-yellow-400 text-yellow-400 font-semibold hover:bg-yellow-400 hover:text-[#023047] transition"
          >
            Retry
          </button>
        </div>

        <motion.img
          src="/images/Error.webp"
          alt="Error Illustration"
          className="mt-10 w-[150px] h-[150px] mx-auto relative z-10"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          style={{ transformOrigin: "50% 50%" }}
        />
      </div>
    </div>
  );
};

export default ErrorBoundry;
