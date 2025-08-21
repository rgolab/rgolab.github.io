import { education } from "@/data/profile";
import { GraduationCap, Calendar, Award } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="section">
      <div className="section-container">
        <h2 className="heading mb-4">Education</h2>
        <p className="text-center text-muted max-w-3xl mx-auto mb-12">
          My academic background in computer science and engineering, with a
          focus on information technologies and project management.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu) => (
            <div key={edu.id} className="card p-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {edu.degree}
                </h3>

                <div className="text-sm text-muted space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {edu.startYear} - {edu.endYear}
                    </span>
                  </div>

                  <p className="font-medium text-gray-700 dark:text-gray-300">
                    {edu.institution}
                  </p>

                  {edu.honors && (
                    <div className="flex items-center justify-center gap-2 text-primary-600 dark:text-primary-400">
                      <Award className="h-4 w-4" />
                      <span className="font-semibold">{edu.honors}</span>
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
