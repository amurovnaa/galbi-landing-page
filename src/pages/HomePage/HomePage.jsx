import CommunitySection from "../../components/CommunitySection/CommunitySection.jsx";
import CultureQuizTeaser from "../../components/CultureQuizTeaser/CultureQuizTeaser.jsx";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection.jsx";
import HeroSection from "../../components/HeroSection/HeroSection.jsx";
import MarqueeTextSection from "../../components/MarqueeTextSection/MarqueeTextSection.jsx";
import MockupSection from "../../components/MockupSection/MockupSection.jsx";
import SignUpSection from "../../components/SignUpSection/SignUpSection.jsx";

const HomePage = () => {
  return (
    <>
      <main>
        <HeroSection />
        <MockupSection />
        <FeaturesSection />
        <CultureQuizTeaser />
        <MarqueeTextSection />
        <SignUpSection />

        <CommunitySection />
      </main>
    </>
  );
};
export default HomePage;
