import { skills } from "@/data/profile";
import { Star } from "lucide-react";

export default function SkillsSection() {
  const levelToStars = (level: string) => {
    switch (level) {
      case "beginner":
        return 2;
      case "intermediate":
        return 3;
      case "advanced":
        return 4;
      case "expert":
        return 5;
      default:
        return 0;
    }
  };

  const getLevelLabel = (level: string) =>
    level.charAt(0).toUpperCase() + level.slice(1);

  return (
    <section id="skills" className="section">
      <div className="section-container">
        <h2 className="heading mb-4">Technical Skills</h2>
        <p className="text-center text-muted max-w-3xl mx-auto mb-12">
          A curated snapshot of day-to-day tools and platforms I use to design,
          build and operate secure, scalable cloud infrastructure.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skills.map((category, index) => (
            <div key={index} className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">
                {category.category}
              </h3>

              <ul className="space-y-3">
                {category.items.map((skill, idx) => {
                  const stars = levelToStars(skill.level);
                  return (
                    <li key={idx} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full font-semibold tracking-wide ${
                            skill.level === "expert"
                              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                              : skill.level === "advanced"
                              ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
                              : skill.level === "intermediate"
                              ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
                              : "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300"
                          }`}
                        >
                          {getLevelLabel(skill.level)}
                        </span>
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < stars
                                  ? "text-yellow-500"
                                  : "text-gray-300 dark:text-gray-600"
                              }`}
                              fill={i < stars ? "currentColor" : "none"}
                            />
                          ))}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-10 flex justify-center">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="inline-flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full font-semibold tracking-wide bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
                Beginner
              </span>
              <div className="flex">
                {Array.from({ length: 2 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-500"
                    fill="currentColor"
                  />
                ))}
              </div>
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full font-semibold tracking-wide bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                Intermediate
              </span>
              <div className="flex">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-500"
                    fill="currentColor"
                  />
                ))}
              </div>
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full font-semibold tracking-wide bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                Advanced
              </span>
              <div className="flex">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-500"
                    fill="currentColor"
                  />
                ))}
              </div>
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full font-semibold tracking-wide bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                Expert
              </span>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-500"
                    fill="currentColor"
                  />
                ))}
              </div>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
