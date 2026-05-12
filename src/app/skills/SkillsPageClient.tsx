"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ArrowRight, Terminal, Zap, Code, Database, Globe, Palette, Server, Shield } from "lucide-react";
import { SmoothLink } from "@/components/ui/SmoothNavigation";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython,
  SiMongodb, SiPostgresql, SiDocker, SiGit, SiFigma, SiFirebase,
  SiRedis, SiGraphql, SiTensorflow, SiFlutter, SiVite,
  SiJest, SiWebpack, SiExpress, SiPrisma, SiMaterialdesign, SiBootstrap,
  SiCss, SiHtml5, SiJavascript, SiRedux, SiMysql, SiKubernetes,
  SiJenkins, SiNginx, SiUbuntu, SiSlack, SiNotion, SiGithub
} from "react-icons/si";

const skillCategories = [
  {
    name: "Frontend Development",
    icon: Globe,
    color: "from-blue-500/20 to-cyan-500/10",
    skills: [
      { name: "HTML", icon: SiHtml5, level: 95, color: "#e34f26" },
      { name: "CSS", icon: SiCss, level: 90, color: "#1572b6" },
      { name: "React.js", icon: SiReact, level: 88, color: "#61dafb" },
      { name: "JavaScript", icon: SiJavascript, level: 92, color: "#f7df1e" }
    ]
  },
  {
    name: "Programming Languages",
    icon: Code,
    color: "from-green-500/20 to-emerald-500/10",
    skills: [
      { name: "C", icon: Code, level: 85, color: "#00599C" },
      { name: "C++", icon: Code, level: 82, color: "#00599C" },
      { name: "JavaScript", icon: SiJavascript, level: 92, color: "#f7df1e" },
      { name: "Python", icon: SiPython, level: 78, color: "#3776ab" }
    ]
  },
  {
    name: "Backend Development",
    icon: Server,
    color: "from-orange-500/20 to-amber-500/10",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: 85, color: "#339933" },
      { name: "Express.js", icon: SiExpress, level: 82, color: "#000000" },
      { name: "MongoDB", icon: SiMongodb, level: 80, color: "#47a248" },
      { name: "MySQL", icon: SiMysql, level: 78, color: "#4479a1" }
    ]
  },
  {
    name: "UI/UX & Tools",
    icon: Palette,
    color: "from-purple-500/20 to-pink-500/10",
    skills: [
      { name: "Figma", icon: SiFigma, level: 85, color: "#f24e1e" },
      { name: "Canva", icon: SiFigma, level: 80, color: "#00c4cc" },
      { name: "Git", icon: SiGit, level: 88, color: "#f05032" },
      { name: "GitHub", icon: SiGithub, level: 90, color: "#24292e" }
    ]
  }
];

function SkillBar({ level }: { level: number }) {
  return (
    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
      />
    </div>
  );
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
            d="M0 30 C 60 25, 90 20, 120 25 S 210 35, 240 30 S 330 20, 360 25 S 450 35, 480 30 S 570 25, 600 30"
            fill="none"
            stroke="url(#skillSignal)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </div>
  );
}

export default function SkillsPageClient() {
  const [activeCategory, setActiveCategory] = useState(0);

  const totalSkills = useMemo(() => {
    return skillCategories.reduce((total, category) => total + category.skills.length, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.08),transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/6 rounded-full blur-[150px] animate-pulse" />
      </div>

      <div className="container-custom relative z-10">
        {/* Back Navigation */}
        <SmoothLink href="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors mb-12 group">
          <ArrowRight className="w-4 h-4 group-hover:-translate-x-1 transition-transform rotate-180" />
          Back to Home
        </SmoothLink>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
            <Code className="w-4 h-4 text-primary" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-primary font-bold">Technical Arsenal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-none">
            My <span className="text-gradient-premium">Skills</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across frontend, backend, 
            devops, and design technologies.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">{skillCategories.length}</div>
            <div className="text-slate-500 text-sm">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">{totalSkills}</div>
            <div className="text-slate-500 text-sm">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">5+</div>
            <div className="text-slate-500 text-sm">Years Exp</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-slate-500 text-sm">Projects</div>
          </div>
        </motion.div>

        {/* Signal Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <SignalLine />
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillCategories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all ${
                activeCategory === index
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "glass border-white/10 text-slate-400 hover:text-white hover:border-white/20"
              }`}
            >
              <div className="flex items-center gap-2">
                <category.icon className="w-4 h-4" />
                {category.name}
              </div>
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative group"
            >
              <div className={`p-6 rounded-2xl bg-gradient-to-br ${skillCategories[activeCategory].color} border border-white/10 hover:border-white/20 transition-all duration-300`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center glass border-white/10">
                      <skill.icon className="w-6 h-6" style={{ color: skill.color }} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{skill.name}</h3>
                      <p className="text-slate-400 text-sm">Proficiency: {skill.level}%</p>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white/20">{skill.level}%</div>
                </div>
                <SkillBar level={skill.level} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-slate-300">
              Always learning and exploring new technologies
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
