'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { StaggerChildren, StaggerItem } from '@/components/animation/StaggerChildren';
import { GlowCard } from '@/components/ui/GlowCard';
import { IMMERSION_TIERS } from '@/lib/constants';

const tierGlowColors: Array<'green' | 'blue' | 'purple' | 'cyan' | 'red'> = [
  'green',
  'blue',
  'purple',
  'cyan',
  'red',
];

const tierAccentClasses = [
  { text: 'text-plasma-green', bg: 'bg-plasma-green', border: 'border-plasma-green', glow: 'glow-green' },
  { text: 'text-plasma-blue', bg: 'bg-plasma-blue', border: 'border-plasma-blue', glow: 'glow-blue' },
  { text: 'text-plasma-purple', bg: 'bg-plasma-purple', border: 'border-plasma-purple', glow: 'glow-blue' },
  { text: 'text-plasma-cyan', bg: 'bg-plasma-cyan', border: 'border-plasma-cyan', glow: 'glow-cyan' },
  { text: 'text-plasma-red', bg: 'bg-plasma-red', border: 'border-plasma-red', glow: 'glow-red' },
];

// Map tiers to relevant images
const tierImages: Record<number, { src: string; alt: string } | null> = {
  1: null,
  2: { src: '/images/image1.png', alt: 'Renzora browser-based dark UI for collaborative engineering' },
  3: { src: '/images/image6.png', alt: '3D stereoscopic editor for immersive design' },
  4: { src: '/images/image2.png', alt: 'Team using AR glasses for augmented reality overlay' },
  5: null,
};

