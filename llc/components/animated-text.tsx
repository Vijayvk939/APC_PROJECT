"use client"

import { motion } from "framer-motion"

interface AnimatedTextProps {
  text: string
  delay?: number // Time delay in seconds before the text animation begins.
}

// Component that animates text by fading and sliding each character up one by one.
export function AnimatedText({ text, delay = 0 }: AnimatedTextProps) {
  return (
    <span>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.03, // Stagger the animation delay for each character.
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          style={{ display: char === " " ? "inline" : "inline-block" }}
        >
          {/* Use non-breaking spaces so they hold their width during animation. */}
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  )
}
