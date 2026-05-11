"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { useSmoothNavigation } from "@/components/ui/SmoothNavigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Hackathons", href: "/hackathons" },
  { name: "Certificates", href: "/certificates" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { smoothNavigate } = useSmoothNavigation();
  const { scrollY } = useScroll();

  useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (mounted) {
      setIsScrolled(latest > 50);
    }
  });

  const handleSmoothScroll = (href: string) => {
    smoothNavigate(href);
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          mounted && isScrolled
            ? "py-3 glass-strong shadow-lg shadow-black/20"
            : mounted
            ? "py-6 bg-transparent"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleSmoothScroll("/")} className="relative group flex items-center gap-2 bg-transparent border-none cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden">
               <img src="/Images/logo.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleSmoothScroll(link.href)}
                className="relative px-5 py-2 text-[11px] uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors duration-300 group font-bold bg-transparent border-none cursor-pointer"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-primary group-hover:w-3/4 transition-all duration-300" />
              </button>
            ))}
            <a
              href="/Aashish_Tejwani_Resume.pdf"
              download
              className="ml-6 px-6 py-3 text-[11px] uppercase tracking-[0.2em] font-bold rounded-xl bg-primary text-white hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
            >
              Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-3 rounded-xl glass text-slate-400 hover:text-white transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-4 right-4 z-[101] glass-strong rounded-3xl p-8 lg:hidden border border-white/10 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleSmoothScroll(link.href)}
                  className="px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-white hover:bg-white/5 rounded-2xl transition-all text-left bg-transparent border-none cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
              <a
                href="/Aashish_Tejwani_Resume.pdf"
                download
                className="mt-4 px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] text-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
