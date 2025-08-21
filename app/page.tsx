import HeroSection from "@/components/sections/hero";
import SkillsSection from "@/components/sections/skills";
import ServicesSection from "@/components/sections/services";
import ProjectsSection from "@/components/sections/projects";
import ExperienceSection from "@/components/sections/experience";
import EducationSection from "@/components/sections/education";
import CertificationsSection from "@/components/sections/certifications";
import ContactSection from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ServicesSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}
