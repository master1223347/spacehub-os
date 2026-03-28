'use client';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { StaggerChildren, StaggerItem } from '@/components/animation/StaggerChildren';
import { GlowCard } from '@/components/ui/GlowCard';
import Image from 'next/image';

const techProofs = [
  {
    title: 'Bevy Engine',
    description:
      'Open-source game engine in Rust. ECS architecture. Compiles to any platform.',
    hasImage: true,
  },
  {
    title: 'F Prime (F\u2019)',
    description:
      'JPL\u2019s open-source flight software framework. Powered the Ingenuity Mars Helicopter.',
    hasImage: false,
  },
  {
    title: 'cFS',
    description:
      'Core Flight System. Flown on 20+ NASA missions. NASA 7150.2 Class A certified.',
    hasImage: false,
  },
];

export function ProofSection() {
  return (
    <section
      id="proof"
      className="relative py-32 md:py-40 overflow-hidden bg-cosmos"
    >
      {/* Background image at very low opacity */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/image5.png"
          alt=""
          fill
          className="object-cover opacity-[0.05]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cosmos via-cosmos/90 to-cosmos" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full border border-plasma-green/30 bg-plasma-green/5 text-plasma-green text-sm font-mono tracking-wider mb-6">
              PROVEN TECHNOLOGY
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-supernova tracking-wide">
              Already in Orbit
            </h2>
            <p className="mt-4 text-lg md:text-xl text-lunar max-w-2xl mx-auto">
              Built on proven technology. Validated by lunar missions.
            </p>
          </div>
        </ScrollReveal>

        {/* Two-column layout: Case study + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Left: Blue Ghost case study */}
          <ScrollReveal direction="left" delay={0.1}>
            <GlowCard glowColor="green" className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-plasma-green animate-pulse" />
                  <span className="text-plasma-green font-mono text-sm tracking-wider uppercase">
                    Mission Success
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-bold text-supernova mb-6">
                  Blue Ghost 1
                </h3>

                <p className="text-moonlight/90 text-lg leading-relaxed mb-4">
                  Firefly Aerospace&rsquo;s Blue Ghost 1 successfully landed on
                  Mare Crisium on March 2, 2025.
                </p>

                <p className="text-lunar leading-relaxed mb-4">
                  The first commercial lunar lander to reach the Moon &mdash;
                  powered by Rust-based flight dynamics tools.
                </p>

                <p className="text-lunar leading-relaxed mb-8">
                  Nyx Space open-source libraries (Rust) formed the backbone of
                  the mission&rsquo;s trajectory and flight dynamics systems.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-plasma-green/10 border border-plasma-green/20 w-fit">
                <span className="text-plasma-green font-mono font-bold text-lg">
                  $93M
                </span>
                <span className="text-lunar text-sm">
                  NASA CLPS Contract Value
                </span>
              </div>
            </GlowCard>
          </ScrollReveal>

          {/* Right: Cinematic lunar image */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden border border-stardust group">
              <Image
                src="/images/image5.png"
                alt="Lunar surface with Earth visible in the background"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos/80 via-transparent to-cosmos/20" />
              {/* Subtle glow border effect */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-plasma-cyan/10 group-hover:ring-plasma-cyan/20 transition-all duration-500" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm text-lunar/80 font-mono">
                  Mare Crisium &mdash; Lunar Surface
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Technology proof cards */}
        <StaggerChildren stagger={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techProofs.map((proof) => (
            <StaggerItem key={proof.title}>
              <GlowCard glowColor="green" className="h-full">
                {proof.hasImage && (
                  <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4 border border-stardust">
                    <Image
                      src="/images/image4.png"
                      alt={proof.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nebula/60 to-transparent" />
                  </div>
                )}
                {!proof.hasImage && (
                  <div className="flex items-center justify-center w-full h-40 rounded-lg mb-4 bg-stardust/50 border border-stardust">
                    <div className="w-12 h-12 rounded-full border-2 border-plasma-green/40 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-plasma-green/60" />
                    </div>
                  </div>
                )}
                <h4 className="text-xl font-display font-bold text-supernova mb-2">
                  {proof.title}
                </h4>
                <p className="text-lunar text-sm leading-relaxed">
                  {proof.description}
                </p>
              </GlowCard>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
