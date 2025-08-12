"use client";

import { usePathname } from 'next/navigation';
import { useRouter } from 'nextjs-toploader/app';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const BottomNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    {
      name: "HOME",
      path: "/",
      icon: "/icons/bottom/home.svg",
      activeIcon: "/icons/bottom/home.svg",
    },
    {
      name: "Swap",
      path: "/swap",
      icon: "/icons/bottom/swap.svg",
      activeIcon: "/icons/bottom/swap.svg",
    },
    {
      name: "Bridge",
      path: "/bridge",
      icon: "/icons/bottom/bridge.svg",
      activeIcon: "/icons/bottom/bridge.svg",
    },
    {
      name: "Faucet",
      path: "/faucet",
      icon: "/icons/bottom/faucet.svg",
      activeIcon: "/icons/bottom/faucet.svg",
    },
    {
      name: "Account",
      path: "/dashboard",
      icon: "/icons/bottom/account.svg",
      activeIcon: "/icons/bottom/account.svg",
    },
  ];

  // Update active index based on current route
  useEffect(() => {
    const currentIndex = navItems.findIndex(item => 
      item.path === '/' ? pathname === '/' : pathname.startsWith(item.path)
    );
    setActiveIndex(currentIndex !== -1 ? currentIndex : 1); // Default to Swap
  }, [pathname]);

  const handleNavClick = (item, index) => {
    setActiveIndex(index);
    router.push(item.path);
  };

  return (
    <div className="fixed md:hidden bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="relative flex max-w-md mx-auto">
        {navItems.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              key={item.name}
              onClick={() => handleNavClick(item, index)}
              className={`relative flex-1 flex flex-col items-center justify-center py-3 px-2 transition-colors duration-200 ${
                isActive 
                  ? "text-green-600" 
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <div className="mb-1">
                <Image 
                  src={isActive && item.activeIcon ? item.activeIcon : item.icon}
                  alt={item.name}
                  width={24}
                  height={24}
                  className={`object-contain transition-opacity duration-200 ${
                    isActive ? "opacity-100" : "opacity-70"
                  }`}
                />
              </div>
              <span className={`text-xs transition-all duration-200 ${
                isActive ? 'font-semibold' : 'font-medium'
              }`}>
                {item.name}
              </span>
            </button>
          );
        })}
        
        {/* Sliding bottom bar */}
        <div 
          className="absolute bottom-0 h-1 bg-green-600 rounded-full transition-all duration-300 ease-out"
          style={{
            left: `${(activeIndex / navItems.length) * 100}%`,
            width: `${100 / navItems.length}%`,
            // marginLeft: '5%',
            // marginRight: '10%',
            // width: `${(100 / navItems.length) * 1}%`,
          }}
        />
      </div>
    </div>
  );
};

export default BottomNavigation;