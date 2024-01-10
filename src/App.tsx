import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import "./App.css";
function App() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121211] ">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
      </div>
    </main>
  );
}

export default App;
