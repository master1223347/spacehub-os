import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SpaceSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SpaceSection = ({ children, className = "", id }: SpaceSectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      ref={ref}
      id={id}
      className={`snap-section relative flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Nebula glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-nebula)" }}
      />
      {/* Center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-glow)" }}
      />

      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SpaceSection;
