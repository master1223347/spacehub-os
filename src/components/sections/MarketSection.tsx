'use client';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { StaggerChildren, StaggerItem } from '@/components/animation/StaggerChildren';
import { NumberCounter } from '@/components/animation/NumberCounter';
import { GlowCard } from '@/components/ui/GlowCard';
import { MARKET_STATS, COMPETITORS } from '@/lib/constants';

const PROOF_BULLETS = [
  {
    icon: '🛡️',
    text: 'White House mandates Rust for government software',
  },
  {
    icon: '🌙',
    text: 'Blue Ghost lunar lander used Rust open-source libraries',
  },
  {
    icon: '📜',
    text: 'SHARE IT Act (2024) mandates federal code sharing',
  },
];

export function MarketSection() {
  return (
    <section
      id="market"
      className="relative py-24 md:py-36 px-6 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(57,213,255,0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Headlines */}
        <ScrollReveal className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full border border-plasma-cyan/30 bg-plasma-cyan/5 text-plasma-cyan text-sm font-mono tracking-wider mb-6">
            MARKET INTELLIGENCE
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-supernova mb-4">
            The Perfect Storm
          </h2>
          <p className="text-lg md:text-xl text-lunar max-w-2xl mx-auto">
            Three forces converging to create a $150B+ opportunity
          </p>
        </ScrollReveal>

        {/* Stat cards */}
        <StaggerChildren
          stagger={0.15}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-24"
        >
          {MARKET_STATS.map((stat, i) => (
            <StaggerItem key={i}>
              <GlowCard glowColor="cyan" className="text-center h-full">
                <NumberCounter
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  className="block text-4xl md:text-5xl font-mono font-bold text-plasma-cyan text-glow-cyan"
                />
                <div className="text-base md:text-lg font-display font-semibold text-moonlight mt-3">
                  {stat.label}
                </div>
                <div className="text-sm text-lunar mt-1">{stat.sublabel}</div>
              </GlowCard>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Competitive comparison table */}
        <ScrollReveal delay={0.1} className="mb-16 md:mb-24">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-supernova">
              Competitive Landscape
            </h3>
            <p className="text-sm text-lunar mt-2 font-mono tracking-wider">
              DECLASSIFIED — MARKET ANALYSIS
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse font-mono text-sm">
              <thead>
                <tr className="border-b border-stardust">
                  <th className="text-left py-3 px-4 text-lunar text-xs tracking-widest uppercase">
                    Platform
                  </th>
                  <th className="text-left py-3 px-4 text-lunar text-xs tracking-widest uppercase">
                    Price
                  </th>
                  <th className="text-left py-3 px-4 text-lunar text-xs tracking-widest uppercase">
                    Architecture
                  </th>
                  <th className="text-left py-3 px-4 text-lunar text-xs tracking-widest uppercase">
                    Collaboration
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPETITORS.map((comp, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    className={
                      comp.highlight
                        ? 'bg-plasma-cyan/5 border border-plasma-cyan/20 rounded-lg'
                        : 'border-b border-stardust/50 opacity-60'
                    }
                  >
                    <td className="py-3 px-4">
                      <span
                        className={
                          comp.highlight
                            ? 'text-plasma-cyan font-bold'
                            : 'text-moonlight/70'
                        }
                      >
                        {comp.name}
                      </span>
                      {comp.highlight && (
                        <span className="ml-2 px-2 py-0.5 rounded-full bg-plasma-green/10 border border-plasma-green/30 text-plasma-green text-[10px] tracking-wider uppercase">
                          You are here
                        </span>
                      )}
                    </td>
                    <td
                      className={`py-3 px-4 ${
                        comp.highlight
                          ? 'text-plasma-green font-bold'
                          : 'text-moonlight/50'
                      }`}
                    >
                      {comp.price}
                    </td>
                    <td
                      className={`py-3 px-4 ${
                        comp.highlight
                          ? 'text-plasma-cyan'
                          : 'text-moonlight/50'
                      }`}
                    >
                      {comp.arch}
                    </td>
                    <td
                      className={`py-3 px-4 ${
                        comp.highlight
                          ? 'text-plasma-cyan'
                          : 'text-moonlight/50'
                      }`}
                    >
                      {comp.collab}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile card layout */}
          <div className="md:hidden space-y-4">
            {COMPETITORS.map((comp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              >
                <div
                  className={`bg-nebula border rounded-xl p-4 font-mono text-sm ${
                    comp.highlight
                      ? 'border-plasma-cyan/30 bg-plasma-cyan/5'
                      : 'border-stardust/50 opacity-60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={
                        comp.highlight
                          ? 'text-plasma-cyan font-bold text-base'
                          : 'text-moonlight/70'
                      }
                    >
                      {comp.name}
                    </span>
                    {comp.highlight && (
                      <span className="px-2 py-0.5 rounded-full bg-plasma-green/10 border border-plasma-green/30 text-plasma-green text-[10px] tracking-wider uppercase">
                        You are here
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <div className="text-lunar/60 mb-1">Price</div>
                      <div
                        className={
                          comp.highlight
                            ? 'text-plasma-green font-bold'
                            : 'text-moonlight/50'
                        }
                      >
                        {comp.price}
                      </div>
                    </div>
                    <div>
                      <div className="text-lunar/60 mb-1">Arch</div>
                      <div
                        className={
                          comp.highlight
                            ? 'text-plasma-cyan'
                            : 'text-moonlight/50'
                        }
                      >
                        {comp.arch}
                      </div>
                    </div>
                    <div>
                      <div className="text-lunar/60 mb-1">Collab</div>
                      <div
                        className={
                          comp.highlight
                            ? 'text-plasma-cyan'
                            : 'text-moonlight/50'
                        }
                      >
                        {comp.collab}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Proof bullets */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-xl md:text-2xl font-display font-bold text-supernova">
                The Tailwinds Are Real
              </h3>
            </div>
            <StaggerChildren stagger={0.15} className="space-y-4">
              {PROOF_BULLETS.map((bullet, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-start gap-4 bg-nebula/60 border border-stardust/50 rounded-xl px-5 py-4 font-mono text-sm hover:border-plasma-blue/30 transition-colors duration-300">
                    <span className="text-xl flex-shrink-0 mt-0.5" aria-hidden="true">
                      {bullet.icon}
                    </span>
                    <span className="text-moonlight/90 leading-relaxed">
                      {bullet.text}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
