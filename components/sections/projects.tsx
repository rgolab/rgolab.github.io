import { projects } from "@/data/profile";
import { ExternalLink, CheckCircle } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="section-container">
        <h2 className="heading mb-4">Projects That Made a Difference</h2>
        <p className="text-center text-muted max-w-2xl mx-auto mb-14">
          Selected projects where I led infrastructure modernization and
          delivered measurable business impact.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div key={project.id} className="card p-6 flex flex-col">
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 tracking-tight">
                    {project.name}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <p className="text-xs font-medium text-primary-600 dark:text-primary-400">
                  {project.role}
                </p>
                <p className="text-xs text-muted mb-3">
                  {project.industry}
                </p>
                <p className="text-sm text-muted leading-relaxed mb-4 h-[3rem] line-clamp-2">
                  {project.description}
                </p>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-1.5 h-[3rem] content-start overflow-hidden">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 bg-gray-100 dark:bg-surface-darkMuted text-gray-600 dark:text-gray-400 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-gray-100 dark:border-surface-darkBorder">
                <ul className="space-y-1.5">
                  {project.outcomes.map((outcome, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <CheckCircle className="h-3.5 w-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
