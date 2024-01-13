import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import ProjectSection from "./Components/ProjectsSection";
import "./App.css";

function App() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121211] ">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </div>
    </main>
  );
}

export default App;
