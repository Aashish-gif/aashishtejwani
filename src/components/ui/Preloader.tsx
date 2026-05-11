"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [spotlightDone, setSpotlightDone] = useState(false);

  useEffect(() => {
    // Check if preloader has already been shown in this session
    const hasSeenPreloader = sessionStorage.getItem('hasSeenPreloader');
    
    // Don't show preloader if already shown in this session
    if (hasSeenPreloader) {
      setIsLoading(false);
      return;
    }
    
    // Spotlight finishes at ~2s, then wait 0.8s and exit
    const spotlightTimer = setTimeout(() => setSpotlightDone(true), 2000);
    const exitTimer = setTimeout(() => {
      setIsLoading(false);
      // Mark that preloader has been shown
      sessionStorage.setItem('hasSeenPreloader', 'true');
    }, 2800);
    
    return () => {
      clearTimeout(spotlightTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  const nameLetters = "AASHISH".split("");

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(12px)",
          }}
          transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: "#020617" }}
        >
          {/* Ambient glow orbs */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
              }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 2, delay: 0.3 }}
              className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
              }}
            />
          </div>

          {/* Spotlight sweep across name */}
          <div className="relative overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "300%" }}
              transition={{
                duration: 2,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.3,
              }}
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 40%, rgba(139,92,246,0.2) 50%, rgba(255,255,255,0.08) 60%, transparent 100%)",
                width: "120%",
              }}
            />

            {/* Name with letter-by-letter reveal */}
            <div className="flex items-center gap-2 md:gap-4">
              {nameLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + i * 0.15,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  className="text-7xl sm:text-8xl md:text-9xl font-display font-bold text-white inline-block"
                  style={{
                    textShadow: spotlightDone
                      ? "0 0 60px rgba(139,92,246,0.6), 0 0 120px rgba(139,92,246,0.3)"
                      : "none",
                    transition: "text-shadow 0.8s ease",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-[35%] sm:bottom-[38%]"
          >
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-5" />
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-slate-500 font-medium text-center font-display">
              Software Engineer & Full Stack Developer
            </p>
          </motion.div>

          {/* Loading bar at bottom */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48">
            <div className="h-[2px] w-full bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #8b5cf6, #06b6d4)",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
