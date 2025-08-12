"use client";

import { useState, useEffect } from "react";
import { Check, Coins, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import { TrueFlowHeaderRedirect } from "@/app/components/Header";

const FaucetStates = {
  READY: "ready",
  CLAIMING: "claiming",
  SUCCESS: "success",
  COOLDOWN: "cooldown",
};

export default function FaucetComponent() {
  const [faucetState, setFaucetState] = useState(FaucetStates.READY);
  const [isAnimating, setIsAnimating] = useState(false);
  const [countdown, setCountdown] = useState(0);

  // Countdown timer for cooldown
  useEffect(() => {
    let interval;
    if (faucetState === FaucetStates.COOLDOWN && countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            setFaucetState(FaucetStates.READY);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [faucetState, countdown]);

  const handleClaimTokens = async () => {
    setIsAnimating(true);
    setFaucetState(FaucetStates.CLAIMING);

    // Simulate API call
    setTimeout(() => {
      setFaucetState(FaucetStates.SUCCESS);
      setIsAnimating(false);
    }, 2000);
  };

  const handleClaimSuccess = () => {
    setIsAnimating(true);
    setFaucetState(FaucetStates.COOLDOWN);
    setCountdown(24 * 60 * 60); // 24 hours in seconds
    setTimeout(() => setIsAnimating(false), 300);
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <main className="min-h-screen   py-20 md:py-32 lg:py-40">
      <TrueFlowHeaderRedirect />
      <div className="flex items-center justify-center p-4">
        <div className="w-full max-w-md ">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Testnet Faucet
            </h1>
            <p className="text-gray-600">
              Claim testnet USDT tokens and explore TrueFlow
            </p>
          </div>

          {/* Faucet Card */}
          <Card className="shadow-xl border-0 overflow-hidden">
            <div className="relative">
              {/* Ready State */}
              <div
                className={cn(
                  "transition-all duration-500 ease-in-out",
                  faucetState === FaucetStates.READY
                    ? "translate-x-0 opacity-100"
                    : faucetState === FaucetStates.CLAIMING
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0"
                )}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Coins className="w-8 h-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    Claim Test Tokens
                  </CardTitle>
                  <p className="text-sm text-gray-600">
                    Get 100 USDT for testnet usage.
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <Button
                    onClick={handleClaimTokens}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02]"
                    disabled={faucetState !== FaucetStates.READY}
                  >
                    Claim Stablecoins
                  </Button>

                  <div className="text-center">
                    <p className="text-sm text-gray-500">
                      One claim allowed per 24 hours
                    </p>
                  </div>
                </CardContent>
              </div>

              {/* Claiming State */}
              <div
                className={cn(
                  "absolute inset-0 transition-all duration-500 ease-in-out",
                  faucetState === FaucetStates.CLAIMING
                    ? "translate-x-0 opacity-100"
                    : faucetState === FaucetStates.READY
                    ? "translate-x-full opacity-0"
                    : "-translate-x-full opacity-0"
                )}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    Processing Claim
                  </CardTitle>

                  {/* Animated Text Loader */}
                  <div className="flex justify-center mt-4">
                    <div className="bg-gray-900 px-6 py-3 rounded-2xl">
                      <div className="flex items-center text-gray-400 font-medium text-lg font-['Poppins']">
                        <span className="mr-2">Processing</span>
                        <div className="relative h-6 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent via-30% to-transparent to-70% from-10% to-gray-900 to-90% z-10 pointer-events-none"></div>
                          <div className="flex flex-col animate-spin-words">
                            <span className="block h-6 pl-1 text-purple-400">
                              tokens
                            </span>
                            <span className="block h-6 pl-1 text-purple-400">
                              request
                            </span>
                            <span className="block h-6 pl-1 text-purple-400">
                              wallet
                            </span>
                            <span className="block h-6 pl-1 text-purple-400">
                              blockchain
                            </span>
                            <span className="block h-6 pl-1 text-purple-400">
                              tokens
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <Button
                    disabled
                    className="w-full bg-gray-400 text-white py-6 text-lg font-semibold rounded-xl cursor-not-allowed"
                  >
                    Processing...
                  </Button>

                  <div className="text-center">
                    <p className="text-sm text-gray-500">
                      This may take a few moments
                    </p>
                  </div>
                </CardContent>

                <style jsx>{`
                  @keyframes spin-words {
                    10% {
                      transform: translateY(-24px);
                    }
                    25% {
                      transform: translateY(-24px);
                    }
                    35% {
                      transform: translateY(-48px);
                    }
                    50% {
                      transform: translateY(-48px);
                    }
                    60% {
                      transform: translateY(-72px);
                    }
                    75% {
                      transform: translateY(-72px);
                    }
                    85% {
                      transform: translateY(-96px);
                    }
                    100% {
                      transform: translateY(-96px);
                    }
                  }
                  .animate-spin-words {
                    animation: spin-words 4s infinite;
                  }
                `}</style>
              </div>

              {/* Success State */}
              <div
                className={cn(
                  "absolute inset-0 transition-all duration-500 ease-in-out",
                  faucetState === FaucetStates.SUCCESS
                    ? "translate-x-0 opacity-100"
                    : faucetState === FaucetStates.CLAIMING
                    ? "translate-x-full opacity-0"
                    : "-translate-x-full opacity-0"
                )}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-green-700">
                    Claim Successful!
                  </CardTitle>
                  <p className="text-sm text-gray-600">
                    You've received 100 USDT
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <Button
                    onClick={handleClaimSuccess}
                    className="w-full bg-gray-600 hover:bg-gray-700 text-white py-6 text-lg font-semibold rounded-xl transition-all duration-200"
                  >
                    Claimed
                  </Button>

                  <div className="text-center">
                    <p className="text-sm text-gray-500">
                      One claim allowed per 24 hours
                    </p>
                  </div>
                </CardContent>
              </div>

              {/* Cooldown State */}
              <div
                className={cn(
                  "absolute inset-0 transition-all duration-500 ease-in-out",
                  faucetState === FaucetStates.COOLDOWN
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                )}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-gray-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-700">
                    Claim on Cooldown
                  </CardTitle>
                  <p className="text-sm text-gray-600">
                    Next claim available in:
                  </p>
                  <div className="text-2xl font-mono font-bold text-gray-800 mt-2">
                    {formatTime(countdown)}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <Button
                    disabled
                    className="w-full bg-gray-300 text-gray-500 py-6 text-lg font-semibold rounded-xl cursor-not-allowed"
                  >
                    Claim Stablecoins
                  </Button>

                  <div className="text-center">
                    <Badge variant="secondary" className="text-xs">
                      Claimed: 100 USDT
                    </Badge>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>

          {/* Footer */}
         
        </div>
      </div>
    </main>
  );
}
