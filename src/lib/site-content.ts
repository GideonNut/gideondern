export interface FeaturedProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  stats: { value: string; label: string }[];
  imageLabel: string;
  href: string;
  linkLabel?: string;
}

export interface ExperienceRole {
  id: string;
  initial: string;
  title: string;
  company: string;
  meta: string;
  summary: string;
  items: { number: string; title: string; description: string; details?: string }[];
}

export interface SkillCategory {
  label: string;
  items: string[];
}

export interface BeyondItem {
  initial: string;
  title: string;
  tag: string;
  meta: string;
  description: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export const siteMeta = {
  name: "Gideon Dern",
  shortName: "GIDEON",
  role: "Software Engineer & Builder — Ghana",
  tagline:
    "I'm a builder first — I ship software and products people actually use, not just ideas that never leave the page.",
  taglineHighlight: ["builder first"],
  taglineAccent: "ideas that never leave the page.",
  subtitle:
    "Designing and building web apps, Web3 platforms, and full-stack products — from Farcaster mini-apps to Celo smart contract tooling.",
  location: "Gideon Dern — Ghana",
  github: "https://github.com/gideonnut",
  cvUrl:
    "https://docs.google.com/document/d/1DLCHgS-zeq_45dWMTs4sm3avwEtlYY66fJXdqgmXvx8/edit?usp=drivesdk",
  email: "ngideon538@yahoo.com",
  whatsapp: "https://wa.me/233545171553",
  whatsappLabel: "WhatsApp @gideondern",
  telegram: "https://t.me/gideondern",
  telegramLabel: "Telegram @gideondern",
  updated: "August 2026",
};

export const nowSection = {
  building:
    "Myth — auto-generating MCP servers for Celo smart contracts — and rebuilding this portfolio in Next.js.",
  learning:
    "Going deeper on onchain product design, Farcaster mini-apps, and AI-agent tooling via MCP.",
  openTo:
    "Software engineering roles and builder engagements where shipping to real users actually matters.",
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "myth-celo-mcp",
    title: "MCP servers for smart contracts, generated on demand",
    subtitle: "myth-celo-mcp",
    description:
      "Myth auto-generates Model Context Protocol servers for Celo smart contracts — give it a verified contract address, it fetches the ABI from Blockscout, maps every function and event to an MCP tool, and launches a server your AI agent can call.",
    tags: ["TypeScript", "MCP", "Celo", "Web3"],
    stats: [
      { value: "Auto", label: "ABI → MCP tools" },
      { value: "AI-ready", label: "Agent integration" },
    ],
    imageLabel: "Myth Celo MCP — tooling",
    href: "https://github.com/gideonnut/myth-celo-mcp",
    linkLabel: "View on GitHub →",
  },
  {
    id: "storyfund",
    title: "Web3 crowdfunding built for African cinema",
    subtitle: "StoryFund",
    description:
      "A Web3 crowdfunding platform for African cinema — connecting filmmakers with backers through onchain funding flows and a product experience built for real creators.",
    tags: ["TypeScript", "Web3", "Crowdfunding", "Celo"],
    stats: [
      { value: "Onchain", label: "Funding flows" },
      { value: "Creator", label: "First design" },
    ],
    imageLabel: "StoryFund — platform",
    href: "https://github.com/gideonnut/StoryFund",
    linkLabel: "View on GitHub →",
  },
  {
    id: "moviemeter",
    title: "Vote on movies where your audience already is",
    subtitle: "MovieMeter",
    description:
      "MovieMeter lets users vote on their favorite films with votes recorded onchain. Moviemeterminiapp brings that experience directly into the Farcaster feed as a mini-app.",
    tags: ["TypeScript", "Farcaster", "Mini-app", "Web3"],
    stats: [
      { value: "Feed-native", label: "Farcaster mini-app" },
      { value: "Onchain", label: "Vote recording" },
    ],
    imageLabel: "MovieMeter — mini-app",
    href: "https://github.com/gideonnut/Moviemeterminiapp",
    linkLabel: "View on GitHub →",
  },
  {
    id: "zyra",
    title: "Invoicing software that small businesses can actually run",
    subtitle: "Zyra",
    description:
      "Zyra helps you create invoices for your customers — a focused product build for businesses that need billing without the bloat of enterprise tooling.",
    tags: ["TypeScript", "SaaS", "Product"],
    stats: [
      { value: "Simple", label: "Invoice creation" },
      { value: "Shipped", label: "End-to-end product" },
    ],
    imageLabel: "Zyra — invoicing",
    href: "https://github.com/gideonnut/Zyra",
    linkLabel: "View on GitHub →",
  },
  {
    id: "korer",
    title: "A blockchain explorer you can talk to",
    subtitle: "Korer",
    description:
      "Korer is a blockchain explorer with natural language — making onchain data accessible without forcing users to learn query syntax first.",
    tags: ["Blockchain", "Natural Language", "Explorer"],
    stats: [
      { value: "NL", label: "Query interface" },
      { value: "Onchain", label: "Data access" },
    ],
    imageLabel: "Korer — explorer",
    href: "https://github.com/gideonnut/Korer",
    linkLabel: "View on GitHub →",
  },
];

