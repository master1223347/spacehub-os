'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import {
  APPLICATION_PILLARS,
  CAD_WORKFLOW_STEPS,
  EDTECH_EXPANSION_POINTS,
  FOUNDATION_CLAIMS,
  IMMERSION_USE_CASES,
  MICROMODEL_GUARDRAILS,
  PITCH_DECK_SLIDES,
  PITCH_RESEARCH_STATS,
  RUST_SIGNAL_EXAMPLES,
  type ApplicationPillar,
  type DeckSlide,
} from '@/lib/constants';
import { HeroScene } from '@/components/three/scenes/HeroScene';

const SLIDE_BACKGROUNDS = [
  'bg-[radial-gradient(circle_at_20%_20%,rgba(57,213,255,0.28)_0%,transparent_40%),radial-gradient(circle_at_80%_30%,rgba(163,113,247,0.22)_0%,transparent_45%),linear-gradient(180deg,rgba(5,8,18,0.88)_0%,rgba(7,10,20,0.9)_100%)]',
  'bg-[radial-gradient(ellipse_at_top,rgba(248,81,73,0.1)_0%,transparent_55%),linear-gradient(180deg,rgba(7,9,15,0.84)_0%,rgba(10,10,15,0.9)_100%)]',
  'bg-[radial-gradient(ellipse_at_top_right,rgba(88,166,255,0.15)_0%,transparent_60%),linear-gradient(180deg,rgba(6,10,18,0.82)_0%,rgba(10,10,15,0.9)_100%)]',
  'bg-[radial-gradient(ellipse_at_center,rgba(57,213,255,0.14)_0%,transparent_55%),linear-gradient(180deg,rgba(6,13,18,0.82)_0%,rgba(10,10,15,0.9)_100%)]',
  'bg-[radial-gradient(ellipse_at_top_left,rgba(63,185,80,0.12)_0%,transparent_60%),linear-gradient(180deg,rgba(7,16,15,0.84)_0%,rgba(10,10,15,0.9)_100%)]',
  'bg-[radial-gradient(ellipse_at_top,rgba(163,113,247,0.16)_0%,transparent_60%),linear-gradient(180deg,rgba(8,10,20,0.84)_0%,rgba(10,10,15,0.9)_100%)]',
];

const EASE_STANDARD: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const PILLAR_IMAGES: Record<ApplicationPillar['id'], string> = {
  mmo: '/images/image4.png',
  coordination: '/images/image5.png',
  'ar-ai': '/images/image2.png',
  education: '/images/image7.png',
};
const HERO_EMBED_NODES = [
  { id: 'a', x: 74, y: 62, color: '#58a6ff' },
  { id: 'b', x: 176, y: 34, color: '#39d5ff' },
  { id: 'c', x: 296, y: 70, color: '#3fb950' },
  { id: 'd', x: 360, y: 148, color: '#a371f7' },
  { id: 'e', x: 268, y: 212, color: '#f0883e' },
  { id: 'f', x: 144, y: 208, color: '#f85149' },
  { id: 'g', x: 52, y: 146, color: '#39d5ff' },
];
const HERO_EMBED_LINKS: Array<[number, number]> = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 0], [1, 4], [2, 5], [0, 3],
];

function clampIndex(next: number, total: number) {
  return Math.max(0, Math.min(total - 1, next));
}

function useSlideObserver(
  containerRef: React.RefObject<HTMLDivElement | null>,
  slideRefs: React.RefObject<(HTMLElement | null)[]>,
  setActiveIndex: (index: number) => void,
) {
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length === 0) return;

        visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const mostVisible = visibleEntries[0];
        const index = Number((mostVisible.target as HTMLElement).dataset.slideIndex);

        if (!Number.isNaN(index)) setActiveIndex(index);
      },
      {
        root,
        threshold: [0.4, 0.6, 0.8],
      },
    );

    slideRefs.current.forEach((slide) => {
      if (slide) observer.observe(slide);
    });

    return () => observer.disconnect();
  }, [containerRef, slideRefs, setActiveIndex]);
}

