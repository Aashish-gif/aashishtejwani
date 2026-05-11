"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { Send, Mail, MapPin, Linkedin, Github, Twitter, ArrowUpRight, CheckCircle, Loader } from "lucide-react";

const socials = [
  { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/aashish-tejwani", color: "#0a66c2" },
  { Icon: Github, label: "GitHub", href: "https://github.com/Aashish-gif", color: "#ffffff" },
  { Icon: Twitter, label: "Twitter", href: "https://x.com/AashishTejwani_", color: "#1d9bf0" },
  { Icon: Mail, label: "Email", href: "mailto:aashishtejwani.connect@gmail.com", color: "#ea4335" },
];

type Status = "idle" | "sending" | "sent";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  const fields = [
    { key: "name", label: "Your Name", type: "text" },
    { key: "email", label: "Email Address", type: "email" },
    { key: "subject", label: "Subject", type: "text" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise(r => setTimeout(r, 1800));
    setStatus("sent");
    setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/6 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/6 rounded-full blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.03),transparent_70%)]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section label */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-6"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] text-primary font-bold">Get In Touch</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-none">
            Let&apos;s <span className="text-gradient-premium">Create</span> Together
          </h2>
          <p className="text-slate-500 text-xl font-light max-w-xl mx-auto">
            Whether it&apos;s a startup idea, a freelance gig, or just a hello — my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-10"
          >
            {/* Contact info cards */}
            {[
              { Icon: Mail, label: "Email", value: "aashishtejwani.connect@gmail.com", href: "mailto:aashishtejwani.connect@gmail.com" },
              { Icon: MapPin, label: "Location", value: "Ahmedabad, Gujarat 🇮🇳", href: "#" },
            ].map(({ Icon, label, value, href }) => (
              <a key={label} href={href} className="group flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl glass border-white/5 flex items-center justify-center text-slate-500 group-hover:text-primary group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-500 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-slate-600 font-bold mb-1">{label}</p>
                  <p className="text-lg font-display font-bold text-white flex items-center gap-2 group-hover:text-primary transition-colors">
                    {value}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </p>
                </div>
              </a>
            ))}

            {/* Availability badge */}
            <div className="flex items-center gap-4 p-5 rounded-2xl glass border-emerald-500/20 bg-emerald-500/5">
              <div className="relative w-3 h-3">
                <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-50" />
                <div className="w-3 h-3 bg-emerald-500 rounded-full" />
              </div>
              <div>
                <p className="text-emerald-400 text-sm font-display font-bold">Open to Opportunities</p>
                <p className="text-slate-500 text-xs mt-0.5">Available for freelance & full-time roles</p>
              </div>
            </div>

            {/* Socials */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-600 font-bold mb-6">Follow My Work</p>
              <div className="flex gap-4">
                {socials.map(({ Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    suppressHydrationWarning
                    className="group w-14 h-14 rounded-2xl glass border-white/5 flex items-center justify-center text-slate-500 hover:border-white/20 hover:-translate-y-2 transition-all duration-300"
                    style={{ "--hover-color": color } as any}
                  >
                    <Icon className="w-5 h-5 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            {/* Glow behind form */}
            <div className="absolute -inset-6 bg-gradient-to-br from-primary/8 to-secondary/8 blur-3xl rounded-[4rem] pointer-events-none" />

            <div className="relative glass border-white/8 rounded-[2.5rem] p-8 sm:p-12 overflow-hidden">
              {/* Inner decorative lines */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

              <AnimatePresence mode="wait">
                {status === "sent" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-8"
                    >
                      <CheckCircle className="w-12 h-12 text-emerald-500" />
                    </motion.div>
                    <h3 className="text-3xl font-display font-bold text-white mb-4">Message Sent!</h3>
                    <p className="text-slate-400 font-light">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    {/* Name + Email side by side */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      {fields.slice(0, 2).map(({ key, label, type }) => (
                        <div key={key} className="relative">
                          <label
                            className={`absolute left-0 transition-all duration-300 pointer-events-none font-bold uppercase tracking-[0.15em] ${
                              focused === key || (form as any)[key]
                                ? "text-[9px] -top-5 text-primary"
                                : "text-[11px] top-3 text-slate-500"
                            }`}
                          >
                            {label}
                          </label>
                          <input
                            type={type}
                            value={(form as any)[key]}
                            onFocus={() => setFocused(key)}
                            onBlur={() => setFocused(null)}
                            onChange={e => setForm({ ...form, [key]: e.target.value })}
                            suppressHydrationWarning
                            className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white font-display text-sm focus:outline-none focus:border-primary transition-colors duration-300"
                            required
                          />
                        </div>
                      ))}
                    </div>

                    {/* Subject */}
                    <div className="relative">
                      <label
                        className={`absolute left-0 transition-all duration-300 pointer-events-none font-bold uppercase tracking-[0.15em] ${
                          focused === "subject" || form.subject
                            ? "text-[9px] -top-5 text-primary"
                            : "text-[11px] top-3 text-slate-500"
                        }`}
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        value={form.subject}
                        onFocus={() => setFocused("subject")}
                        onBlur={() => setFocused(null)}
                        onChange={e => setForm({ ...form, subject: e.target.value })}
                        suppressHydrationWarning
                        className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white font-display text-sm focus:outline-none focus:border-primary transition-colors duration-300"
                        required
                      />
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <label
                        className={`absolute left-0 transition-all duration-300 pointer-events-none font-bold uppercase tracking-[0.15em] ${
                          focused === "message" || form.message
                            ? "text-[9px] -top-5 text-primary"
                            : "text-[11px] top-3 text-slate-500"
                        }`}
                      >
                        Message
                      </label>
                      <textarea
                        value={form.message}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        suppressHydrationWarning
                        rows={5}
                        className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white font-display text-sm focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                        required
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      suppressHydrationWarning
                      className="group relative w-full h-16 rounded-2xl overflow-hidden font-display font-bold uppercase tracking-[0.3em] text-sm disabled:opacity-70 disabled:cursor-not-allowed transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary animate-gradient-x" />
                      <div className="relative flex items-center justify-center gap-3 text-white">
                        {status === "sending" ? (
                          <>
                            <Loader className="w-5 h-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            Send Message
                          </>
                        )}
                      </div>
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-6"
            >
              <span className="text-[11px] uppercase tracking-[0.2em] text-primary font-bold">FAQ</span>
            </motion.div>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Frequently Asked <span className="text-gradient-premium">Questions</span>
            </h3>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Quick answers to common questions about my work and collaboration process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "Are you available for freelance work?",
                answer: "Yes! I'm actively open to freelance projects, especially in web development, mobile apps, and innovative tech solutions."
              },
              {
                question: "What's your typical project timeline?",
                answer: "Project timelines vary based on complexity. A simple website might take 2-3 weeks, while complex applications can take 2-3 months. I always provide detailed timelines during initial consultation."
              },
              {
                question: "Do you work with startups?",
                answer: "Absolutely! I love working with startups and have experience helping early-stage companies build their MVPs and scale their technology."
              },
              {
                question: "What technologies do you specialize in?",
                answer: "I specialize in React, Next.js, TypeScript, Node.js, and modern web technologies. I'm also experienced in mobile development and cloud deployment."
              },
              {
                question: "How do you handle project communication?",
                answer: "I believe in transparent communication with regular updates, weekly calls, and collaborative tools like Slack or Discord to keep everyone in sync."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="glass border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <h4 className="text-lg font-display font-bold text-white mb-3">{faq.question}</h4>
                <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
