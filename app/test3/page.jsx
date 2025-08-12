"use client";

import React from "react";

const TrustedCompanies = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white font-['Lato'] font-normal">
      <section className="py-8 w-full max-w-6xl mx-auto px-4 text-gray-900">
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ============ MAIN CARD COMPONENT ============ */}
            <div className="group">
              {/* CARD CONTAINER - Main card with cut-off bottom-right corner */}
              <div
                className="relative w-full bg-white overflow-hidden"
                style={{
                  height: "18.75rem", // Card height
                  borderRadius: "1.25rem", // Rounded corners
                  borderBottomRightRadius: "0", // Cut-off corner (KEY FEATURE)
                }}
              >
                {/* INNER BOX - Contains the background and icons */}
                <div
                  className="w-full h-full bg-white overflow-hidden"
                  style={{ borderRadius: "1.25rem" }}
                >
                  {/* BACKGROUND - Change this for different card backgrounds */}
                  <div className="absolute inset-0 bg-blue-500 z-50 rounded-lg"></div>

                  {/* ========== RIGHT TOP CORNER ICON ========== */}
                  <div
                    className="absolute bg-white z-50"
                    style={{
                      top: "-0.375rem", // Slightly outside the card
                      right: "-0.375rem", // Slightly outside the card
                      width: "6rem", // Icon area size
                      height: "6rem", // Icon area size
                      borderBottomLeftRadius: "50%", // Creates the curved corner
                    }}
                  >
                    {/* Smooth curve connector - Top side */}
                    <div
                      className="absolute bg-transparent"
                      style={{
                        top: "0.375rem",
                        left: "-1.25rem",
                        width: "1.25rem",
                        height: "1.25rem",
                        borderTopRightRadius: "1.25rem",
                        boxShadow: "0.313rem -0.313rem 0  white", // Creates the curve effect
                      }}
                    ></div>

                    {/* Smooth curve connector - Bottom side */}
                    <div
                      className="absolute bg-transparent z-10"
                      style={{
                        bottom: "-1.25rem",
                        right: "0.375rem",
                        width: "1.25rem",
                        height: "1.25rem",
                        borderTopRightRadius: "1.25rem",
                        boxShadow: "0.313rem -0.313rem 0  white", // Creates the curve effect
                      }}
                    ></div>

                    {/* CLICKABLE ICON BUTTON */}
                    <a
                      href="#"
                      className="absolute bg-white rounded-full flex justify-center items-center transition-transform duration-300 group-hover:scale-110 z-50"
                      style={{ inset: "0.625rem" }} // Creates padding inside the icon area
                    >
                      <span className="text-gray-500 text-2xl">
                        {/* PUT YOUR ICON HERE - e.g., arrow_outward */}
                      </span>
                    </a>
                  </div>

                  {/* ========== LEFT TOP CORNER ICON ========== */}
                  <div
                    className="absolute bg-white z-50"
                    style={{
                      top: "-0.375rem", // Slightly outside the card
                      left: "-0.375rem", // Slightly outside the card
                      width: "6rem", // Icon area size
                      height: "6rem", // Icon area size
                      borderBottomRightRadius: "50%", // Creates the curved corner (opposite of right icon)
                    }}
                  >
                    {/* Smooth curve connector - Top side */}
                    <div
                      className="absolute bg-transparent"
                      style={{
                        top: "0.375rem",
                        right: "-1.25rem",
                        width: "1.25rem",
                        height: "1.25rem",
                        borderTopLeftRadius: "1.25rem",
                        boxShadow: "-0.313rem -0.313rem 0  white", // Creates the curve effect (mirrored)
                      }}
                    ></div>

                    {/* Smooth curve connector - Bottom side */}
                    <div
                      className="absolute bg-transparent"
                      style={{
                        bottom: "-1.25rem",
                        left: "0.375rem",
                        width: "1.25rem",
                        height: "1.25rem",
                        borderTopLeftRadius: "1.25rem",
                        boxShadow: "-0.313rem -0.313rem 0  white", // Creates the curve effect (mirrored)
                      }}
                    ></div>

                    {/* CLICKABLE ICON BUTTON */}
                    <a
                      href="#"
                      className="absolute bg-white rounded-full flex justify-center items-center transition-transform duration-300 group-hover:scale-110 z-50"
                      style={{ inset: "0.625rem" }} // Creates padding inside the icon area
                    >
                      <span className="text-gray-500 text-2xl">
                        {/* PUT YOUR ICON HERE - e.g., arrow_outward */}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrustedCompanies;
