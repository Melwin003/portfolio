import { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const trailsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${x}px`;
        cursorRef.current.style.top = `${y}px`;
      }

      // Create trail
      const trail = document.createElement("div");
      trail.className = "cursor-trail";
      trail.style.left = `${x}px`;
      trail.style.top = `${y}px`;
      document.body.appendChild(trail);
      trailsRef.current.push(trail);

      // Fade out trail quickly
      setTimeout(() => {
        trail.style.opacity = "0";
        trail.style.transform = "scale(0.3)";
      }, 10);

      // Remove after fade
      setTimeout(() => {
        trail.remove();
        trailsRef.current = trailsRef.current.filter((t) => t !== trail);
      }, 250);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
};
