"use client";

import { companies } from "@/data/profile";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/**
 * Company Slider Component
 *
 * Features:
 * - Infinite loop scrolling animation
 * - Automatic dark/light mode logo handling
 * - Responsive design for mobile and desktop
 * - Professional hover effects with shadows
 * - Clickable logos that link to company websites
 * - Company names displayed below each logo with consistent alignment
 *
 * The component automatically uses all companies from the profile data
 * and handles theme changes seamlessly.
 */

export default function CompanySlider() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Use resolvedTheme for more reliable theme detection
  const currentTheme = resolvedTheme || theme;

  return (
    <div className="relative w-full overflow-hidden py-8">
      <div className="relative flex overflow-x-hidden scrollbar-hide">
        <div className="flex animate-scroll space-x-12 md:space-x-20 whitespace-nowrap">
          {/* First set of logos */}
          {companies.map((company, index) => (
            <div
              key={`first-${index}`}
              className="flex flex-col items-center justify-start min-w-[140px] md:min-w-[160px] h-28"
            >
              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-all duration-300 hover:scale-110"
                title={company.name}
              >
                <div className="flex flex-col items-center justify-center px-4">
                  <div className="flex items-center justify-center h-20 mb-2">
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className={`max-h-16 md:max-h-20 w-auto transition-all duration-300 group-hover:drop-shadow-lg group-hover:drop-shadow-gray-400/50 dark:group-hover:drop-shadow-gray-600/50 ${
                        currentTheme === "dark"
                          ? "filter brightness-0 invert"
                          : "filter brightness-0"
                      }`}
                    />
                  </div>
                  <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400 text-center font-medium">
                    {company.name}
                  </span>
                </div>
              </a>
            </div>
          ))}

          {/* Second set for seamless loop */}
          {companies.map((company, index) => (
            <div
              key={`second-${index}`}
              className="flex flex-col items-center justify-start min-w-[140px] md:min-w-[160px] h-28"
            >
              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-all duration-300 hover:scale-110"
                title={company.name}
              >
                <div className="flex flex-col items-center justify-center px-4">
                  <div className="flex items-center justify-center h-20 mb-2">
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className={`max-h-16 md:max-h-20 w-auto transition-all duration-300 group-hover:drop-shadow-lg group-hover:drop-shadow-gray-400/50 dark:group-hover:drop-shadow-gray-600/50 ${
                        currentTheme === "dark"
                          ? "filter brightness-0 invert"
                          : "filter brightness-0"
                      }`}
                    />
                  </div>
                  <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400 text-center font-medium">
                    {company.name}
                  </span>
                </div>
              </a>
            </div>
          ))}

          {/* Third set for ultra-smooth loop */}
          {companies.map((company, index) => (
            <div
              key={`third-${index}`}
              className="flex flex-col items-center justify-start min-w-[140px] md:min-w-[160px] h-28"
            >
              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-all duration-300 hover:scale-110"
                title={company.name}
              >
                <div className="flex flex-col items-center justify-center px-4">
                  <div className="flex items-center justify-center h-20 mb-2">
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className={`max-h-16 md:max-h-20 w-auto transition-all duration-300 group-hover:drop-shadow-lg group-hover:drop-shadow-gray-400/50 dark:group-hover:drop-shadow-gray-600/50 ${
                        currentTheme === "dark"
                          ? "filter brightness-0 invert"
                          : "filter brightness-0"
                      }`}
                    />
                  </div>
                  <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400 text-center font-medium">
                    {company.name}
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
