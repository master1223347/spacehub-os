'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { StaggerChildren, StaggerItem } from '@/components/animation/StaggerChildren';
import { GlowCard } from '@/components/ui/GlowCard';
import { ARCHITECTURE_NODES } from '@/lib/constants';

const glowColorMap: Record<string, 'blue' | 'cyan' | 'green' | 'red' | 'purple'> = {
  '#58a6ff': 'blue',
  '#39d5ff': 'cyan',
  '#3fb950': 'green',
  '#f85149': 'red',
  '#a371f7': 'purple',
};

const nodeDescriptions: Record<string, string> = {
  orchestrator:
    'The central intelligence layer. Claude AI coordinates all agents, manages state, handles natural language queries, and renders the collaborative UI in real-time.',
  cad: 'Drives parametric 3D modeling through Fusion 360 and FreeCAD. Generates, modifies, and validates CAD geometry from natural language instructions.',
  bevy: 'Real-time physics simulation and rendering built in Rust. Powers the MMO collaborative environment with sub-millisecond frame budgets.',
  research:
    'Autonomously searches technical databases, papers, and the open web. Uses Claude Vision to interpret diagrams, schematics, and mission patches.',
  nasa: 'Direct integration with NASA public APIs — APOD, Mars Rover imagery, mission data feeds, and telemetry archives for contextual enrichment.',
  image:
    'Multi-modal analysis pipeline. Classifies satellite imagery, reads engineering drawings, and extracts data from photos of physical hardware.',
};

/** Angle positions for surrounding nodes (evenly spaced around 360 deg) */
const SPOKE_ANGLES = [-90, -18, 54, 126, 198]; // degrees, starting from top

