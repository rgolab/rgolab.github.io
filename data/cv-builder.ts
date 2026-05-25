import {
  certifications,
  education,
  experiences,
  profileData,
  projects,
  skills,
  type CvSkillGroup,
} from "./profile";

const CV_GROUP_ORDER: CvSkillGroup[] = [
  "Cloud & Infra",
  "IaC & Automation",
  "CI/CD & GitOps",
];

export interface CvData {
  name: string;
  title: string;
  email: string;
  website: string;
  summary: string;
  expertise: { label: string; items: string[] }[];
  experience: {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    current: boolean;
    achievements: string[];
  }[];
  projects: {
    name: string;
    role: string;
    description: string;
    technologies: string[];
    outcomes: string[];
  }[];
  education: { degree: string; institution: string; years: string; honors?: string }[];
  certifications: { name: string; issuer: string }[];
}

function buildExpertise(): CvData["expertise"] {
  const grouped = new Map<CvSkillGroup, string[]>();
  for (const cat of skills) {
    for (const item of cat.items) {
      if (!item.cvGroup) continue;
      const list = grouped.get(item.cvGroup) ?? [];
      list.push(item.cvName ?? item.name);
      grouped.set(item.cvGroup, list);
    }
  }
  return CV_GROUP_ORDER
    .filter((label) => grouped.has(label))
    .map((label) => ({ label, items: grouped.get(label)! }));
}

export function buildCvData(): CvData {
  return {
    name: profileData.name,
    title: profileData.title,
    email: profileData.email,
    website: profileData.website,
    summary: profileData.summary,
    expertise: buildExpertise(),
    experience: experiences
      .filter((e) => !e.excludeFromCv)
      .map((e) => ({
        company: e.company,
        position: e.position,
        startDate: e.startDate,
        endDate: e.endDate,
        current: e.current,
        achievements: e.cvHighlights ?? e.achievements.slice(0, 3),
      })),
    projects: projects
      .filter((p) => p.cvInclude)
      .map((p) => ({
        name: p.name,
        role: p.role,
        description: p.description,
        technologies: p.technologies,
        outcomes: p.outcomes,
      })),
    education: education.map((e) => ({
      degree: e.degree,
      institution: e.institution,
      years: e.endYear ? `${e.startYear}–${e.endYear}` : e.startYear,
      honors: e.honors,
    })),
    certifications: certifications.map((c) => ({ name: c.name, issuer: c.issuer })),
  };
}
