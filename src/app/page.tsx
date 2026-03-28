'use client';
import { Navbar } from '@/components/layout/Navbar';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { HeroSection } from '@/components/sections/HeroSection';
import { CrisisSection } from '@/components/sections/CrisisSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { ArchitectureSection } from '@/components/sections/ArchitectureSection';
import { MarketSection } from '@/components/sections/MarketSection';
import { ProofSection } from '@/components/sections/ProofSection';
import { VisionSection } from '@/components/sections/VisionSection';
import { CTASection } from '@/components/sections/CTASection';

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <CrisisSection />
      <SolutionSection />
      <ArchitectureSection />
      <MarketSection />
      <ProofSection />
      <VisionSection />
      <CTASection />
    </main>
  );
}