export function ArchitectureSection() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const orchestrator = ARCHITECTURE_NODES.find((n) => n.id === 'orchestrator')!;
  const spokes = ARCHITECTURE_NODES.filter((n) => n.id !== 'orchestrator');

  return (
    <section
      id="architecture"
      className="relative py-24 md:py-36 px-6 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(163,113,247,0.06)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Headlines */}
        <ScrollReveal className="text-center mb-16 md:mb-24">
          <span className="inline-block px-4 py-1.5 rounded-full border border-plasma-purple/30 bg-plasma-purple/5 text-plasma-purple text-sm font-mono tracking-wider mb-6">
            SYSTEM ARCHITECTURE
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-supernova mb-4">
            AI-Native from the Ground Up
          </h2>
          <p className="text-lg md:text-xl text-lunar max-w-2xl mx-auto">
            Six specialized agents orchestrated by Claude AI power every
            interaction
          </p>
        </ScrollReveal>

        {/* Hub-and-spoke diagram */}
        <ScrollReveal delay={0.2} className="mb-16 md:mb-24">
          <div className="relative w-full max-w-3xl mx-auto aspect-square md:aspect-auto md:h-[600px]">
            {/* Animated connection lines (SVG) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 600 600"
              fill="none"
            >
              <defs>
                {spokes.map((node, i) => {
                  const angle = (SPOKE_ANGLES[i] * Math.PI) / 180;
                  const id = `gradient-${node.id}`;
                  return (
                    <linearGradient
                      key={id}
                      id={id}
                      x1="300"
                      y1="300"
                      x2={300 + Math.cos(angle) * 220}
                      y2={300 + Math.sin(angle) * 220}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor={orchestrator.color} stopOpacity={0.6} />
                      <stop offset="100%" stopColor={node.color} stopOpacity={0.6} />
                    </linearGradient>
                  );
                })}
              </defs>

              {spokes.map((node, i) => {
                const angle = (SPOKE_ANGLES[i] * Math.PI) / 180;
                const endX = 300 + Math.cos(angle) * 220;
                const endY = 300 + Math.sin(angle) * 220;
                return (
                  <g key={node.id}>
                    {/* Dashed background line */}
                    <line
                      x1={300}
                      y1={300}
                      x2={endX}
                      y2={endY}
                      stroke={node.color}
                      strokeWidth={1}
                      strokeOpacity={0.15}
                      strokeDasharray="6 6"
                    />
                    {/* Animated data-flow pulse */}
                    <line
                      x1={300}
                      y1={300}
                      x2={endX}
                      y2={endY}
                      stroke={`url(#gradient-${node.id})`}
                      strokeWidth={2}
                      strokeDasharray="8 16"
                      strokeLinecap="round"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        values="0;-48"
                        dur={`${1.5 + i * 0.3}s`}
                        repeatCount="indefinite"
                      />
                    </line>
                  </g>
                );
              })}
            </svg>

            {/* Center node — orchestrator */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setActiveNode('orchestrator')}
                onHoverEnd={() => setActiveNode(null)}
                className="relative cursor-pointer"
              >
                {/* Glow ring */}
                <div
                  className="absolute -inset-3 rounded-2xl opacity-30 blur-xl animate-pulse-glow"
                  style={{
                    background: `radial-gradient(circle, ${orchestrator.color}44, transparent)`,
                    boxShadow: `0 0 30px ${orchestrator.color}33`,
                  }}
                />
                <div
                  className="relative bg-nebula border-2 rounded-2xl px-5 py-4 md:px-8 md:py-5 text-center"
                  style={{ borderColor: `${orchestrator.color}66` }}
                >
                  <div
                    className="text-sm md:text-base font-display font-bold"
                    style={{ color: orchestrator.color }}
                  >
                    {orchestrator.label}
                  </div>
                  <div className="text-xs md:text-sm text-lunar font-mono mt-1">
                    {orchestrator.sublabel}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Surrounding spoke nodes */}
            {spokes.map((node, i) => {
              const angle = (SPOKE_ANGLES[i] * Math.PI) / 180;
              // Responsive radius: 38% on mobile, 37% on desktop (of container)
              const radiusPercent = 37;
              const leftPercent = 50 + Math.cos(angle) * radiusPercent;
              const topPercent = 50 + Math.sin(angle) * radiusPercent;
              const glowColor = glowColorMap[node.color] || 'blue';

              return (
                <motion.div
                  key={node.id}
                  className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${leftPercent}%`,
                    top: `${topPercent}%`,
                  }}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    onHoverStart={() => setActiveNode(node.id)}
                    onHoverEnd={() => setActiveNode(null)}
                    className="cursor-pointer"
                  >
                    <GlowCard
                      glowColor={glowColor}
                      className="!p-3 md:!p-4 text-center min-w-[110px] md:min-w-[140px]"
                    >
                      <div
                        className="text-xs md:text-sm font-display font-semibold"
                        style={{ color: node.color }}
                      >
                        {node.label}
                      </div>
                      <div className="text-[10px] md:text-xs text-lunar font-mono mt-1 whitespace-nowrap">
                        {node.sublabel}
                      </div>
                    </GlowCard>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Detail tooltip panel */}
            <AnimatePresence>
              {activeNode && (
                <motion.div
                  key={activeNode}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full z-30 w-full max-w-md mt-4"
                >
                  <div
                    className="bg-nebula/95 backdrop-blur-sm border border-stardust rounded-xl p-4 text-center"
                    style={{
                      borderColor: `${ARCHITECTURE_NODES.find((n) => n.id === activeNode)?.color}33`,
                    }}
                  >
                    <span
                      className="text-sm font-display font-bold"
                      style={{
                        color: ARCHITECTURE_NODES.find((n) => n.id === activeNode)?.color,
                      }}
                    >
                      {ARCHITECTURE_NODES.find((n) => n.id === activeNode)?.label}
                    </span>
                    <p className="text-xs md:text-sm text-moonlight/80 mt-1 leading-relaxed">
                      {nodeDescriptions[activeNode]}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>

        {/* Blueprint reference image */}
        <ScrollReveal delay={0.3} className="max-w-4xl mx-auto">
          <div className="relative rounded-xl overflow-hidden border border-stardust/50">
            <div className="absolute inset-0 bg-gradient-to-t from-cosmos via-transparent to-cosmos/80 z-10" />
            <Image
              src="/images/image7.png"
              alt="SpaceHub architecture blueprint"
              width={1200}
              height={600}
              className="w-full h-auto opacity-30"
            />
            <div className="absolute bottom-4 left-4 z-20">
              <span className="text-xs font-mono text-lunar/60 tracking-wider">
                ARCHITECTURE BLUEPRINT — REFERENCE DIAGRAM
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
