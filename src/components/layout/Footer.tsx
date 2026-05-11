"use client";

import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

export default function Footer() {
  const [year, setYear] = useState<number | string>("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer ref={ref} className="relative border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(139,92,246,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container-custom relative py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-10"
        >
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="font-display text-3xl font-bold text-white">
              TAJ<span className="text-primary">.</span>
            </span>
            <p className="text-slate-500 max-w-xs text-sm text-center md:text-left leading-relaxed">
              Crafting digital experiences with precision and passion.
              Let&apos;s build something extraordinary together.
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:border-primary/30 hover:bg-primary/5 hover:text-primary text-slate-500 transition-all duration-300"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent my-10" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600 tracking-wider">
            &copy; {year} TAJ. All rights reserved.
          </p>
          <p className="text-xs text-slate-700 tracking-wider">
            Built with Next.js 15 &middot; Framer Motion &middot; Lenis
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            suppressHydrationWarning
            className="p-2 rounded-full border border-white/5 hover:border-primary/30 hover:text-primary text-slate-600 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
