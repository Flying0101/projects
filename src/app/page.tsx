import Hero from "@/components/Hero";
import ProjectOne from "@/components/ProjectsOne";
import ProjectTwo from "@/components/ProjectsTwo";
import { ProjectContextProvider } from "@/context/ProjectContext";
import TechStack from "@/components/Techstack";
import { IconContextProvider } from "@/context/IconContext";
import Footer from "@/components/Footer";
export default function Home() {


  return (
    <main className="max-w-[1800px] mx-auto">
      <Hero />
      <ProjectContextProvider>
        <ProjectOne />
        <ProjectTwo />
      </ProjectContextProvider>
      <IconContextProvider>
        <TechStack />
      </IconContextProvider>
      <Footer />
    </main>
  );
}
