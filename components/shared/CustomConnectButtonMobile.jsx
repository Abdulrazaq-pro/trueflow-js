import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useDisconnect } from "wagmi";
import { GradientButton2 } from "./GradientButton2";
import { useState, useRef, useEffect } from "react";
import ClientOnlyWrapper from "./ClientOnlyWrapper";

const CustomConnectButtonMobile = ({ onDisconnect, className = "" }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { disconnect } = useDisconnect();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDisconnect = () => {
    disconnect();
    setIsDropdownOpen(false);
    // Call parent disconnect handler if provided
    if (onDisconnect) {
      onDisconnect();
    }
  };

  return (
    <div className={className}>
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          const ready = mounted && authenticationStatus !== "loading";
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === "authenticated");

          return (
            <div
              {...(!ready && {
                "aria-hidden": true,
                style: {
                  opacity: 0,
                  pointerEvents: "none",
                  userSelect: "none",
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <GradientButton2
                      onClick={openConnectModal}
                      text="Connect Wallet"
                      leftIcon="/elements/left.svg"
                      rightIcon="/elements/right.svg"
                      // className="w-full"
                    />
                  );
                }

                if (chain.unsupported) {
                  return (
                    <GradientButton2
                      onClick={openChainModal}
                      text="Wrong network"
                      gradientFrom="from-red-500"
                      gradientTo="to-red-800"
                      hoverFrom="hover:from-red-600"
                      hoverTo="hover:to-red-600"
                      // className="w-full"
                    />
                  );
                }

                // For mobile menu integration - return wallet card instead of dropdown
                return (
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 shadow-xl">
                    <div className="text-white">
                      {/* Chain and Connection Status */}
                      <div className="flex items-center gap-3 mb-4">
                        {chain.hasIcon && (
                          <div className="w-8 h-8 rounded-full overflow-hidden">
                            {chain.iconUrl && (
                              <img
                                alt={chain.name ?? "Chain icon"}
                                src={chain.iconUrl}
                                className="w-full h-full object-cover"
                              />
                            )}
                          </div>
                        )}
                        <div>
                          <div className="text-sm opacity-90">Connected to</div>
                          <div className="font-semibold">{chain.name}</div>
                        </div>
                      </div>

                      {/* Account Info */}
                      <div className="mb-4">
                        <div className="text-sm opacity-90 mb-2">
                          Connected Wallet
                        </div>
                        <div className="font-bold text-lg mb-2 font-mono">
                          {account.displayName}
                        </div>
                        {account.displayBalance && (
                          <div className="text-sm opacity-90">
                            Balance: {account.displayBalance}
                          </div>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-2">
                        {/* Switch Network Button */}
                        <button 
                          onClick={openChainModal}
                          className="flex items-center justify-center space-x-2 w-full text-white text-sm hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 border border-white/20"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            />
                          </svg>
                          <span>Switch Network</span>
                        </button>

                        {/* Account Details Button */}
                        <button 
                          onClick={openAccountModal}
                          className="flex items-center justify-center space-x-2 w-full text-white text-sm hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 border border-white/20"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                          <span>Account Details</span>
                        </button>

                        {/* Disconnect Button */}
                        <button 
                          onClick={handleDisconnect}
                          className="flex items-center justify-center space-x-2 w-full text-white text-sm hover:bg-red-500/20 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 border border-red-400/30"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                          </svg>
                          <span>Disconnect</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    </div>
  );
};

// Wrapped version to prevent SSR issues
const WrappedCustomConnectButtonMobile = ({ onDisconnect, className = "" }) => {
  return (
    <ClientOnlyWrapper fallback={
      <div className="bg-gray-700 rounded-2xl p-6 shadow-xl animate-pulse">
        <div className="text-white text-center">Loading wallet...</div>
      </div>
    }>
      <CustomConnectButtonMobile onDisconnect={onDisconnect} className={className} />
    </ClientOnlyWrapper>
  );
};

export default WrappedCustomConnectButtonMobile;
