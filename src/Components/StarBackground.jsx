import { useEffect, useState } from "react";

export const StarBackground = () => {

  const [stars, setStars] = useState([]);

  const createStars = () => {
    const noofStars = Math.floor(window.innerWidth / 15);
    const newStars = [];

    for (let i = 0; i < noofStars; i++) {
      newStars.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 20 + 10
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
          className="absolute bg-white rounded-full star-move"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`, 
          }}
        />
      ))}

    </div>
  );
};