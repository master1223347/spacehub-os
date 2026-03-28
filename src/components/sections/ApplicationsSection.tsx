import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SpaceSection from "../SpaceSection";

const ApplicationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const apps = [
    { icon: "🌐", title: "MMO Collaboration", desc: "Thousands of engineers in one shared space" },
    { icon: "🏭", title: "Industry Partners", desc: "Integrate with Boeing, SpaceX, and beyond" },
    { icon: "🎓", title: "Education", desc: "Train the next generation of space engineers" },
    { icon: "🤖", title: "AR & Robotics", desc: "Bridge digital design to physical reality" },
    { icon: "🌍", title: "Global Coordination", desc: "Real-time sync across continents and orbits" },
  ];

  return (
    <SpaceSection id="applications">
      {/* Network lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
        <motion.circle cx="500" cy="300" r="4" fill="hsl(225 80% 62%)"
          animate={isInView ? { opacity: [0.3, 1, 0.3] } : {}} transition={{ duration: 2, repeat: Infinity }} />
        {[
          [500, 300, 200, 150], [500, 300, 800, 200],
          [500, 300, 150, 400], [500, 300, 850, 450],
          [500, 300, 500, 80],
        ].map(([x1, y1, x2, y2], i) => (
          <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="hsl(225 80% 62%)" strokeWidth="0.5"
            animate={isInView ? { opacity: [0, 0.4, 0.2] } : { opacity: 0 }}
            transition={{ duration: 1.5, delay: i * 0.2 }}
          />
        ))}
      </svg>

      <div ref={ref}>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="space-y-10"
        >
          <div className="text-center space-y-4">
            <motion.p variants={fadeUp} className="text-sm tracking-[0.3em] uppercase text-space-glow font-medium">
              Real-World Applications
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-display font-bold">
              One platform for
              <br />
              <span className="text-space-glow text-glow">all engineering</span>
            </motion.h2>
          </div>

          <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto pt-4">
            {apps.map((app, i) => (
              <motion.div
                key={app.title}
                variants={fadeUp}
                className={`glass-card rounded-xl p-6 hover:border-space-glow/30 transition-all duration-300 group ${
                  i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="text-2xl mb-3">{app.icon}</div>
                <h3 className="font-display font-semibold text-base mb-1">{app.title}</h3>
                <p className="text-sm text-muted-foreground">{app.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SpaceSection>
  );
};

export default ApplicationsSection;
