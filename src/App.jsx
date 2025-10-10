import Footer from "./components/Footer/Footer.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import SignUpSection from "./components/SignUpSection/SignUpSection.jsx";
import { Toaster } from "react-hot-toast";
import CommunitySection from "./components/CommunitySection/CommunitySection.jsx";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection.jsx";
import CultureQuizTeaser from "./components/CultureQuizTeaser/CultureQuizTeaser.jsx";

function App() {
  return (
    <div className="">
      <HeroSection />
      <FeaturesSection />
      <CultureQuizTeaser />
      <SignUpSection />
      <CommunitySection />
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