const features = [
  {
    title: 'AI Agents',
    description: 'Integrated AI agents facilitate fast iteration and commands',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a4 4 0 014 4v1a1 1 0 001 1h1a4 4 0 010 8h-1a1 1 0 00-1 1v1a4 4 0 01-8 0v-1a1 1 0 00-1-1H6a4 4 0 010-8h1a1 1 0 001-1V6a4 4 0 014-4z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: 'Real-time Sync',
    description: 'Changes in CAD software update models every second',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 12a8 8 0 0116 0M8 12a4 4 0 018 0" strokeLinecap="round" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        <path d="M12 12v-3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: '100+ Users',
    description: 'Multiplayer worlds supporting hundreds of engineers',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="7" r="3" />
        <circle cx="17" cy="7" r="3" />
        <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 11a4 4 0 014 4v2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function SolutionSection() {
  const [activeTier, setActiveTier] = useState(1);

  return (
    <section
      id="solution"
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmos via-[#060a10] to-cosmos" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(88,166,255,0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <ScrollReveal className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full border border-plasma-blue/30 bg-plasma-blue/5 text-plasma-blue text-sm font-mono tracking-wider mb-6">
            THE SOLUTION
          </span>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-supernova mb-6">
            One Platform.{' '}
            <span className="text-plasma-cyan" style={{ textShadow: '0 0 30px rgba(57,213,255,0.5), 0 0 60px rgba(57,213,255,0.2)' }}>
              Every Engineer.
            </span>
            {' '}Everywhere.
          </h2>

          <p className="text-lg md:text-xl text-moonlight/70 max-w-3xl mx-auto">
            SpaceHub brings <span className="text-plasma-blue font-semibold">5 tiers of immersion</span> to aerospace collaboration
          </p>
        </ScrollReveal>

        {/* Tiers + Image layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-24">
          {/* Tier ladder */}
          <ScrollReveal direction="left">
            <StaggerChildren stagger={0.12} className="space-y-4">
              {IMMERSION_TIERS.map((tier, i) => {
                const isActive = activeTier === tier.tier;
                const accent = tierAccentClasses[i];

                return (
                  <StaggerItem key={tier.tier}>
                    <motion.button
                      onClick={() => setActiveTier(tier.tier)}
                      className={`w-full text-left relative group rounded-xl p-5 transition-all duration-300 border ${
                        isActive
                          ? `bg-nebula ${accent.border}/30 ${accent.glow}`
                          : 'bg-nebula/50 border-stardust/50 hover:border-stardust'
                      }`}
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    >
                      <div className="flex items-start gap-4">
                        {/* Tier number */}
                        <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center font-mono font-bold text-xl transition-colors duration-300 ${
                          isActive
                            ? `${accent.bg}/20 ${accent.text}`
                            : 'bg-stardust/50 text-lunar'
                        }`}>
                          {tier.tier}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-lg">{tier.icon}</span>
                            <h3 className={`font-display font-semibold text-base transition-colors duration-300 ${
                              isActive ? accent.text : 'text-moonlight'
                            }`}>
                              {tier.name}
                            </h3>
                          </div>
                          <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                            isActive ? 'text-moonlight/80' : 'text-lunar/70'
                          }`}>
                            {tier.description}
                          </p>
                        </div>

                        {/* Active indicator */}
                        {isActive && (
                          <motion.div
                            layoutId="tier-indicator"
                            className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-xl ${accent.bg}`}
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                          />
                        )}
                      </div>
                    </motion.button>
                  </StaggerItem>
                );
              })}
            </StaggerChildren>

            {/* Connection line decoration */}
            <div className="hidden lg:block absolute left-[30px] top-[160px] bottom-[160px] w-px bg-gradient-to-b from-transparent via-stardust/30 to-transparent" />
          </ScrollReveal>

          {/* Image panel */}
          <ScrollReveal direction="right" className="flex items-center">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-stardust/30 bg-nebula">
              <AnimatePresence mode="wait">
                {tierImages[activeTier] ? (
                  <motion.div
                    key={activeTier}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={tierImages[activeTier]!.src}
                      alt={tierImages[activeTier]!.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cosmos/60 via-transparent to-cosmos/20" />
                  </motion.div>
                ) : (
                  <motion.div
                    key={`placeholder-${activeTier}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex flex-col items-center justify-center"
                  >
                    <div className="text-6xl mb-4">
                      {IMMERSION_TIERS[activeTier - 1].icon}
                    </div>
                    <p className={`text-lg font-display font-semibold ${tierAccentClasses[activeTier - 1].text}`}>
                      {IMMERSION_TIERS[activeTier - 1].name}
                    </p>
                    <p className="text-sm text-lunar mt-2 max-w-xs text-center">
                      {IMMERSION_TIERS[activeTier - 1].description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Tier label overlay */}
              <div className="absolute bottom-4 left-4 z-10">
                <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cosmos/80 backdrop-blur-sm border border-stardust/30 text-sm font-mono ${tierAccentClasses[activeTier - 1].text}`}>
                  <span className={`w-2 h-2 rounded-full ${tierAccentClasses[activeTier - 1].bg}`} />
                  Tier {activeTier}: {IMMERSION_TIERS[activeTier - 1].name}
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Feature highlights */}
        <ScrollReveal delay={0.2}>
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-plasma-blue/40" />
              <span className="text-xs font-mono text-plasma-blue/70 tracking-[0.3em] uppercase">
                Built for Scale
              </span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-plasma-blue/40" />
            </div>
          </div>

          <StaggerChildren stagger={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <StaggerItem key={i}>
                <GlowCard glowColor={(['blue', 'cyan', 'green'] as const)[i]} className="text-center group">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5 transition-colors duration-300 ${
                    ['bg-plasma-blue/10 text-plasma-blue group-hover:bg-plasma-blue/20',
                     'bg-plasma-cyan/10 text-plasma-cyan group-hover:bg-plasma-cyan/20',
                     'bg-plasma-green/10 text-plasma-green group-hover:bg-plasma-green/20'][i]
                  }`}>
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-display font-semibold text-supernova mb-2">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-lunar leading-relaxed">
                    {feature.description}
                  </p>
                </GlowCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </ScrollReveal>

        {/* Bottom transition */}
        <motion.div
          className="mt-20 h-px max-w-md mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
          style={{ background: 'linear-gradient(90deg, transparent, rgba(88,166,255,0.4), transparent)' }}
        />
      </div>
    </section>
  );
}
