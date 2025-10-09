import { useState } from "react";
import Footer from "./components/Footer/Footer.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
