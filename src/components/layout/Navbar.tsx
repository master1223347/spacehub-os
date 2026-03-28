'use client';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export function Navbar() {
  const progress = useScrollProgress();
  const isScrolled = progress > 0.02;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-cosmos/80 backdrop-blur-xl border-b border-stardust/50' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-plasma-cyan animate-pulse" />
          <span className="font-display text-lg font-bold tracking-[0.15em] text-supernova">
            SPACEHUB
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-lunar">
          <a href="#crisis" className="hover:text-plasma-blue transition-colors">The Crisis</a>
          <a href="#solution" className="hover:text-plasma-blue transition-colors">Solution</a>
          <a href="#architecture" className="hover:text-plasma-blue transition-colors">Architecture</a>
          <a href="#market" className="hover:text-plasma-blue transition-colors">Market</a>
          <a href="#vision" className="hover:text-plasma-blue transition-colors">Vision</a>
        </div>
      </div>
    </nav>
  );
}