interface SlideContentProps {
  slide: DeckSlide;
  isActive: boolean;
  shouldReduceMotion: boolean;
}

function SlideHeader({ slide, isActive, shouldReduceMotion }: SlideContentProps) {
  const transition = shouldReduceMotion
    ? { duration: 0.15 }
    : { duration: 0.45, ease: EASE_STANDARD };

  return (
    <motion.div
      initial={false}
      animate={{
        opacity: isActive ? 1 : 0.42,
        y: shouldReduceMotion || isActive ? 0 : 6,
      }}
      transition={transition}
      className="mb-6 md:mb-7"
    >
      <p className="text-xs md:text-sm font-mono tracking-[0.18em] uppercase text-plasma-cyan/85 mb-4">
        {slide.eyebrow}
      </p>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-supernova leading-[1.03]">
        {slide.headline}
      </h2>
      {slide.subheadline && (
        <p className="mt-3 text-base md:text-xl text-moonlight/80 max-w-4xl">
          {slide.subheadline}
        </p>
      )}
    </motion.div>
  );
}

function AnimatedPoints({
  points,
  isActive,
  shouldReduceMotion,
  listClassName,
  itemClassName,
}: {
  points: string[];
  isActive: boolean;
  shouldReduceMotion: boolean;
  listClassName?: string;
  itemClassName?: string;
}) {
  const listVariants = useMemo(
    () => ({
      inactive: { transition: { staggerChildren: 0 } },
      active: {
        transition: {
          staggerChildren: shouldReduceMotion ? 0 : 0.1,
          delayChildren: shouldReduceMotion ? 0 : 0.08,
        },
      },
    }),
    [shouldReduceMotion],
  );

  const itemVariants = useMemo(
    () => ({
      inactive: {
        opacity: 0.45,
        y: shouldReduceMotion ? 0 : 6,
      },
      active: {
        opacity: 1,
        y: 0,
        transition: {
          duration: shouldReduceMotion ? 0.15 : 0.4,
          ease: EASE_STANDARD,
        },
      },
    }),
    [shouldReduceMotion],
  );

  return (
    <motion.ul
      initial={false}
      animate={isActive ? 'active' : 'inactive'}
      variants={listVariants}
      className={listClassName ?? 'space-y-4 text-base md:text-xl text-moonlight/90'}
    >
      {points.map((point) => (
        <motion.li
          key={point}
          variants={itemVariants}
          className={`flex items-start gap-3 leading-relaxed ${itemClassName ?? ''}`}
        >
          <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-plasma-cyan" />
          <span>{point}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
}

function HeroIntroSlide(props: SlideContentProps) {
  const { slide, isActive, shouldReduceMotion } = props;

  return (
    <div className="relative min-h-[72vh] flex items-center justify-center">
      <div className="absolute inset-0 pointer-events-none">
        <motion.svg
          viewBox="0 0 420 260"
          className="absolute left-1/2 top-1/2 h-[min(56vh,420px)] w-[min(92vw,760px)] -translate-x-1/2 -translate-y-1/2 opacity-45"
          initial={false}
          animate={{ opacity: isActive ? 0.45 : 0.2 }}
          transition={{ duration: 0.35 }}
        >
          {HERO_EMBED_LINKS.map(([fromIndex, toIndex], index) => {
            const from = HERO_EMBED_NODES[fromIndex];
            const to = HERO_EMBED_NODES[toIndex];
            return (
              <motion.line
                key={`embed-link-${index}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="rgba(201,209,217,0.16)"
                strokeWidth="1.2"
                initial={false}
                animate={{ opacity: isActive ? [0.14, 0.34, 0.14] : 0.1 }}
                transition={{ duration: 3.8 + index * 0.25, repeat: Infinity, ease: 'easeInOut' }}
              />
            );
          })}

          {HERO_EMBED_NODES.map((node, index) => (
            <motion.circle
              key={`embed-node-${node.id}`}
              cx={node.x}
              cy={node.y}
              r="4.6"
              fill={node.color}
              initial={false}
              animate={shouldReduceMotion ? { opacity: isActive ? 0.85 : 0.45 } : { r: [4.2, 6.2, 4.2], opacity: [0.45, 0.95, 0.45] }}
              transition={shouldReduceMotion ? { duration: 0.2 } : { duration: 2 + index * 0.15, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </motion.svg>

        {!shouldReduceMotion && (
          <>
            <motion.div
              className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-plasma-cyan/25"
              animate={{ rotate: 360 }}
              transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-plasma-purple/25"
              animate={{ rotate: -360 }}
              transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
            />
          </>
        )}
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-7 items-stretch">
        <motion.div
          initial={false}
          animate={{
            opacity: isActive ? 1 : 0.55,
            y: shouldReduceMotion || isActive ? 0 : 8,
          }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.5 }}
          className="lg:col-span-12 text-center"
        >
          <p className="text-xs md:text-sm font-mono tracking-[0.24em] uppercase text-plasma-cyan/90 mb-5">
            {slide.eyebrow}
          </p>
          <motion.h2
            initial={false}
            animate={{
              opacity: isActive ? 1 : 0.7,
              letterSpacing: isActive ? '0.08em' : '0.04em',
            }}
            transition={{ duration: shouldReduceMotion ? 0.15 : 0.6 }}
            className="text-6xl md:text-8xl lg:text-[8rem] leading-[0.95] font-display font-black text-supernova text-glow-cyan"
          >
            {slide.headline}
          </motion.h2>
          <p className="mt-4 text-2xl md:text-4xl font-display font-semibold text-plasma-cyan">
            {slide.subheadline}
          </p>
        </motion.div>
        </div>
      </div>
    </div>
  );
}

function ProblemSolutionSlide(props: SlideContentProps) {
  const { slide, isActive, shouldReduceMotion } = props;

  return (
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
      <div className="lg:col-span-8">
        <SlideHeader {...props} />
        <AnimatedPoints points={slide.points} isActive={isActive} shouldReduceMotion={shouldReduceMotion} />
        <div className="mt-7 grid sm:grid-cols-2 gap-3">
          {PITCH_RESEARCH_STATS.map((stat) => (
            <motion.div
              key={stat.label}
              initial={false}
              animate={{ opacity: isActive ? 1 : 0.5 }}
              transition={{ duration: shouldReduceMotion ? 0.15 : 0.35 }}
              className="rounded-xl border border-stardust bg-nebula/75 p-4"
            >
              <p className="text-xl md:text-2xl font-mono font-bold text-plasma-cyan">{stat.value}</p>
              <p className="text-sm text-supernova mt-1">{stat.label}</p>
              <p className="text-xs text-lunar mt-2 leading-relaxed">{stat.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.aside
        initial={false}
        animate={{
          opacity: isActive ? 1 : 0.5,
          y: shouldReduceMotion || isActive ? 0 : 8,
        }}
        transition={{ duration: shouldReduceMotion ? 0.15 : 0.45 }}
        className="lg:col-span-4 rounded-2xl border border-stardust bg-nebula/80 backdrop-blur-sm p-6 md:p-7"
      >
        <p className="text-xs font-mono tracking-[0.2em] text-plasma-green uppercase mb-3">
          Transition
        </p>
        <div className="relative h-40 w-full rounded-xl overflow-hidden border border-stardust/60 mb-4">
          <Image
            src="/images/image3.png"
            alt="Aerospace team working with immersive engineering systems"
            fill
            sizes="(max-width: 1024px) 100vw, 28vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cosmos/60 via-transparent to-cosmos/20" />
        </div>
        <p className="text-2xl md:text-3xl font-display font-semibold text-supernova mb-5">
          {slide.transitionLine}
        </p>
        <p className="text-moonlight/90 leading-relaxed">
          {slide.footerNote}
        </p>
      </motion.aside>
    </div>
  );
}

function FusionCadSlide(props: SlideContentProps) {
  const { slide, isActive, shouldReduceMotion } = props;

  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-8">
          <SlideHeader {...props} />
          <AnimatedPoints points={slide.points} isActive={isActive} shouldReduceMotion={shouldReduceMotion} />
        </div>
        <motion.aside
          initial={false}
          animate={{
            opacity: isActive ? 1 : 0.5,
            y: shouldReduceMotion || isActive ? 0 : 8,
          }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.45 }}
          className="lg:col-span-4 rounded-2xl border border-plasma-blue/30 bg-plasma-blue/10 p-6 md:p-7"
        >
          <p className="text-xs font-mono tracking-[0.2em] text-plasma-blue uppercase mb-3">
            Key Line
          </p>
          <div className="mb-4 space-y-3">
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-plasma-blue/25">
              <Image
                src="/images/image1.png"
                alt="Collaborative CAD interface"
                fill
                sizes="(max-width: 1024px) 100vw, 26vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-plasma-blue/25">
                <Image
                  src="/images/image2.png"
                  alt="Engineers using AR-assisted design tooling"
                  fill
                  sizes="(max-width: 1024px) 48vw, 13vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-plasma-blue/25">
                <Image
                  src="/images/image6.png"
                  alt="3D stereoscopic environment for design collaboration"
                  fill
                  sizes="(max-width: 1024px) 48vw, 13vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <p className="text-2xl md:text-3xl font-display font-semibold text-supernova leading-tight">
            {slide.keyLine}
          </p>
        </motion.aside>
      </div>

      <motion.div
        initial={false}
        animate={{
          opacity: isActive ? 1 : 0.5,
          y: shouldReduceMotion || isActive ? 0 : 8,
        }}
        transition={{ duration: shouldReduceMotion ? 0.15 : 0.45 }}
        className="rounded-2xl border border-plasma-cyan/25 bg-nebula/80 p-4 md:p-5"
      >
        <p className="text-xs font-mono tracking-[0.2em] text-plasma-cyan uppercase mb-4">
          SpaceHub MCP Workflow (CAD + Bevy MMO + Physment)
        </p>
        <div className="grid md:grid-cols-3 gap-3">
          {CAD_WORKFLOW_STEPS.map((step, index) => (
            <div key={step.title} className="rounded-xl border border-stardust/80 bg-cosmos/50 p-3">
              <p className="text-xs font-mono text-plasma-cyan/80 tracking-widest mb-1">STEP {index + 1}</p>
              <p className="text-sm text-supernova font-semibold">{step.title}</p>
              <p className="text-xs text-lunar mt-1 leading-relaxed">{step.detail}</p>
            </div>
          ))}
        </div>
        <p className="text-xs md:text-sm text-lunar mt-4">
          AI agents remain available both in native CAD tools and inside the MMO workspace for
          fast iteration, interpretation, and design decisions.
        </p>
      </motion.div>
    </div>
  );
}

function PhysmentSlide(props: SlideContentProps) {
  const { slide, isActive, shouldReduceMotion } = props;
  const capabilityPoints = slide.points.slice(0, 3);
  const safetyPoints = slide.points.slice(3);

  return (
    <div className="space-y-3">
      <SlideHeader {...props} />
      <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
        <motion.div
          initial={false}
          animate={{
            opacity: isActive ? 1 : 0.5,
            y: shouldReduceMotion || isActive ? 0 : 8,
          }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.45 }}
          className="lg:col-span-7 rounded-2xl border border-plasma-cyan/25 bg-nebula/75 backdrop-blur-sm p-5 md:p-6"
        >
          <p className="text-xs font-mono tracking-[0.2em] text-plasma-cyan uppercase mb-3">
            Capabilities
          </p>
          <div className="relative h-28 md:h-32 w-full rounded-xl overflow-hidden border border-plasma-cyan/25 mb-4">
            <Image
              src="/images/image5.png"
              alt="Lunar terrain used for simulation validation"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cosmos/70 via-transparent to-cosmos/20" />
          </div>
          <AnimatedPoints
            points={capabilityPoints}
            isActive={isActive}
            shouldReduceMotion={shouldReduceMotion}
            listClassName="space-y-3 text-sm md:text-base text-moonlight/90"
          />
        </motion.div>

        <motion.div
          initial={false}
          animate={{
            opacity: isActive ? 1 : 0.5,
            y: shouldReduceMotion || isActive ? 0 : 8,
          }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.45, delay: shouldReduceMotion ? 0 : 0.05 }}
          className="lg:col-span-5 rounded-2xl border border-plasma-green/25 bg-plasma-green/10 p-5 md:p-6"
        >
          <p className="text-xs font-mono tracking-[0.2em] text-plasma-green uppercase mb-3">
            Safety Philosophy
          </p>
          <div className="relative h-24 md:h-28 w-full rounded-xl overflow-hidden border border-plasma-green/30 mb-4">
            <Image
              src="/images/image7.png"
              alt="Advanced system modeling and verification workspace"
              fill
              sizes="(max-width: 1024px) 100vw, 35vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cosmos/65 via-transparent to-transparent" />
          </div>
          <AnimatedPoints
            points={safetyPoints}
            isActive={isActive}
            shouldReduceMotion={shouldReduceMotion}
            listClassName="space-y-3 text-sm md:text-base text-moonlight/90"
          />
          <div className="mt-3 rounded-xl border border-plasma-green/25 bg-cosmos/40 p-3">
            <p className="text-xs font-mono text-plasma-green/90 tracking-[0.2em] uppercase mb-2">
              Micromodel Guardrails
            </p>
            <ul className="space-y-2">
              {MICROMODEL_GUARDRAILS.slice(0, 2).map((guardrail) => (
                <li key={guardrail} className="text-[11px] md:text-xs text-lunar leading-relaxed">
                  • {guardrail}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-lg md:text-xl font-display font-semibold text-supernova">
            {slide.keyLine}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function ApplicationsSlide(props: SlideContentProps) {
  const { slide, isActive, shouldReduceMotion } = props;
  const [activePillarId, setActivePillarId] = useState<ApplicationPillar['id']>('mmo');
  const activePillar = useMemo(
    () => APPLICATION_PILLARS.find((pillar) => pillar.id === activePillarId) ?? APPLICATION_PILLARS[0],
    [activePillarId],
  );

  return (
    <div className="space-y-3">
      <SlideHeader {...props} />
      <div className="rounded-2xl border border-stardust bg-nebula/80 backdrop-blur-sm p-4 md:p-5">
        <div className="flex flex-wrap gap-2 md:gap-3 mb-4">
          {APPLICATION_PILLARS.map((pillar) => {
            const selected = pillar.id === activePillar.id;
            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActivePillarId(pillar.id)}
                className={`rounded-full border px-3 py-1.5 text-xs md:text-sm transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plasma-cyan/70 ${
                  selected
                    ? 'border-plasma-cyan bg-plasma-cyan/15 text-supernova'
                    : 'border-stardust text-lunar hover:border-plasma-cyan/40 hover:text-moonlight'
                }`}
                aria-pressed={selected}
              >
                {pillar.title}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar.id}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: shouldReduceMotion ? 0.15 : 0.3 }}
            className="grid lg:grid-cols-12 gap-6"
          >
            <div className="lg:col-span-5">
              <h3 className="text-xl md:text-2xl font-display font-semibold text-supernova mb-3">
                {activePillar.title}
              </h3>
              <div className="relative h-32 md:h-36 w-full rounded-xl overflow-hidden border border-stardust/70 mb-3">
                <Image
                  src={PILLAR_IMAGES[activePillar.id]}
                  alt={`${activePillar.title} visual`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 36vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos/65 via-transparent to-transparent" />
              </div>
              <p className="text-sm md:text-base text-moonlight/90 leading-relaxed mb-3">{activePillar.summary}</p>
              <p className="text-plasma-cyan font-display text-base md:text-lg">
                {activePillar.impactLine}
              </p>
            </div>
            <div className="lg:col-span-7">
              <AnimatedPoints
                points={activePillar.bullets}
                isActive={isActive}
                shouldReduceMotion={shouldReduceMotion}
                listClassName="space-y-3 text-sm md:text-base text-moonlight/90"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.p
        initial={false}
        animate={{ opacity: isActive ? 1 : 0.5 }}
        transition={{ duration: shouldReduceMotion ? 0.15 : 0.35 }}
        className="text-center text-lg md:text-xl font-display font-semibold text-plasma-green"
      >
        {slide.keyLine}
      </motion.p>
      <div className="grid lg:grid-cols-2 gap-3">
        <div className="rounded-xl border border-stardust bg-nebula/80 p-3">
          <p className="text-xs font-mono text-plasma-cyan tracking-[0.2em] uppercase mb-2">
            5 Tiers of Immersion
          </p>
          <ul className="space-y-1.5 max-h-28 overflow-y-auto pr-1">
            {IMMERSION_USE_CASES.map((tier) => (
              <li key={tier} className="text-[11px] md:text-xs text-lunar leading-relaxed">
                {tier}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-stardust bg-nebula/80 p-3">
          <p className="text-xs font-mono text-plasma-green tracking-[0.2em] uppercase mb-2">
            EdTech + Workforce Expansion
          </p>
          <ul className="space-y-1.5 max-h-28 overflow-y-auto pr-1">
            {EDTECH_EXPANSION_POINTS.map((point) => (
              <li key={point} className="text-[11px] md:text-xs text-lunar leading-relaxed">
                • {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ConclusionSlide(props: SlideContentProps) {
  const { slide, isActive, shouldReduceMotion } = props;
  const philosophy = ['Curious', 'Creative', 'In control'];

  return (
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      <div className="lg:col-span-7">
        <SlideHeader {...props} />
        <AnimatedPoints points={slide.points} isActive={isActive} shouldReduceMotion={shouldReduceMotion} />
      </div>

      <motion.aside
        initial={false}
        animate={{
          opacity: isActive ? 1 : 0.5,
          y: shouldReduceMotion || isActive ? 0 : 8,
        }}
        transition={{ duration: shouldReduceMotion ? 0.15 : 0.45 }}
        className="lg:col-span-5 space-y-4 max-h-[68vh] overflow-y-auto pr-1"
      >
        <div className="rounded-2xl border border-plasma-purple/30 bg-plasma-purple/10 p-6">
          <p className="text-xs font-mono tracking-[0.2em] text-plasma-purple uppercase mb-3">
            Philosophy
          </p>
          <p className="text-moonlight/90 mb-4">{slide.footerNote}</p>
          <div className="flex flex-wrap gap-2">
            {philosophy.map((item) => (
              <span
                key={item}
                className="rounded-full border border-plasma-purple/30 bg-nebula px-3 py-1.5 text-sm text-moonlight"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-plasma-green/30 bg-plasma-green/10 p-6">
          <p className="text-xs font-mono tracking-[0.2em] text-plasma-green uppercase mb-3">
            Open Source Advantage
          </p>
          <p className="text-moonlight/90 leading-relaxed">
            {slide.keyLine}
          </p>
        </div>

        <div className="rounded-2xl border border-stardust bg-nebula/90 p-6">
          <p className="text-xs font-mono tracking-[0.2em] text-plasma-cyan uppercase mb-3">
            Research Foundation
          </p>
          <ul className="space-y-2">
            {FOUNDATION_CLAIMS.map((claim) => (
              <li key={claim} className="text-xs md:text-sm text-lunar leading-relaxed">
                • {claim}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-stardust bg-nebula/90 p-6">
          <p className="text-xs font-mono tracking-[0.2em] text-plasma-orange uppercase mb-3">
            Rust Momentum Signals
          </p>
          <ul className="space-y-2">
            {RUST_SIGNAL_EXAMPLES.map((example) => (
              <li key={example} className="text-xs md:text-sm text-lunar leading-relaxed">
                • {example}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-plasma-cyan/35 bg-plasma-cyan/10 p-6">
          <p className="text-xs font-mono tracking-[0.2em] text-plasma-cyan uppercase mb-3">
            Core Framing
          </p>
          <p className="text-xl md:text-2xl leading-tight font-display text-supernova">
            We are not building AI tools; we are building the coordination system for humans + AI +
            simulation + reality.
          </p>
        </div>
      </motion.aside>
    </div>
  );
}

function SlideBody(props: SlideContentProps) {
  switch (props.slide.id) {
    case 'hero-intro':
      return <HeroIntroSlide {...props} />;
    case 'problem-solution':
      return <ProblemSolutionSlide {...props} />;
    case 'fusion-cad':
      return <FusionCadSlide {...props} />;
    case 'physment-sim':
      return <PhysmentSlide {...props} />;
    case 'applications':
      return <ApplicationsSlide {...props} />;
    case 'conclusion':
      return <ConclusionSlide {...props} />;
    default:
      return null;
  }
}

export function PitchDeck() {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);

  useSlideObserver(containerRef, slideRefs, setActiveIndex);

  const goToSlide = (requestedIndex: number) => {
    const index = clampIndex(requestedIndex, PITCH_DECK_SLIDES.length);
    const target = slideRefs.current[index];
    if (!target) return;

    target.scrollIntoView({
      behavior: shouldReduceMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable)
      ) {
        return;
      }

      let nextIndex = activeIndex;

      if (event.key === 'ArrowDown' || event.key === 'PageDown') {
        nextIndex = clampIndex(activeIndex + 1, PITCH_DECK_SLIDES.length);
      } else if (event.key === 'ArrowUp' || event.key === 'PageUp') {
        nextIndex = clampIndex(activeIndex - 1, PITCH_DECK_SLIDES.length);
      } else if (event.key === ' ' || event.key === 'Spacebar') {
        event.preventDefault();
        nextIndex = clampIndex(activeIndex + (event.shiftKey ? -1 : 1), PITCH_DECK_SLIDES.length);
      } else {
        return;
      }

      if (nextIndex !== activeIndex) {
        event.preventDefault();
        goToSlide(nextIndex);
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [activeIndex, shouldReduceMotion]);

  return (
    <main className="relative h-screen overflow-hidden bg-cosmos">
      <h1 className="sr-only">SpaceHub Pitch Deck</h1>

      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <HeroScene />
      </div>

      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
        <div className="rounded-full border border-stardust bg-nebula/80 backdrop-blur-sm px-4 py-2 text-xs md:text-sm font-mono tracking-wider text-lunar">
          Slide {activeIndex + 1} / {PITCH_DECK_SLIDES.length}
        </div>
      </div>

      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {PITCH_DECK_SLIDES.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={slide.id}
              type="button"
              aria-label={`Go to slide ${index + 1}: ${slide.headline}`}
              aria-current={isActive ? 'true' : undefined}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plasma-cyan/70 ${
                isActive
                  ? 'bg-plasma-cyan border-plasma-cyan scale-110'
                  : 'bg-transparent border-lunar/50 hover:border-plasma-cyan/70'
              }`}
            />
          );
        })}
      </div>

      <div
        ref={containerRef}
        className="deck-scroll h-screen overflow-y-auto snap-y snap-mandatory"
      >
        {PITCH_DECK_SLIDES.map((slide, index) => {
          const isActive = index === activeIndex;
          const shouldUseTallLayout = slide.id === 'physment-sim' || slide.id === 'applications';
          const sectionAlignment = shouldUseTallLayout ? 'items-start' : 'items-center';
          const contentContainerClass = shouldUseTallLayout
            ? 'w-full max-w-7xl mx-auto max-h-[calc(100vh-6.5rem)] overflow-y-auto pr-1'
            : 'w-full max-w-7xl mx-auto';

          return (
            <section
              key={slide.id}
              ref={(element) => {
                slideRefs.current[index] = element;
              }}
              data-slide-index={index}
              className={`relative h-screen snap-start overflow-hidden flex ${sectionAlignment} px-6 md:px-10 lg:px-14 py-16 md:py-20 ${SLIDE_BACKGROUNDS[index]}`}
            >
              <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_24px,rgba(255,255,255,0.025)_25px)] opacity-45" />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-cosmos/30 to-cosmos/70" />
              <div className={`relative z-10 ${contentContainerClass}`}>
                <SlideBody slide={slide} isActive={isActive} shouldReduceMotion={!!shouldReduceMotion} />
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
