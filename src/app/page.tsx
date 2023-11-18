import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectOne from "@/components/ProjectsOne";
import { ProjectContextProvider } from "@/context/ProjectContext";
export default function Home() {
  return (
    <main className="max-w-[1800px] mx-auto">
      <Navigation />
      <Hero />
      <ProjectContextProvider>
        <ProjectOne />
      </ProjectContextProvider>
    </main>
  );
}
