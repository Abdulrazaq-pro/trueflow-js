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
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import SwapInterface from "../../components/SwapModal";
import {
  TrueFlowHeaderRedirect,
  TrueFlowHeaderRiderect,
} from "@/app/components/Header";
import BridgeInterface from "@/app/components/BridgeModal";

const tokens = [
  { symbol: "USDC", name: "USD Coin", balance: "0", price: "$1.00" },
  { symbol: "USDT", name: "Tether USD", balance: "0", price: "$1.00" },
  { symbol: "ETH", name: "Ethereum", balance: "0", price: "$2,456.78" },
  { symbol: "BTC", name: "Bitcoin", balance: "0", price: "$42,123.45" },
];

const slippageOptions = ["1%", "2%", "5%", "Max"];

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

export default function TrueFlowApp() {
  return (
    <div className="min-h-screen  py-20 md:py-32 lg:py-40">
      <TrueFlowHeaderRedirect />
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* <SwapInterface /> */}
          <BridgeInterface />
        </div>
      </main>
    </div>
  );
}
