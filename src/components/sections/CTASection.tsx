'use client';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import Image from 'next/image';
import { motion } from 'framer-motion';

const footerLinks = ['GitHub', 'Documentation', 'Contact'];

export function CTASection() {
  return (
    <section
      id="cta"
      className="relative py-32 md:py-40 overflow-hidden bg-cosmos"
    >
      {/* Top fade-in gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cosmos to-transparent z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Headline */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-supernova tracking-wide">
              Join the Mission
            </h2>
          </div>
        </ScrollReveal>

        {/* CTA Button */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-col items-center gap-8 mb-24">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center justify-center px-12 py-5 text-xl font-display font-bold text-supernova tracking-wider rounded-xl bg-gradient-to-r from-plasma-blue to-plasma-cyan animate-pulse-glow transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(57,213,255,0.4),0_0_80px_rgba(88,166,255,0.2)]"
            >
              <span className="relative z-10">Launch SpaceHub</span>
            </motion.a>
            <p className="text-lunar font-mono text-sm tracking-widest">
              Open Source &middot; AI-Native &middot; Built in Rust
            </p>
          </div>
        </ScrollReveal>

        {/* Team photo */}
        <ScrollReveal delay={0.3}>
          <div className="max-w-3xl mx-auto mb-24">
            <div className="relative rounded-2xl overflow-hidden border border-stardust group">
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src="/images/image2.png"
                  alt="The SpaceHub Team"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos/80 via-transparent to-cosmos/20" />
              </div>
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <p className="text-moonlight font-display text-lg">
                  The SpaceHub Team
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Footer links */}
        <ScrollReveal delay={0.4}>
          <div className="text-center">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-8">
              {footerLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-lunar hover:text-plasma-cyan transition-colors duration-300 font-mono text-sm tracking-wider"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-stardust to-transparent mx-auto mb-6" />
            <p className="text-lunar/50 font-mono text-xs tracking-widest">
              SpaceHub 2026
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
