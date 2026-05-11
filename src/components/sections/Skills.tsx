"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython,
  SiMongodb, SiPostgresql, SiDocker, SiGit, SiFigma, SiFirebase,
  SiRedis, SiGraphql, SiTensorflow, SiFlutter,
} from "react-icons/si";

type Skill = { name: string; Icon: any; color: string; level: number };

function setSpotlightVars(el: HTMLElement, clientX: number, clientY: number) {
  const rect = el.getBoundingClientRect();
  const x = clientX - rect.left;
  const y = clientY - rect.top;
  el.style.setProperty("--sx", `${x}px`);
  el.style.setProperty("--sy", `${y}px`);
  el.style.setProperty("--so", "1");
}

function clearSpotlightVars(el: HTMLElement) {
  el.style.setProperty("--so", "0");
}

function SignalLine() {
  return (
    <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 overflow-hidden">
      <div className="px-4 py-3 border-b border-white/10 bg-white/[0.02] flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.35em] text-slate-500 font-bold">signal</span>
        <span className="text-[10px] uppercase tracking-[0.35em] text-slate-600 font-bold">stack-dna</span>
      </div>
      <div className="px-4 py-4">
        <svg viewBox="0 0 600 60" className="w-full h-[44px]">
          <defs>
            <linearGradient id="skillSignal" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(124,58,237,0.0)" />
              <stop offset="20%" stopColor="rgba(124,58,237,0.75)" />
              <stop offset="55%" stopColor="rgba(34,211,238,0.65)" />
              <stop offset="80%" stopColor="rgba(251,113,133,0.6)" />
              <stop offset="100%" stopColor="rgba(251,113,133,0.0)" />
            </linearGradient>
          </defs>

          {/* faint baseline */}
          <path
            d="M0 30 C 60 30, 90 30, 120 30 S 210 30, 240 30 S 330 30, 360 30 S 450 30, 480 30 S 570 30, 600 30"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="2"
          />

          {/* animated signal */}
          <motion.path
            d="M0 30 C 60 12, 90 48, 120 30 S 210 12, 240 30 S 330 48, 360 30 S 450 12, 480 30 S 570 48, 600 30"
            fill="none"
            stroke="url(#skillSignal)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="8 14"
            initial={{ strokeDashoffset: 0, opacity: 0.85 }}
            animate={{ strokeDashoffset: -220 }}
            transition={{ duration: 5.5, ease: "linear", repeat: Infinity }}
          />
        </svg>
      </div>
    </div>
  );
}

const coreStack: Skill[] = [
  { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff", level: 90 },
  { name: "React", Icon: SiReact, color: "#61dafb", level: 92 },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178c6", level: 88 },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06b6d4", level: 95 },
  { name: "Node.js", Icon: SiNodedotjs, color: "#68a063", level: 85 },
  { name: "Git", Icon: SiGit, color: "#f05032", level: 93 },
];

const otherSkills: Skill[] = [
  { name: "Python", Icon: SiPython, color: "#3776ab", level: 80 },
  { name: "MongoDB", Icon: SiMongodb, color: "#47a248", level: 82 },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791", level: 75 },
  { name: "Docker", Icon: SiDocker, color: "#2496ed", level: 70 },
  { name: "Figma", Icon: SiFigma, color: "#f24e1e", level: 78 },
  { name: "Firebase", Icon: SiFirebase, color: "#ffca28", level: 80 },
  { name: "Redis", Icon: SiRedis, color: "#dc382d", level: 65 },
  { name: "GraphQL", Icon: SiGraphql, color: "#e535ab", level: 72 },
  { name: "TensorFlow", Icon: SiTensorflow, color: "#ff6f00", level: 60 },
  { name: "Flutter", Icon: SiFlutter, color: "#54c5f8", level: 68 },
];

