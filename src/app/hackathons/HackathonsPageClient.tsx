"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  Trophy,
  Calendar,
  MapPin,
  ArrowLeft,
  ChevronRight,
  Zap,
} from "lucide-react";
import { SmoothLink } from "@/components/ui/SmoothNavigation";
import { hackathons } from "@/lib/data";
import HackathonDetailModal from "@/components/hackathons/HackathonDetailModal";

export default function HackathonsPageClient() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = hackathons.find((h) => h.id === selectedId) ?? null;
  const rankIndex = selected ? hackathons.findIndex((h) => h.id === selected.id) : 0;

  const headlineStats = useMemo(
    () => [
      { label: "Hackathons", value: String(hackathons.length) },
      { label: "Wins", value: String(hackathons.filter(h => h.position.includes("Winner")).length) },
      { label: "Finalists", value: String(hackathons.filter(h => h.position.includes("Finalist")).length) },
    ],
    []
  );

  return (
    <div className="min-h-screen pt-28 sm:pt-32 pb-24 relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-secondary/8 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[500px] bg-primary/8 rounded-full blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
      </div>

      <div className="container-custom relative z-10">
        <SmoothLink
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors mb-10 sm:mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </SmoothLink>

        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/25 bg-secondary/10 mb-6">
            <Zap className="w-4 h-4 text-secondary" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-secondary font-bold">
              Timeline of execution
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-6 leading-[0.98]">
            The <span className="text-gradient-premium">Hackathon</span> Journey
          </h1>
          <p className="text-slate-500 text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
            A chronological timeline of my competitive builds, technical challenges, and documented outcomes.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-14 sm:mb-20">
          {headlineStats.map((s) => (
            <div
              key={s.label}
              className="px-6 py-4 rounded-2xl glass border border-white/10 min-w-[140px]"
            >
              <div className="text-[9px] uppercase tracking-[0.3em] text-slate-500 font-bold mb-1">{s.label}</div>
              <div className="text-2xl font-display font-bold text-white">{s.value}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto sm:mx-0">
          <div className="absolute left-[19px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-secondary/80 via-white/10 to-transparent sm:left-[23px]" />

          <div className="space-y-10 sm:space-y-12">
            {hackathons.map((hack, i) => (
              <motion.div
                key={hack.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative pl-12 sm:pl-16"
              >
                {/* Year indicator for timeline if date changes significantly - simplified here */}
                <div className="absolute left-0 top-6 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#0a1020] border border-white/10 flex items-center justify-center shadow-lg shadow-black/30 group-hover:border-secondary/40 group-hover:bg-secondary/10 transition-all z-10">
                  <Trophy className={`w-4 h-4 sm:w-5 sm:h-5 ${hack.position.includes("Winner") ? "text-amber-400" : "text-secondary"}`} />
                </div>

                <motion.button
                  onClick={() => setSelectedId(hack.id)}
                  className="w-full text-left group"
                >
                  <div className="rounded-[2rem] glass border border-white/10 p-6 sm:p-8 hover:border-secondary/30 hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden">
                    {/* Subtle glow for winners */}
                    {hack.position.includes("Winner") && (
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/10 blur-3xl rounded-full" />
                    )}
                    
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border ${
                            hack.position.includes("Winner") 
                              ? "bg-amber-500/10 border-amber-500/20 text-amber-400" 
                              : "bg-secondary/10 border-secondary/20 text-secondary"
                          }`}>
                            {hack.position}
                          </span>
                          <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500 flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5" />
                            {hack.date}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3 group-hover:text-secondary transition-colors duration-300">
                          {hack.name}
                        </h3>
                        
                        <p className="text-slate-400 text-base leading-relaxed mb-6 max-w-2xl line-clamp-3">
                          {hack.description}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-6">
                          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                            <MapPin className="w-3.5 h-3.5 text-secondary/60" />
                            {hack.location}
                          </div>
                          
                          {hack.certificate !== "Not released yet" ? (
                            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                              <Trophy className="w-3.5 h-3.5" />
                              Certificate Available
                            </div>
                          ) : (
                            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-600">
                              <Trophy className="w-3.5 h-3.5" />
                              Not released yet
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="self-end sm:self-center">
                        <div className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-secondary/50 group-hover:bg-secondary/10 transition-all duration-300">
                          <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <HackathonDetailModal
        open={Boolean(selectedId && selected)}
        item={selected}
        rankIndex={rankIndex}
        onClose={() => setSelectedId(null)}
      />
    </div>
  );
}
