"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  Trophy,
  Calendar,
  MapPin,
  ArrowRight,
  Zap,
  Target,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { hackathons } from "@/lib/data";
import HackathonDetailModal from "@/components/hackathons/HackathonDetailModal";

function setSpotlightVars(el: HTMLElement, clientX: number, clientY: number) {
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--sx", `${clientX - rect.left}px`);
  el.style.setProperty("--sy", `${clientY - rect.top}px`);
  el.style.setProperty("--so", "1");
}

function clearSpotlightVars(el: HTMLElement) {
  el.style.setProperty("--so", "0");
}

export default function Hackathons() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = hackathons.find((h) => h.id === selectedId) ?? null;
  const rankIndex = selected ? hackathons.findIndex((h) => h.id === selected.id) : 0;

  const [hero, ...rest] = hackathons;
  const stats = useMemo(() => {
    const placements = hackathons.filter((h) =>
      /winner|runner|finalist|place/i.test(h.position)
    ).length;
    return [
      { label: "Events", value: String(hackathons.length), sub: "Documented" },
      { label: "Outcomes", value: String(placements), sub: "Wins & finals" },
      { label: "Format", value: "24–48h", sub: "Ship under pressure" },
    ];
  }, []);

  return (
    <section id="hackathons" className="section-padding relative overflow-hidden">
      {/* Premium background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.07),transparent_58%)]" />
        <div className="absolute -top-32 right-0 w-[720px] h-[480px] bg-primary/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[640px] h-[420px] bg-secondary/8 blur-[140px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.12] [mask-image:radial-gradient(ellipse_at_30%_0%,black,transparent_70%)] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-14">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/25 bg-secondary/10 mb-6"
            >
              <Zap className="w-4 h-4 text-secondary" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-secondary font-bold">
                Competitive engineering
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-5 leading-none">
              Hackathons that <span className="text-gradient-premium">prove velocity</span>
            </h2>
            <p className="text-slate-500 text-lg font-light leading-relaxed max-w-xl">
              Real outcomes under deadlines — the kind of signal recruiters scan for: ownership, clarity, and shipping
              when it counts.
            </p>
          </div>
          <Link
            href="/hackathons"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl glass border border-white/10 hover:border-secondary/30 hover:bg-white/5 transition-all text-white font-display font-bold tracking-widest text-xs uppercase shrink-0"
          >
            Full timeline
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-10 max-w-2xl">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl glass border border-white/10 p-4 sm:p-5 text-center sm:text-left"
            >
              <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.28em] text-slate-500 font-bold">{s.label}</div>
              <div className="mt-1 text-2xl sm:text-3xl font-display font-bold text-white">{s.value}</div>
              <div className="text-[10px] text-slate-500 mt-0.5 hidden sm:block">{s.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Bento: spotlight + compact cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
          {hero && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-7 group relative rounded-[2.5rem] overflow-hidden cursor-pointer glass-strong border border-white/10 hover:border-secondary/25 transition-colors"
              onClick={() => setSelectedId(hero.id)}
              onPointerMove={(e) => setSpotlightVars(e.currentTarget, e.clientX, e.clientY)}
              onPointerEnter={(e) => setSpotlightVars(e.currentTarget, e.clientX, e.clientY)}
              onPointerLeave={(e) => clearSpotlightVars(e.currentTarget)}
            >
              <div
                className="absolute inset-0 pointer-events-none z-[1] transition-opacity duration-300"
                style={{
                  opacity: "var(--so, 0)" as any,
                  background:
                    "radial-gradient(640px circle at var(--sx, 50%) var(--sy, 50%), rgba(34,211,238,0.14), transparent 55%)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10 opacity-80" />
              <div className="relative p-8 sm:p-10 min-h-[320px] sm:min-h-[360px] flex flex-col justify-between">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-4 py-2 rounded-full glass border-white/10 text-[10px] uppercase tracking-[0.24em] font-bold text-white">
                    Featured sprint
                  </span>
                  <span className="px-4 py-2 rounded-full bg-secondary/15 border border-secondary/25 text-[10px] uppercase tracking-[0.24em] font-bold text-secondary">
                    {hero.position}
                  </span>
                </div>
                <div>
                  <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4 leading-tight group-hover:text-white/95">
                    {hero.name}
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl line-clamp-3 sm:line-clamp-none">
                    {hero.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4 text-[11px] font-bold uppercase tracking-widest text-slate-500">
                    <span className="inline-flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-secondary/70" />
                      {hero.date}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-secondary/70" />
                      {hero.location}
                    </span>
                  </div>
                  <div className="mt-8 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-secondary">
                    Open case snapshot
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
              <div className="absolute top-0 -inset-full h-full w-1/2 z-20 pointer-events-none transform -skew-x-12 bg-gradient-to-r from-transparent via-white/8 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine" />
            </motion.div>
          )}

          <div className="lg:col-span-5 flex flex-col gap-5">
            {rest.map((hack, i) => (
              <motion.button
                key={hack.id}
                type="button"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.08 * (i + 1) }}
                onClick={() => setSelectedId(hack.id)}
                suppressHydrationWarning
                className="group text-left w-full rounded-[2rem] glass border border-white/10 hover:border-primary/25 p-6 sm:p-7 transition-all hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-[10px] uppercase tracking-[0.28em] text-primary font-bold truncate">
                        {hack.position}
                      </span>
                    </div>
                    <h4 className="text-xl font-display font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors">
                      {hack.name}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{hack.description}</p>
                    <div className="mt-4 flex flex-wrap gap-3 text-[10px] font-bold uppercase tracking-widest text-slate-600">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {hack.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {hack.location}
                      </span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-white/20 transition-colors shrink-0">
                    <Target className="w-4 h-4" />
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
    </section>
  );
}
