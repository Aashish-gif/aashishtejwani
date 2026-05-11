import Preloader from "@/components/ui/Preloader";
import Hero from "@/components/ui/Hero";
import AchievementsPopup from "@/components/ui/AchievementsPopup";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Hackathons from "@/components/sections/Hackathons";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Preloader />
      <AchievementsPopup />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Hackathons />
      <Certificates />
      <Contact />
    </>
  );
}
