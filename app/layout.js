"use client";

import "./globals.css";
// import './globals.css';

// import type React from "react";
// import "@/styles/globals.css";
// import { Inter } from "next/font/google";
// import type { Metadata } from "next";
// import { ThemeProvider } from "@/components/theme-provider";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import NextTopLoader from "nextjs-toploader";
// import Providers from "./providers";

// const inter = Inter({ subsets: ["latin"] });

// // export const metadata: Metadata = {
// //   title: "SaaSify - Streamline Your Workflow",
// //   description: "Boost productivity, reduce costs, and scale your business with our all-in-one SaaS platform.",
// //   generator: 'v0.dev'
// // }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   useEffect(() => {
//     // Only run on client side
//     if (typeof window !== "undefined") {
//       gsap.registerPlugin(ScrollTrigger);

//       // Enable scroll normalization
//       ScrollTrigger.normalizeScroll(true);

//       // Optional: Add configuration
//       // ScrollTrigger.normalizeScroll({
//       //   type: "touch,wheel,pointer",
//       //   momentum: self => Math.min(3, self.velocityY / 1000),
//       // })

//       return () => {
//         // Cleanup
//         ScrollTrigger.normalizeScroll(false);
//         ScrollTrigger.getAll().forEach((instance) => instance.kill());
//       };
//     }
//   }, []);

//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={inter.className}>
//         <Providers>
//           <NextTopLoader
//             color="green"
//             initialPosition={0.8}
//             crawlSpeed={200}
//             height={3}
//             crawl={true}
//             showSpinner={false}
//             easing="ease"
//             speed={100}
//             shadow="0 0 10px #2299DD,0 0 5px #2299DD"
//             template='<div class="bar" role="bar"><div class="peg"></div></div>
//   <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
//             zIndex={1600}
//             showAtBottom={false}
//           />

//           <ThemeProvider
//             attribute="class"
//             defaultTheme="light"
//             enableSystem
//             disableTransitionOnChange
//           >
//             {children}
//           </ThemeProvider>
//         </Providers>
//       </body>
//     </html>
//   );
// }

// import "./globals.css";
// import "@rainbow-me/rainbowkit/styles.css";
// import { Geist, Geist_Mono } from "next/font/google";
// import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
// import Providers from "./providers";

// import { ThemeProvider } from "@/components/theme-provider";
// // import DailyRewardsModal from "@/components/DailyRewardsModal";
// // import { useDailyRewards } from "@/hooks/useDailyRewards";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// // export const metadata = {
// //   title: "LandKrypt - Decentralized Real Estate Investment Platform",
// //   description:
// //     "Invest in real estate through fractional NFT ownership with staking rewards and DAO governance.",
// // };

// export default function RootLayout({ children }) {
//   // useEffect(() => {
//   //   // Only run on client side
//   //   if (typeof window !== "undefined") {
//   //     gsap.registerPlugin(ScrollTrigger);

//   //     // Enable scroll normalization
//   //     ScrollTrigger.normalizeScroll(true);

//   //     return () => {
//   //       // Cleanup
//   //       ScrollTrigger.normalizeScroll(false);
//   //       ScrollTrigger.getAll().forEach((instance) => instance.kill());
//   //     };
//   //   }
//   // }, []);

//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased bg-pattern`}
//       >
//         <Providers>
//           <NextTopLoader
//             color="green"
//             initialPosition={0.8}
//             crawlSpeed={200}
//             height={6}
//             crawl={true}
//             showSpinner={false}
//             easing="ease"
//             speed={100}
//             shadow="0 0 10px #2299DD,0 0 5px #2299DD"
//             template='<div class="bar" role="bar"><div class="peg"></div></div>   <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
//             zIndex={1600}
//             showAtBottom={false}
//           />
//           {/* <ThemeProvider
//             attribute="class"
//             defaultTheme="light"
//             enableSystem
//             disableTransitionOnChange
//           > */}
//             {children}
//           {/* </ThemeProvider> */}
//         </Providers>
//       </body>
//     </html>
//   );
// }


import "@rainbow-me/rainbowkit/styles.css";
// Remove these lines:
// import { Geist, Geist_Mono } from "next/font/google";

// Add these instead:
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import Providers from "./providers";
import NextTopLoader from "nextjs-toploader"; // Add this import

import { ThemeProvider } from "@/components/theme-provider";

// Remove the font configurations:
// const geistSans = Geist({...});
// const geistMono = Geist_Mono({...});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-pattern`}
      >
        <Providers>
          <NextTopLoader
            color="green"
            initialPosition={0.8}
            crawlSpeed={200}
            height={6}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={100}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            template='<div class="bar" role="bar"><div class="peg"></div></div>   <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            zIndex={1600}
            showAtBottom={false}
          />
          {children}
        </Providers>
      </body>
    </html>
  );
}
