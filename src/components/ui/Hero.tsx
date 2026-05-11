"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Download, Sparkles, Github, Linkedin, Twitter, Code2, Terminal, Globe, Mail } from "lucide-react";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiGithub } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { BiFontSize } from "react-icons/bi";

const stats = [
  { value: 20, suffix: "+", label: "Major Projects" },
  { value: 13, suffix: "+", label: "Hackathons" },
  { value: 9.5, suffix: "", label: "CGPA" },
  { value: 100, suffix: "%", label: "Accuracy" },
];

function AnimatedCounter({ target, suffix, delay }: { target: number; suffix: string; delay: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 2000, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(target * easedProgress);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    const timeout = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationFrame);
    };
  }, [target, delay]);

  return (
    <span>
      {target % 1 === 0 ? Math.floor(count) : count.toFixed(2)}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.12),transparent_60%)]" />
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-[0.04] grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* Ambient glow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/6 rounded-full blur-[110px] animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/6 rounded-full blur-[130px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-[18%] right-[12%] w-72 h-72 bg-accent/4 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <motion.div 
        style={{ opacity: isMobile || shouldReduceMotion ? 1 : opacity }}
        className="container-custom relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left: Copy */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border-white/10"
            >
              <span className="w-9 h-9 rounded-full flex items-center justify-center bg-primary/10 border border-primary/20">
                <Sparkles className="w-4 h-4 text-primary" />
              </span>
              <span className="text-[9px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.28em] text-slate-400 font-bold whitespace-nowrap">
                Design-led engineering • Next.js • Motion
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-7 text-3xl sm:text-4xl md:text-5xl lg:text-[82px] font-display font-bold tracking-tighter leading-[0.95]"
            >
              <span className="text-white">Aashish Tejwani</span>
              <br />
              <span className="text-gradient-premium text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium">Full Stack Developer</span>
              <br />
                            <span className="text-primary"></span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.22 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Ambitious Computer Science undergraduate with strong foundations in C, C++, JavaScript, and Data Structures & Algorithms, 
              complemented by hands-on experience in full-stack development using React, Node.js, MongoDB, and MySQL.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.34 }}
              className="mt-9 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <a
                href="/Aashish_Tejwani_Resume.pdf"
                download
                suppressHydrationWarning
                className="group relative w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 rounded-2xl font-display font-bold text-sm sm:text-base overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_70px_rgba(139,92,246,0.28)] glow-on-hover"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x" />
                <div className="relative flex items-center justify-center gap-3 text-white">
                  <Download className="w-5 h-5" />
                  Download Resume
                </div>
              </a>

              <a
                href="#projects"
                className="group w-full sm:w-auto px-10 py-5 rounded-2xl glass border-white/10 text-white font-display font-bold text-base hover:bg-white/10 transition-all hover:-translate-y-0.5 hover-lift"
              >
                <span className="inline-flex items-center justify-center gap-3">
                  <Code2 className="w-5 h-5 text-primary" />
                  View Projects
                </span>
              </a>

              <div className="flex items-center gap-3 sm:ml-2">
                {[
                  { Icon: Github, href: "#" },
                  { Icon: Linkedin, href: "#" },
                  { Icon: Twitter, href: "#" },
                  { Icon: Mail, href: "mailto:aashishtejwani.connect@gmail.com" },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    suppressHydrationWarning
                    className="w-12 h-12 rounded-2xl glass border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-0.5 magnetic glow-on-hover"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.55 }}
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-2"
            >
              {[
                { label: "Next.js", Icon: SiNextdotjs, cls: "text-white/80" },
                { label: "React", Icon: SiReact, cls: "text-[#61dafb]/80" },
                { label: "TypeScript", Icon: SiTypescript, cls: "text-[#3178c6]/80" },
                { label: "Tailwind", Icon: SiTailwindcss, cls: "text-[#06b6d4]/80" },
                { label: "Node", Icon: SiNodedotjs, cls: "text-[#68a063]/70" },
                { label: "VS Code", Icon: VscVscode, cls: "text-[#22a6f2]/75" },
              ].map(({ label, Icon, cls }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-[11px] uppercase tracking-[0.22em] font-bold text-slate-400 hover:text-slate-200 transition-all hover-lift stagger-item"
                >
                  <Icon className={`text-[16px] ${cls}`} />
                  {label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Showcase */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-[2.5rem] glass-strong border-white/10 overflow-hidden hover-lift"
            >
              {/* Enhanced glow effects */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/15 blur-[120px] animate-pulse" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-secondary/12 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

              <div className="relative p-8 sm:p-10">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">
                      Currently shipping
                    </div>
                    <div className="mt-2 text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                      Clean UI. Fast apps. Smooth motion.
                    </div>
                    <p className="mt-3 text-slate-400 leading-relaxed text-sm sm:text-base">
                      A modern, glassy aesthetic with real-world performance — built with Next.js, Tailwind, and
                      Framer Motion.
                    </p>
                  </div>

                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-primary/10 border border-primary/20">
                      <Terminal className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>

                {/* mini terminal */}
                <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-400/60" />
                      <span className="w-2 h-2 rounded-full bg-yellow-400/60" />
                      <span className="w-2 h-2 rounded-full bg-green-400/60" />
                      <span className="ml-2 text-[10px] uppercase tracking-[0.25em] text-slate-500 font-bold">
                        terminal
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-600 font-bold tracking-widest">AASHISH</span>
                  </div>
                  <div className="px-4 py-4 font-mono text-[12px] leading-relaxed text-slate-300">
                    <div className="text-slate-500">$</div>{" "}
                    <span className="text-slate-400">npm</span> run dev
                    <div className="mt-2 text-emerald-300/80">✓ ready in 1.2s • turbo • localhost:3000</div>
                    <div className="mt-2 text-slate-400">
                      <span className="text-primary/80">→</span> pixel-perfect UI + real performance
                    </div>
                  </div>
                </div>

                {/* stats */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {stats.map((stat, i) => (
                    <div key={stat.label} className="rounded-2xl glass border-white/10 p-5 group">
                      <div className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-primary transition-colors">
                        <AnimatedCounter target={stat.value} suffix={stat.suffix} delay={1.1 + i * 0.08} />
                      </div>
                      <div className="mt-1 text-[10px] uppercase tracking-[0.35em] text-slate-500 font-bold">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* tiny footer row */}
                <div className="mt-7 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-2">
                    <SiGithub className="text-white/40" />
                    Open-source friendly
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Globe className="w-4 h-4 text-secondary/60" />
                    Responsive by default
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] uppercase tracking-[0.6em] text-slate-600 font-bold">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-20 bg-gradient-to-b from-primary/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
