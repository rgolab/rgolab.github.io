import { skills } from "@/data/profile";

export default function SkillsSection() {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "expert":
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/40";
      case "advanced":
        return "bg-primary-500/10 text-primary-600 dark:text-primary-400 border-primary-200 dark:border-primary-800/40";
      case "intermediate":
        return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800/40";
      default:
        return "bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700";
    }
  };

  return (
    <section id="skills" className="section">
      <div className="section-container">
        <h2 className="heading mb-4">Technical Skills</h2>
        <p className="text-center text-muted max-w-2xl mx-auto mb-14">
          A curated snapshot of day-to-day tools and platforms I use to design,
          build and operate secure, scalable cloud infrastructure.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {skills.map((category, index) => (
            <div key={index} className="card p-6">
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium border ${getLevelColor(
                      skill.level
                    )}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-10 flex justify-center">
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted">
            {[
              { label: "Expert", color: "bg-emerald-500" },
              { label: "Advanced", color: "bg-primary-500" },
              { label: "Intermediate", color: "bg-amber-500" },
              { label: "Beginner", color: "bg-gray-400" },
            ].map((item) => (
              <span key={item.label} className="flex items-center gap-1.5">
                <span
                  className={`w-2 h-2 rounded-full ${item.color}`}
                />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