export default function Skills() {
  const coreDetails = useMemo(() => {
    return {
      "Next.js": {
        title: "Shipping-grade app foundation",
        points: ["App Router architecture", "SEO + static rendering where it matters", "Route-level performance hygiene"],
      },
      React: {
        title: "Reusable UI systems",
        points: ["Component-driven UI", "State patterns that stay readable", "Animations that clarify interaction"],
      },
      TypeScript: {
        title: "Confidence at scale",
        points: ["Type-safe data + components", "Fewer runtime surprises", "Cleaner refactors"],
      },
      Tailwind: {
        title: "Premium UI — fast",
        points: ["Consistent spacing & typography", "Design tokens via utilities", "Rapid iteration without CSS drift"],
      },
      "Node.js": {
        title: "Full-stack features",
        points: ["API + integrations", "Auth & data flows", "Practical backend patterns"],
      },
      Git: {
        title: "Professional workflow",
        points: ["Clean commits & reviews", "Branch discipline", "Release-friendly collaboration"],
      },
    } as const;
  }, []);

  const [selected, setSelected] = useState<Skill>(coreStack[0]);
  const selectedInfo = (coreDetails as any)[selected.name] as { title: string; points: string[] } | undefined;

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.06),transparent_60%)]" />
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[820px] h-[460px] bg-secondary/10 blur-[150px] rounded-full" />
        <div className="absolute -bottom-36 right-0 w-[780px] h-[520px] bg-accent/8 blur-[160px] rounded-full" />
        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(ellipse_at_top,black,transparent_65%)] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/20 bg-secondary/5 mb-6"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] text-secondary font-bold">Tech Arsenal</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Skills that <span className="text-gradient-premium">ship</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            A focused core stack for building fast, polished products — plus the tools I use when projects demand more.
          </p>
        </div>

        {/* Core stack */}
        <div className="rounded-[2.75rem] glass-strong border-white/10 p-7 sm:p-10 overflow-hidden relative">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-primary/12 blur-[140px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-secondary/10 blur-[140px] rounded-full" />

          <div className="relative">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
              <div>
                <div className="text-[10px] uppercase tracking-[0.35em] text-slate-500 font-bold">Core stack</div>
                <div className="mt-2 text-white font-display font-bold text-2xl md:text-3xl leading-tight">
                  The tools I reach for first
                </div>
              </div>
              <div className="text-slate-500 text-sm max-w-md leading-relaxed">
                Optimized for shipping production-ready UI fast — without compromising maintainability.
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-6 items-start">
              {/* cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {coreStack.map((skill, i) => {
                  const isActive = selected.name === skill.name;
                  return (
                    <motion.button
                      key={skill.name}
                      type="button"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: i * 0.05 }}
                      whileHover={{ y: -4 }}
                      onClick={() => setSelected(skill)}
                      onPointerMove={(e) => setSpotlightVars(e.currentTarget, e.clientX, e.clientY)}
                      onPointerEnter={(e) => setSpotlightVars(e.currentTarget, e.clientX, e.clientY)}
                      onPointerLeave={(e) => clearSpotlightVars(e.currentTarget)}
                      className={`group relative rounded-3xl text-left glass border transition-all overflow-hidden ${
                        isActive ? "border-primary/40 shadow-[0_0_40px_rgba(124,58,237,0.15)]" : "border-white/10 hover:border-white/20"
                      }`}
                    >
                      {/* spotlight-follow */}
                      <div
                        className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300"
                        style={{
                          opacity: "var(--so, 0)" as any,
                          background:
                            "radial-gradient(520px circle at var(--sx, 50%) var(--sy, 50%), rgba(255,255,255,0.10), transparent 45%)",
                        }}
                      />
                      <div
                        className={`absolute inset-0 transition-opacity duration-700 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                        style={{ background: `radial-gradient(circle at 30% 0%, ${skill.color}1f 0%, transparent 70%)` }}
                      />
                      <div className="relative p-6">
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-4 min-w-0">
                            <div
                              className="w-12 h-12 rounded-2xl flex items-center justify-center"
                              style={{ backgroundColor: `${skill.color}12`, border: `1px solid ${skill.color}25` }}
                            >
                              <skill.Icon size={22} style={{ color: skill.color }} />
                            </div>
                            <div className="min-w-0">
                              <div className="text-white font-display font-bold truncate">{skill.name}</div>
                              <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">
                                {skill.level}% confidence
                              </div>
                            </div>
                          </div>
                          <div className={`text-[10px] font-bold transition-colors ${isActive ? "text-primary" : "text-slate-500 group-hover:text-slate-400"}`}>
                            DNA
                          </div>
                        </div>

                        <div className="mt-5 w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.1, delay: 0.15 + i * 0.05, ease: "easeOut" }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: skill.color }}
                          />
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* stack dna panel */}
              <div className="lg:col-span-5">
                <div className="relative rounded-[2.5rem] glass border-white/10 overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/14 blur-[120px] rounded-full" />
                  <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-secondary/10 blur-[120px] rounded-full" />
                  <div className="relative p-8">
                    <div className="flex items-start justify-between gap-6">
                      <div className="min-w-0">
                        <div className="text-[10px] uppercase tracking-[0.35em] text-slate-500 font-bold">Stack DNA</div>
                        <div className="mt-2 text-white font-display font-bold text-2xl leading-tight truncate">
                          {selected.name}
                        </div>
                        <div className="mt-2 text-slate-500 text-sm leading-relaxed">
                          {selectedInfo?.title ?? "How I use this in real projects."}
                        </div>
                      </div>
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${selected.color}14`, border: `1px solid ${selected.color}2a` }}
                      >
                        <selected.Icon size={26} style={{ color: selected.color }} />
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      {(selectedInfo?.points ?? []).map((t) => (
                        <div key={t} className="flex items-start gap-3">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary/70" />
                          <span className="text-slate-400 leading-relaxed">{t}</span>
                        </div>
                      ))}
                    </div>

                    <SignalLine />

                    <div className="mt-7 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                      {coreStack.map((s) => {
                        const active = s.name === selected.name;
                        return (
                          <button
                            key={s.name}
                            type="button"
                            onClick={() => setSelected(s)}
                            suppressHydrationWarning
                            className={`px-4 py-2 rounded-full border text-[10px] uppercase tracking-[0.28em] font-bold transition-colors ${
                              active
                                ? "bg-primary/15 border-primary/30 text-white"
                                : "bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10"
                            }`}
                          >
                            {s.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Others */}
        <div className="mt-10">
          <div className="flex items-end justify-between gap-6 mb-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.35em] text-slate-500 font-bold">Also use</div>
              <div className="mt-2 text-white font-display font-bold text-2xl leading-tight">When the project needs it</div>
            </div>
            <div className="hidden md:block text-slate-500 text-sm max-w-md leading-relaxed text-right">
              Databases, infra, AI tooling — chosen based on constraints, not hype.
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {otherSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                whileHover={{ y: -4 }}
                className="group relative p-5 rounded-3xl glass border-white/10 hover:border-white/20 transition-all overflow-hidden cursor-default"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${skill.color}16 0%, transparent 70%)` }}
                />

                <div className="relative flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${skill.color}12`, border: `1px solid ${skill.color}25` }}
                  >
                    <skill.Icon size={20} style={{ color: skill.color }} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-white font-display font-bold text-sm truncate">{skill.name}</div>
                    <div className="mt-2 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.1, delay: 0.1 + i * 0.02, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
