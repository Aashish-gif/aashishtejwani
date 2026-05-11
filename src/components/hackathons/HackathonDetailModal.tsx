"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import {
  Trophy,
  Calendar,
  MapPin,
  X,
  Award,
  Camera,
  ExternalLink,
  Sparkles,
  BadgeCheck,
  Timer,
  Users,
} from "lucide-react";

export type HackathonItem = {
  id: string;
  name: string;
  position: string;
  date: string;
  description: string;
  certificate: string;
  photos: string[];
  location: string;
  projectLink: string;
};

type RankTier = "gold" | "silver" | "bronze" | "other";

const tierStyles: Record<
  RankTier,
  { ring: string; glow: string; label: string; iconBg: string }
> = {
  gold: {
    ring: "from-amber-400/50 via-yellow-300/30 to-amber-600/20",
    glow: "bg-amber-500/20",
    label: "Top placement",
    iconBg: "bg-gradient-to-br from-amber-400/30 to-amber-700/20 border-amber-400/30",
  },
  silver: {
    ring: "from-slate-200/40 via-slate-400/25 to-slate-600/15",
    glow: "bg-slate-400/15",
    label: "Podium finish",
    iconBg: "bg-gradient-to-br from-slate-300/25 to-slate-600/20 border-white/20",
  },
  bronze: {
    ring: "from-amber-800/40 via-orange-700/25 to-amber-950/15",
    glow: "bg-orange-800/15",
    label: "Strong finish",
    iconBg: "bg-gradient-to-br from-orange-700/25 to-amber-900/20 border-orange-600/25",
  },
  other: {
    ring: "from-primary/35 via-secondary/20 to-accent/15",
    glow: "bg-primary/15",
    label: "Competition",
    iconBg: "bg-primary/15 border-primary/25",
  },
};

function rankFromIndex(i: number): RankTier {
  if (i === 0) return "gold";
  if (i === 1) return "silver";
  if (i === 2) return "bronze";
  return "other";
}

type Props = {
  open: boolean;
  item: HackathonItem | null;
  rankIndex: number;
  onClose: () => void;
};

const contentVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.06 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
} as const;

