import { useState } from "react";
import HeroSection from "./Components/HeroSection";
import "./App.css";
function App() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121211] container mx-auto px-12 py-4">
      <HeroSection />
    </main>
  );
}

export default App;
