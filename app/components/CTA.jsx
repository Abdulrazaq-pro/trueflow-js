import { Text } from "@/components/Text";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";



export default function CTA() {
  const [isNavigating, setIsNavigating] = useState(false);

  return (
    <div className="w-full flex justify-center  pt-12">
      {" "}
      {/* Outer container for full width and centering */}
      <div
        style={{ width: "70%" }}
        className="flex justify-between items-center w-full px-6 bg-black rounded-t-lg"
      >
      
        {/* Inner container with max-width */}
        <div className="flex items-center">
          <Text
            as="h1"
            variant="heading"
            size="3xl"
            weight="bold"
            className="text-white tracking-tight my-8 flex justify-center items-center"
          >
            Swapping & Bridging
          </Text>
        </div>
        <div>
          <Button
            size="lg"
            className={`bg-green-600 hover:bg-green-700 rounded-lg transition-all duration-300 ${
              isNavigating ? "scale-95" : ""
            }`}
            disabled={isNavigating}
          >
            {isNavigating ? "Navigating..." : "Start Swapping"}
            <span className="ml-2 inline-flex">
              <img
                className={`size-4 transition-all duration-300 ${
                  isNavigating ? "rotate-180" : "rotate-0"
                }`}
                src="/icons/export-dark.svg"
                alt="arrow icon"
              />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
