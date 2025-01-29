import React, { useEffect } from "react";
import "./Cursor.css";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    const moveCursor = (e) => {
      const mouseX = e.pageX;
      const mouseY = e.pageY;

      cursor.style.top = `${mouseY}px`;
      cursor.style.left = `${mouseX}px`;

      // Optional: Apply rotation to give it a "tailing" effect
      const angle = Math.atan2(mouseY - window.innerHeight / 2, mouseX - window.innerWidth / 2);
      cursor.style.transform = `translate(-50%, -50%) rotate(${angle}rad)`;
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div className="cursor"></div>;
};

export default Cursor;
