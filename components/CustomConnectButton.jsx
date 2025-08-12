import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useDisconnect } from "wagmi";
import { useState, useRef, useEffect } from "react";
import ClientOnlyWrapper from "./ClientOnlyWrapper";
import { Button } from "./ui/button";

// import { ConnectButton } from "@rainbow-me/rainbowkit";
// import { useDisconnect } from "wagmi";
// import { useState, useRef, useEffect } from "react";
// import ClientOnlyWrapper from "./ClientOnlyWrapper";
// import { Button } from "./ui/button";

const CustomConnectButton = ({
  className = "",
  children,
  showWalletIcon = true,
  // Default styles that can be overridden
  defaultStyles = {
    connect: "bg-blue-600 hover:bg-blue-700 text-white rounded-lg",
    wrongNetwork: "bg-red-600 hover:bg-red-700 text-white rounded-lg",
    connected: "bg-green-600 hover:bg-green-700 text-white rounded-lg",
  },
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { disconnect } = useDisconnect();

  // Helper function to merge classes - FIXED VERSION
  const mergeClasses = (stateClasses) => {
    const base =
      "w-full h-12 flex items-center justify-center gap-2 px-4 py-2 transition-colors duration-200 font-medium text-base";

    // Only combine base + state + custom className (don't duplicate className)
    return `${base} ${stateClasses} ${className}`.trim();
  };

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
    // REMOVED className from outer div to prevent conflicts
    <div className="w-full">
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
              className="w-full"
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
                    <Button
                      onClick={openConnectModal}
                      className={mergeClasses(defaultStyles.connect)}
                    >
                      {showWalletIcon && (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                          />
                        </svg>
                      )}
                      {children || (
                        <span className="font-medium">Connect Wallet</span>
                      )}
                    </Button>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <Button
                      onClick={openChainModal}
                      className={mergeClasses(defaultStyles.wrongNetwork)}
                    >
                      {showWalletIcon && (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                          />
                        </svg>
                      )}
                      <span className="font-medium">Wrong Network</span>
                    </Button>
                  );
                }

                return (
                  <div
                    className="relative inline-block w-full"
                    ref={dropdownRef}
                  >
                    <Button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={mergeClasses(defaultStyles.connected)}
                    >
                      {showWalletIcon && (
                        <>
                          {account?.connector?.icon ? (
                            <img
                              src={account.connector.icon}
                              alt={account.connector.name}
                              className="w-5 h-5 rounded-full"
                            />
                          ) : chain?.iconUrl ? (
                            <img
                              src={chain.iconUrl}
                              alt={chain.name}
                              className="w-5 h-5 rounded-full"
                            />
                          ) : (
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3 3v8a3 3 0 003 3z"
                              />
                            </svg>
                          )}
                        </>
                      )}
                      <span className="font-medium">
                        Connected ({account.displayName})
                      </span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Button>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full right-0 mt-2 w-72 max-w-[90vw] bg-white/95 backdrop-blur-sm shadow-2xl rounded-xl border border-gray-200/50 p-2 z-50 transition-all duration-200 ${
                        isDropdownOpen
                          ? "opacity-100 visible transform translate-y-0"
                          : "opacity-0 invisible transform -translate-y-2"
                      }`}
                      style={{
                        left: "auto",
                        right: "0",
                        transform: "translateX(0)",
                      }}
                    >
                      {/* Account Info Section */}
                      <div className="px-4 py-3 border-b border-gray-200/50">
                        <div className="flex items-center gap-3">
                          {account?.connector?.icon ? (
                            <img
                              src={account.connector.icon}
                              alt={account.connector.name}
                              className="w-8 h-8 rounded-full"
                            />
                          ) : chain?.iconUrl ? (
                            <img
                              src={chain.iconUrl}
                              alt={chain.name}
                              className="w-8 h-8 rounded-full"
                            />
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                              <svg
                                className="w-4 h-4 text-gray-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                />
                              </svg>
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
const WrappedCustomConnectButton = ({
  className = "",
  children,
  showWalletIcon = true,
  defaultStyles,
}) => {
  return (
    <ClientOnlyWrapper
      fallback={
        <div
          className={`w-full h-12 px-4 py-2 bg-gray-300 text-gray-600 rounded-lg animate-pulse flex items-center justify-center ${className}`}
        >
          <span className="font-medium">Loading...</span>
        </div>
      }
    >
      <CustomConnectButton
        className={className}
        showWalletIcon={showWalletIcon}
        defaultStyles={defaultStyles}
      >
        {children}
      </CustomConnectButton>
    </ClientOnlyWrapper>
  );
};

export default WrappedCustomConnectButton;
