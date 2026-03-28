'use client';
import { motion } from 'framer-motion';
import { HeroScene } from '../three/scenes/HeroScene';

export function HeroSection() {
  return (
    <section id="hero" className="relative h-[150vh] flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="sticky top-0 w-full h-screen">
        <HeroScene />

        {/* Content Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6">
          {/* Mission tag */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-plasma-cyan/30 bg-plasma-cyan/5 text-plasma-cyan text-sm font-mono tracking-wider">
              MISSION BRIEFING — 2026
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-[0.15em] text-supernova text-glow-blue text-center"
          >
            SPACEHUB
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-4 text-xl md:text-2xl text-moonlight/80 text-center max-w-2xl font-light"
          >
            The MMO Operating System for Aerospace Engineering
          </motion.p>

          {/* Sub-tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-3 text-lg text-lunar text-center"
          >
            Where Engineers Build the Future. Together.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-12 flex flex-wrap gap-8 md:gap-16 justify-center"
          >
            {[
              { value: '$150B+', label: 'Market Opportunity' },
              { value: '30-48%', label: 'Annual Growth (CAGR)' },
              { value: 'Open Source', label: 'Built in Rust' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-mono font-bold text-plasma-cyan text-glow-cyan">
                  {stat.value}
                </div>
                <div className="text-sm text-lunar mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-12 flex flex-col items-center gap-2"
          >
            <span className="text-xs text-lunar/60 tracking-widest uppercase">Scroll to Launch</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-5 h-8 rounded-full border-2 border-lunar/30 flex items-start justify-center pt-1"
            >
              <div className="w-1 h-2 rounded-full bg-plasma-cyan" />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-cosmos to-transparent z-10" />
      </div>
    </section>
  );
}
