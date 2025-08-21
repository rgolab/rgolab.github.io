"use client";

import CompanySlider from "./company-slider";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-full">
      <div className="section-container-full">
        <div className="card-full p-8 md:p-12 w-full">
          {/* Company Slider */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h4 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                I worked with
              </h4>
            </div>
            <CompanySlider />
          </div>
        </div>
      </div>
    </section>
  );
}
