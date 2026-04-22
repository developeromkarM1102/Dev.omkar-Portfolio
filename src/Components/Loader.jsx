"use client";

import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useState } from "react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // control loader duration here

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black text-white z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 1.8 }}
    >
      <div className="flex flex-col items-center justify-center gap-6">
        
        {/* Title */}
        <h1 className="text-3xl font-semibold tracking-wide">
          Welcome to Omkar.dev
        </h1>

        {/* Lottie Animation */}
        <DotLottieReact
          src="https://lottie.host/21cb86e5-1e74-4f5c-8511-20a115c7d354/urTsBIMeSG.lottie"
          loop
          autoplay
          style={{ width: 150, height: 150 }}
        />

        {/* Loading Text */}
        <p className="text-lg text-gray-300">
          Loading<span className="animate-pulse">...</span>
        </p>

      </div>
    </motion.div>
  );
};

export default Loader;