export const experienceRoles: ExperienceRole[] = [
  {
    id: "independent-builder",
    initial: "G",
    title: "Software Engineer & Builder",
    company: "Independent",
    meta: "Ghana · 2022 — Present",
    summary:
      "Building and shipping web apps, Web3 platforms, and developer tooling — 17+ public repos spanning Celo, Farcaster, MCP, and full-stack products.",
    items: [
      {
        number: "01",
        title: "Myth — Celo MCP tooling",
        description:
          "Built auto-generating MCP servers that map Celo smart contract ABIs to AI-agent-callable tools.",
        details:
          "Fetches ABIs from Blockscout · maps functions and events to MCP tools · launches servers agents can invoke directly.",
      },
      {
        number: "02",
        title: "StoryFund & onchain products",
        description:
          "Built Web3 crowdfunding and voting products on Celo for creators and communities.",
        details:
          "StoryFund — crowdfunding platform for African cinema · MovieMeter — onchain movie voting · Moviemeterminiapp — Farcaster feed-native experience.",
      },
      {
        number: "03",
        title: "Full-stack web products",
        description:
          "Shipped invoicing, portfolio, and client websites as end-to-end builds.",
        details:
          "Zyra — customer invoicing · gideondern — personal site in Next.js · Afrizen, chefabbys-website — client web builds.",
      },
      {
        number: "04",
        title: "Celo ecosystem contributions",
        description:
          "Contributed to Farcaster frames and Proof of Ship submissions in the Celo ecosystem.",
        details:
          "celo-farcaster-frames mono-repo · Proof-of-Ship submissions · integration-list tooling.",
      },
    ],
  },
  {
    id: "ethaccra",
    initial: "E",
    title: "Hackathon Builder",
    company: "EthAccra",
    meta: "Accra · 2022 — 2024",
    summary:
      "Built and researched at EthAccra hackathons — from waste management concepts to charity platforms.",
    items: [
      {
        number: "01",
        title: "Borla2Earn",
        description:
          "Led research and solution design for a waste management hackathon project.",
        details: "Problem analysis, solution validation, and product direction.",
      },
      {
        number: "02",
        title: "HAM Platform",
        description:
          "Researched and scoped a charity-focused platform for user needs and ecosystem fit.",
        details: "User needs analysis and ecosystem challenge mapping.",
      },
    ],
  },
  {
    id: "celo",
    initial: "C",
    title: "Technical Writer",
    company: "Celo.org",
    meta: "Remote · 2022",
    summary:
      "Produced developer-friendly content that made blockchain tooling accessible to builders.",
    items: [
      {
        number: "01",
        title: "Developer documentation",
        description:
          "Researched blockchain tools and wrote structured blogs for developers.",
        details:
          "Translated complex technical concepts into accessible content for developer audiences.",
      },
    ],
  },
  {
    id: "yewglobal",
    initial: "Y",
    title: "Web Builder",
    company: "YewGlobal",
    meta: "Remote · 2022 — Present",
    summary:
      "Designed and maintained web presence — building the site, not just writing for it.",
    items: [
      {
        number: "01",
        title: "Website design & build",
        description:
          "Contributed to design, structure, and maintenance of a clean publishing website.",
        details:
          "Edited content for clarity and consistency · built and maintained structured web layouts.",
      },
    ],
  },
  {
    id: "mpharma",
    initial: "M",
    title: "Operations — Inventory Systems",
    company: "mPharma",
    meta: "Ghana · 2023 — 2025",
    summary:
      "Ran inventory operations with system-level tracking — the kind of operational rigor that shows up in how I build software.",
    items: [
      {
        number: "01",
        title: "Inventory & system tracking",
        description:
          "Managed pharmaceutical SKU inventory with SAP, Excel, and reconciliation workflows.",
        details:
          "Reduced stock discrepancies through system tracking · maintained accurate records · ensured compliance with operational procedures.",
      },
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    label: "Frontend & Web",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
  },
  {
    label: "Web3 & Blockchain",
    items: [
      "Celo",
      "Smart Contracts",
      "Farcaster Frames",
      "Onchain Products",
      "Blockscout",
    ],
  },
  {
    label: "Backend & APIs",
    items: [
      "API Design",
      "RESTful Services",
      "Server-Side Architecture",
      "MCP Servers",
    ],
  },
  {
    label: "Product & Shipping",
    items: [
      "Full-Stack Builds",
      "Mini-apps",
      "SaaS Products",
      "Rapid Prototyping",
    ],
  },
  {
    label: "AI & Tooling",
    items: [
      "Model Context Protocol",
      "AI Agent Integration",
      "Developer Tooling",
      "ABI Mapping",
    ],
  },
  {
    label: "Delivery",
    items: [
      "End-to-End Ownership",
      "Technical Writing",
      "System Design",
      "Ship to Production",
    ],
  },
];

export const beyondItems: BeyondItem[] = [
  {
    initial: "K",
    title: "Founder — KNUST Updates Channel",
    tag: "Community",
    meta: "Campus updates · KNUST · Present",
    description:
      "Built a digital updates community with 2,000+ members — proof that I build audiences, not just code.",
  },
  {
    initial: "O",
    title: "Open Source — GitHub",
    tag: "Builder",
    meta: "github.com/gideonnut · 17 repos",
    description:
      "Public builder log — Web3 products, developer tooling, client sites, and experiments. The work speaks before the pitch does.",
  },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: siteMeta.github },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter / X", href: "#" },
  { label: "View CV", href: siteMeta.cvUrl },
];
