"use client";
import React, { useState } from "react";
import { Settings, ArrowUpDown } from "lucide-react";
// import { Button } from "@/components/ui/button";
import Button from "@/components/fancybutton";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useAccount } from "wagmi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { AnimateInView, useAnimationVariants } from "@/components/Animation";
import { Text } from "@/components/Text";
import WrappedCustomConnectButton from "@/components/CustomConnectButton";

interface Token {
  symbol: string;
  name: string;
  icon: string;
  balance: number;
}

interface SwapSectionProps {
  label: string;
  amount: string;
  onAmountChange: (value: string) => void;
  selectedToken: string;
  onTokenChange: (value: string) => void;
  tokens: Token[];
  balance: number;
  showMax?: boolean;
}

const tokens: Token[] = [
  { symbol: "USDC", name: "USD Coin", icon: "💰", balance: 0 },
  { symbol: "ETH", name: "Ethereum", icon: "💎", balance: 0.000422 },
  { symbol: "BTC", name: "Bitcoin", icon: "₿", balance: 0.001 },
  { symbol: "USDT", name: "Tether", icon: "💵", balance: 100 },
];

const SwapSection: React.FC<SwapSectionProps> = ({
  label,
  amount,
  onAmountChange,
  selectedToken,
  onTokenChange,
  tokens,
  balance,
  showMax = false,
}) => {
  const selectedTokenData = tokens.find((t) => t.symbol === selectedToken);

  return (
    <AnimateInView animation="slideUp" className="space-y-2">
      <div className="bg-gray-100 border border-neutral-200 rounded-sm p-4 space-y-3">
        <div className="flex justify-between items-center">
          <Select value={selectedToken} onValueChange={onTokenChange}>
            <SelectTrigger className="w-auto border-0 bg-neutral-200 text-neutral-600 hover:bg-neutral-300 h-8 px-3 rounded-sm">
              <SelectValue>
                <div className="flex items-center gap-2">
                  <span>{selectedTokenData?.icon}</span>
                  <span className="font-medium">{selectedToken}</span>
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {tokens.map((token) => (
                <SelectItem key={token.symbol} value={token.symbol}>
                  <div className="flex items-center gap-2">
                    <span>{token.icon}</span>
                    <span>{token.symbol}</span>
                    <span className="text-gray-500 text-sm">
                      ({token.name})
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Input
            type="number"
            value={amount}
            onChange={(e) => onAmountChange(e.target.value)}
            placeholder="0.0"
            style={{ fontSize: "2rem" }}
            className="border-0 outline-0 bg-transparent font-medium p-0 h-auto focus-visible:ring-0 text-right"
          />
        </div>

        <div className="text-sm text-gray-500">${parseFloat(amount) || 0}</div>
      </div>
    </AnimateInView>
  );
};

// ============= MAIN COMPONENT =============

export default function SwapInterface() {
  const [sellAmount, setSellAmount] = useState("0.0");
  const [buyAmount, setBuyAmount] = useState("0.0");
  const [sellToken, setSellToken] = useState("USDC");
  const [buyToken, setBuyToken] = useState("USDT");

  const { address, isConnected } = useAccount();

  // Example of using the hook (alternative approach)
  const animations = useAnimationVariants();

  const handleSwap = () => {
    const tempToken = sellToken;
    const tempAmount = sellAmount;

    setSellToken(buyToken);
    setBuyToken(tempToken);
    setSellAmount(buyAmount);
    setBuyAmount(tempAmount);
  };

  const getSellBalance = () => {
    const token = tokens.find((t) => t.symbol === sellToken);
    return token?.balance || 0;
  };

  const getBuyBalance = () => {
    const token = tokens.find((t) => t.symbol === buyToken);
    return token?.balance || 0;
  };

  const getExchangeRate = () => {
    if (sellToken === "USDC" && buyToken === "USDT") {
      return "1 USDC = 1.01 USDT ($1)";
    }
    return `0.000422 ETH ($1.49)`;
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[800px]">
        {/* Using AnimateInView Component (Recommended) */}
        <AnimateInView animation="slideDown" duration={0.6}>
          <Card className="w-full max-w-[800px] mx-auto bg-white shadow-lg">
            <CardContent className="p-6">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-start text-gray-900">
                    Swap
                  </h2>
                  <Text
                    as="p"
                    variant="muted"
                    size="xs"
                    className=" max-w-2xl mx-auto"
                  >
                    Swap tokens instantly with low fees and zero hassle right
                    from your wallet.
                  </Text>
                </div>
              </div>

              <div className="relative">
                {/* Sell Section */}
                <SwapSection
                  label="Sell"
                  amount={sellAmount}
                  onAmountChange={setSellAmount}
                  selectedToken={sellToken}
                  onTokenChange={setSellToken}
                  tokens={tokens}
                  balance={getSellBalance()}
                  showMax={true}
                />

                {/* Swap Button - Fixed at center */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div
                    onClick={handleSwap}
                    className="cursor-pointer hover:scale-110 transition-transform duration-200"
                  >
                    <img
                      src="/icons/exchange.svg"
                      className="h-10 w-10"
                      alt="Swap tokens"
                    />
                  </div>
                </div>
                <div className="mt-4" />

                {/* Buy Section */}
                <SwapSection
                  label="Buy"
                  amount={buyAmount}
                  onAmountChange={setBuyAmount}
                  selectedToken={buyToken}
                  onTokenChange={setBuyToken}
                  tokens={tokens}
                  balance={getBuyBalance()}
                />
              </div>

              {/* Exchange Rate - Using hook approach */}
              <div>
                <motion.div
                  {...animations.fadeIn}
                  transition={{ ...animations.fadeIn.transition, delay: 0.3 }}
                  className="flex justify-between items-center text-sm text-gray-500 pt-2"
                >
                  <span>{getExchangeRate()}</span>
                  <div
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0 text-gray-400"
                  >
                    <span className="text-xs">⚙️</span>
                  </div>
                </motion.div>

                {/* Progress Bar */}
                {/* <AnimateInView
                  animation="fadeIn"
                  delay={0.4}
                  viewport={{ once: true, margin: "-20px 0px -20px 0px" }}
                >
                  <div className="mt-6">
                    <div className="w-full bg-gray-200 rounded-full h-1">
                      <div className="bg-blue-500 h-1 rounded-full w-0"></div>
                    </div>
                  </div>
                </AnimateInView> */}
              </div>

              {/* Full Width Wallet Connection Button */}
              <div className="mt-6">
                {isConnected ? (
                  <Button
                    fullWidth
                    className="w-full h-12 text-white bg-green-600 hover:bg-green-700 font-medium text-base"
                    disabled
                  >
                    ✓ Wallet Connected ({address?.slice(0, 6)}...
                    {address?.slice(-4)})
                  </Button>
                ) : (
                  <div className="w-full">
                    <WrappedCustomConnectButton
                      className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-600 hover:to-green-600 rounded-full shadow-lg"
                      showWalletIcon={false}
                    >
                      
                      <span> Connect Wallet</span>
                    </WrappedCustomConnectButton>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </AnimateInView>
      </div>
    </div>
  );
}
