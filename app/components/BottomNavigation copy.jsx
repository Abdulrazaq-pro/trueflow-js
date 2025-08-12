"use client";

import { useState } from 'react';

const BottomNavigation = () => {
  const [activeTab, setActiveTab] = useState('Bridge');

  const navItems = [
    {
      name: "Swap",
      icon: "/icons/bottom/swap.svg",
      activeIcon: "", // Optional: different image for active state
    },
    {
      name: "Bridge",
      icon: "/icons/bottom/bridge.svg",
      activeIcon: "", // Optional: different image for active state
    },
    {
      name: "Faucet",
      icon: "/icons/bottom/faucet.svg",
      activeIcon: "", // Optional: different image for active state
    },
    {
      name: "Account",
      icon: "/icons/bottom/account.svg",
      activeIcon: "", // Optional: different image for active state
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex justify-around items-center py-2 px-4 max-w-md mx-auto">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveTab(item.name)}
            className={`flex flex-col items-center justify-center py-2 px-3 min-w-0 relative ${
              activeTab === item.name
                ? "text-green-600"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <div className="mb-1">
              <img 
                src={activeTab === item.name && item.activeIcon ? item.activeIcon : item.icon}
                alt={item.name}
                className={`w-6 h-6 object-contain ${
                  activeTab === item.name ? "filter brightness-0 saturate-100" : "filter grayscale"
                }`}
              />
            </div>
            <span className="text-xs font-medium">
              {item.name}
            </span>
            {activeTab === item.name && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-green-600 rounded-full"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;