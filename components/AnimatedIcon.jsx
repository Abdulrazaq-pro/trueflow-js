"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

type AnimatedIconProps = {
  initialIconSrc: string;
  targetIconSrc: string;
  className?: string;
  buttonText?: string;
  iconSize?: number;
};

export default function AnimatedIcon({
  initialIconSrc,
  targetIconSrc,
  className = "",
  buttonText = "Toggle Icon",
  iconSize = 24,
}: AnimatedIconProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const initialIconRef = useRef<HTMLImageElement>(null);
  const targetIconRef = useRef<HTMLImageElement>(null);
  const isMorphedRef = useRef(false);

  useEffect(() => {
    gsap.registerPlugin(MorphSVGPlugin);

    // Load SVGs and initialize
    if (targetIconRef.current) {
      gsap.set(targetIconRef.current, { opacity: 0 });
    }
  }, []);

  const handleClick = () => {
    const isMorphed = isMorphedRef.current;

    if (isMorphed) {
      // Morph back to initial icon
      gsap.to(targetIconRef.current, {
        duration: 0.5,
        opacity: 0,
      });
      gsap.to(initialIconRef.current, {
        duration: 0.5,
        opacity: 1,
      });
    } else {
      // Morph to target icon
      gsap.to(initialIconRef.current, {
        duration: 0.5,
        opacity: 0,
      });
      gsap.to(targetIconRef.current, {
        duration: 0.5,
        opacity: 1,
      });
    }

    isMorphedRef.current = !isMorphed;
  };

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <button
        ref={buttonRef}
        onClick={handleClick}
        className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
      >
        {buttonText}
      </button>

      <div ref={containerRef} className="relative" style={{ width: iconSize, height: iconSize }}>
        <img
          ref={initialIconRef}
          src={initialIconSrc}
          alt="Initial icon"
          className="absolute inset-0 w-full h-full"
        />
        <img
          ref={targetIconRef}
          src={targetIconSrc}
          alt="Target icon"
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  );
}