"use client";
import { useEffect } from "react";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Head from "next/head";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Approach from "./components/Approach";
import Testimonial from "./components/Testimonial";
import Aboutme from "./components/Aboutme";
import Test from "./components/Test";
import Jobs from "./components/Jobs";

export default function Home() {
  // add smooth scrolling

  
  // useEffect(() => {
  //   // Adding smooth scrolling behavior to elements with the class 'smooth-scroll'
  //   document.querySelectorAll(".smooth-scroll").forEach((anchor) => {
  //     anchor.addEventListener("click", function (e) {
  //       if (divRef.current) {
  //         divRef.current.style.clipPath = clipPath;
  //       }
        

  //       // Only prevent the default action for internal anchor links
  //       if (targetId.startsWith("#")) {
  //         e.preventDefault();

  //         const targetElement = document.getElementById(targetId.substring(1)); // Removing '#' from the id
  //         if (targetElement) {
  //           targetElement.scrollIntoView({
  //             behavior: "smooth",
  //           });
  //         }
  //       }
  //     });
  //   });
  // }, []);

  return (
    <main className=" .smooth-scroll main bg-neutral-900 overflow-x-hidden">
      <Head>
        <title>Abdulrazaq Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Navbar />
      <Hero />
      <Aboutme />
      <Jobs />
      <Features />
      <Approach />
      <Test />
      {/* <Testimonial /> */}
      <Footer />
    </main>
  );
}
