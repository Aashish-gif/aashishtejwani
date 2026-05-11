"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function About() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <section id="about" ref={container} className="section-padding relative overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.06),transparent_55%)]" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[420px] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center relative">

          {/* Photo Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-[2.75rem] overflow-hidden glass-strong border-white/10">
              {/* Glow border */}
              <div className="absolute -inset-[1px] rounded-[2.75rem] bg-gradient-to-b from-primary/30 via-transparent to-accent/20 z-10 pointer-events-none" />

              {/* Photo */}
              <div className="relative aspect-[4/5] w-full">
                <img
                  src="/Images/Aashish Tejwani.jpg"
                  alt="Aashish Tejwani"
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(124,58,237,0.22),transparent_55%)]" />
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-10"
            >
              <span className="text-[11px] uppercase tracking-[0.24em] text-primary font-bold">About</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
              About <span className="text-gradient-premium">Me</span>
            </h2>

            <div className="mt-6 space-y-5">
              <p className="text-slate-400 text-lg leading-relaxed font-light">
                I’m a full-stack developer focused on building modern, high-performance web applications with clean UI
                systems and thoughtful user experience.
              </p>
              <p className="text-slate-500 leading-relaxed">
                I care about structure: consistent components, readable code, and design decisions that make the product
                feel premium — not “template”.
              </p>
            </div>

            <div className="mt-8 rounded-[2.25rem] glass border-white/10 p-7">
              <div className="text-[10px] uppercase tracking-[0.35em] text-slate-500 font-bold">What I do</div>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                {[
                  "Front-end engineering with clean UI systems",
                  "Full-stack features (APIs, DB, integrations)",
                  "Motion & micro-interactions (subtle, useful)",
                  "Performance + responsive polish",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary/80 mt-0.5" />
                    <span className="text-slate-400 leading-relaxed">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] font-bold text-white hover:text-primary transition-colors"
            >
              Let&apos;s build something
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
