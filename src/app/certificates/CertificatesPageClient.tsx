"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Award, ExternalLink, ShieldCheck, ArrowLeft, Search, Filter } from "lucide-react";
import { SmoothLink } from "@/components/ui/SmoothNavigation";
import { certificates } from "@/lib/data";

const categories = ["All", ...Array.from(new Set(certificates.map(c => c.category)))];

export default function CertificatesPageClient() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = certificates.filter(c => {
    const matchesFilter = filter === "All" || c.category === filter;
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || 
                          c.issuer.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-custom relative z-10">
        <SmoothLink href="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </SmoothLink>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Official <span className="text-gradient-premium">Certifications</span>
            </h1>
            <p className="text-slate-500 text-lg font-light">
              A comprehensive archive of my technical milestones, validated by industry leaders and academic institutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Search certificates..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-12 pr-6 py-4 rounded-2xl glass border-white/5 focus:outline-none focus:border-primary/40 transition-all w-full sm:w-64 text-sm"
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
                  ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                  : "bg-white/5 border-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full"
              >
                <div className="relative h-full p-8 rounded-[2rem] glass border-white/5 hover:border-primary/30 transition-all duration-500 flex flex-col justify-between overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 text-primary">
                        <Award className="w-6 h-6" />
                      </div>
                      {cert.verified && (
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                          <ShieldCheck className="w-3 h-3 text-emerald-500" />
                          <span className="text-[9px] uppercase tracking-widest font-bold text-emerald-500">Verified</span>
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl font-display font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-slate-400 text-sm font-medium mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">
                      {cert.date}
                    </p>
                  </div>

                  <div className="relative z-10 flex justify-between items-center mt-8 pt-6 border-t border-white/5">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
                      {cert.category}
                    </span>
                    
                    <a 
                      href={cert.link} 
                      target="_blank"
                      className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-primary transition-colors"
                    >
                      View Credential
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Glow */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-40">
            <p className="text-slate-500 text-lg">No certificates found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
