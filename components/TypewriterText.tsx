"use client";

import React, { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

interface TypewriterTextProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  cursorClassName?: string;
  showCursor?: boolean;
  loop?: boolean;
}

export default function TypewriterText({
  phrases,
  typingSpeed = 75,
  deletingSpeed = 40,
  pauseDuration = 2200,
  className = "",
  cursorClassName = "",
  showCursor = true,
  loop = true
}: TypewriterTextProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState(phrases && phrases.length > 0 ? phrases[0] : "");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // If reduced motion is requested, render full phrase immediately without animation
    if (shouldReduceMotion) {
      setCurrentText(phrases[0] || "");
      return;
    }

    if (!phrases || phrases.length === 0) return;

    const fullText = phrases[currentPhraseIndex];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        if (phrases.length > 1 && loop) {
          setIsDeleting(true);
        }
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    if (!isDeleting) {
      // Typing mode
      if (currentText.length < fullText.length) {
        const typeTimer = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        }, typingSpeed + Math.random() * 25); // Subtle human-like speed variation
        return () => clearTimeout(typeTimer);
      } else {
        // Finished typing current phrase
        if (loop && (phrases.length > 1 || isDeleting)) {
          setIsPaused(true);
        }
      }
    } else {
      // Deleting mode
      if (currentText.length > 0) {
        const deleteTimer = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        }, deletingSpeed);
        return () => clearTimeout(deleteTimer);
      } else {
        // Finished deleting, move to next phrase
        setIsDeleting(false);
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    }
  }, [currentText, isDeleting, isPaused, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration, loop, shouldReduceMotion]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{currentText}</span>
      {showCursor && (
        <span
          className={`inline-block w-[2px] h-[1em] ml-1 bg-[#C9A66B] animate-pulse rounded-full shadow-[0_0_8px_rgba(201,166,107,0.8)] ${cursorClassName}`}
          aria-hidden="true"
        />
      )}
    </span>
  );
}
