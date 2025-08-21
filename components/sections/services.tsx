import {
  Cloud,
  ShieldCheck,
  Boxes,
  Wrench,
  ServerCog,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud architecture & migrations",
    description:
      "Design cloud architecture and perform secure migrations to AWS/GCP. Optimize costs and build highly available, scalable environments.",
    points: [
      "Well-Architected Review",
      "Landing Zone",
      "IaC (Terraform)",
      "Cost & security guardrails",
    ],
  },
  {
    icon: Boxes,
    title: "Platform Engineering / Kubernetes",
    description:
      "Build internal developer platforms on Kubernetes and GitOps, enabling self-service and standardization.",
    points: ["K8s, EKS/GKE", "Helm / Argo CD", "Multi-tenant", "Observability"],
  },
  {
    icon: ShieldCheck,
    title: "DevSecOps",
    description:
      "Automate security across the SDLC: scanning, secrets, compliance and policies.",
    points: [
      "SAST/DAST/Dependency",
      "Secrets management (Vault)",
      "OPA/Policy as Code",
      "SBOM & supply chain",
    ],
  },
  {
    icon: ServerCog,
    title: "SRE & reliability",
    description:
      "Design for SLO/SLA, observability and production reliability.",
    points: [
      "SLO/SLA",
      "Incident response",
      "Proactive monitoring",
      "Chaos & Disaster Recovery",
    ],
  },
  {
    icon: Wrench,
    title: "CI/CD & automation",
    description:
      "Effective delivery pipelines focused on quality, security and deployment speed.",
    points: [
      "GitHub Actions / GitLab CI / Jenkins",
      "Testing & quality gates",
      "Canary/Blue-Green",
      "Release management",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training & advisory",
    description:
      "Workshops and mentoring for teams. Knowledge transfer and best practices in cloud and DevOps.",
    points: [
      "Tailored curriculum",
      "Hands-on",
      "Code/Infra reviews",
      "Maturity roadmap",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="offer" className="section">
      <div className="section-container">
        <h2 className="heading mb-4">Offer</h2>
        <p className="text-center text-muted max-w-3xl mx-auto mb-12">
          I help companies build secure, efficient and scalable cloud platforms.
          Below are the areas where I most often support.
        </p>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="card h-full p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc pl-5">
                  {service.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
