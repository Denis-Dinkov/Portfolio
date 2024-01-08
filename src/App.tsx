import HeroSection from "./Components/HeroSection";
import "./App.css";
function App() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121211]">
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
      </div>
    </main>
  );
}

export default App;
