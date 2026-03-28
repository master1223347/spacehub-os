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
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
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
          className="space-y-8"
        >
          <motion.p variants={fadeUp} className="text-sm tracking-[0.3em] uppercase text-space-violet font-medium">
            The Future
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
            Humans and AI — building the future, together.
          </motion.p>

          <motion.div variants={fadeUp} className="pt-6">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-semibold text-lg bg-primary text-primary-foreground hover:shadow-[var(--shadow-glow-lg)] transition-shadow duration-500"
            >
              View Demo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="pt-8">
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
