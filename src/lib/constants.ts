export const SECTIONS = {
  hero: 'hero',
  crisis: 'crisis',
  solution: 'solution',
  architecture: 'architecture',
  market: 'market',
  proof: 'proof',
  vision: 'vision',
  cta: 'cta',
} as const;

export const CRISIS_STATS = [
  {
    number: 4000,
    label: 'Engineers Lost',
    description: 'NASA lost 20% of its workforce in 2025 — approximately 4,000 employees including 2,145 top-level technical and managerial staff.',
    prefix: '~',
    suffix: '',
  },
  {
    number: 56,
    label: 'Over Age 50',
    description: 'More than half of NASA\'s workforce was age 50 or older. Employees over 60 outnumbered those under 30 by 3 to 1.',
    prefix: '',
    suffix: '%',
  },
  {
    number: 69,
    label: 'Million Dollar Lesson',
    description: 'The "Fogbank" case: when experts retired, the U.S. couldn\'t reproduce a critical warhead component. It cost $69M and 5 years to re-learn.',
    prefix: '$',
    suffix: 'M',
  },
];

export const IMMERSION_TIERS = [
  { tier: 1, name: 'Voice Assistant', icon: '🎙️', description: 'Start with a conversation. Query agents, check status, and manage tasks hands-free while on the go.' },
  { tier: 2, name: 'Browser / Desktop', icon: '🖥️', description: 'Full collaborative workspace in your browser. Real-time multiplayer CAD viewing, chat, and AI-assisted design.' },
  { tier: 3, name: '3D Stereoscopic', icon: '🔲', description: 'Side-by-side 3D displays for immersive depth. See designs as they\'ll exist in the real world.' },
  { tier: 4, name: 'Augmented Reality', icon: '👓', description: 'Overlay digital designs onto physical hardware. Step-by-step 3D construction guides. Perfect for verification and testing.' },
  { tier: 5, name: 'Virtual Reality', icon: '🥽', description: 'Full VR immersion. Walk through your spacecraft. Train astronauts. Simulate launches. The ultimate engineering experience.' },
];

export const ARCHITECTURE_NODES = [
  { id: 'orchestrator', label: 'Web Orchestrator', sublabel: 'Claude AI + UI', color: '#f0883e', x: 0, y: 0 },
  { id: 'cad', label: 'CAD Agent', sublabel: 'Fusion 360 / FreeCAD', color: '#58a6ff', x: -3, y: -1.5 },
  { id: 'bevy', label: 'Bevy Engine', sublabel: 'Rust / Real-time Sim', color: '#3fb950', x: -1.8, y: 2 },
  { id: 'research', label: 'Research Agent', sublabel: 'Web Search + Vision', color: '#a371f7', x: 3, y: -1.5 },
  { id: 'nasa', label: 'NASA API', sublabel: 'Images + Data', color: '#39d5ff', x: 1.8, y: 2 },
  { id: 'image', label: 'Image Analysis', sublabel: 'Claude Vision', color: '#f85149', x: 3.5, y: 1 },
];

export const MARKET_STATS = [
  { value: 150, prefix: '$', suffix: 'B+', label: 'Digital Twin Market by 2030', sublabel: 'Growing at 30-48% CAGR' },
  { value: 85, prefix: '', suffix: '%', label: 'Training Time Reduction', sublabel: 'Lockheed Martin AR/VR savings' },
  { value: 18, prefix: '$', suffix: 'K/yr', label: 'Incumbent Per-Seat Cost', sublabel: 'vs SpaceHub: Open Source' },
];

export const COMPETITORS = [
  { name: 'Dassault 3DEXPERIENCE', price: '$5K-18K/user/yr', arch: 'Legacy (1990s)', collab: 'Check-in/out' },
  { name: 'Siemens Xcelerator', price: '$7K+/user/yr', arch: 'Monolithic', collab: 'Single-user' },
  { name: 'NVIDIA Omniverse', price: '$9K+/yr', arch: 'RTX-locked', collab: 'Viz only' },
  { name: 'SpaceHub', price: 'Open Source', arch: 'Rust/Bevy Native', collab: 'MMO Real-time', highlight: true },
];
