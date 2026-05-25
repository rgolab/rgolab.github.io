export interface Project {
  id: string;
  name: string;
  industry: string;
  description: string;
  role: string;
  technologies: string[];
  outcomes: string[];
  link?: string;
  cvInclude?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];
  cvHighlights?: string[];
  excludeFromCv?: boolean;
}

export type CvSkillGroup = "Cloud & Infra" | "IaC & Automation" | "CI/CD & GitOps";

export interface Company {
  name: string;
  url: string;
  logo?: string;
}

export interface Skill {
  category: string;
  items: {
    name: string;
    level: "beginner" | "intermediate" | "advanced" | "expert";
    cvGroup?: CvSkillGroup;
    cvName?: string;
  }[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  startYear: string;
  endYear: string;
  honors?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  link?: string;
}

export const profileData = {
  name: "Rafał Gołąb",
  title: "DevOps Engineer & Cloud Architect",
  summary:
    "Experienced DevOps Engineer and Cloud Architect with over 20 years of professional IT experience. I am a strong advocate of Dev*Ops methodologies and the Everything as Code (EaaC) approach, specializing in AWS and Google Cloud Platform. I excel at building and maintaining scalable, secure, and highly available infrastructure while leading cross-functional teams and mentoring junior engineers.",
  email: "contact@rgolab.com",
  website: "https://rgolab.github.io",
  location: "Krakow, Poland",
  linkedin: "https://www.linkedin.com/in/rgolab/",
  github: "https://github.com/rgolab",
  instagram: "https://www.instagram.com/rafal.golab/",
  twitter: "https://x.com/rgolab",
  profileImage: "/me.jpg",
};

export const projects: Project[] = [
  {
    id: "1",
    name: "AI-Powered Banking Contact Center",
    industry: "Banking / Financial services",
    description:
      "Serverless AI contact center replacing a legacy bank PBX with an LLM-driven conversational IVR.",
    role: "Lead DevOps & Solution Architect",
    technologies: [
      "AWS Connect",
      "AWS Lex",
      "AWS Bedrock",
      "OpenAI Whisper",
      "OpenAI GPT",
      "Terraform",
    ],
    outcomes: [
      "Replaced legacy PBX with serverless AI-powered contact center",
      "First LLM-powered IVR in production for the bank",
      "Self-service handling for majority of calls",
    ],
    cvInclude: true,
  },
  {
    id: "2",
    name: "Hardened Mail Platform on Kubernetes",
    industry: "Public sector / Government",
    description:
      "Hardened Kubernetes mail platform with a custom fleet-scale operator.",
    role: "Lead DevOps & Solution Architect",
    technologies: [
      "Kubernetes (RKE strict)",
      "Wolfi (distroless)",
      "Kyverno",
      "Cilium",
      "Python",
      "Helm",
    ],
    outcomes: [
      "Migrated legacy mail server to hardened Kubernetes platform",
      "Defense-in-depth: rootless, distroless, no-shell images",
      "Met government / CIS hardening requirements for production",
    ],
    cvInclude: true,
  },
  {
    id: "3",
    name: "Real-Money Online Gaming Platform",
    industry: "Online gaming",
    description:
      "Real-money online gaming platform on AWS with multi-region high-availability.",
    role: "Lead DevOps & Solution Architect",
    technologies: [
      "AWS",
      "EKS",
      "Helm",
      "ArgoCD",
      "Redis",
      "Terraform",
      "GitLab CI",
    ],
    outcomes: [
      "Maintained 99.9%+ uptime SLA for real-money gaming",
      "Multi-region high-availability for low-latency gameplay",
      "Auto-scaling for peak-hour traffic (weekends, sports events)",
    ],
  },
  {
    id: "4",
    name: "Multi-Exchange Crypto Trading Bots",
    industry: "Crypto / fintech trading platform",
    description:
      "Python trading bots integrating with multiple crypto exchanges concurrently.",
    role: "Lead DevOps & Software Engineer",
    technologies: [
      "DigitalOcean",
      "Python",
      "Ansible",
      "Docker",
      "Terraform",
      "GitLab CI",
    ],
    outcomes: [
      "Built trading bots integrating multiple exchanges concurrently",
      "24/7/365 unattended trading operations with high reliability",
      "Resilient design tolerating individual exchange API outages",
    ],
    cvInclude: true,
  },
  {
    id: "5",
    name: "On-Premise Sports Betting Platform",
    industry: "Sports betting",
    description:
      "Fully on-premise multi-cluster Kubernetes platform powering a sports betting operator.",
    role: "Lead DevOps & Solution Architect",
    technologies: [
      "Kubernetes (RKE / Rancher)",
      "Elastic Stack",
      "Helm",
      "Terraform",
      "GitLab CI",
    ],
    outcomes: [
      "Operated production sports betting platform fully on-premise",
      "Multi-cluster Kubernetes in datacenter (bare-metal / VM)",
      "End-to-end observability with Elastic Stack (logs, metrics, traces)",
    ],
  },
  {
    id: "6",
    name: "E-Bike IoT Telemetry Platform",
    industry: "E-mobility / IoT",
    description:
      "End-to-end IoT telemetry platform on GCP for an electric bike fleet — ingest, process, visualize.",
    role: "Lead DevOps & Solution Architect",
    technologies: [
      "GCP",
      "GKE",
      "Pub/Sub",
      "DataFlow",
      "BigQuery",
      "Apache Airflow",
    ],
    outcomes: [
      "Built end-to-end IoT telemetry platform on GCP",
      "Real-time + batch processing pipeline (DataFlow + BigQuery)",
      "Scaled to telemetry from thousands of connected bikes",
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Tektit Consulting",
    position: "SRE / DevOps / Kubernetes Expert",
    startDate: "2025-03",
    endDate: "",
    current: true,
    description:
      "Working as SRE / DevOps / Kubernetes expert on multi-cluster operations across cloud and bare-metal environments.",
    achievements: [],
    cvHighlights: [
      "Maintaining Kubernetes clusters across bare-metal, AWS EKS, and Azure AKS environments",
      "Designing and managing Helm charts for multi-cluster deployments",
      "Creating Architecture Decision Records (ADRs) to document technical decisions",
      "Deploying and managing dynamic environments on Kubernetes",
    ],
  },
  {
    id: "2",
    company: "Tameshi",
    position: "Lead DevOps / Cloud Architect",
    startDate: "2024-03",
    endDate: "2025-03",
    current: false,
    description:
      "Led DevOps initiatives and cloud transformation projects with focus on EaaC, IaaC, and DevSecOps practices.",
    achievements: [
      "Implemented Everything as a Code (EaaC) and Infrastructure as Code (IaaC) approaches",
      "Leading DevSecOps initiatives and security-first development practices",
      "Managing AWS cloud infrastructure and Kubernetes clusters",
      "Overseeing GitLab CI/CD pipelines and automation workflows",
      "Leading cross-functional teams in cloud architecture decisions",
    ],
    cvHighlights: [
      "Implemented Everything as a Code (EaaC) and Infrastructure as Code (IaaC) approaches",
      "Leading DevSecOps initiatives and security-first development practices",
      "Managing AWS cloud infrastructure and Kubernetes clusters",
    ],
  },
  {
    id: "3",
    company: "SoftServe",
    position: "Senior/Lead DevOps Engineer",
    startDate: "2021-03",
    endDate: "2024-03",
    current: false,
    description:
      "Led DevOps engineering teams and cloud architecture projects across multiple client engagements.",
    achievements: [
      "Implemented EaaC methodologies across multiple client projects",
      "Managed Kubernetes clusters and CI/CD pipelines for enterprise applications",
      "Led cloud migration projects from on-premise to cloud platforms",
      "Architected Big Data solutions on GCP and AWS",
      "Mentored junior DevOps engineers and established best practices",
      "Managed on-premise infrastructure modernization projects",
    ],
    cvHighlights: [
      "Implemented EaaC methodologies across multiple client projects",
      "Managed Kubernetes clusters and CI/CD pipelines for enterprise applications",
      "Led cloud migration projects from on-premise to cloud platforms",
    ],
  },
  {
    id: "4",
    company: "Netguru",
    position: "Senior/Lead DevOps Engineer",
    startDate: "2020-09",
    endDate: "2021-03",
    current: false,
    description:
      "Led DevOps initiatives for gambling systems and established cloud architecture best practices.",
    achievements: [
      "Implemented Everything as a Code approach for gambling platform infrastructure",
      "Designed and managed Kubernetes clusters for high-availability systems",
      "Established CI/CD pipelines and DevOps best practices",
      "Architected AWS and GCP cloud solutions for gaming platforms",
      "Led technical decisions for scalable gambling system architecture",
    ],
    cvHighlights: [
      "Implemented Everything as a Code approach for gambling platform infrastructure",
      "Designed and managed Kubernetes clusters for high-availability systems",
      "Established CI/CD pipelines and DevOps best practices",
    ],
  },
  {
    id: "5",
    company: "Tektit Consulting",
    position: "Senior/Lead DevSecOps Engineer",
    startDate: "2020-02",
    endDate: "2020-08",
    current: false,
    description:
      "Led DevSecOps initiatives and cloud architecture projects with focus on security and scalability.",
    achievements: [
      "Implemented Everything as a Code methodologies for infrastructure",
      "Designed high-availability and serverless cloud architectures",
      "Established CI/CD pipelines with security-first approach",
      "Managed Kubernetes clusters and container orchestration",
      "Led self-organized teams using Scaled Agile (SAFe) methodology",
    ],
    cvHighlights: [
      "Implemented Everything as a Code methodologies for infrastructure",
      "Designed high-availability and serverless cloud architectures",
      "Established CI/CD pipelines with security-first approach",
    ],
  },
  {
    id: "6",
    company: "YooniQ Solutions",
    position: "DevOps Engineer",
    startDate: "2017-02",
    endDate: "2020-01",
    current: false,
    description:
      "Managed infrastructure and implemented DevOps practices for continuous delivery systems.",
    achievements: [
      "Managed Linux infrastructure including administration, monitoring, and problem resolution",
      "Implemented continuous integration and continuous delivery pipelines",
      "Developed and maintained AWS cloud architecture",
      "Led self-organized teams in infrastructure management",
      "Established monitoring and alerting systems for production environments",
    ],
    cvHighlights: [
      "Managed Linux infrastructure including administration, monitoring, and problem resolution",
      "Implemented continuous integration and continuous delivery pipelines",
    ],
  },
  {
    id: "7",
    company: "CODIBLY (KiWi Powered)",
    position: "Linux System Administrator & DevOps Engineer",
    startDate: "2014-12",
    endDate: "2017-01",
    current: false,
    description:
      "Managed Linux servers and developed embedded systems with DevOps practices.",
    achievements: [
      "Managed Linux servers including administration, monitoring, and problem resolution",
      "Developed embedded systems and microBMS platform",
      "Implemented continuous integration and continuous delivery workflows",
      "Designed and maintained AWS cloud infrastructure",
      "Established server management and backup procedures",
    ],
    excludeFromCv: true,
  },
  {
    id: "8",
    company: "AGH University of Science and Technology",
    position: "Linux System Administrator / Programmer",
    startDate: "2010-10",
    endDate: "2014-12",
    current: false,
    description:
      "PhD student managing computational servers and developing software frameworks.",
    achievements: [
      "Installed and managed computational servers for research projects",
      "Developed CA Framework and HPA software systems",
      "Managed software installation, upgrades, and backup systems",
      "Contributed to academic research in computational sciences",
      "Maintained high-performance computing infrastructure",
    ],
    excludeFromCv: true,
  },
  {
    id: "9",
    company: "koYto.pl",
    position: "Administrator / Programmer",
    startDate: "2005",
    endDate: "2009-05",
    current: false,
    description:
      "Managed hosting infrastructure and developed web-based hosting management systems.",
    achievements: [
      "Installed and managed hosting servers and infrastructure",
      "Developed comprehensive hosting management system",
      "Managed DirectAdmin control panels and hosting automation",
      "Designed and developed client websites and applications",
      "Provided technical support and client helpdesk services",
    ],
    excludeFromCv: true,
  },
  {
    id: "10",
    company: "Ramsat",
    position: "Software Developer",
    startDate: "2008",
    endDate: "2011",
    current: false,
    description:
      "Freelance software development specializing in telemarketing systems.",
    achievements: [
      "Developed comprehensive telemarketing system using PHP, HTML, CSS, PERL, and XML",
      "Designed both frontend and backend components of the system",
      "Implemented database architecture and API integrations",
      "Provided ongoing maintenance and system improvements",
    ],
    excludeFromCv: true,
  },
  {
    id: "11",
    company: "VPS",
    position: "Linux Administrator",
    startDate: "2005",
    endDate: "",
    current: true,
    description:
      "Managing virtual private servers for development and home automation projects.",
    achievements: [
      "Managed virtual private servers for development environments",
      "Hosted small pet projects and development tools",
      "Implemented home automation tools including N8N and HomeAssistant",
      "Maintained server infrastructure and security",
      "Provided ongoing system administration and optimization",
    ],
    excludeFromCv: true,
  },
  {
    id: "12",
    company: "UltraComp",
    position: "Administrator / Programmer",
    startDate: "2005-05",
    endDate: "2005-09",
    current: false,
    description:
      "Internship focusing on Linux administration and programming projects.",
    achievements: [
      "Installed and managed Linux servers and infrastructure",
      "Developed applications for various client projects",
      "Gained hands-on experience in system administration",
      "Contributed to programming and development initiatives",
    ],
    excludeFromCv: true,
  },
  {
    id: "13",
    company: "CyberNet",
    position: "Router Administrator",
    startDate: "2003",
    endDate: "2005",
    current: false,
    description:
      "Managed network infrastructure for small network service provider.",
    achievements: [
      "Installed and managed routers for network service provider",
      "Maintained network infrastructure and connectivity",
      "Provided technical support for network services",
      "Ensured network reliability and performance",
    ],
    excludeFromCv: true,
  },
];

export const skills: Skill[] = [
  {
    category: "Cloud Platforms",
    items: [
      { name: "AWS", level: "expert", cvGroup: "Cloud & Infra" },
      { name: "Google Cloud Platform", level: "advanced", cvGroup: "Cloud & Infra", cvName: "GCP" },
      { name: "DigitalOcean", level: "intermediate" },
      { name: "Azure", level: "beginner" },
      { name: "OpenStack", level: "intermediate" },
    ],
  },
  {
    category: "Containerization & Orchestration",
    items: [
      { name: "Docker", level: "expert", cvGroup: "Cloud & Infra" },
      { name: "Kubernetes", level: "expert", cvGroup: "Cloud & Infra" },
      { name: "Docker Compose", level: "advanced" },
      { name: "Helm", level: "advanced", cvGroup: "Cloud & Infra" },
      { name: "Kustomize", level: "intermediate" },
    ],
  },
  {
    category: "Infrastructure as Code & Automation",
    items: [
      { name: "Terraform", level: "expert", cvGroup: "IaC & Automation" },
      { name: "Ansible", level: "expert", cvGroup: "IaC & Automation" },
      { name: "Packer", level: "advanced", cvGroup: "IaC & Automation" },
      { name: "CloudFormation", level: "intermediate" },
      { name: "Terragrunt", level: "intermediate" },
      { name: "Pulumi", level: "beginner" },
    ],
  },
  {
    category: "CI/CD & GitOps",
    items: [
      { name: "GitLab CI", level: "expert", cvGroup: "CI/CD & GitOps" },
      { name: "Jenkins", level: "expert", cvGroup: "CI/CD & GitOps" },
      { name: "GitHub Actions", level: "expert", cvGroup: "CI/CD & GitOps" },
      { name: "ArgoCD", level: "advanced", cvGroup: "CI/CD & GitOps" },
      { name: "fluxcd", level: "advanced", cvGroup: "CI/CD & GitOps", cvName: "FluxCD" },
      { name: "n8n", level: "advanced" },
      { name: "Make", level: "advanced" },
      { name: "Azure DevOps", level: "intermediate" },
      { name: "CircleCI", level: "intermediate" },
      { name: "Tekton", level: "beginner" },
    ],
  },
  {
    category: "Programming & Scripting",
    items: [
      { name: "Bash", level: "advanced" },
      { name: "Python", level: "advanced" },
      { name: "PHP", level: "intermediate" },
      { name: "JavaScript/TypeScript", level: "intermediate" },
      { name: "Go", level: "intermediate" },
      { name: "Java", level: "beginner" },
      { name: "C/C++", level: "beginner" },
      { name: "PowerShell", level: "beginner" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", level: "advanced" },
      { name: "PostgreSQL", level: "advanced" },
      { name: "Cassandra", level: "advanced" },
      { name: "MongoDB", level: "intermediate" },
      { name: "Qdrant", level: "intermediate" },
      { name: "Airtable", level: "advanced" },
      { name: "Baserow", level: "advanced" },
      { name: "InfluxDB", level: "beginner" },
    ],
  },
  {
    category: "Data Engineering",
    items: [
      { name: "Apache Airflow", level: "intermediate" },
      { name: "Google DataFlow", level: "intermediate" },
      { name: "Google DataProc", level: "intermediate" },
      { name: "Apache Spark", level: "beginner" },
      { name: "Apache Beam", level: "beginner" },
    ],
  },
  {
    category: "Testing & Quality Assurance",
    items: [
      { name: "pytest", level: "advanced" },
      { name: "SonarQube", level: "intermediate" },
      { name: "Selenium", level: "intermediate" },
      { name: "Playwright", level: "intermediate" },
    ],
  },
  {
    category: "Code Quality & Linting",
    items: [
      { name: "ESLint", level: "intermediate" },
      { name: "Prettier", level: "intermediate" },
      { name: "Black", level: "intermediate" },
      { name: "Flake8", level: "intermediate" },
      { name: "SonarLint", level: "beginner" },
    ],
  },
  {
    category: "Monitoring & Observability",
    items: [
      { name: "Prometheus", level: "advanced" },
      { name: "Grafana", level: "advanced" },
      { name: "Tempo", level: "advanced" },
      { name: "Mimir", level: "intermediate" },
      { name: "Cortex", level: "beginner" },
      { name: "Thanos", level: "beginner" },
    ],
  },
  {
    category: "Logging & Tracing",
    items: [
      { name: "Elastic Stack", level: "advanced" },
      { name: "Loki", level: "advanced" },
      { name: "AWS CloudWatch", level: "advanced" },
      { name: "Google Cloud Logging/Stackdriver", level: "intermediate" },
      { name: "Datadog", level: "beginner" },
      { name: "New Relic", level: "beginner" },
    ],
  },
  {
    category: "Security & Compliance",
    items: [
      { name: "HashiCorp Vault", level: "advanced" },
      { name: "OWASP", level: "advanced" },
      { name: "Kyverno", level: "advanced" },
      { name: "OpenPolicyAgent", level: "intermediate" },
      { name: "Trivy", level: "intermediate" },
      { name: "Checkov", level: "intermediate" },
      { name: "TFSec", level: "intermediate" },
    ],
  },
  {
    category: "Service Mesh & Networking",
    items: [
      { name: "Cilium", level: "advanced" },
      { name: "Istio", level: "intermediate" },
      { name: "HAproxy", level: "intermediate" },
    ],
  },
  {
    category: "Message Queues & Caching",
    items: [
      { name: "Redis", level: "advanced" },
      { name: "AWS SQS", level: "intermediate" },
      { name: "Google Pub/Sub", level: "intermediate" },
      { name: "AWS EventBridge", level: "intermediate" },
      { name: "Apache Kafka", level: "beginner" },
      { name: "RabbitMQ", level: "beginner" },
    ],
  },
  {
    category: "Virtualization & Infrastructure",
    items: [
      { name: "VMware", level: "intermediate" },
      { name: "KVM", level: "intermediate" },
      { name: "Xen", level: "intermediate" },
      { name: "OpenVZ", level: "intermediate" },
    ],
  },
  {
    category: "AI/ML & Cloud Services",
    items: [
      { name: "AWS Connect", level: "intermediate" },
      { name: "AWS Polly", level: "intermediate" },
      { name: "AWS Lex", level: "intermediate" },
      { name: "AWS Transcribe", level: "intermediate" },
      { name: "AWS Bedrock", level: "intermediate" },
    ],
  },
  {
    category: "AI Tools & Development",
    items: [
      { name: "Cursor", level: "advanced" },
      { name: "Claude Code", level: "expert" },
      { name: "RAG Systems", level: "advanced" },
      { name: "GitHub Copilot", level: "intermediate" },
      { name: "LangChain", level: "beginner" },
    ],
  },
  {
    category: "Project Management & Tools",
    items: [
      { name: "JIRA", level: "advanced" },
      { name: "GitLab", level: "expert" },
      { name: "Agile", level: "intermediate" },
      { name: "SCRUM", level: "advanced" },
      { name: "SAFe", level: "intermediate" },
    ],
  },
];

export const education: Education[] = [
  {
    id: "1",
    degree: "Postgraduate Studies, Project Management",
    institution: "AGH University of Science and Technology",
    startYear: "2014",
    endYear: "2015",
  },
  {
    id: "2",
    degree: "PhD Student, Metal Engineering and Industrial Informatics",
    institution: "AGH University of Science and Technology",
    startYear: "2010",
    endYear: "2014",
  },
  {
    id: "3",
    degree:
      "Master of Science in Engineering, Modeling and Information Technologies",
    institution: "AGH University of Science and Technology",
    startYear: "2005",
    endYear: "2010",
    honors: "MSc. Eng.",
  },
];

export const certifications: Certification[] = [
  {
    id: "5",
    name: "AI_devs 4 Builders",
    issuer: "AI_devs",
    link: "https://credsverse.com/credentials/996684a0-b3e9-471a-8b36-f3ae1adef9c5",
  },
  {
    id: "1",
    name: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
  },
  {
    id: "2",
    name: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
  },
  {
    id: "4",
    name: "AWS Certified Solutions Architect - Professional",
    issuer: "Amazon Web Services",
  },
  {
    id: "3",
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
  },
];

/**
 * Companies I've worked with - displayed in the company slider
 *
 * To add more companies:
 * 1. Add your logo file to the public/logos/ folder
 * 2. Add a new entry below with:
 *    - name: Company name
 *    - url: Company website URL (use "#" if no public URL)
 *    - logo: Path to logo file (e.g., "/logos/company-name.svg")
 *
 * The slider will automatically include new companies and handle them with proper
 * dark/light mode support (white logos in dark mode, black logos in light mode)
 */
export const companies: Company[] = [
  {
    name: "Open xChange",
    url: "https://www.open-xchange.com/",
    logo: "/logos/open-xchange.png",
  },
  {
    name: "Tameshi",
    url: "https://tameshi.com/",
    logo: "/logos/tameshi.svg",
  },
  {
    name: "SoftServe",
    url: "https://www.softserveinc.com/",
    logo: "/logos/softserve.svg",
  },
  {
    name: "Sky",
    url: "https://www.sky.com/",
    logo: "/logos/sky.png",
  },
  {
    name: "Cryptosea",
    url: "https://cryptosea.com/",
    logo: "/logos/cryptosea.png",
  },
  {
    name: "Vice Golf",
    url: "https://vicegolf.eu/",
    logo: "/logos/vice-golf.png",
  },
  {
    name: "AGH University",
    url: "https://www.agh.edu.pl/",
    logo: "/logos/agh.svg",
  },
  {
    name: "Tellent",
    url: "#",
    logo: "/logos/tellent.svg",
  },
  {
    name: "Unatrix",
    url: "#",
    logo: "/logos/unatrix.svg",
  },
  {
    name: "Orange",
    url: "https://www.orange.com/",
    logo: "/logos/orange.svg",
  },
  {
    name: "Netguru",
    url: "https://www.netguru.com/",
    logo: "/logos/netguru.svg",
  },
  {
    name: "Tektit",
    url: "https://tektit.com/",
    logo: "/logos/tektit.png",
  },
  {
    name: "Cashpoint",
    url: "#",
    logo: "/logos/cashpoint.png",
  },
  {
    name: "JCHost",
    url: "https://jchost.pl/",
    logo: "/logos/jchost.avif",
  },
  {
    name: "Henkel",
    url: "https://www.henkel.com/",
    logo: "/logos/henkel.png",
  },
  // Add more companies as needed - just add new entries here
  // The slider will automatically include them
];
