"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { useRouter } from "nextjs-toploader/app";

import Loader from "@/components/shared/Loader";

// import { TrueFlowLogo } from "@/components/TrueFlowLogo";

import { cn } from "@/lib/utils";

import { navigationData, iconMap } from "./constant";
import { Text } from "@/components/Text";
import WrappedCustomConnectButton from "@/components/CustomConnectButton";

export function TrueFlowLogo() {
  return (
    <div className="flex items-center gap-2 min-w-max">
      <img
        src="/logo.png"
        alt="TrueFlow Logo"
        className="w-16 h-16 sm:w-12 sm:h-12 md:h-16 md:w-16 object-contain flex-shrink-0"
      />
    </div>
  );
}

export function TrueFlowLogoDark() {
  return (
    <div className="flex items-center gap-2 min-w-max">
      <img
        src="/logo-dark.svg"
        alt="TrueFlow Logo"
        className="w-16 h-16 sm:w-12 sm:h-12 md:h-16 md:w-16 object-contain flex-shrink-0"
      />
    </div>
  );
}

function ListItem({ className, title, children, icon: Icon, ...props }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {Icon && <Icon className="h-4 w-4" />}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}

export default function TrueFlowHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.2; // 20% of viewport height
      setScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active index based on current route
  useEffect(() => {
    if (navigationData?.navigationItems) {
      const currentIndex = navigationData.navigationItems.findIndex((item) => {
        if (!item.href) return false;
        return item.href === "/"
          ? pathname === "/"
          : pathname.startsWith(item.href);
      });
      setActiveIndex(currentIndex !== -1 ? currentIndex : 0);
    }
  }, [pathname]);

  const handleLaunchApp = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/swap");
    }, 1200);
  };

  // Filter navigation items that don't have dropdowns for the sliding indicator
  const simpleNavItems =
    navigationData?.navigationItems?.filter((item) => !item.hasDropdown) || [];

  return (
    <>
      <header
        className={`fixed w-[90%] mx-auto bg-white rounded-lg my-3 top-2 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? " shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <TrueFlowLogo />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex relative">
            <NavigationMenuList className="relative">
              {navigationData?.navigationItems?.map((item, index) => (
                <NavigationMenuItem key={index}>
                  {item.hasDropdown ? (
                    <>
                      <NavigationMenuTrigger className="flex items-center gap-1">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[300px] !min-h-[200px] ">
                        {/* <NavigationMenuContent> */}
                        <ul className="grid w-[300px] gap-3 p-4">
                          {item.dropdownItems?.map(
                            (dropdownItem, dropdownIndex) => {
                              const Icon = iconMap?.[dropdownItem.icon];
                              return (
                                <ListItem
                                  key={dropdownIndex}
                                  title={dropdownItem.title}
                                  href={dropdownItem.href}
                                  icon={Icon}
                                >
                                  {dropdownItem.description}
                                </ListItem>
                              );
                            }
                          )}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.href || "#"} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "relative transition-colors duration-200",
                          activeIndex === index &&
                            !item.hasDropdown &&
                            "text-green-600 font-semibold"
                        )}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}

              {/* Sliding indicator - only for non-dropdown items */}
              {/* {simpleNavItems.length > 0 && (
                <div 
                  className="absolute bottom-0 h-0.5 bg-green-600 rounded-full transition-all duration-300 ease-out"
                  style={{
                    width: `${100 / navigationData.navigationItems.length}%`,
                    transform: `translateX(${activeIndex * 100}%)`,
                  }}
                />
              )} */}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Launch App Button */}
          <button
            onClick={handleLaunchApp}
            className="max-w-2xl bg-neutral-100 rounded-full px-3 py-1 flex items-center gap-1 hover:bg-neutral-200 transition-colors duration-200"
          >
            <Text as="p" variant="heading" size="md">
              Launch App
            </Text>
            <span>
              <img className="w-3 h-3" src="/icons/export.svg" alt="" />
            </span>
          </button>
        </div>
      </header>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center mt-20">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="relative z-10 bg-white rounded-2xl p-8 shadow-2xl border border-white/20">
            <Loader />
          </div>
        </div>
      )}
    </>
  );
}

export function TrueFlowHeaderRedirect() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.2; // 20% of viewport height
      setScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active index based on current route
  useEffect(() => {
    if (navigationData?.navigationItems) {
      const currentIndex = navigationData.navigationItems.findIndex((item) => {
        if (!item.href) return false;
        return item.href === "/"
          ? pathname === "/"
          : pathname.startsWith(item.href);
      });
      setActiveIndex(currentIndex !== -1 ? currentIndex : 0);
    }
  }, [pathname]);

  const simpleNavItems =
    navigationData?.navigationItems?.filter((item) => !item.hasDropdown) || [];

  return (
    <>
      <header
        className={`fixed w-[90%] mx-auto bg-white rounded-lg my-3 top-2 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? " shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <TrueFlowLogo />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex relative">
            <NavigationMenuList className="relative">
              {navigationData?.navigationItems?.map((item, index) => (
                <NavigationMenuItem key={index}>
                  {item.hasDropdown ? (
                    <>
                      <NavigationMenuTrigger className="flex items-center gap-1">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[300px] !min-h-[200px]">
                        <ul className="grid w-[300px] gap-3 p-4">
                          {item.dropdownItems?.map(
                            (dropdownItem, dropdownIndex) => {
                              const Icon = iconMap?.[dropdownItem.icon];
                              return (
                                <ListItem
                                  key={dropdownIndex}
                                  title={dropdownItem.title}
                                  href={dropdownItem.href}
                                  icon={Icon}
                                >
                                  {dropdownItem.description}
                                </ListItem>
                              );
                            }
                          )}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.href || "#"} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "relative transition-colors duration-200",
                          activeIndex === index &&
                            !item.hasDropdown &&
                            "text-green-600 font-semibold"
                        )}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div>
            <WrappedCustomConnectButton className="w-full bg-black hover:bg-neutral-800" />
          </div>
        </div>
      </header>
      
      {/* Spacer div to push content below the fixed header */}
      <div className="h-20"></div>
    </>
  );
}