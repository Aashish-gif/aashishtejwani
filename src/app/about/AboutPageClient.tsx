"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CheckCircle2, Mail, MapPin, ExternalLink, Globe } from "lucide-react";
import { SmoothLink } from "@/components/ui/SmoothNavigation";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Code2 
} from "lucide-react";

const socialHandles = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/aashish-tejwani",
    color: "#0a66c2",
    description: "Connect with me professionally"
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://x.com/AashishTejwani_",
    color: "#1d9bf0",
    description: "Follow my tech journey and insights"
  },
  {
    name: "LeetCode",
    icon: Code2,
    href: "https://leetcode.com/u/TAJ_CG/",
    color: "#ffa116",
    description: "Check out my problem-solving journey"
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:aashishtejwani.connect@gmail.com",
    color: "#ea4335",
    description: "Get in touch for opportunities"
  }
];

const skills = [
  "React", "Node.js", "MongoDB", "MySQL", "HTML", "CSS", "JavaScript",
  "C", "C++", "Express.js", "Figma", "Canva", "Git", "GitHub"
];

const achievements = [
  "🏆 IIT Gandhinagar x Oddo Hackathon - Finalist",
  "🥈 Tech Expo Ahmedabad 2025 - 2nd Runner-Up",
  "🏆 IIIT Naya Raipur x GDG Raipur Hackathon - Finalist",
  "🎯 87% Accuracy in AI Sentiment Analysis",
  "🚀 3+ Major Projects Delivered"
];

export default function AboutPageClient() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.06),transparent_55%)]" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[420px] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        {/* Back Navigation */}
        <SmoothLink href="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors mb-12 group">
          <ArrowRight className="w-4 h-4 group-hover:-translate-x-1 transition-transform rotate-180" />
          Back to Home
        </SmoothLink>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">

          {/* Left: Photo + Basic Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-[2.75rem] overflow-hidden glass-strong border-white/10 mb-8">
              {/* Glow border */}
              <div className="absolute -inset-[1px] rounded-[2.75rem] bg-gradient-to-b from-primary/30 via-transparent to-accent/20 z-10 pointer-events-none" />

              {/* Photo */}
              <div className="relative aspect-[4/5] w-full">
                <div className="absolute inset-0 bg-[url('/Images/Aashish%20Tejwani.jpg')] bg-cover bg-center opacity-85" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(124,58,237,0.22),transparent_55%)]" />
              </div>
            </div>

            {/* Quick Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-slate-300">aashishtejwani.connect@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-slate-300">Ahmedabad, Gujarat 🇮🇳</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-300">CGPA: 9.5</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-300">Open for Opportunities</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-none">
                About <span className="text-gradient-premium">Me</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Ambitious Computer Science undergraduate with strong foundations in C, C++, JavaScript, and Data Structures & Algorithms, 
                complemented by hands-on experience in full-stack development using React, Node.js, MongoDB, and MySQL.
              </p>
            </motion.div>

            {/* My Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-display font-bold text-white mb-4">My Story</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
              Skilled at designing and delivering scalable, high-performance applications with clean, maintainable code. 
              Recognized for rapid learning, adaptability, and consistently delivering impactful projects in collaborative environments.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Seeking to contribute as a Software Engineer intern, bringing technical expertise, problem-solving ability, 
              and a growth-oriented mindset to create innovative solutions.
            </p>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-display font-bold text-white mb-4">Technical Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full glass border-white/10 text-sm text-slate-300 hover:text-white hover:border-primary/30 transition-all"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-display font-bold text-white mb-4">Key Achievements</h2>
              <div className="space-y-2">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-slate-300"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social Handles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-display font-bold text-white mb-6">Connect With Me</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {socialHandles.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-4 rounded-2xl glass border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center glass border-white/10 group-hover:border-white/20 transition-all">
                        <social.icon 
                          className="w-5 h-5" 
                          style={{ color: social.color }}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-sm mb-1">{social.name}</h3>
                        <p className="text-slate-400 text-xs leading-tight">{social.description}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
