"use client";

import { profileData } from "@/data/profile";
import { Mail, MapPin, Linkedin, Github, Instagram, X, Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="section min-h-screen flex items-center pt-16 relative"
      style={{
        backgroundImage: `url('${profileData.profileImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 dark:from-black/80 dark:via-black/60 dark:to-black/40" />

      <div className="max-w-6xl mx-auto w-full py-12 relative z-10">
        <div className="max-w-2xl">
          <div className="animate-slide-up">
            <p className="text-sm font-medium tracking-widest uppercase text-primary-200 mb-4">
              {profileData.title}
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
              {profileData.name}
            </h1>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-xl">
              {profileData.summary}
            </p>

            <div className="flex items-center gap-6 mb-10 text-sm text-gray-300">
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-primary-400" />
                {profileData.email}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary-400" />
                {profileData.location}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="px-6 py-2.5 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-medium transition-colors text-sm"
              >
                Get in touch
              </a>
              <a
                href="/rafal-golab-cv.pdf"
                download
                className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium transition-colors text-sm backdrop-blur-sm flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors backdrop-blur-sm"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors backdrop-blur-sm"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={profileData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors backdrop-blur-sm"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={profileData.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors backdrop-blur-sm"
              >
                <X className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
