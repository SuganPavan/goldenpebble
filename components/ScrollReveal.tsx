"use client";

import React from "react";
import { motion, HTMLMotionProps, Variants } from "framer-motion";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  variant?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale-up" | "stagger-container";
  delay?: number;
  duration?: number;
  className?: string;
  staggerDelay?: number;
}

const variants: Record<string, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0 }
  },
  "fade-down": {
    hidden: { opacity: 0, y: -35 },
    visible: { opacity: 1, y: 0 }
  },
  "fade-left": {
    hidden: { opacity: 0, x: 45 },
    visible: { opacity: 1, x: 0 }
  },
  "fade-right": {
    hidden: { opacity: 0, x: -45 },
    visible: { opacity: 1, x: 0 }
  },
  "scale-up": {
    hidden: { opacity: 0, scale: 0.93, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 }
  },
  "stagger-container": {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05
      }
    }
  }
};

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.6,
  className = "",
  staggerDelay = 0.1,
  ...props
}: ScrollRevealProps) {
  if (variant === "stagger-container") {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: staggerDelay,
              delayChildren: delay
            }
          }
        }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  const selectedVariant = variants[variant] || variants["fade-up"];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={selectedVariant}
      transition={{
        duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1] as const
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealItem({
  children,
  className = "",
  variant = "fade-up"
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "fade-up" | "fade-left" | "fade-right" | "scale-up";
}) {
  const itemVariants: Record<string, Variants> = {
    "fade-up": {
      hidden: { opacity: 0, y: 30 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.65, ease: [0.32, 0.72, 0, 1] as const }
      }
    },
    "fade-left": {
      hidden: { opacity: 0, x: 40 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.65, ease: [0.32, 0.72, 0, 1] as const }
      }
    },
    "fade-right": {
      hidden: { opacity: 0, x: -40 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.65, ease: [0.32, 0.72, 0, 1] as const }
      }
    },
    "scale-up": {
      hidden: { opacity: 0, scale: 0.94, y: 20 },
      visible: { 
        opacity: 1, 
        scale: 1, 
        y: 0,
        transition: { duration: 0.65, ease: [0.32, 0.72, 0, 1] as const }
      }
    }
  };

  return (
    <motion.div variants={itemVariants[variant] || itemVariants["fade-up"]} className={className}>
      {children}
    </motion.div>
  );
}
