import { ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'blue' | 'cyan' | 'green' | 'red' | 'purple';
}

export function GlowCard({ children, className = '', glowColor = 'blue' }: GlowCardProps) {
  const glowMap = {
    blue: 'hover:border-plasma-blue/30 hover:shadow-[0_0_20px_rgba(88,166,255,0.15)]',
    cyan: 'hover:border-plasma-cyan/30 hover:shadow-[0_0_20px_rgba(57,213,255,0.15)]',
    green: 'hover:border-plasma-green/30 hover:shadow-[0_0_20px_rgba(63,185,80,0.15)]',
    red: 'hover:border-plasma-red/30 hover:shadow-[0_0_20px_rgba(248,81,73,0.15)]',
    purple: 'hover:border-plasma-purple/30 hover:shadow-[0_0_20px_rgba(163,113,247,0.15)]',
  };

  return (
    <div className={`bg-nebula border border-stardust rounded-xl p-6 transition-all duration-300 ${glowMap[glowColor]} ${className}`}>
      {children}
    </div>
  );
}
