export const siteConfig = {
  name: "AzphireHR",
  tagline: "The future of hiring, made human.",
  description:
    "AzphireHR is the Philippines' first AI-native hiring platform — combining talent intelligence, AI interviews, skills assessment, and talent CRM in one unified experience.",
  url: "https://azphirehr.com",
  email: "hello@azphirehr.com",
  phone: "+63 2 8888 0100",
  address: "BGC, Taguig City, Metro Manila, Philippines",
  social: {
    linkedin: "https://linkedin.com/company/azphirehr",
    twitter: "https://twitter.com/azphirehr",
    facebook: "https://facebook.com/azphirehr",
    instagram: "https://instagram.com/azphirehr",
  },
};

export const navLinks = [
  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "TalentSearch AI",
        href: "/products/talentsearch",
        description: "Natural language talent sourcing across 800M+ profiles",
        icon: "Search",
      },
      {
        label: "SmartScreen",
        href: "/products/smartscreen",
        description: "AI-powered video interviews with personality scoring",
        icon: "Video",
      },
      {
        label: "PipelineCRM",
        href: "/products/pipelinecrm",
        description: "Talent CRM with outreach sequencing & funnel analytics",
        icon: "GitBranch",
      },
      {
        label: "SkillAssess",
        href: "/products/skillassess",
        description: "Technical & soft skill assessments with gap coaching",
        icon: "Award",
      },
      {
        label: "DiversityLens",
        href: "/products/diversitylens",
        description: "Diversity analytics, bias detection & inclusive hiring",
        icon: "Users",
      },
      {
        label: "InsightHub",
        href: "/products/insighthub",
        description: "Data enrichment, dashboards & hiring intelligence",
        icon: "ChartColumn",
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      {
        label: "For SMEs & Startups",
        href: "/solutions/sme",
        description: "Affordable AI hiring for growing businesses",
        icon: "Rocket",
      },
      {
        label: "For BPO & Contact Centers",
        href: "/solutions/bpo",
        description: "High-volume hiring at scale with AI screening",
        icon: "Headphones",
      },
      {
        label: "For Tech Companies",
        href: "/solutions/tech",
        description: "Find specialized developers, designers & AI talent",
        icon: "Code",
      },
      {
        label: "For Global Teams",
        href: "/solutions/global",
        description: "Hire Filipino remote talent with compliance built in",
        icon: "Globe",
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const products = [
  {
    slug: "talentsearch",
    name: "TalentSearch AI",
    headline: "Find anyone. Just ask.",
    description:
      "Search a database of 800M+ profiles using natural language. No Boolean strings, no filters — just describe the person you need and let AI find them across 30+ data sources.",
    icon: "Search",
    color: "primary",
    features: [
      {
        title: "Natural Language Search",
        description:
          "Type 'senior React developer in Cebu with fintech experience' and get instant, ranked results.",
      },
      {
        title: "800M+ Global Profiles",
        description:
          "Aggregated from LinkedIn, GitHub, Stack Overflow, Behance, and 30+ professional networks.",
      },
      {
        title: "AI-Powered Ranking",
        description:
          "Machine learning scores each candidate on relevance, availability, and predicted fit.",
      },
      {
        title: "Contact Discovery",
        description:
          "Verified emails and phone numbers enriched from multiple data sources in real time.",
      },
      {
        title: "Saved Searches & Alerts",
        description:
          "Get notified when new candidates match your search criteria automatically.",
      },
      {
        title: "Philippine Talent Focus",
        description:
          "Deep local data coverage with Filipino-specific skills mapping and salary benchmarks.",
      },
    ],
    stats: [
      { value: "800M+", label: "Profiles Indexed" },
      { value: "30+", label: "Data Sources" },
      { value: "<3s", label: "Search Speed" },
      { value: "95%", label: "Email Accuracy" },
    ],
    steps: [
      {
        title: "Describe Your Ideal Candidate",
        description: "Use plain English. No filters, no Boolean.",
      },
      {
        title: "AI Searches & Ranks",
        description: "Our AI scans 800M+ profiles and returns the top matches in seconds.",
      },
      {
        title: "Engage Instantly",
        description: "One click to add to your pipeline, send outreach, or schedule a screen.",
      },
    ],
  },
  {
    slug: "smartscreen",
    name: "SmartScreen",
    headline: "AI interviews that see the whole person.",
    description:
      "Automated video interviews with AI-powered scoring across communication, personality traits, and technical competency — reducing time-to-screen by 80%.",
    icon: "Video",
    color: "secondary",
    features: [
      {
        title: "AI Video Interviews",
        description:
          "Candidates record responses on their own time. AI analyzes speech, expression, and content.",
      },
      {
        title: "Personality Profiling",
        description:
          "Scores candidates on the Big Five traits plus custom competencies you define.",
      },
      {
        title: "Technical Assessment",
        description:
          "Integrated coding challenges and domain-specific questions with AI evaluation.",
      },
      {
        title: "Bias Mitigation",
        description:
          "Structured scoring removes subjective bias. Focus on skills and potential, not demographics.",
      },
      {
        title: "Multi-Language Support",
        description:
          "Conduct interviews in English, Filipino, Cebuano, and 20+ other languages.",
      },
      {
        title: "Instant Reports",
        description:
          "Detailed candidate scorecards with highlights, concerns, and comparison views.",
      },
    ],
    stats: [
      { value: "80%", label: "Faster Screening" },
      { value: "94%", label: "Candidate Satisfaction" },
      { value: "3min", label: "Avg Report Time" },
      { value: "23", label: "Languages Supported" },
    ],
    steps: [
      {
        title: "Set Up Your Interview",
        description: "Choose questions from our library or add custom ones.",
      },
      {
        title: "Candidates Record Anytime",
        description: "No scheduling needed. Candidates complete on their own time.",
      },
      {
        title: "AI Scores & Reports",
        description: "Get detailed scorecards with personality, skills, and fit analysis.",
      },
    ],
  },
  {
    slug: "pipelinecrm",
    name: "PipelineCRM",
    headline: "Your talent pipeline, always flowing.",
    description:
      "A purpose-built talent CRM that manages candidate relationships, automates outreach sequences, nurtures pipelines, and gives you full-funnel visibility.",
    icon: "GitBranch",
    color: "accent",
    features: [
      {
        title: "Visual Pipeline Boards",
        description:
          "Drag-and-drop Kanban boards customized per role, team, or hiring campaign.",
      },
      {
        title: "Outreach Sequencing",
        description:
          "Multi-step email and LinkedIn sequences with personalization tokens and A/B testing.",
      },
      {
        title: "Engagement Tracking",
        description:
          "Know when candidates open emails, click links, or visit your careers page.",
      },
      {
        title: "Funnel Analytics",
        description:
          "Track conversion rates, time-in-stage, source effectiveness, and recruiter performance.",
      },
      {
        title: "Candidate Nurturing",
        description:
          "Automated drip campaigns keep passive candidates warm until they're ready.",
      },
      {
        title: "Team Collaboration",
        description:
          "Shared notes, @mentions, interview scorecards, and approval workflows.",
      },
    ],
    stats: [
      { value: "3x", label: "Response Rate" },
      { value: "60%", label: "Less Admin Work" },
      { value: "100K+", label: "Candidates Managed" },
      { value: "12", label: "Integrations" },
    ],
    steps: [
      {
        title: "Build Your Pipeline",
        description: "Import candidates from any source or find them with TalentSearch.",
      },
      {
        title: "Automate Outreach",
        description: "Set up personalized sequences that run on autopilot.",
      },
      {
        title: "Track & Optimize",
        description: "Full funnel visibility from first touch to signed offer.",
      },
    ],
  },
  {
    slug: "skillassess",
    name: "SkillAssess",
    headline: "Measure skills, not resumes.",
    description:
      "Comprehensive technical and soft skill assessments with AI-powered gap analysis and personalized coaching recommendations — because a resume never tells the full story.",
    icon: "Award",
    color: "primary",
    features: [
      {
        title: "500+ Assessment Templates",
        description:
          "Pre-built tests for coding, design, sales, customer service, and more.",
      },
      {
        title: "AI Proctoring",
        description:
          "Secure, cheating-resistant assessments with AI-powered identity verification.",
      },
      {
        title: "Gap Analysis",
        description:
          "Identify exactly where candidates excel and where they need development.",
      },
      {
        title: "Coaching Recommendations",
        description:
          "AI suggests learning paths to help candidates close skill gaps.",
      },
      {
        title: "Custom Test Builder",
        description:
          "Create your own assessments with drag-and-drop question builder.",
      },
      {
        title: "Benchmarking",
        description:
          "Compare candidate scores against industry and role-specific benchmarks.",
      },
    ],
    stats: [
      { value: "500+", label: "Test Templates" },
      { value: "40%", label: "Better Hire Quality" },
      { value: "15min", label: "Avg Assessment Time" },
      { value: "99.2%", label: "Proctor Accuracy" },
    ],
    steps: [
      {
        title: "Choose or Build Tests",
        description: "Pick from 500+ templates or create your own in minutes.",
      },
      {
        title: "Candidates Complete Assessments",
        description: "Secure, proctored testing they can do from anywhere.",
      },
      {
        title: "AI Analyzes & Coaches",
        description: "Get scores, gap analysis, and development recommendations.",
      },
    ],
  },
  {
    slug: "diversitylens",
    name: "DiversityLens",
    headline: "Build teams that reflect the world.",
    description:
      "Advanced diversity analytics, bias detection in job descriptions and screening, and inclusive hiring tools — because diverse teams outperform.",
    icon: "Users",
    color: "secondary",
    features: [
      {
        title: "Diversity Dashboard",
        description:
          "Real-time visibility into representation across your hiring pipeline.",
      },
      {
        title: "Bias Detection",
        description:
          "AI scans job descriptions, screening criteria, and interview notes for biased language.",
      },
      {
        title: "Blind Screening Mode",
        description:
          "Remove names, photos, schools, and other identifying info from candidate profiles.",
      },
      {
        title: "Inclusive Job Descriptions",
        description:
          "AI rewrites your JDs to attract a broader, more diverse candidate pool.",
      },
      {
        title: "Compliance Reporting",
        description:
          "Auto-generated reports for EEOC, Philippine labor law, and internal diversity goals.",
      },
      {
        title: "PWD & Indigenous Talent",
        description:
          "Specialized tools for sourcing and supporting PWD and indigenous Filipino candidates.",
      },
    ],
    stats: [
      { value: "35%", label: "More Diverse Hires" },
      { value: "92%", label: "Bias Detection Rate" },
      { value: "2x", label: "Applicant Pool Growth" },
      { value: "100%", label: "Compliance Coverage" },
    ],
    steps: [
      {
        title: "Audit Your Pipeline",
        description: "See where diversity gaps exist in your current hiring process.",
      },
      {
        title: "Fix Bias at the Source",
        description: "AI rewrites JDs and removes bias from screening automatically.",
      },
      {
        title: "Measure & Improve",
        description: "Track progress with real-time dashboards and compliance reports.",
      },
    ],
  },
  {
    slug: "insighthub",
    name: "InsightHub",
    headline: "Data-driven hiring decisions.",
    description:
      "Centralized analytics dashboard with data enrichment, market intelligence, salary benchmarks, and hiring performance tracking — turning gut feelings into informed strategy.",
    icon: "ChartColumn",
    color: "accent",
    features: [
      {
        title: "Data Enrichment",
        description:
          "Automatically enrich candidate profiles with social, professional, and skills data.",
      },
      {
        title: "Market Intelligence",
        description:
          "Salary benchmarks, talent availability maps, and competitive landscape analysis.",
      },
      {
        title: "Hiring Analytics",
        description:
          "Track time-to-hire, cost-per-hire, source ROI, and team performance metrics.",
      },
      {
        title: "Custom Dashboards",
        description:
          "Build your own views with drag-and-drop widgets and real-time data.",
      },
      {
        title: "Predictive Insights",
        description:
          "AI predicts candidate likelihood to accept, time-to-fill, and pipeline health.",
      },
      {
        title: "Export & Integration",
        description:
          "Connect to your HRIS, ATS, or BI tools with native integrations and APIs.",
      },
    ],
    stats: [
      { value: "50+", label: "Data Points Enriched" },
      { value: "Real-Time", label: "Dashboard Updates" },
      { value: "12", label: "HRIS Integrations" },
      { value: "3x", label: "Faster Decisions" },
    ],
    steps: [
      {
        title: "Connect Your Data",
        description: "Plug in your ATS, HRIS, and other hiring tools.",
      },
      {
        title: "AI Enriches & Analyzes",
        description: "Profiles are enriched, patterns detected, insights surfaced.",
      },
      {
        title: "Make Smarter Decisions",
        description: "Custom dashboards and AI recommendations at your fingertips.",
      },
    ],
  },
];

export const solutions = [
  {
    slug: "sme",
    name: "For SMEs & Startups",
    headline: "Enterprise hiring power. Startup-friendly pricing.",
    description:
      "Stop losing top talent to bigger companies. AzphireHR gives SMEs access to the same AI-powered sourcing, screening, and analytics that enterprises use — at a fraction of the cost.",
    icon: "Rocket",
    color: "primary",
    challenges: [
      "Limited HR staff handling everything from sourcing to onboarding",
      "Can't compete with enterprise salaries and employer brands",
      "Drowning in applications from job boards with no way to screen efficiently",
      "No budget for expensive recruitment tools or agencies",
    ],
    solutions: [
      {
        title: "AI Does the Heavy Lifting",
        description: "TalentSearch finds candidates, SmartScreen evaluates them, PipelineCRM manages them — all automated.",
      },
      {
        title: "Free Tier to Get Started",
        description: "Start hiring smarter today with our generous free plan. Scale up as you grow.",
      },
      {
        title: "Compete for Top Talent",
        description: "Professional candidate experience and faster response times help you win against bigger companies.",
      },
      {
        title: "All-in-One Platform",
        description: "Replace 5+ tools with one. Sourcing, screening, CRM, assessments, and analytics in a single dashboard.",
      },
    ],
    stats: [
      { value: "70%", label: "Cost Reduction" },
      { value: "5x", label: "Faster Hiring" },
      { value: "200+", label: "SMEs Onboarded" },
    ],
  },
  {
    slug: "bpo",
    name: "For BPO & Contact Centers",
    headline: "Hire 1,000 agents. Before Monday.",
    description:
      "Purpose-built for the Philippines' ₱1.4T BPO industry. Handle massive hiring volumes with AI-powered screening that evaluates communication skills, personality fit, and shift readiness automatically.",
    icon: "Headphones",
    color: "secondary",
    challenges: [
      "Hiring hundreds of agents per month with small recruitment teams",
      "High attrition rates (30-40%) requiring constant pipeline replenishment",
      "Inconsistent screening quality across recruiters and shifts",
      "Candidates ghosting after applying — no engagement or feedback loop",
    ],
    solutions: [
      {
        title: "High-Volume AI Screening",
        description: "SmartScreen evaluates 10,000+ candidates per week with consistent, bias-free scoring.",
      },
      {
        title: "BPO-Specific Assessments",
        description: "Pre-built tests for voice quality, typing speed, customer empathy, and night-shift readiness.",
      },
      {
        title: "Attrition Prediction",
        description: "InsightHub's AI predicts which candidates are likely to stay beyond 90 days.",
      },
      {
        title: "Automated Candidate Engagement",
        description: "PipelineCRM keeps candidates warm with automated updates, reducing ghosting by 60%.",
      },
    ],
    stats: [
      { value: "10K+", label: "Weekly Screenings" },
      { value: "40%", label: "Less Attrition" },
      { value: "80%", label: "Faster Screening" },
    ],
  },
  {
    slug: "tech",
    name: "For Tech Companies",
    headline: "Find the developers everyone else misses.",
    description:
      "The Philippines has 200,000+ software developers, but the best ones aren't on job boards. TalentSearch AI finds passive tech talent across GitHub, Stack Overflow, and 30+ sources.",
    icon: "Code",
    color: "accent",
    challenges: [
      "Best developers aren't actively job hunting",
      "Technical screening is time-consuming and inconsistent",
      "Hard to assess real coding ability from resumes alone",
      "Competition from global companies offering USD salaries",
    ],
    solutions: [
      {
        title: "Passive Talent Discovery",
        description: "TalentSearch AI finds developers from GitHub contributions, Stack Overflow activity, and open-source work.",
      },
      {
        title: "Technical Assessments That Work",
        description: "SkillAssess offers real-world coding challenges in 40+ languages, evaluated by AI.",
      },
      {
        title: "Developer-Friendly Experience",
        description: "No tedious forms. Candidates get a streamlined, respectful experience that top devs expect.",
      },
      {
        title: "Market Intelligence",
        description: "InsightHub shows salary benchmarks, talent availability, and competitive landscape in real time.",
      },
    ],
    stats: [
      { value: "200K+", label: "PH Developers Indexed" },
      { value: "40+", label: "Languages Assessed" },
      { value: "3x", label: "More Passive Talent" },
    ],
  },
  {
    slug: "global",
    name: "For Global Teams",
    headline: "Hire Filipino talent. From anywhere.",
    description:
      "International companies choose Filipino professionals for their English fluency, cultural adaptability, and exceptional work ethic. AzphireHR makes cross-border hiring seamless with built-in compliance.",
    icon: "Globe",
    color: "primary",
    challenges: [
      "Navigating Philippine labor laws and compliance requirements remotely",
      "Verifying skills and credentials across borders",
      "Managing time zone differences in the hiring process",
      "Finding trustworthy talent without local presence",
    ],
    solutions: [
      {
        title: "Compliance Built In",
        description: "DiversityLens handles Philippine labor law compliance, BIR requirements, and employment contracts automatically.",
      },
      {
        title: "Verified Talent Pool",
        description: "Every candidate goes through AI verification — identity, skills, references, and background checks.",
      },
      {
        title: "Async-First Hiring",
        description: "SmartScreen's async video interviews eliminate time zone coordination headaches.",
      },
      {
        title: "Global Payroll Ready",
        description: "Integrations with Deel, Remote, and Wise for seamless cross-border payments.",
      },
    ],
    stats: [
      { value: "50+", label: "Countries Served" },
      { value: "100%", label: "Compliance Rate" },
      { value: "24hr", label: "Avg Response Time" },
    ],
  },
];

export const stats = [
  { value: "800M+", label: "Profiles Searchable" },
  { value: "40%", label: "Faster Time-to-Hire" },
  { value: "10K+", label: "Interviews Per Week" },
  { value: "95%", label: "Client Satisfaction" },
];

export const testimonials = [
  {
    quote:
      "AzphireHR replaced five different tools for us. The AI sourcing alone saved our team 20 hours per week.",
    author: "Maria Santos",
    title: "Head of Talent, TechVentures PH",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=MariaSantos&backgroundColor=b6e3f4",
  },
  {
    quote:
      "We screened 5,000 BPO candidates in a single week. The AI scoring was more consistent than our senior recruiters.",
    author: "James Reyes",
    title: "VP Recruitment, GlobalConnect BPO",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=JamesReyes&backgroundColor=c0aede",
  },
  {
    quote:
      "As a 15-person startup, we never thought we'd have access to talent intelligence like this. Game changer.",
    author: "Aina Dela Cruz",
    title: "CEO, Kaibigan App",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=AinaDelaCruz&backgroundColor=ffd5dc",
  },
  {
    quote:
      "The diversity analytics opened our eyes. We've increased diverse hires by 35% in just three months.",
    author: "David Chen",
    title: "CHRO, Pacific Digital",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=DavidChen&backgroundColor=d1f4cc",
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "For small teams getting started with AI hiring.",
    features: [
      "Up to 3 active job posts",
      "50 AI searches per month",
      "Basic video interviews",
      "Email support",
      "5 team members",
      "Basic analytics",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "₱4,999",
    period: "/month",
    description: "For growing companies that need the full platform.",
    features: [
      "Unlimited job posts",
      "500 AI searches per month",
      "Advanced SmartScreen with AI scoring",
      "PipelineCRM with outreach sequencing",
      "SkillAssess with 500+ templates",
      "DiversityLens analytics",
      "Priority support",
      "25 team members",
      "Full analytics & reporting",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with custom needs.",
    features: [
      "Everything in Growth",
      "Unlimited AI searches",
      "Custom AI models trained on your data",
      "InsightHub with predictive analytics",
      "SSO & advanced security",
      "Dedicated success manager",
      "Custom integrations & API access",
      "Unlimited team members",
      "SLA guarantee",
    ],
    cta: "Talk to Sales",
    highlighted: false,
  },
];

export const blogPosts = [
  {
    slug: "ai-hiring-philippines-2026",
    title: "The State of AI Hiring in the Philippines: 2026 Report",
    excerpt: "How Filipino companies are leveraging AI to transform their recruitment process and what it means for the future of work.",
    category: "Industry Report",
    date: "March 10, 2026",
    readTime: "8 min read",
    image: "/blog/blog-1.jpg",
  },
  {
    slug: "reduce-time-to-hire",
    title: "How to Reduce Time-to-Hire by 40% with AI Screening",
    excerpt: "A step-by-step guide to implementing AI-powered candidate screening that actually works.",
    category: "Guide",
    date: "March 5, 2026",
    readTime: "6 min read",
    image: "/blog/blog-2.jpg",
  },
  {
    slug: "diversity-hiring-playbook",
    title: "The Filipino Diversity Hiring Playbook",
    excerpt: "Practical strategies for building diverse teams in the Philippine context — from PWD inclusion to regional representation.",
    category: "Playbook",
    date: "February 28, 2026",
    readTime: "10 min read",
    image: "/blog/blog-3.jpg",
  },
  {
    slug: "bpo-recruitment-automation",
    title: "BPO Recruitment Automation: From 100 to 1,000 Hires Per Month",
    excerpt: "Case study: How a Cebu-based BPO scaled hiring 10x without adding a single recruiter.",
    category: "Case Study",
    date: "February 20, 2026",
    readTime: "7 min read",
    image: "/blog/blog-4.jpg",
  },
  {
    slug: "skills-based-hiring",
    title: "Why Skills-Based Hiring Beats Resume Screening Every Time",
    excerpt: "The data is clear: assessing real skills predicts job performance 5x better than pedigree.",
    category: "Research",
    date: "February 15, 2026",
    readTime: "5 min read",
    image: "/blog/blog-5.jpg",
  },
  {
    slug: "remote-filipino-talent",
    title: "Hiring Remote Filipino Talent: The Complete Guide for Global Teams",
    excerpt: "Everything international companies need to know about hiring, paying, and retaining Filipino remote professionals.",
    category: "Guide",
    date: "February 8, 2026",
    readTime: "12 min read",
    image: "/blog/blog-6.jpg",
  },
];

export const trustedLogos = [
  "Company A", "Company B", "Company C", "Company D",
  "Company E", "Company F", "Company G", "Company H",
  "Company I", "Company J", "Company K", "Company L",
];

export const integrations = [
  "LinkedIn", "Indeed", "JobStreet", "Kalibrr",
  "Slack", "Microsoft Teams", "Google Workspace", "Zoom",
  "Deel", "Remote.com", "Wise", "BambooHR",
];

export const faqItems = [
  {
    question: "How does AzphireHR's AI talent search work?",
    answer: "TalentSearch AI uses natural language processing to understand your ideal candidate description, then searches across 800M+ profiles from 30+ data sources including LinkedIn, GitHub, and professional networks. Results are ranked by AI-predicted fit, availability, and relevance.",
  },
  {
    question: "Is AzphireHR compliant with Philippine data privacy laws?",
    answer: "Yes. AzphireHR is fully compliant with the Philippine Data Privacy Act of 2012 (RA 10173), GDPR for international clients, and follows NPC guidelines for handling personal information in recruitment.",
  },
  {
    question: "Can I use AzphireHR for free?",
    answer: "Absolutely. Our Starter plan is free forever and includes up to 3 active job posts, 50 AI searches per month, and basic video interviews. No credit card required to get started.",
  },
  {
    question: "How does the AI video interview scoring work?",
    answer: "SmartScreen analyzes candidates' video responses across multiple dimensions: communication clarity, personality traits (Big Five model), technical competency, and cultural fit indicators. Each candidate receives a detailed scorecard that helps you make data-driven hiring decisions.",
  },
  {
    question: "What integrations does AzphireHR support?",
    answer: "We integrate with major job boards (LinkedIn, Indeed, JobStreet), communication tools (Slack, Teams, Zoom), HRIS platforms (BambooHR, Sprout), and global payroll providers (Deel, Remote, Wise). Custom API integrations are available on Enterprise plans.",
  },
  {
    question: "How is AzphireHR different from Kalibrr or Bossjob?",
    answer: "While Kalibrr and Bossjob are excellent job boards, AzphireHR is a full-stack hiring intelligence platform. We combine talent sourcing (800M+ profiles), AI interviews, skills assessment, talent CRM, diversity analytics, and market intelligence — capabilities previously only available to enterprises using 5+ separate tools.",
  },
];
