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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; 
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import { navigationData, iconMap } from "./constant";
import { Text } from "@/components/Text";

const tokens = [
  { symbol: "USDC", name: "USD Coin", balance: "0", price: "$1.00" },
  { symbol: "USDT", name: "Tether USD", balance: "0", price: "$1.00" },
  { symbol: "ETH", name: "Ethereum", balance: "0", price: "$2,456.78" },
  { symbol: "BTC", name: "Bitcoin", balance: "0", price: "$42,123.45" },
];

const slippageOptions = ["1%", "2%", "5%", "Max"];

export function TrueFlowLogo() {
  return (
    <div className="flex items-center gap-2 min-w-max">
      <img
        src="/logo.jpg" // Replace with your actual image path
        alt="TrueFlow Logo"
        className="w-16 h-16 sm:w-12 sm:h-12 md:h-16 md:w-16 object-contain flex-shrink-0" // Added object-contain and flex-shrink-0
      />
      {/* <span className="text-lg font-bold text-gray-900 sm:text-xl whitespace-nowrap">
        TrueFlow
      </span> */}
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

  return (
    <header className="sticky top-0 z-50 w-full  ">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/logo" className="flex items-center">
          <TrueFlowLogo />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navigationData.navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                {item.hasDropdown ? (
                  <>
                    <NavigationMenuTrigger className="flex items-center gap-1">
                      {item.title}
                      {/* <ChevronDown className="h-3 w-3" /> */}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[300px] gap-3 p-4">
                        {item.dropdownItems.map(
                          (dropdownItem, dropdownIndex) => {
                            const Icon = iconMap[dropdownItem.icon];
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
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        item.isActive && "text-green-600 font-semibold"
                      )}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}

            {/* Account Dropdown */}
            {/* <NavigationMenuItem>
              <NavigationMenuTrigger className="flex items-center gap-1">
                Account
                <ChevronDown className="h-3 w-3" />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-3 p-4">
                  {navigationData.accountDropdownItems.map((item, index) => {
                    const Icon = iconMap[item.icon];
                    return (
                      <ListItem
                        key={index}
                        title={item.title}
                        href={item.href}
                        icon={Icon}
                      >
                        {item.description}
                      </ListItem>
                    );
                  })}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem> */}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Connect Wallet Button */}
        <Button className="hidden md:flex bg-green-600 hover:bg-green-700 text-white">
          Connect Wallet
        </Button>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between py-4">
                <TrueFlowLogo />
              </div>

              <nav className="flex-1 space-y-6">
                {navigationData.navigationItems.map((item, index) => (
                  <div key={index}>
                    {item.hasDropdown ? (
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">{item.title}</h3>
                        {item.dropdownItems.map(
                          (dropdownItem, dropdownIndex) => {
                            const Icon = iconMap[dropdownItem.icon];
                            return (
                              <Link
                                key={dropdownIndex}
                                href={dropdownItem.href}
                                className="flex items-center gap-3 text-muted-foreground hover:text-foreground pl-4"
                              >
                                {Icon && <Icon className="h-4 w-4" />}
                                <div>
                                  <div className="font-medium">
                                    {dropdownItem.title}
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    {dropdownItem.description}
                                  </div>
                                </div>
                              </Link>
                            );
                          }
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "block text-lg font-medium transition-colors hover:text-green-600",
                          item.isActive && "text-green-600"
                        )}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}

                {/* <div className="space-y-4">
                  <h3 className="text-lg font-medium">Account</h3>
                  {navigationData.accountDropdownItems.map((item, index) => {
                    const Icon = iconMap[item.icon];
                    return (
                      <Link
                        key={index}
                        href={item.href}
                        className="flex items-center gap-3 text-muted-foreground hover:text-foreground"
                      >
                        {Icon && <Icon className="h-4 w-4" />}
                        <div>
                          <div className="font-medium">{item.title}</div>
                          <div className="text-sm text-muted-foreground">{item.description}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div> */}
              </nav>

              <div className="py-4">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Connect Wallet
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export function TrueFlowHeaderRiderect() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full  ">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/logo" className="flex items-center">
          <TrueFlowLogo />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navigationData.navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                {item.hasDropdown ? (
                  <>
                    <NavigationMenuTrigger className="flex items-center gap-1">
                      {item.title}
                      {/* <ChevronDown className="h-3 w-3" /> */}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[300px] gap-3 p-4">
                        {item.dropdownItems.map(
                          (dropdownItem, dropdownIndex) => {
                            const Icon = iconMap[dropdownItem.icon];
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
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        item.isActive && "text-green-600 font-semibold"
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

        {/* Desktop Connect Wallet Button */}
        {/* <Button className="hidden md:flex bg-green-600 hover:bg-green-700 text-white">
          Connect Wallet
        </Button> */}

        {/* Mobile Menu */}
        <Text
          as="p"
          variant="muted"
          size="md"
          className=" max-w-2xl bg-neutral-100 rounded-full px-3 py-1"
        >
          Go Home
        </Text>
      </div>
    </header>
  );
}

function SwapInterface() {
  const [sellToken, setSellToken] = useState("USDC");
  const [buyToken, setBuyToken] = useState("USDT");
  const [sellAmount, setSellAmount] = useState("0.0");
  const [buyAmount, setBuyAmount] = useState("0.0");
  const [slippage, setSlippage] = useState("1%");

  const handleSwapTokens = () => {
    const tempToken = sellToken;
    const tempAmount = sellAmount;
    setSellToken(buyToken);
    setBuyToken(tempToken);
    setSellAmount(buyAmount);
    setBuyAmount(tempAmount);
  };

  const getSellTokenData = () => tokens.find((t) => t.symbol === sellToken);
  const getBuyTokenData = () => tokens.find((t) => t.symbol === buyToken);

  return (
    <div className="max-w-md mx-auto">
      <Card className="shadow-lg border-0">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold">Swap</CardTitle>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Swap tokens instantly with low fees and zero hassle right from your
            wallet.
          </p>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Sell Section */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Sell</span>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  50%
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Max
                </Badge>
              </div>
            </div>

            <div className="relative bg-gray-50 rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    {sellToken[0]}
                  </div>
                  <Select value={sellToken} onValueChange={setSellToken}>
                    <SelectTrigger className="w-auto border-0 bg-transparent p-0 h-auto shadow-none">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {tokens.map((token) => (
                        <SelectItem key={token.symbol} value={token.symbol}>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                              {token.symbol[0]}
                            </div>
                            <span>{token.symbol}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="text-right">
                  <Input
                    type="number"
                    value={sellAmount}
                    onChange={(e) => setSellAmount(e.target.value)}
                    className="text-right border-0 bg-transparent p-0 text-2xl font-semibold shadow-none w-24"
                    placeholder="0.0"
                  />
                  <div className="text-sm text-muted-foreground">
                    ${getSellTokenData()?.balance || "0"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center py-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleSwapTokens}
              className="h-10 w-10 rounded-full border bg-white shadow-sm hover:bg-gray-50"
            >
              <ArrowUpDown className="h-4 w-4" />
            </Button>
          </div>

          {/* Buy Section */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Buy</span>
              <div className="text-muted-foreground">≈ 0</div>
            </div>

            <div className="relative bg-gray-50 rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    {buyToken[0]}
                  </div>
                  <Select value={buyToken} onValueChange={setBuyToken}>
                    <SelectTrigger className="w-auto border-0 bg-transparent p-0 h-auto shadow-none">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {tokens.map((token) => (
                        <SelectItem key={token.symbol} value={token.symbol}>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                              {token.symbol[0]}
                            </div>
                            <span>{token.symbol}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="text-right">
                  <Input
                    type="number"
                    value={buyAmount}
                    onChange={(e) => setBuyAmount(e.target.value)}
                    className="text-right border-0 bg-transparent p-0 text-2xl font-semibold shadow-none w-24"
                    placeholder="0.0"
                  />
                  <div className="text-sm text-muted-foreground">
                    ${getBuyTokenData()?.balance || "0"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rate Information */}
          <div className="flex items-center justify-between text-sm text-muted-foreground py-2">
            <span>Rate: 1 HYPE = 44.0728 USDT</span>
            <div className="flex items-center gap-1">
              <span>≈ 0.000622 XPR ($1.49)</span>
              <Settings className="h-3 w-3" />
            </div>
          </div>

          {/* Slippage Settings */}
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Slippage tolerance</span>
            <div className="flex items-center gap-1">
              {slippageOptions.map((option) => (
                <Button
                  key={option}
                  variant={slippage === option ? "default" : "ghost"}
                  size="sm"
                  className="h-6 px-2 text-xs"
                  onClick={() => setSlippage(option)}
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>

          {/* Connect Wallet Button */}
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg font-semibold rounded-xl">
            Connect Wallet
          </Button>

          {/* Footer Links */}
          <div className="flex justify-center gap-4 pt-4">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <div className="w-4 h-4 bg-green-600 rounded"></div>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Copyright */}
      <div className="text-center text-xs text-muted-foreground mt-6">
        Copyright © 2025 by TrueFlow. All rights reserved.
      </div>
    </div>
  );
}
