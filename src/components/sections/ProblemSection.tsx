import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SpaceSection from "../SpaceSection";

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <SpaceSection id="problem">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />

      {/* Planet horizon glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[40%] rounded-[50%] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center top, hsl(225 80% 62% / 0.12) 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="space-y-8"
        >
          <motion.p variants={fadeUp} className="text-sm md:text-base tracking-[0.3em] uppercase text-space-glow font-medium">
            The Problem
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-glow leading-tight"
          >
            Engineering is
            <br />
            too slow
          </motion.h1>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 md:gap-6 pt-4">
            {["Slow iteration cycles", "Fragmented workflows", "Unsafe AI reliance"].map((point) => (
              <div key={point} className="glass-card px-5 py-3 rounded-lg">
                <span className="text-sm md:text-base text-muted-foreground">{point}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="pt-8">
            <div className="inline-block">
              <div className="h-px w-16 bg-space-glow/30 mx-auto mb-6" />
              <p className="text-xl md:text-2xl font-display font-semibold">
                We built{" "}
                <span className="text-space-glow text-glow">SpaceHub OS</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SpaceSection>
  );
};

export default ProblemSection;
