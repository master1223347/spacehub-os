'use client';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { StaggerChildren, StaggerItem } from '@/components/animation/StaggerChildren';
import { NumberCounter } from '@/components/animation/NumberCounter';
import { GlowCard } from '@/components/ui/GlowCard';
import { CRISIS_STATS } from '@/lib/constants';

const badges = ['CLASSIFIED', 'URGENT', 'CRITICAL'];

export function CrisisSection() {
  return (
    <section
      id="crisis"
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Dark red gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmos via-[#0f0608] to-cosmos" />
      {/* Subtle radial red glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(248,81,73,0.06)_0%,transparent_70%)]" />
      {/* Scan line effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(248,81,73,0.02)_2px,rgba(248,81,73,0.02)_4px)]" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <ScrollReveal className="text-center mb-20">
          <motion.div
            className="inline-block mb-6"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-plasma-red/40 bg-plasma-red/10 text-plasma-red text-sm font-mono tracking-wider">
              <span className="w-2 h-2 rounded-full bg-plasma-red animate-pulse" />
              WARNING — CRITICAL ALERT
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-supernova mb-6">
            Houston, We Have a{' '}
            <span className="text-plasma-red" style={{ textShadow: '0 0 30px rgba(248,81,73,0.5), 0 0 60px rgba(248,81,73,0.2)' }}>
              Problem
            </span>
          </h2>

          <p className="text-lg md:text-xl text-moonlight/70 max-w-3xl mx-auto">
            The aerospace industry is losing its greatest asset:{' '}
            <span className="text-plasma-orange font-semibold">its people.</span>
          </p>
        </ScrollReveal>

        {/* Crisis stat cards */}
        <StaggerChildren stagger={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20">
          {CRISIS_STATS.map((stat, i) => (
            <StaggerItem key={i}>
              <GlowCard glowColor="red" className="relative h-full group">
                {/* Badge */}
                <div className="absolute -top-3 -right-2 z-10">
                  <motion.span
                    className="inline-block px-3 py-1 bg-plasma-red text-supernova text-xs font-mono font-bold tracking-widest rounded-sm"
                    style={{ transform: 'rotate(-3deg)' }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {badges[i]}
                  </motion.span>
                </div>

                {/* Stat number */}
                <div className="mb-4 mt-2">
                  <NumberCounter
                    target={stat.number}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={2.5}
                    className="text-5xl md:text-6xl font-mono font-bold text-plasma-red"
                  />
                </div>

                {/* Label */}
                <h3 className="text-lg font-display font-semibold text-plasma-orange mb-3">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-lunar leading-relaxed">
                  {stat.description}
                </p>

                {/* Bottom accent line */}
                <div className="mt-6 h-px bg-gradient-to-r from-plasma-red/50 via-plasma-orange/30 to-transparent" />
              </GlowCard>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Saturn V quote */}
        <ScrollReveal delay={0.3}>
          <div className="relative max-w-4xl mx-auto">
            {/* Corner brackets for classified document feel */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-plasma-red/40" />
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-plasma-red/40" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-plasma-red/40" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-plasma-red/40" />

            <div className="border border-stardust bg-nebula/80 backdrop-blur-sm rounded-lg p-8 md:p-10">
              {/* Document header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-plasma-red/50" />
                <span className="text-xs font-mono text-plasma-red/70 tracking-[0.3em] uppercase">
                  Declassified Excerpt
                </span>
                <div className="flex-1 h-px bg-plasma-red/20" />
              </div>

              <blockquote className="text-lg md:text-xl text-moonlight/90 italic leading-relaxed mb-6">
                &ldquo;No one thought to keep a copy of the drawing and design data for the gargantuan Saturn V rocket.&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-plasma-red/10 border border-plasma-red/20 flex items-center justify-center">
                  <span className="text-plasma-red text-sm font-mono">JPL</span>
                </div>
                <div>
                  <p className="text-sm font-display font-semibold text-moonlight">
                    David Oberhettinger
                  </p>
                  <p className="text-xs text-lunar">
                    NASA JPL Chief Knowledge Officer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom transition line */}
        <motion.div
          className="mt-20 h-px max-w-md mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
          style={{ background: 'linear-gradient(90deg, transparent, rgba(248,81,73,0.4), transparent)' }}
        />
      </div>
    </section>
  );
}
