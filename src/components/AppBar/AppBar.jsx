import galbiLogo from "../../assets/images/galbi-logo.png";
import AuthNav from "../AuthNav/AuthNav.jsx";
import Navigation from "../Navigation/Navigation.jsx";
const AppBar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-20">
      <div className="max-w-[1920px] mx-auto flex items-center justify-between px-6 py-[25px] md:px-[50px]">
        <a href="/">
          <img className="w-[52px] h-[50px]" src={galbiLogo} alt="Galbi Logo" />
        </a>

        <div className="flex items-center justify-center gap-[110px]">
          <Navigation />
          <AuthNav />
        </div>
      </div>
    </header>
  );
};

export default AppBar;
