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

export type SlideId =
  | 'hero-intro'
  | 'problem-solution'
  | 'fusion-cad'
  | 'physment-sim'
  | 'applications'
  | 'conclusion';

export interface DeckSlide {
  id: SlideId;
  eyebrow: string;
  headline: string;
  subheadline?: string;
  points: string[];
  keyLine?: string;
  transitionLine?: string;
  footerNote?: string;
}

export interface ApplicationPillar {
  id: 'mmo' | 'coordination' | 'ar-ai' | 'education';
  title: string;
  summary: string;
  bullets: string[];
  impactLine: string;
}

export interface DeckStat {
  value: string;
  label: string;
  note: string;
}

export interface WorkflowStep {
  title: string;
  detail: string;
}

export const PITCH_DECK_SLIDES: DeckSlide[] = [
  {
    id: 'hero-intro',
    eyebrow: 'Intro',
    headline: 'SpaceHub OS',
    subheadline: 'Docker For Engineering',
    points: [],
  },
  {
    id: 'problem-solution',
    eyebrow: 'Section 1 — Problem + Solution',
    headline: 'Engineering is too slow.',
    points: [
      'Launch cycles went from months to years.',
      'Knowledge is fragmented across teams and documents.',
      'AI today either over-automates (dangerous) or under-delivers (just chatbots).',
      'Skills are at risk of atrophy when engineers delegate instead of learning.',
    ],
    transitionLine: 'We built SpaceHub OS.',
    footerNote:
      'A real-time, AI-assisted engineering environment where humans stay in control and AI accelerates everything.',
  },
  {
    id: 'fusion-cad',
    eyebrow: 'Section 2 — Fusion / CAD Agent',
    headline: 'Design becomes real-time and collaborative',
    subheadline: 'You turned CAD from a static tool into a live system.',
    points: [
      'AI agents are embedded directly inside CAD tools (Fusion, SolidWorks).',
      'Engineers modify designs faster and use AI for iteration, not replacement.',
      'CAD models stream into a shared multiplayer world with live updates every second.',
      '100+ engineers can view, edit, and communicate in the same environment.',
    ],
    keyLine: 'CAD is no longer a file. It is a shared, living system.',
  },
  {
    id: 'physment-sim',
    eyebrow: 'Section 3 — AI Physics Simulation Agent',
    headline: 'Simulate before you build',
    subheadline: 'You do not test once. You test thousands of times instantly.',
    points: [
      'Physment is our AI-assisted physics engine for high-speed, high-fidelity simulation.',
      'Run hundreds to thousands of simulations simultaneously for trajectories, system behavior, and failure prediction.',
      'Use Gaussian-based modeling and AI trajectory planning across many possible outcomes.',
      'AI remains specialized, sandboxed, and never fully autonomous. Humans always stay in control.',
      'Millions of simulations are verified before real deployment.',
    ],
    keyLine: 'We do not trust AI blindly. We verify it at scale.',
  },
  {
    id: 'applications',
    eyebrow: 'Section 4 — Real World Applications',
    headline: 'One system, many realities',
    points: [
      'MMO engineering environment',
      'Global coordination across agencies and industry',
      'AR + physical AI workflows',
      'Education + workforce acceleration',
    ],
    keyLine: 'One shared system reduces conflict and duplication.',
  },
  {
    id: 'conclusion',
    eyebrow: 'Section 5 — Conclusion',
    headline: 'The operating system for space engineering',
    points: [
      'Faster iteration cycles.',
      'Verified and safe AI.',
      'Global collaboration instead of competition.',
      'Open access to engineering knowledge.',
    ],
    keyLine:
      'Open source prevents duplicated work, enables public scrutiny, and is already proven on real missions through open-source orbital code.',
    footerNote:
      'AI should empower, not replace. Engineers stay curious, creative, and in control.',
  },
];

