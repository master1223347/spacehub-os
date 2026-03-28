import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SpaceSection from "../SpaceSection";

const FusionSection = () => {
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

  const features = [
    { title: "Embedded CAD Agents", desc: "AI runs inside Fusion and SolidWorks, directly in the design flow." },
    { title: "Iteration, Not Replacement", desc: "Engineers modify designs faster while staying fully in control." },
    { title: "Live Multiplayer Models", desc: "CAD streams into a shared world with updates every second." },
    { title: "Mass Collaboration", desc: "100+ engineers can view, edit, and communicate in real time." },
  ];

  return (
    <SpaceSection id="fusion">
      {/* Orbiting ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-space-glow/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border border-space-violet/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div ref={ref}>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          {/* Left: text */}
          <div className="space-y-6">
            <motion.p variants={fadeUp} className="text-sm tracking-[0.3em] uppercase text-space-violet font-medium">
              Section 2 · Fusion / CAD Agent
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-display font-bold">
              Design becomes
              <br />
              <span className="text-space-glow text-glow">real-time and collaborative</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground max-w-md">
              You turned CAD from a static tool into a live system.
            </motion.p>
            <motion.p variants={fadeUp} className="text-xl md:text-2xl font-display font-semibold max-w-lg">
              CAD is no longer a file. It&apos;s a shared, living system.
            </motion.p>
          </div>

          {/* Right: feature cards */}
          <div className="space-y-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="glass-card rounded-xl p-6 group hover:border-space-glow/30 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-space-glow mt-2 animate-pulse-glow" style={{ animationDelay: `${i * 0.5}s` }} />
                  <div>
                    <h3 className="font-display font-semibold text-lg">{f.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SpaceSection>
  );
};

export default FusionSection;
