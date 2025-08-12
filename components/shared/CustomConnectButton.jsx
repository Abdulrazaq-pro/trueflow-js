import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useDisconnect } from "wagmi";
import { GradientButton2 } from "./GradientButton2";
import { useState, useRef, useEffect } from "react";
import ClientOnlyWrapper from "./ClientOnlyWrapper";

const CustomConnectButton = () => {
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

  return (
    <div>
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
                    />
                  );
                }

                return (
                  <div className="relative " ref={dropdownRef}>
                    <GradientButton2 
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="group relative "
                    >
                      <div className="flex items-center gap-x-3 rounded-[10px] px-2 py-3 text-white transition-all duration-300 ">
                        {/* Chain Icon */}
                        {chain.hasIcon && (
                          <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                            {chain.iconUrl && (
                              <img
                                alt={chain.name ?? "Chain icon"}
                                src={chain.iconUrl}
                                className="w-full h-full object-cover"
                              />
                            )}
                          </div>
                        )}

                        {/* Account Info */}
                        <div className="flex flex-col items-start min-w-0">
                          <span className="text-sm font-medium text-gray-200">
                            {chain.name}
                          </span>
                          <span className="text-xs text-gray-400 truncate">
                            {account.displayName}
                            {account.displayBalance &&
                              ` • ${account.displayBalance}`}
                          </span>
                        </div>

                        {/* Dropdown Arrow */}
                        <svg
                          className={`w-4 h-4 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                            isDropdownOpen ? "rotate-180" : ""
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </div>
                    </GradientButton2>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 mt-2 min-w-60 bg-white/95 backdrop-blur-sm shadow-2xl rounded-xl border border-gray-200/50 p-2 z-50 transition-all duration-200 ${
                        isDropdownOpen
                          ? "opacity-100 visible transform translate-y-0"
                          : "opacity-0 invisible transform -translate-y-2"
                      }`}
                    >
                      {/* Account Info Section */}
                      <div className="px-4 py-3 border-b border-gray-200/50">
                        <div className="flex items-center gap-3">
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
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold text-gray-800">
                              {account.displayName}
                            </span>
                            {account.displayBalance && (
                              <span className="text-xs text-gray-500">
                                {account.displayBalance}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Menu Items */}
                      <button
                        onClick={() => {
                          openChainModal();
                          setIsDropdownOpen(false);
                        }}
                        className="w-full flex items-center gap-x-3 py-3 px-4 rounded-lg text-sm text-gray-800 hover:bg-gray-100/80 focus:outline-none focus:bg-gray-100/80 transition-colors duration-150"
                      >
                        <svg
                          className="w-4 h-4 text-gray-500"
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
                        <div className="flex flex-col items-start">
                          <span className="font-medium">Switch Network</span>
                          <span className="text-xs text-gray-500">
                            Currently on {chain.name}
                          </span>
                        </div>
                      </button>

                      <button
                        onClick={() => {
                          openAccountModal();
                          setIsDropdownOpen(false);
                        }}
                        className="w-full flex items-center gap-x-3 py-3 px-4 rounded-lg text-sm text-gray-800 hover:bg-gray-100/80 focus:outline-none focus:bg-gray-100/80 transition-colors duration-150"
                      >
                        <svg
                          className="w-4 h-4 text-gray-500"
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
                        <div className="flex flex-col items-start">
                          <span className="font-medium">Account Details</span>
                          <span className="text-xs text-gray-500">
                            View transactions & more
                          </span>
                        </div>
                      </button>

                      <div className="border-t border-gray-200/50 mt-2 pt-2">
                        <button
                          onClick={() => {
                            disconnect();
                            setIsDropdownOpen(false);
                          }}
                          className="w-full flex items-center gap-x-3 py-3 px-4 rounded-lg text-sm text-red-600 hover:bg-red-50 focus:outline-none focus:bg-red-50 transition-colors duration-150"
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
                          <span className="font-medium">Disconnect</span>
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
const WrappedCustomConnectButton = () => {
  return (
    <ClientOnlyWrapper fallback={
      <div className="px-4 py-2 bg-gray-700 text-white rounded-lg animate-pulse">
        Loading...
      </div>
    }>
      <CustomConnectButton />
    </ClientOnlyWrapper>
  );
};

export default WrappedCustomConnectButton;
