'use client';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { StaggerChildren, StaggerItem } from '@/components/animation/StaggerChildren';
import { GlowCard } from '@/components/ui/GlowCard';

const pillars = [
  {
    title: 'Open Source',
    description:
      'Open for scrutiny. Open for contribution. Open for the benefit of all humanity in space.',
    glowColor: 'cyan' as const,
    iconBorder: 'border-plasma-cyan/30',
    iconBg: 'bg-plasma-cyan/5',
    iconDot: 'bg-plasma-cyan/60',
  },
  {
    title: 'AI-Native',
    description:
      'Every engineer gets their own AI agent. 100s of simulations running in parallel. Knowledge preserved forever.',
    glowColor: 'purple' as const,
    iconBorder: 'border-plasma-purple/30',
    iconBg: 'bg-plasma-purple/5',
    iconDot: 'bg-plasma-purple/60',
  },
  {
    title: 'Built in Rust',
    description:
      'Memory-safe. Formally verifiable. Fast enough for real-time simulation. Ready for space.',
    glowColor: 'green' as const,
    iconBorder: 'border-plasma-green/30',
    iconBg: 'bg-plasma-green/5',
    iconDot: 'bg-plasma-green/60',
  },
];

export function VisionSection() {
  return (
    <section
      id="vision"
      className="relative py-40 md:py-56 overflow-hidden bg-cosmos"
    >
      {/* Subtle purple accent gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-plasma-purple/[0.04] blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-plasma-purple/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-24">
            <span className="inline-block px-4 py-1.5 rounded-full border border-plasma-purple/30 bg-plasma-purple/5 text-plasma-purple text-sm font-mono tracking-wider mb-6">
              THE VISION
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-supernova tracking-wide">
              From Browser to Beyond
            </h2>
          </div>
        </ScrollReveal>

        {/* Large cinematic pull quote */}
        <ScrollReveal delay={0.2}>
          <blockquote className="text-center mb-32 md:mb-40 max-w-5xl mx-auto">
            <p className="text-2xl md:text-4xl lg:text-5xl font-display font-light text-moonlight leading-snug md:leading-tight tracking-wide">
              &ldquo;Imagine{' '}
              <span className="text-plasma-cyan text-glow-cyan font-normal">
                10,000 engineers
              </span>
              , across{' '}
              <span className="text-plasma-purple font-normal">
                50 countries
              </span>
              , collaborating on the next{' '}
              <span className="text-plasma-orange font-normal">
                Mars mission
              </span>
              .{' '}
              <span className="text-supernova font-normal italic">
                In real time.
              </span>
              &rdquo;
            </p>
            <div className="mt-8 w-24 h-px bg-gradient-to-r from-transparent via-plasma-purple/50 to-transparent mx-auto" />
          </blockquote>
        </ScrollReveal>

        {/* Vision pillars */}
        <StaggerChildren stagger={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 md:mb-40">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <GlowCard glowColor={pillar.glowColor} className="text-center h-full py-10 px-8">
                <div className={`w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center border ${pillar.iconBorder} ${pillar.iconBg}`}>
                  <div className={`w-6 h-6 rounded-full ${pillar.iconDot}`} />
                </div>
                <h3 className="text-2xl font-display font-bold text-supernova mb-4 tracking-wide">
                  {pillar.title}
                </h3>
                <p className="text-lunar leading-relaxed">
                  {pillar.description}
                </p>
              </GlowCard>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Bottom statement */}
        <ScrollReveal delay={0.1}>
          <div className="text-center">
            <p className="text-xl md:text-3xl lg:text-4xl font-display text-moonlight/90 tracking-wide leading-relaxed">
              SpaceHub isn&rsquo;t just software.
            </p>
            <p className="mt-3 text-xl md:text-3xl lg:text-4xl font-display font-bold text-supernova tracking-wide text-glow-blue">
              It&rsquo;s a new way to do aerospace.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
