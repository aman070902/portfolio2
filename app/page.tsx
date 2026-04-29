import { HeroSection } from "@/components/hero-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { AchievementSection } from "@/components/achievement-section"
import { PublicationSection } from "@/components/publication-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"
import { SideNav } from "@/components/side-nav"

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <SideNav />
      
      {/* Background grid with slow parallax */}
      <div className="grid-bg fixed inset-0 opacity-15 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 md:pl-20">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementSection />
        <PublicationSection />
        <EducationSection />
        <ContactSection />
      </div>
    </main>
  )
}
