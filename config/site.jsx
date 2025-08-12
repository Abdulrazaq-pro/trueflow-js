export const siteConfig = {
  name: "TrueFlow",
  url: "https://trueflow.com",
  getStartedUrl: "https://trueflow.com/swap",
  ogImage: "https://trueflow.com/og.jpg",
  description:
    "TrueFlow makes moving your assets across chains as easy as a single click. Whether you're swapping, bridging or bridging stablecoins, you get fast, simple, and secure transactions powered by the reliability of Plume.",
  links: {
    twitter: "#",
    linkedin: "#",
    discord: "#",
    github: "#",
    email: "mailto:hello@trueflow.com",
  },
  features: {
    swap: "/swap",
    bridge: "/bridge",
    faucet: "/faucet",
    dashboard: "/dashboard",
  },
  stats: {
    transactions: "1M+",
    chains: 15,
    assets: 100,
    users: "50k+",
    updated: "August 2025",
    totalVolume: "$100M+",
    avgTransactionTime: "< 30s",
    supportedProtocols: 25,
  },
  footer: {
    description:
      "TrueFlow makes moving your assets across chains as easy as a single click. Whether you’re swapping tokens or bridging stablecoins, you get fast, gas-efficient, and secure transactions powered by the reliability of Plasma.",
    email: "hello@trueflow.com",
    columns: [
      {
        title: "Product",
        links: [
          { text: "Swap", href: "/swap" },
          { text: "Bridge", href: "/bridge" },
          { text: "Faucet", href: "/faucet" },
          { text: "Dashboard", href: "/dashboard" },
        ],
      },
      {
        title: "Support",
        links: [
          { text: "Help Center", href: "/help" },
          { text: "Privacy Policy", href: "/privacy" },
          { text: "Terms", href: "/terms" },
        ],
      },
      {
        title: "Connect",
        links: [
          { text: "Twitter", href: "#", icon: "twitter" },
          { text: "Discord", href: "#", icon: "discord" },
          { text: "Email Us", href: "mailto:hello@trueflow.com", icon: "mail" },
        ],
      },
    ],
  },
};

// export type SiteConfig = typeof siteConfig;