export const APPLICATION_PILLARS: ApplicationPillar[] = [
  {
    id: 'mmo',
    title: 'MMO Engineering Environment',
    summary: 'A shared world where engineers design, test, and iterate continuously in real time.',
    bullets: [
      'Real-time collaboration and simulation loops.',
      'Continuous design to test to iterate cycle.',
      'Shared operational context for every discipline.',
    ],
    impactLine: 'Engineering becomes persistent, not session-based.',
  },
  {
    id: 'coordination',
    title: 'Global Coordination + Industry',
    summary: 'A common engineering substrate across agencies and commercial organizations.',
    bullets: [
      'Works across NASA, SpaceX, Blue Origin, Boeing, and more.',
      'Extensible to JAXA, ESA, CNSA, and ISRO workflows.',
      'Shared models reduce duplicated effort and cross-team conflict.',
    ],
    impactLine: 'Coordination becomes a product feature, not an afterthought.',
  },
  {
    id: 'ar-ai',
    title: 'AR + Physical AI',
    summary: 'Bridge digital engineering and real operations with immersive guidance and robotics.',
    bullets: [
      'AR glasses overlay designs on physical systems.',
      'Workers receive step-by-step 3D instructions and simulation feedback.',
      'Teleoperated humanoids and VR/AR-assisted training close execution gaps.',
    ],
    impactLine: 'Simulation and reality stay in sync at the point of work.',
  },
  {
    id: 'education',
    title: 'Education + Workforce',
    summary: 'Open MMO access to train the next generation and preserve institutional knowledge.',
    bullets: [
      'Students, schools, and universities can explore real engineering systems.',
      'Replay launches and learn through interactive mission scenarios.',
      'Fix onboarding gaps and prevent knowledge loss at scale.',
    ],
    impactLine: 'Engineering expertise becomes teachable, durable, and accessible.',
  },
];

export const PITCH_RESEARCH_STATS: DeckStat[] = [
  {
    value: '20%',
    label: 'NASA Workforce Loss (2025)',
    note: 'Roughly one in five employees departed in a single year.',
  },
  {
    value: '$150B+',
    label: 'Digital Twin Upside',
    note: 'Projected market scale by 2030 across sectors.',
  },
  {
    value: '30–48%',
    label: 'Market Growth CAGR',
    note: 'Aerospace digital engineering demand is compounding quickly.',
  },
  {
    value: '100s',
    label: 'Concurrent Engineers',
    note: 'Targeted shared multiplayer design and simulation sessions.',
  },
];

export const CAD_WORKFLOW_STEPS: WorkflowStep[] = [
  {
    title: 'Design in CAD',
    detail: 'Fusion 360, SolidWorks, and NASA-standard CAD tools remain first-class.',
  },
  {
    title: 'Live Stream to Bevy',
    detail: 'MCP import connectors update every second, keeping MMO geometry synchronized.',
  },
  {
    title: 'Multiplayer Review',
    detail: 'Teams view, annotate, discuss, and modify designs together in one world.',
  },
  {
    title: 'Simulate in Physment',
    detail: 'Run scenario sweeps, stress cases, and parameter variations at scale.',
  },
  {
    title: 'Interpret Outcomes',
    detail: 'Engineers inspect failures and tradeoffs before hardware commitment.',
  },
  {
    title: 'Sync Updates to CAD',
    detail: 'Changes propagate through SpaceHub MCPs so teams iterate with shared context.',
  },
];

export const MICROMODEL_GUARDRAILS = [
  'Use specialized micro-models for bounded tasks instead of one all-powerful model.',
  'Require AI to ask clarifying questions when context is missing or ambiguous.',
  'Disallow broad autopilot control of robotics, vehicles, and mission-critical systems.',
  'Keep models sandboxed with strict permissions and explicit human approval gates.',
  'Verify candidate decisions in high-volume simulation before any real-world execution.',
];

export const IMMERSION_USE_CASES = [
  'Tier 1: Voice assistant for field updates, status checks, and quick agent queries.',
  'Tier 2: Browser/mobile/desktop access for broad participation and lightweight review.',
  'Tier 3: Stereoscopic 3D displays for deeper in-screen spatial understanding.',
  'Tier 4: AR glasses for construction, verification, and physical-digital overlays.',
  'Tier 5: Full VR immersion for training, walkthroughs, and complex mission rehearsal.',
];

export const EDTECH_EXPANSION_POINTS = [
  'Open MMO access for students, schools, universities, and industry partners.',
  'Agent-guided onboarding so every learner gets context-aware exploration.',
  'Interactive replay of launches, mission timelines, and design decisions.',
  'Gamified learning inspired by factory/sandbox systems with real engineering data.',
  'Public-facing experiences to strengthen workforce pipelines and reduce knowledge loss.',
];

export const RUST_SIGNAL_EXAMPLES = [
  'Cloudflare (edge and systems performance)',
  'AWS (service-level components and tooling)',
  'Microsoft (security-focused systems investments)',
  'Google (memory-safe systems initiatives)',
  'Discord (core infrastructure migration for reliability)',
];

export const FOUNDATION_CLAIMS = [
  'NASA digital transformation spend is large but fragmented across many stacks.',
  'Digital twin and simulation markets are accelerating with strong tailwinds.',
  'Legacy incumbents are expensive, siloed, and weak at real-time multiplayer engineering.',
  'Policy momentum favors memory-safe software and shared public code.',
  'Open-source flight software has already proven viable in mission contexts.',
  'AR/VR delivers measurable training and operational gains in aerospace workflows.',
  'Institutional knowledge loss is now a strategic risk, not an HR footnote.',
];
