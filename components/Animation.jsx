"use client";
import React, { useState } from "react";
import { Settings, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// ============= REUSABLE ANIMATION COMPONENTS =============

// interface AnimateInViewProps 
export const animationVariants = {
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  },
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 }
  },
  slideLeft: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 }
  },
  slideRight: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 }
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  },
  scale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 }
  },
  slideUpFade: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  }
};

export const AnimateInView= ({
  children,
  animation = 'slideUp',
  delay = 0,
  duration = 0.5,
  className = '',
  viewport = { once: true, margin: "-50px 0px -50px 0px" }
}) => {
  const variant = animationVariants[animation];

  return (
    <motion.div
      initial={variant.initial}
      whileInView={variant.animate}
      viewport={viewport}
      transition={{ 
        duration, 
        ease: "easeOut", 
        delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ============= CUSTOM HOOKS (Alternative Approach) =============

export const useAnimationVariants = () => {
  return {
    slideUp: {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-50px 0px -50px 0px" },
      transition: { duration: 0.5, ease: "easeOut" }
    },
    slideDown: {
      initial: { opacity: 0, y: -20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-100px 0px -100px 0px" },
      transition: { duration: 0.6, ease: "easeOut" }
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: true, margin: "-50px 0px -50px 0px" },
      transition: { duration: 0.4, ease: "easeOut" }
    },
    fadeIn: {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true, margin: "-30px 0px -30px 0px" },
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };
};