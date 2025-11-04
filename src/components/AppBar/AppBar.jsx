import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import galbiLogo from "../../assets/images/galbi-logo.webp";
import AuthNav from "../AuthNav/AuthNav.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";
import UserMenu from "../UserMenu/UserMenu.jsx";
import { useSelector } from "react-redux";

const AppBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const handleLinkClick = (event) => {
    const target = event.target.closest("a");
    if (target) closeMenu();
  };
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className="w-full bg-transparent">
      <div className="max-w-[1920px] mx-auto flex items-center justify-between px-6 py-[20px] md:px-[50px] relative">
        <a href="/">
          <img
            className="w-[32px] h-[30px] lg:w-[42px] lg:h-[40px]"
            src={galbiLogo}
            alt="Galbi Logo"
          />
        </a>

        <div className="hidden lg:flex items-center justify-center gap-[90px]">
          <Navigation textColor="text-black" />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>

        <button
          onClick={toggleMenu}
          className="lg:hidden text-3xl focus:outline-none text-white relative z-[60]"
        >
          {menuOpen ? (
            <IoMdClose color="white" />
          ) : (
            <CiMenuFries color="black" />
          )}
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-full text-white z-[50] transform transition-transform duration-300 ease-in-out
    ${menuOpen ? "translate-x-0" : "translate-x-full"} 
    backdrop-blur-lg bg-[rgba(10,10,10,0.7)] shadow-[0_0_20px_rgba(0,0,0,0.7)]`}
      >
        <div
          className="flex flex-col items-center justify-center h-full gap-10 text-lg 
        tracking-wide"
          onClick={handleLinkClick}
        >
          <Navigation textColor="text-white" />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </div>
    </header>
  );
};

export default AppBar;
