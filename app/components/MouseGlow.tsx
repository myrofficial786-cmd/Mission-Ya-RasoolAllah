"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveMouse);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-0 w-72 h-72 rounded-full blur-3xl transition-all duration-150"
      style={{
        left: position.x - 144,
        top: position.y - 144,
        background: "rgba(250, 204, 21, 0.12)",
      }}
    />
  );
}