"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Award, ExternalLink, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { certificates } from "@/lib/data";

export default function Certificates() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const total = certificates.length;

  const go = (dir: 1 | -1) => {
    setCurrent(prev => (prev + dir + total) % total);
  };

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => go(1), 4000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, current]);

  // Which cards to show: prev, active, next (relative positions)
  const getPosition = (index: number): "prev" | "active" | "next" | "hidden" => {
    const prev = (current - 1 + total) % total;
    const next = (current + 1) % total;
    if (index === current) return "active";
    if (index === prev) return "prev";
    if (index === next) return "next";
    return "hidden";
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const variants = {
    active: { x: 0, scale: 1, opacity: 1, zIndex: 30, rotateY: 0 },
    prev:   { x: isMobile ? "-40%" : "-55%", scale: isMobile ? 0.7 : 0.78, opacity: isMobile ? 0.3 : 0.5, zIndex: 20, rotateY: isMobile ? 10 : 15 },
    next:   { x: isMobile ? "40%" : "55%", scale: isMobile ? 0.7 : 0.78, opacity: isMobile ? 0.3 : 0.5, zIndex: 20, rotateY: isMobile ? -10 : -15 },
    hidden: { x: 0, scale: 0.6, opacity: 0, zIndex: 10, rotateY: 0 },
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Premium animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.12),transparent_70%)] pointer-events-none animate-pulse" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-gradient-to-r from-primary/10 to-secondary/10 mb-6 shadow-lg shadow-primary/20"
            >
              <Award className="w-4 h-4 text-primary" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-primary font-bold">Verified Expertise</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-none">
              Certified <span className="text-gradient-premium">Mastery</span>
            </h2>
            <p className="text-slate-400 text-lg font-light">
              Industry-recognized credentials validating my skills and continuous learning journey.
            </p>
          </div>
          <Link
            href="/certificates"
            className="group relative flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 hover:border-primary/50 transition-all text-white font-display font-bold tracking-widest text-xs uppercase shrink-0 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-3">
              All Certificates
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>

        {/* 3D Carousel */}
        <div
          className="relative flex items-center justify-center"
          style={{ height: 400, perspective: 1200 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {certificates.map((cert, index) => {
            const pos = getPosition(index);
            if (pos === "hidden") return null;

            return (
              <motion.div
                key={cert.id}
                variants={variants}
                animate={pos}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-[320px] sm:w-[380px]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className={`relative w-full p-8 rounded-[3rem] flex flex-col gap-6 overflow-hidden transition-all duration-700 ${
                    pos === "active"
                      ? "glass-strong border border-primary/40 shadow-[0_0_80px_rgba(139,92,246,0.25),0_0_120px_rgba(34,211,238,0.15)] bg-gradient-to-br from-white/10 to-white/5"
                      : "glass border border-white/10 bg-gradient-to-br from-white/5 to-transparent"
                  }`}
                >
                  {/* Premium glow effects for active card */}
                  {pos === "active" && (
                    <>
                      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-full blur-[80px] animate-pulse" />
                      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-secondary/20 to-accent/15 rounded-full blur-[80px] animate-pulse delay-500" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 pointer-events-none rounded-[3rem]" />
                    </>
                  )}

                  <div className="relative z-10 flex justify-between items-start">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-500 ${
                        pos === "active"
                          ? "bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/40 text-primary shadow-lg shadow-primary/30"
                          : "bg-white/5 border-white/10 text-white/40"
                      }`}
                    >
                      <Award className={`w-8 h-8 ${pos === "active" ? "animate-pulse" : ""}`} />
                    </div>

                    {cert.verified && (
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-emerald-400/10 border border-emerald-500/30 shadow-lg shadow-emerald-500/20">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-[9px] uppercase tracking-widest font-bold text-emerald-400">Verified</span>
                      </div>
                    )}
                  </div>

                  <div className="relative z-10">
                    <h3 className={`text-xl font-display font-bold mb-1 leading-tight transition-all duration-500 ${pos === "active" ? "text-white" : "text-white/50"}`}>
                      {cert.name}
                    </h3>
                    <p className={`text-sm font-medium transition-colors duration-500 ${pos === "active" ? "text-slate-300" : "text-slate-600"}`}>
                      {cert.issuer}
                    </p>
                    <p className={`text-xs font-bold uppercase tracking-widest mt-1 transition-colors duration-500 ${pos === "active" ? "text-slate-500" : "text-slate-700"}`}>{cert.date}</p>
                  </div>

                  <div className="relative z-10 flex justify-between items-center border-t border-white/10 pt-5">
                    <span className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-colors duration-500 ${pos === "active" ? "text-slate-400" : "text-slate-700"}`}>
                      {cert.category}
                    </span>
                    {pos === "active" && (
                      <a
                        href={cert.link}
                        target="_blank"
                        className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-xs font-bold text-primary hover:text-white hover:border-primary/50 transition-all duration-300 uppercase tracking-widest shadow-lg shadow-primary/20 hover:shadow-primary/40"
                      >
                        <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        Open
                      </a>
                    )}
                  </div>

                  {/* Premium gloss effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.08] via-transparent to-transparent pointer-events-none rounded-[3rem]" />
                  <div className="absolute inset-0 rounded-[3rem] shadow-inner" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Premium navigation controls */}
        <div className="flex items-center justify-center gap-8 mt-12">
          <button
            onClick={() => go(-1)}
            suppressHydrationWarning
            className="group w-14 h-14 rounded-full glass-strong border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-primary/50 transition-all duration-300 active:scale-95 shadow-lg hover:shadow-primary/30"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-300" />
          </button>

          <div className="flex gap-3">
            {certificates.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                suppressHydrationWarning
                className={`transition-all duration-500 rounded-full ${
                  i === current
                    ? "w-10 h-3 bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/40"
                    : "w-3 h-3 bg-white/20 hover:bg-white/40 hover:scale-125"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            suppressHydrationWarning
            className="group w-14 h-14 rounded-full glass-strong border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-primary/50 transition-all duration-300 active:scale-95 shadow-lg hover:shadow-primary/30"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
