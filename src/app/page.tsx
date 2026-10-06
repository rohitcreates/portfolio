import Hero from "@/components/Hero";
import SelectedProjects from "@/components/SelectedProjects";
import Philosophy from "@/components/Philosophy";
import SkillArsenal from "@/components/SkillArsenal";
import JourneyPreview from "@/components/JourneyPreview";

export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedProjects />
      <Philosophy />
      <SkillArsenal />
      <JourneyPreview />
    </main>
  );
}