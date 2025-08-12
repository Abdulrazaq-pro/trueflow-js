"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Check,
  ChevronRight,
  Menu,
  X,
  Moon,
  Sun,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Users,
  BarChart,
  Layers,
} from "lucide-react";

import { useTheme } from "next-themes";
import Hero from "@/app/components/Hero";
import SwapInterface from "@/app/components/SwapModal";
import SwappingBridgingSection from "./components/SwapBridgeInfo";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import CommunitySection from "./components/CommunitySection";
// import Footer from "./components/Footer";
import TrueFlowHeader from "./components/Header";
import Button from "@/components/fancybutton";
import FooterSection from "./components/Footer";
import { Text } from "@/components/Text";
import CTA from "./components/CTA";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <TrueFlowHeader />
      <main className="flex-1 ">
        {/* Hero Section */}
        <div className="py-20">
          <Hero />
        </div>

        <div className="text-center max-w-3xl mx-auto mb-12 p-2 md:p-4 animate-in slide-in-from-bottom-4 duration-500">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Move Freely, Flow Securely
          </h1>
          <Text
            as="p"
            variant="muted"
            size="lg"
            className="mb-8 max-w-2xl mx-auto"
          >
            Empower your DeFi journey, instantly swap assets, bridge between
            chains, and manage holdings seamlessly.
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="md">
              Get Started
              <span className="ml-2">
                <img className="size-4" src="/icons/export-dark.svg" alt="" />
              </span>
            </Button>
          </div>
        </div>

        {/* Swap Modal */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-in slide-in-from-bottom-4 duration-700">
          <SwapInterface />
        </div>

        <SwappingBridgingSection />

        <HowItWorks />

        <FAQ />

        <div className="text-center max-w-3xl mx-auto mb-12 p-2 md:p-4 animate-in slide-in-from-bottom-4 duration-500">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Powering the Future of Cross-Chain Finance
          </h1>
          <p className="text-md md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Swap, bridge, and manage assets across chains, fast, gas efficient,
            and built for DeFi's future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Launch App
              <span className="ml-2">
                <img className="size-4" src="/icons/export-dark.svg" alt="" />
              </span>
            </Button>
          </div>
        </div>

        <CommunitySection />
      </main>
      <CTA />
      {/* <Footer /> */}
      <FooterSection />
    </div>
  );
}
