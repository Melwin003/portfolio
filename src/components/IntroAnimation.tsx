import { useEffect, useState } from "react";
import "./IntroAnimation.css";

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [isExiting, setIsExiting] = useState(false);
  
  const fullQuote = "Our life is what our thoughts make it.";
  const author = "Marcus Aurelius, Meditations";

  useEffect(() => {
    // Show quote and author immediately (no typing)
    // Hold for 2.5 seconds, then start exit animation
    const holdTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2500);

    // Complete after zoom-out animation (1.2s)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3700);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`intro-animation ${isExiting ? "zoom-out" : ""}`}>
      {/* Main content */}
      <div className="intro-content">
        {/* Quote container with metallic card effect */}
        <div className="quote-container">
          <div className="quote-wrapper">
            {/* Sleek metallic border with futuristic corner accents */}
            <div className="metallic-border"></div>
            <div className="corner-accent corner-top-left"></div>
            <div className="corner-accent corner-top-right"></div>
            <div className="corner-accent corner-bottom-left"></div>
            <div className="corner-accent corner-bottom-right"></div>
            
            <p className="quote-text">
              {fullQuote}
            </p>
            <p className="author-text">
              — {author}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
