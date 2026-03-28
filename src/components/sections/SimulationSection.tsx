import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SpaceSection from "../SpaceSection";

const SimulationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  const stats = [
    { value: "1K+", label: "Parallel simulations" },
    { value: "Gaussian", label: "Large-system modeling" },
    { value: "Multi-path", label: "Trajectory planning" },
    { value: "Human-led", label: "Control at every step" },
  ];

  return (
    <SpaceSection id="simulation">
      {/* Orbit arcs */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[0, 60, 120].map((deg) => (
          <motion.div
            key={deg}
            className="absolute w-[600px] h-[300px] md:w-[900px] md:h-[450px] rounded-full border border-space-cyan/8"
            style={{ transform: `rotate(${deg}deg)` }}
            animate={isInView ? { opacity: [0, 0.6, 0.3] } : { opacity: 0 }}
            transition={{ duration: 2, delay: deg / 200 }}
          />
        ))}
        {/* Simulation nodes */}
        {[
          { x: "20%", y: "30%" }, { x: "75%", y: "25%" },
          { x: "15%", y: "70%" }, { x: "80%", y: "65%" },
          { x: "50%", y: "15%" }, { x: "45%", y: "80%" },
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-space-cyan"
            style={{ left: pos.x, top: pos.y }}
            animate={isInView ? {
              opacity: [0, 1, 0.5],
              scale: [0.5, 1.2, 1],
            } : { opacity: 0 }}
            transition={{ duration: 1.5, delay: i * 0.15, repeat: Infinity, repeatDelay: 3 }}
          />
        ))}
      </div>

      <div ref={ref} className="text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="space-y-10"
        >
          <motion.p variants={fadeUp} className="text-sm tracking-[0.3em] uppercase text-space-cyan font-medium">
            Section 3 · AI Physics Simulation Agent
          </motion.p>

          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-display font-bold">
            Simulate before
            <br />
            <span className="text-space-cyan" style={{ textShadow: "0 0 30px hsl(190 80% 55% / 0.5)" }}>
              you build
            </span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            You don&apos;t test once. You test thousands of times instantly.
          </motion.p>

          <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="glass-card rounded-xl p-5 text-center">
                <div className="text-2xl md:text-3xl font-display font-bold text-space-cyan">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1 tracking-wide uppercase">{s.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              "Orbital trajectory simulation at scale.",
              "System behavior modeling across mission states.",
              "Failure prediction before physical deployment.",
            ].map((point) => (
              <div key={point} className="glass-card rounded-xl p-4">
                <p className="text-sm text-muted-foreground">{point}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              "AI is specialized by domain.",
              "AI is sandboxed and never fully autonomous.",
              "Humans remain in control through every decision.",
            ].map((point) => (
              <div key={point} className="glass-card rounded-xl p-4">
                <p className="text-sm text-muted-foreground">{point}</p>
              </div>
            ))}
          </motion.div>

          <motion.p variants={fadeUp} className="text-base md:text-lg text-muted-foreground">
            Millions of simulations run before real deployment.
          </motion.p>

          <motion.p variants={fadeUp} className="text-xl md:text-2xl font-display font-semibold">
            We don&apos;t trust AI blindly. We verify it at scale.
          </motion.p>
        </motion.div>
      </div>
    </SpaceSection>
  );
};

export default SimulationSection;
