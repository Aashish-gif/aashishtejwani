"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  X,
  Trophy,
  Flame,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { useNavigation } from "@/contexts/NavigationContext";

const achievements = [
  {
    icon: Trophy,
    title: "National Hackathons",
    subtitle: "🏆 IIT Gandhinagar & IIIT Naya Raipur Finalist",
    color: "#f59e0b",
    gradient: "from-amber-500/20 to-orange-500/10",
    image: "/Images/Aashish Tejwani IIIT Surat  CGPA++.png",
  },
  {
    icon: Trophy,
    title: "Regional Achievements",
    subtitle: "🥇 IIIT Surat Winner & Tech Expo Runner-Up",
    color: "#06b6d4",
    gradient: "from-cyan-500/20 to-teal-500/10",
    image: "/Images/1747654979955.jpg",
  },
  {
    icon: Flame,
    title: "AI & Automation Solutions",
    subtitle: "🚀 Real-World Products",
    color: "#d946ef",
    gradient: "from-fuchsia-500/20 to-pink-500/10",
    image: "/Images/1764038714520.jpg",
  },
  {
    icon: TrendingUp,
    title: "Top Performer",
    subtitle: "📈 National-Level Recognition",
    color: "#10b981",
    gradient: "from-emerald-500/20 to-green-500/10",
    image: "/Images/1Y6A8111 (1).JPG",
  },
];

const marqueeItems = [
  {
    type: "badge",
    title: "IIT Gandhinagar",
    color:
      "from-amber-500/20 to-orange-500/10 border-amber-500/20 text-amber-400",
  },
  {
    type: "badge",
    title: "IIIT Naya Raipur",
    color:
      "from-violet-500/20 to-purple-500/10 border-violet-500/20 text-violet-400",
  },
  {
    type: "badge",
    title: "IIIT Surat",
    color:
      "from-cyan-500/20 to-teal-500/10 border-cyan-500/20 text-cyan-400",
  },
  {
    type: "image",
    src: "/Images/1747654979955.jpg",
  },
  {
    type: "image",
    src: "/Images/1764038714520.jpg",
  },
  {
    type: "image",
    src: "/Images/1Y6A8111 (1).JPG",
  },
  {
    type: "image",
    src: "/Images/Aashish Tejwani IIIT Surat  CGPA++.jpg",
  },
];

export default function AchievementsPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { preventPopup } = useNavigation();

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");

    if (hasSeenPopup || preventPopup) return;

    const openTimer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("hasSeenPopup", "true");
    }, 6000);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      clearTimeout(openTimer);
      window.removeEventListener("resize", checkMobile);
    };
  }, [preventPopup]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed inset-0 z-[101] flex items-center justify-center p-3 sm:p-4 pointer-events-none ${
              isMobile ? "px-2" : ""
            }`}
          >
            <div
              className={`relative w-full pointer-events-auto overflow-y-auto ${
                isMobile
                  ? "max-h-[95vh] max-w-[95vw] rounded-2xl"
                  : "max-w-lg sm:max-w-2xl max-h-[85vh] sm:max-h-[90vh] rounded-2xl sm:rounded-3xl"
              }`}
              style={{
                background:
                  "linear-gradient(180deg, rgba(15,23,42,0.97) 0%, rgba(2,6,23,0.99) 100%)",
                border: "1px solid rgba(139,92,246,0.15)",
                boxShadow:
                  "0 0 80px rgba(139,92,246,0.1), 0 25px 50px rgba(0,0,0,0.5)",
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
              </button>

              {/* Top Glow */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 rounded-full opacity-40 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(139,92,246,0.2) 0%, transparent 70%)",
                  filter: "blur(30px)",
                }}
              />

              <div className={`relative ${isMobile ? "p-3" : "p-4 sm:p-6"}`}>
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className={`text-center ${
                    isMobile ? "mb-4" : "mb-6"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 mb-4">
                    <Trophy className="w-3.5 h-3.5 text-amber-400" />

                    <span className="text-[11px] uppercase tracking-[0.2em] text-amber-400 font-medium">
                      Recent Achievements
                    </span>
                  </div>

                  <h2
                    className={`${
                      isMobile ? "text-base" : "text-lg sm:text-xl"
                    } font-display font-bold text-white mb-2`}
                  >
                    Milestones{" "}
                    <span className="text-gradient">Unlocked</span>
                  </h2>
                </motion.div>

                {/* Photos Marquee */}
                <div className="relative w-full h-40 sm:h-56 overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/5 mb-5">
                  <div className="flex w-max animate-marquee gap-4 sm:gap-8 px-3 sm:px-6 py-3">
                    {[...marqueeItems, ...marqueeItems].map((item, index) => {
                      if (item.type === "image") {
                        return (
                          <div
                            key={index}
                            className="flex-shrink-0 w-32 sm:w-48 h-32 sm:h-48 rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center"
                          >
                            <img
                              src={item.src}
                              alt={item.src}
                              className="w-full h-full object-cover"
                              style={{ objectPosition: "center" }}
                              onError={(e) => {
                                console.error('Image failed to load:', item.src);
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>

                {/* Achievement Cards */}
                <div
                  className={`grid ${
                    isMobile
                      ? "grid-cols-2 gap-2"
                      : "grid-cols-2 gap-3"
                  } mb-4`}
                >
                  {achievements.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className={`group relative ${
                        isMobile ? "p-2" : "p-3"
                      } rounded-xl bg-gradient-to-br ${
                        item.gradient
                      } border border-white/5 hover:border-white/10 transition-all duration-300 text-center`}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <div>
                          <h3 className="text-[11px] sm:text-[13px] uppercase tracking-[0.18em] text-white font-bold mb-1">
                            {item.title}
                          </h3>

                          <p className="text-[10px] sm:text-[11px] text-white/80 font-medium">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-center"
                >
                  <button
                    onClick={() => setIsOpen(false)}
                    className="group inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:px-8 sm:py-3.5 sm:text-sm rounded-full font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]"
                    style={{
                      background:
                        "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                    }}
                  >
                    {isMobile
                      ? "Continue"
                      : "Continue to Portfolio"}

                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}