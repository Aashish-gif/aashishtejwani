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
      { label: "Latest", value: hackathons[0]?.date ?? "—" },
      { label: "Scope", value: "National" },
    ],
    []
  );

  return (
    <div className="min-h-screen pt-28 sm:pt-32 pb-24 relative overflow-hidden">
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
              Proof of execution
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-6 leading-[0.98]">
            The <span className="text-gradient-premium">Hackathon</span> arc
          </h1>
          <p className="text-slate-500 text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
            A chronological record of high-intensity builds — outcomes, locations, and artifacts recruiters can verify
            in seconds.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-14 sm:mb-16">
          {headlineStats.map((s) => (
            <div
              key={s.label}
              className="px-5 py-3 rounded-2xl glass border border-white/10 min-w-[120px]"
            >
              <div className="text-[9px] uppercase tracking-[0.3em] text-slate-500 font-bold">{s.label}</div>
              <div className="mt-1 text-lg font-display font-bold text-white">{s.value}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl">
          <div className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-secondary/50 via-white/10 to-transparent sm:left-[23px]" />

          <div className="space-y-4 sm:space-y-5">
            {hackathons.map((hack, i) => (
              <motion.button
                key={hack.id}
                type="button"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setSelectedId(hack.id)}
                suppressHydrationWarning
                className="group relative w-full text-left pl-12 sm:pl-14"
              >
                <div className="absolute left-0 top-5 sm:top-6 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#0a1020] border border-white/10 flex items-center justify-center shadow-lg shadow-black/30 group-hover:border-secondary/40 group-hover:bg-secondary/10 transition-all z-10">
                  <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                </div>

                <div className="rounded-[1.75rem] sm:rounded-[2rem] glass border border-white/10 p-5 sm:p-7 hover:border-secondary/25 hover:bg-white/[0.03] transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-[10px] uppercase tracking-[0.28em] font-bold text-secondary">
                          {hack.position}
                        </span>
                        <span className="text-slate-600 hidden sm:inline">·</span>
                        <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {hack.date}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                        {hack.name}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 sm:line-clamp-3 max-w-2xl">
                        {hack.description}
                      </p>
                      <div className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-600">
                        <MapPin className="w-3 h-3" />
                        {hack.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-secondary transition-colors shrink-0">
                      <span className="hidden sm:inline">Details</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.button>
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
