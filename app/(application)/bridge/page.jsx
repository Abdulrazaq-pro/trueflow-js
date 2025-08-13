"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  BarChart3,
  User,
  History,
  ArrowUpDown,
  Settings,
  Menu,
  X,
  TrendingUp,
  Bell,
  BarChart,
} from "lucide-react";

import {
  TrueFlowHeaderRedirect,
  TrueFlowHeaderRiderect,
} from "@/app/components/Header";
import BridgeInterface from "@/app/components/BridgeModal";
import TrueFlowFooter from "../Footer";

const tokens = [
  { symbol: "USDC", name: "USD Coin", balance: "0", price: "$1.00" },
  { symbol: "USDT", name: "Tether USD", balance: "0", price: "$1.00" },
  { symbol: "ETH", name: "Ethereum", balance: "0", price: "$2,456.78" },
  { symbol: "BTC", name: "Bitcoin", balance: "0", price: "$42,123.45" },
];

const slippageOptions = ["1%", "2%", "5%", "Max"];

export default function TrueFlowApp() {
  return (
    <div className="min-h-screen  py-20 md:py-24">
      <TrueFlowHeaderRedirect />
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* <SwapInterface /> */}
          <BridgeInterface />
        </div>
      </main>
      <TrueFlowFooter/>
    </div>
  );
}
