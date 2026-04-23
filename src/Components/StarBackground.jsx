import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);

  const createStars = () => {
    const area = window.innerWidth * window.innerHeight;

    // 🔥 density control (increase for more stars)
    const density = 7000; 
    const noofStars = Math.floor(area / density);

    const newStars = [];

    for (let i = 0; i < noofStars; i++) {
      newStars.push({
        id: i,
        top: Math.random() * 100, // ✅ FIXED (viewport only)
        left: Math.random() * 100,
        size: Math.random() * 7 + 1,
        duration: Math.random() * 15 + 5,
        opacity: Math.random() * 0.1 + 0.1
      });
    }

    setStars(newStars);
  };

  useEffect(() => {
    createStars();

    const handleResize = () => createStars();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-orange-500 rounded-full star-move"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}

    </div>
  );
};