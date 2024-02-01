import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import AchievmentSection from "./Components/AchievmentSection";
import AboutSection from "./Components/AboutSection";
import ProjectSection from "./Components/ProjectsSection";
import EmailSection from "./Components/EmailSection";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <main className="font-inter flex min-h-screen flex-col bg-[#121211]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 ">
        <HeroSection/>
        <AchievmentSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}

export default App;
