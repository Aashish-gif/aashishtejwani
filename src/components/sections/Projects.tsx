"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Github, ExternalLink, Youtube, FileText, ArrowRight, Play, X } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/data";


export default function Projects() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const selected = projects.find(p => p.id === activeProject);
  
  // Show only first 3 projects (p1, p2, p3)
  const grid = projects.slice(0, 3);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(217,70,239,0.06),transparent_55%)]" />
        <div className="absolute -top-28 right-0 w-[620px] h-[420px] bg-primary/10 blur-[140px] rounded-full" />
        <div className="absolute -bottom-40 left-0 w-[760px] h-[520px] bg-secondary/10 blur-[160px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.14] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 mb-6"
            >
              <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-bold">Featured Work</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-none">
              Things I&apos;ve <span className="text-gradient-premium">Built</span>
            </h2>
            <p className="text-slate-500 text-lg font-light leading-relaxed">
              A curated selection of projects that demonstrate end-to-end engineering, design thinking, and technical depth.
            </p>
          </div>
          <Link href="/projects" className="group flex items-center gap-3 px-8 py-4 rounded-full glass hover:bg-white/10 transition-all text-white font-display font-bold tracking-widest text-xs uppercase shrink-0">
            All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        
        
        {/* Archive grid (same vibe as /projects) */}
        <motion.div layout className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {grid.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="group relative flex flex-col rounded-[2.5rem] glass overflow-hidden border border-white/10 hover:border-primary/25 transition-all duration-500 cursor-pointer"
                onClick={() => setActiveProject(project.id)}
                              >
                                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute top-6 left-6 z-20">
                    <span className="px-4 py-2 rounded-full glass backdrop-blur-xl border-white/10 text-[10px] uppercase tracking-[0.2em] text-white font-bold">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute inset-0 z-20 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                    {project.youtube && (
                      <a
                        href={project.youtube}
                        onClick={(e) => e.stopPropagation()}
                        className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <Play className="w-5 h-5 fill-current" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        onClick={(e) => e.stopPropagation()}
                        className="w-12 h-12 rounded-full glass text-white flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest text-primary font-bold">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10">
                    {project.live && (
                      <a
                        href={project.live}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white hover:text-primary transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Source
                      </a>
                    )}
                    {project.youtube && (
                      <a
                        href={project.youtube}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white hover:text-primary transition-colors"
                      >
                        <Youtube className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                    {project.postman && (
                      <a
                        href={project.postman}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white hover:text-primary transition-colors"
                      >
                        <FileText className="w-4 h-4" />
                        API
                      </a>
                    )}
                  </div>
                </div>

                <div className="absolute top-0 -inset-full h-full w-1/2 z-30 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-40 group-hover:animate-shine pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {activeProject && selected && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveProject(null)}
                className="fixed inset-0 z-50 bg-background/80 backdrop-blur-xl cursor-pointer"
              />
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 40, scale: 0.96 }}
                transition={{ ease: [0.16, 1, 0.3, 1] }}
                className="fixed inset-4 sm:inset-8 lg:inset-16 z-[60] overflow-hidden rounded-[3rem] bg-[#070b14] border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.7)] flex flex-col lg:flex-row"
              >
                {/* Image */}
                <div className="relative lg:w-1/2 h-64 lg:h-full">
                  <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#070b14] hidden lg:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] to-transparent lg:hidden" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(124,58,237,0.25),transparent_60%)]" />
                </div>

                {/* Content */}
                <div className="relative flex-1 p-8 sm:p-12 flex flex-col justify-between overflow-y-auto">
                  <button onClick={() => setActiveProject(null)} className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-all">
                    <X className="w-5 h-5" />
                  </button>

                  <div>
                    <div className="flex items-start justify-between gap-6 pr-16">
                      <div className="min-w-0">
                        <span className="text-[10px] uppercase tracking-[0.32em] text-accent font-bold mb-4 block">{selected.category}</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-[1.05]">{selected.title}</h2>
                      </div>
                    </div>
                    <p className="text-slate-400 text-lg leading-relaxed mb-8">{selected.description}</p>

                    <div className="rounded-[2rem] glass border-white/10 p-6 mb-10">
                      <div className="text-[10px] uppercase tracking-[0.35em] text-slate-500 font-bold">Tech stack</div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {selected.tags.map((t) => (
                          <span
                            key={t}
                            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-slate-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {selected.live && <a href={selected.live} className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-white font-display font-bold tracking-widest text-xs uppercase hover:scale-[1.03] transition-transform shadow-lg shadow-primary/15"><ExternalLink className="w-4 h-4" />Live Demo</a>}
                    {selected.github && <a href={selected.github} className="flex items-center gap-3 px-8 py-4 rounded-2xl glass text-white font-display font-bold tracking-widest text-xs uppercase hover:bg-white/10 transition-all"><Github className="w-4 h-4" />Source Code</a>}
                    {selected.youtube && <a href={selected.youtube} className="flex items-center gap-3 px-8 py-4 rounded-2xl glass text-red-400 font-display font-bold tracking-widest text-xs uppercase hover:bg-white/10 transition-all"><Youtube className="w-4 h-4" />YouTube Demo</a>}
                    {selected.postman && <a href={selected.postman} className="flex items-center gap-3 px-8 py-4 rounded-2xl glass text-orange-400 font-display font-bold tracking-widest text-xs uppercase hover:bg-white/10 transition-all"><FileText className="w-4 h-4" />API Docs</a>}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
