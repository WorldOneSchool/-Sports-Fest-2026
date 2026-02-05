// src/components/LandingHero.jsx
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
// Landing image is provided globally via CSS body background to ensure consistent scaling

// LandingHero wraps children (heading / subtitle) and applies background, overlay and blur.
export default function LandingHero({ children, className = "" }) {
    const reduce = useReducedMotion();
    const transition = { duration: reduce ? 0 : 0.30, ease: "easeInOut" }; // 300ms within 200-400ms

    return (
        <motion.section
            className={`landing-hero ${className}`}
            initial={reduce ? {} : { opacity: 0, y: 8 }}
            animate={reduce ? {} : { opacity: 1, y: 0, transition }}
            aria-label="Landing hero"
        >
            {/* Gradient overlay (color + subtle tint) */}
            <div className="landing-overlay" aria-hidden="true" />

            {/* Blur/wash overlay (uses backdrop-filter where supported) */}
            <div className="landing-blur" aria-hidden="true" />

            {/* Content container - keep existing markup inside this when using the component */}
            <div className="landing-content">{children}</div>
        </motion.section>
    );
}