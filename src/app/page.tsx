import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { NowSection } from "@/components/site/NowSection";
import { FeaturedProjects } from "@/components/site/FeaturedProjects";
import { ExperienceSection } from "@/components/site/ExperienceSection";
import { SkillsSection } from "@/components/site/SkillsSection";
import { BeyondSection } from "@/components/site/BeyondSection";
import { SocialSection } from "@/components/site/SocialSection";
import { ContactSection } from "@/components/site/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-hero">
      <div className="min-h-screen w-full bg-black/40 backdrop-blur-sm">
        <Header />
        <main>
          <Hero />
          <NowSection />
          <FeaturedProjects />
          <ExperienceSection />
          <SkillsSection />
          <BeyondSection />
          <SocialSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}
