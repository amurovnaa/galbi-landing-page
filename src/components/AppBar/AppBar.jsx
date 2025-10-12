import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import galbiLogo from "../../assets/images/galbi-logo.png";
import AuthNav from "../AuthNav/AuthNav.jsx";
import Navigation from "../Navigation/Navigation.jsx";

const AppBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-[1920px] mx-auto flex items-center justify-between px-6 py-[25px] md:px-[50px] relative">
        {/* Logo */}
        <a href="/">
          <img className="w-[52px] h-[50px]" src={galbiLogo} alt="Galbi Logo" />
        </a>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center justify-center gap-[110px]">
          <Navigation />
          <AuthNav />
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl focus:outline-none text-white relative z-[60]"
        >
          {menuOpen ? <IoMdClose /> : <CiMenuFries />}
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-full text-white z-50 transform transition-transform duration-300 ease-in-out
    ${menuOpen ? "translate-x-0" : "translate-x-full"} 
    backdrop-blur-lg bg-[rgba(10,10,10,0.7)] shadow-[0_0_20px_rgba(0,0,0,0.7)]`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10 text-lg tracking-wide">
          <Navigation />
          <AuthNav />
        </div>
      </div>
    </header>
  );
};

export default AppBar;
