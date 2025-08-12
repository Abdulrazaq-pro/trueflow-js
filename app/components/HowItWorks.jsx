"use client";
import { AbsolutePosition } from "@/components/Absolute";
import React, { useState, useEffect } from "react";

const HowItWorks = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const steps = [
    {
      icon: "/icons/special-icon.png",
      title: "Connect & Select",
      description: "Link your wallet and choose your preferred options",
    },
    {
      icon: "/icons/special-icon-1.png",
      title: "Swap or Bridge",
      description: "Execute your transaction with ease",
    },
    {
      icon: "/icons/special-icon-2.png",
      title: "Set Your Tokens & Chains",
      description: "Configure your tokens and blockchain networks",
    },
    {
      icon: "/icons/special-icon-3.png",
      title: "Track in Real Time",
      description: "Monitor your transactions in real-time",
    },
  ];

  // Auto-slide for mobile with pause on hover
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile || isHovering) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [steps.length, isHovering]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % steps.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 overflow-hidden relative">
      <div className="w-[80%] mx-auto h-10 rounded-t-[12px] bg-trueflow-gradient"></div>

      {/* Shape Container */}
      <div className="relative">
        <div className="absolute inset-0 -z-10 bg-trueflow-gradient rounded-md shadow-lg"></div>

        <AbsolutePosition top={-50} left={-50}>
          {/* <div className="bg-pink-500 text-white p-3 rounded shadow-lg">
            Custom: top=100px, left=200px
          </div> */}
          <img src="/ornament-left.svg" alt="" />
        </AbsolutePosition>
        <AbsolutePosition bottom={-50} right={-70}>
          {/* <div className="bg-pink-500 text-white p-3 rounded shadow-lg">
            Custom: top=100px, left=200px
          </div> */}
          <img src="/ornament-right.svg" alt="" />
        </AbsolutePosition>

        {/* Desktop */}
        <div className="hidden md:block">
          <div className="p-8 text-white">
            <h2 className="text-2xl font-bold text-center mb-8">
              How It Works
            </h2>
            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="text-center transition-transform duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-green-100 transition-colors">
                    <img src={step.icon} alt={step.title} className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm">{step.title}</h3>
                  <p className="text-xs opacity-90">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden p-6 text-white">
          <h2 className="text-xl font-bold text-center mb-6">How It Works</h2>
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 text-center px-4"
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <img src={step.icon} alt={step.title} className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm opacity-90">{step.description}</p>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 rounded-full p-2 hover:bg-white/50 transition-all"
              aria-label="Previous step"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 rounded-full p-2 hover:bg-white/50 transition-all"
              aria-label="Next step"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-white w-4" : "bg-white/50"
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
