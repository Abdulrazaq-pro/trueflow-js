"use client";

import { useState } from "react";
import { ArrowUpDown, Settings, ChevronDown } from "lucide-react";
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

const tokens = [
  { symbol: "USDC", name: "USD Coin", balance: "0", price: "$1.00" },
  { symbol: "USDT", name: "Tether USD", balance: "0", price: "$1.00" },
  { symbol: "ETH", name: "Ethereum", balance: "0", price: "$2,456.78" },
  { symbol: "BTC", name: "Bitcoin", balance: "0", price: "$42,123.45" },
];

const slippageOptions = ["1%", "2%", "5%", "Max"];

export default function SwapInterface() {
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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
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
                Swap tokens instantly with low fees and zero hassle right from
                your wallet.
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
                  <img
                    src="/public/icons/exchange.svg"
                    className="h-4 w-4"
                    alt=""
                  />
                  {/* <ArrowUpDown className="h-4 w-4" /> */}
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
                <span className="text-muted-foreground">
                  Slippage tolerance
                </span>
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
      </div>
    </div>
  );
}
