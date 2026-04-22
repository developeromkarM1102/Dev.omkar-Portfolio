import React from "react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black transition-colors duration-300">
      
      <div className="text-center px-6">
        
        {/* 404 Glitch Text */}
        <h1 className="text-7xl md:text-9xl font-extrabold relative text-black dark:text-white glitch">
          404
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        {/* Button */}
        <button
          onClick={() => window.location.href = "/"}
          className="mt-6 px-6 py-3 rounded-2xl bg-black text-white dark:bg-white dark:text-black font-semibold shadow-lg hover:scale-105 transition-all duration-300"
        >
          Go Back Home
        </button>

        {/* Floating Shape Animation */}
        <div className="mt-12 flex justify-center gap-6">
          <div className="w-6 h-6 bg-purple-500 rounded-full animate-bounce"></div>
          <div className="w-6 h-6 bg-blue-500 rounded-full animate-bounce delay-200"></div>
          <div className="w-6 h-6 bg-pink-500 rounded-full animate-bounce delay-400"></div>
        </div>
      </div>

      {/* Custom CSS */}
      <style>{`
        .glitch {
          position: relative;
          animation: glitch 1s infinite;
        }

        .glitch::before,
        .glitch::after {
          content: "404";
          position: absolute;
          left: 0;
          width: 100%;
          overflow: hidden;
          color: #ff00c1;
          clip: rect(0, 900px, 0, 0);
        }

        .glitch::after {
          color: #00fff9;
          animation: glitchTop 1s infinite linear alternate-reverse;
        }

        .glitch::before {
          animation: glitchBottom 1s infinite linear alternate-reverse;
        }

        @keyframes glitch {
          0% { transform: none; }
          20% { transform: skew(-2deg); }
          40% { transform: skew(2deg); }
          60% { transform: none; }
          80% { transform: skew(1deg); }
          100% { transform: none; }
        }

        @keyframes glitchTop {
          0% { clip: rect(0, 9999px, 0, 0); transform: translate(0); }
          50% { clip: rect(0, 9999px, 50px, 0); transform: translate(-2px, -2px); }
          100% { clip: rect(0, 9999px, 0, 0); transform: translate(2px, 2px); }
        }

        @keyframes glitchBottom {
          0% { clip: rect(0, 9999px, 0, 0); transform: translate(0); }
          50% { clip: rect(50px, 9999px, 100px, 0); transform: translate(2px, 2px); }
          100% { clip: rect(0, 9999px, 0, 0); transform: translate(-2px, -2px); }
        }
      `}</style>
    </div>
  );
}