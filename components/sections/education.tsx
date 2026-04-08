import { education } from "@/data/profile";
import { GraduationCap, Calendar, Award } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="section">
      <div className="section-container">
        <h2 className="heading mb-4">Education</h2>
        <p className="text-center text-muted max-w-2xl mx-auto mb-14">
          My academic background in computer science and engineering, with a
          focus on information technologies and project management.
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          {education.map((edu) => (
            <div key={edu.id} className="card p-6">
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>

                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-3 tracking-tight">
                  {edu.degree}
                </h3>

                <div className="text-sm text-muted space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>
                      {edu.startYear} - {edu.endYear}
                    </span>
                  </div>

                  <p className="font-medium text-gray-700 dark:text-gray-300">
                    {edu.institution}
                  </p>

                  {edu.honors && (
                    <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400">
                      <Award className="h-3.5 w-3.5" />
                      <span className="font-medium text-xs">{edu.honors}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
