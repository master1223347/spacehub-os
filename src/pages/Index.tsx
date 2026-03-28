import Starfield from "@/components/Starfield";
import ProblemSection from "@/components/sections/ProblemSection";
import FusionSection from "@/components/sections/FusionSection";
import SimulationSection from "@/components/sections/SimulationSection";
import ApplicationsSection from "@/components/sections/ApplicationsSection";
import ConclusionSection from "@/components/sections/ConclusionSection";

const Index = () => {
  return (
    <div className="snap-container relative bg-background">
      <Starfield />

      {/* Scan line effect */}
      <div className="fixed inset-0 pointer-events-none scan-line z-[1]" />

      <ProblemSection />
      <FusionSection />
      <SimulationSection />
      <ApplicationsSection />
      <ConclusionSection />
    </div>
  );
};

export default Index;
