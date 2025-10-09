import { useState } from "react";
import Footer from "./components/Footer/Footer.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import SignUpSection from "./components/SignUpSection/SignUpSection.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <HeroSection />
      <SignUpSection />
      <Footer />
    </div>
  );
}

export default App;
