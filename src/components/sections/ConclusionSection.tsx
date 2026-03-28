import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SpaceSection from "../SpaceSection";

const ConclusionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <SpaceSection id="conclusion">
      {/* Planet horizon */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "250%",
          height: "50%",
          borderRadius: "50% 50% 0 0",
          background: "radial-gradient(ellipse at center top, hsl(225 80% 62% / 0.15) 0%, hsl(265 75% 65% / 0.05) 40%, transparent 70%)",
        }}
      />
      {/* Atmosphere glow */}
      <div
        className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[120%] h-1 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 0%, hsl(225 80% 62% / 0.4) 30%, hsl(190 80% 55% / 0.3) 50%, hsl(265 75% 65% / 0.4) 70%, transparent 100%)",
          filter: "blur(8px)",
        }}
      />

      <div ref={ref} className="text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="space-y-7"
        >
          <motion.p variants={fadeUp} className="text-sm tracking-[0.3em] uppercase text-space-violet font-medium">
            Section 5 · Conclusion
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-8xl font-display font-bold leading-tight"
          >
            The operating system
            <br />
            for <span className="text-space-glow text-glow">space engineering</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Faster iteration, verified and safe AI, global collaboration over competition, and open access to engineering knowledge.
          </motion.p>

          <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="glass-card rounded-xl p-5 text-left">
              <h3 className="font-display font-semibold text-base mb-2">Philosophy</h3>
              <p className="text-sm text-muted-foreground">
                AI should empower, not replace. Engineers stay curious, creative, and in control.
              </p>
            </div>
            <div className="glass-card rounded-xl p-5 text-left">
              <h3 className="font-display font-semibold text-base mb-2">Open Source Edge</h3>
              <p className="text-sm text-muted-foreground">
                Open systems prevent duplicated work, enable public scrutiny, and improve mission-critical code over time, as proven by open orbital code used in real missions.
              </p>
            </div>
          </motion.div>

          <motion.p variants={fadeUp} className="text-base md:text-lg font-display max-w-3xl mx-auto">
            We&apos;re not building AI tools. We&apos;re building the operating system that coordinates humans, AI, simulation, and real-world execution.
          </motion.p>

          <motion.p variants={fadeUp} className="text-2xl md:text-3xl font-display font-semibold max-w-3xl mx-auto leading-snug">
            This isn&apos;t just a tool. It&apos;s the environment where the future of engineering is built.
          </motion.p>

          <motion.div variants={fadeUp} className="pt-4">
            <p className="text-xs text-muted-foreground tracking-widest uppercase">
              SpaceHub OS · 2026
            </p>
          </motion.div>
        </motion.div>
      </div>
    </SpaceSection>
  );
};

export default ConclusionSection;
