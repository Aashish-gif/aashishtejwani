"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, Youtube, FileText, ArrowLeft, Search, Filter, Play } from "lucide-react";
import { SmoothLink } from "@/components/ui/SmoothNavigation";
import { projects } from "@/lib/data";

const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

export default function ProjectsPageClient() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = projects.filter(p => {
    const matchesFilter = filter === "All" || p.category === filter;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                          p.description.toLowerCase().includes(search.toLowerCase()) ||
                          p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-custom relative z-10">
        <SmoothLink href="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors mb-12 group">
          <ArrowRight className="w-4 h-4 group-hover:-translate-x-1 transition-transform rotate-180" />
          Back to Home
        </SmoothLink>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              The <span className="text-gradient-premium">Project</span> Archive
            </h1>
            <p className="text-slate-500 text-xl font-light">
              An extensive collection of my work, ranging from experimental prototypes to production-ready applications.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Search projects or tools..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-12 pr-6 py-4 rounded-2xl glass border-white/5 focus:outline-none focus:border-primary/40 transition-all w-full sm:w-80 text-sm"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-xl text-[10px] uppercase tracking-widest font-bold transition-all duration-300 border ${
                filter === cat
                  ? "bg-accent border-accent text-white shadow-lg shadow-accent/20"
                  : "bg-white/5 border-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col rounded-[2.5rem] glass overflow-hidden border-white/5 hover:border-primary/20 transition-all duration-500"
              >
                {/* Project Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 z-20">
                    <span className="px-4 py-2 rounded-full glass backdrop-blur-xl border-white/10 text-[10px] uppercase tracking-[0.2em] text-white font-bold">
                      {project.category}
                    </span>
                  </div>

                  {/* Overlay Actions */}
                  <div className="absolute inset-0 z-20 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                    {project.youtube && (
                        <a href={project.youtube} className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 fill-current" />
                        </a>
                    )}
                    {project.github && (
                        <a href={project.github} className="w-12 h-12 rounded-full glass text-white flex items-center justify-center hover:scale-110 transition-transform">
                          <Github className="w-5 h-5" />
                        </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest text-primary font-bold">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/5">
                    <a href={project.live} className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white hover:text-primary transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                    <a href={project.github} className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white hover:text-primary transition-colors">
                      <Github className="w-4 h-4" />
                      Source
                    </a>
                    {project.youtube && (
                      <a href={project.youtube} className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white hover:text-primary transition-colors">
                        <Youtube className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                    {project.postman && (
                      <a href={project.postman} className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white hover:text-primary transition-colors">
                        <FileText className="w-4 h-4" />
                        API
                      </a>
                    )}
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-30 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-40 group-hover:animate-shine pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-40">
            <p className="text-slate-500 text-lg">No projects found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
