import React from "react";
import { Text } from "@/components/Text";
import { AnimateInView, useAnimationVariants } from "@/components/Animation";

// Main component
const SwappingBridgingSection = () => {
  const features = [
    {
      number: "1",
      title: "Bridges Beyond Stablecoins",
      description:
        "TrueFlow connects more than just tokens; it bridges economies. From one chain to another across chains with zero compromise and total confidence, backed by Plasma's long-standing reputation for trust, proven speed and security.",
    },
    {
      number: "2",
      title: "DeFi, Evolved",
      description:
        "Built for the next wave of decentralized finance, TrueFlow combines the best of token transfers on Plasma with rock-solid security and reliability. Experience DeFi the way it should be - in flow, not in bridge, across time.",
    },
    {
      number: "3",
      title: "Stability Meets Security",
      description:
        "From one chain to another, TrueFlow keeps your transactions efficient and your assets safe. Cross-chain, cross-speed, cross-borders all while maintaining truly flowing experience.",
    },
  ];

  return (
    <div className="p-3">
      <AnimateInView animation="slideUp">
        <div className="relative w-full min-h-screen bg-gradient-to-br from-neutral-900 via-black to-neutral-900 rounded-[17px]">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_0%,transparent_50%)]"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:px-12 lg:py-32">
            {/* Header Section */}
            <div className="text-center mb-20">
              <div className="mb-8">
                <Text
                  as="h1"
                  variant="heading"
                  size="3xl"
                  weight="bold"
                  className="text-white tracking-tight mb-8 bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent"
                >
                  Swapping & Bridging
                </Text>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="text-gray-300 text-base leading-relaxed space-y-1 font-light">
                  <p>
                    Swap assets instantly or bridge them seamlessly across
                    chains powered by Plasma, designed for speed.
                  </p>
                  <p>
                    TrueFlow enables low-gas, high speed swaps and bridges
                    across supported networks with deep
                  </p>
                  <p>liquidity and zero compromise on security.</p>
                  <br />
                  <p>
                    Whether you're optimizing yield, repositioning capital, or
                    moving between ecosystems, TrueFlow
                  </p>
                  <p>
                    ensures your assets stay secure, stable, and truly flowing.
                  </p>
                  <br />
                  <p className="font-normal">
                    Experience DeFi the way it should be: fast, secure, and
                    cross-chain by default.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group cursor-default transition-all duration-300 hover:transform hover:-translate-y-2"
                >
                  <div className="space-y-6 p-6 rounded-2xl backdrop-blur-md border border-gray-800/30 hover:border-gray-700/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                    {/* Large Number with Border */}
                    <div className="relative">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl border-2 border-gray-600/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
                        <Text
                          variant="heading"
                          size="2xl"
                          weight="bold"
                          className="text-white"
                        >
                          {feature.number}
                        </Text>
                      </div>
                    </div>

                    {/* Title */}
                    <div className="space-y-4">
                      <Text
                        as="h3"
                        variant="heading"
                        size="xl"
                        weight="bold"
                        className="text-white leading-tight tracking-tight group-hover:text-blue-100 transition-colors duration-300"
                      >
                        {feature.title}
                      </Text>

                      {/* Description */}
                      <Text
                        variant="body"
                        size="sm"
                        className="text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-300"
                      >
                        {feature.description}
                      </Text>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        </div>
      </AnimateInView>
    </div>
  );
};

export default SwappingBridgingSection;