export default function HackathonDetailModal({ open, item, rankIndex, onClose }: Props) {
  const tier = item ? rankFromIndex(rankIndex) : "other";
  const s = tierStyles[tier];

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && item && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/88 backdrop-blur-xl cursor-pointer"
            aria-hidden
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="hackathon-modal-title"
            initial={{ opacity: 0, scale: 0.96, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 28 }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.45 }}
            className="fixed inset-4 sm:inset-8 lg:inset-[4.5rem] z-[60] rounded-[2.75rem] sm:rounded-[3rem] p-[1px] bg-gradient-to-br from-secondary/50 via-primary/30 to-accent/40 animate-gradient-x shadow-[0_0_140px_rgba(0,0,0,0.85)]"
          >
            <div className="relative flex flex-col lg:flex-row overflow-hidden rounded-[2.65rem] sm:rounded-[2.92rem] bg-[#050a12] min-h-0 max-h-[92vh] lg:max-h-[88vh]">
            <button
              type="button"
              onClick={onClose}
              suppressHydrationWarning
              className="absolute top-5 right-5 z-30 w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left — story */}
            <div className="relative flex-1 p-8 sm:p-12 lg:p-14 flex flex-col justify-center overflow-y-auto lg:max-h-[90vh]">
              <div className={`absolute -top-24 -left-24 w-80 h-80 rounded-full blur-[110px] ${s.glow}`} />

              <motion.div
                className="relative"
                variants={contentVariants}
                initial="hidden"
                animate="show"
                key={item.id}
              >
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-white/10 mb-5">
                  <Sparkles className="w-3.5 h-3.5 text-secondary" />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold">
                    Recruiter snapshot
                  </span>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-5">
                  {[
                    { Icon: Timer, text: "Sprint conditions" },
                    { Icon: Users, text: "Team execution" },
                    { Icon: BadgeCheck, text: "Verifiable outcome" },
                  ].map(({ Icon, text }) => (
                    <span
                      key={text}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[10px] uppercase tracking-[0.18em] font-bold text-slate-400"
                    >
                      <Icon className="w-3.5 h-3.5 text-secondary/80" />
                      {text}
                    </span>
                  ))}
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-5">
                  <span
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[10px] font-bold uppercase tracking-[0.22em] text-white ${s.iconBg}`}
                  >
                    <Trophy className="w-4 h-4 text-secondary" />
                    {item.position}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.28em] text-slate-500 font-bold">{s.label}</span>
                </motion.div>

                <motion.h2
                  variants={itemVariants}
                  id="hackathon-modal-title"
                  className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-7 leading-[1.05] pr-12"
                >
                  {item.name}
                </motion.h2>

                <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                  {[
                    { label: "When", value: item.date, Icon: Calendar },
                    { label: "Where", value: item.location, Icon: MapPin },
                    { label: "Outcome", value: item.position, Icon: Trophy },
                  ].map(({ label, value, Icon }) => (
                    <div
                      key={label}
                      className="rounded-2xl glass border border-white/10 p-4 hover:border-white/15 transition-colors"
                    >
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-slate-500 font-bold mb-2">
                        <Icon className="w-3.5 h-3.5 text-secondary/80" />
                        {label}
                      </div>
                      <div className="text-sm font-display font-bold text-white leading-snug">{value}</div>
                    </div>
                  ))}
                </motion.div>

                <motion.p variants={itemVariants} className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 font-light border-l-2 border-secondary/50 pl-5 bg-white/[0.02] py-4 rounded-r-2xl">
                  {item.description}
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-3 mb-2">
                  <a
                    href={item.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-secondary text-white font-display font-bold tracking-widest text-xs uppercase hover:scale-[1.02] transition-transform shadow-lg shadow-secondary/25"
                  >
                    <Award className="w-4 h-4" />
                    Verify certificate
                  </a>
                  {item.projectLink && item.projectLink !== "#" && (
                    <a
                      href={item.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass border border-white/10 text-white font-display font-bold tracking-widest text-xs uppercase hover:bg-white/10 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View build / repo
                    </a>
                  )}
                </motion.div>

                <motion.p variants={itemVariants} className="text-[10px] uppercase tracking-[0.35em] text-slate-600 font-bold">
                  Press Esc to close
                </motion.p>
              </motion.div>
            </div>

            {/* Right — visual */}
            <div className="relative lg:w-[44%] min-h-[220px] lg:min-h-0 border-t lg:border-t-0 lg:border-l border-white/10 overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-50 scale-105 motion-safe:animate-[pulse_8s_ease-in-out_infinite]" />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-[#050a12] via-[#050a12]/78 to-transparent" />
              <motion.div
                className="absolute inset-0 opacity-30"
                animate={{ opacity: [0.2, 0.35, 0.2] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  background:
                    "radial-gradient(ellipse at 30% 20%, rgba(124,58,237,0.35), transparent 55%), radial-gradient(ellipse at 80% 60%, rgba(34,211,238,0.2), transparent 45%)",
                }}
              />

              <div className="relative z-10 h-full flex flex-col justify-end p-8 sm:p-10">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-3xl glass-strong border border-white/10 p-6 shadow-[0_0_40px_rgba(0,0,0,0.35)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-secondary/20 border border-secondary/30 flex items-center justify-center text-secondary shrink-0">
                      <Camera className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-white font-display font-bold text-sm uppercase tracking-widest">
                        Event proof
                      </div>
                      <div className="text-slate-400 text-xs mt-1 leading-relaxed">
                        Certificate + photos document delivery under time pressure — what hiring teams look for.
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${s.ring} opacity-70 z-20`} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export { rankFromIndex };
