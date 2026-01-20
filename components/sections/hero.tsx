"use client";

import { profileData } from "@/data/profile";
import { Mail, MapPin, Linkedin, Github, Instagram, X } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="section min-h-screen flex items-center pt-16 relative"
      style={{
        backgroundImage: `url('/me.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>

      <div className="max-w-7xl mx-auto w-full py-12 relative z-10">
        <div className="max-w-2xl">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
              {profileData.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              {profileData.title}
            </h2>
            <p className="text-lg text-gray-100 mb-8 leading-relaxed">
              {profileData.summary}
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-gray-100">
                <Mail className="h-5 w-5" />
                <a
                  href={`mailto:${profileData.email}`}
                  className="hover:text-primary-300 transition-colors"
                >
                  {profileData.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-100">
                <MapPin className="h-5 w-5" />
                <span>{profileData.location}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors text-sm sm:text-base"
              >
                <Linkedin className="h-4 w-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    profileData.github,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm sm:text-base"
              >
                <Github className="h-4 w-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href={profileData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-lg transition-colors text-sm sm:text-base"
              >
                <Instagram className="h-4 w-4" />
                <span className="hidden sm:inline">Instagram</span>
              </a>
              <a
                href={profileData.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors text-sm sm:text-base"
              >
                <X className="h-4 w-4" />
                <span className="hidden sm:inline">X</span>
              </a>
              <a
                href="#contact"
                className="px-3 sm:px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors text-sm sm:text-base"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
