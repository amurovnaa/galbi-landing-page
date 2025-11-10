import galbiLogo from "../../assets/images/galbi-logo.webp";
import footerBgImg from "../../assets/images/footer-bg.jpg";
import Container from "../Container/Container.jsx";
import { Link, NavLink } from "react-router";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <section
      className="relative bg-cover bg-right bg-no-repeat flex justify-center"
      style={{ backgroundImage: `url(${footerBgImg})` }}
      id="footer"
    >
      <Container className="relative z-10 xl:px-[140px] flex justify-center py-[34px]">
        <div className="flex flex-col gap-[100px] max-w-[900px] items-center">
          <div className="flex flex-col items-center justify-center">
            <NavLink to="/">
              <img className="mb-10 w-[52px] h-[50px] " src={galbiLogo} />
            </NavLink>
            <h2 className="leading-[1.4] font-semibold text-[26px] lg:text-[30px] text-center mb-[35px]">
              Galbi is made with love for people who still believe in
              intentional connection.
            </h2>
            <ul className="flex flex-col gap-8 text-[18px] font-normal text-center mb-[34px] wrap md:flex-row">
              <li className="">
                <NavLink to="/story">Our Story</NavLink>
              </li>
              <li className="">
                <NavLink to="/privacy">Privacy & Terms</NavLink>
              </li>
              <li className="">
                <HashLink smooth to="/#features">
                  Features
                </HashLink>
              </li>
            </ul>
            <ul className="cursor-pointer flex gap-[30px] items-center wrap">
              <li className=" flex items-center justify-center max-w-[55px] max-h-[55px] p-[15.8px] rounded-full bg-white/20 hover:bg-white/30 transition">
                <a href="https://www.instagram.com/galbi.app" target="_blank">
                  <svg
                    className="inline-block w-[23.4px] h-[23.4px]"
                    strokeWidth="0"
                    stroke="none"
                    fill="#fff"
                  >
                    <use href="/sprite.svg#icon-instagram"></use>
                  </svg>
                </a>
              </li>
              <li className=" flex items-center justify-center max-w-[55px] max-h-[55px] p-[15.8px] rounded-full bg-white/20 hover:bg-white/30 transition">
                <a href="https://www.tiktok.com/@galbi.app" target="_blank">
                  <svg
                    className="inline-block w-[23.4px] h-[23.4px]"
                    strokeWidth="0"
                    stroke="none"
                    fill="#fff"
                  >
                    <use href="/sprite.svg#icon-tiktok"></use>
                  </svg>
                </a>
              </li>
              <li className=" flex items-center justify-center max-w-[55px] max-h-[55px] p-[15.8px] rounded-full bg-white/20 hover:bg-white/30 transition">
                <a href="https://www.facebook.com/galbi.app" target="_blank">
                  <svg
                    className="inline-block w-[23.4px] h-[23.4px]"
                    strokeWidth="0"
                    stroke="none"
                    fill="#fff"
                  >
                    <use href="/sprite.svg#icon-facebook"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="leading-[1.4] font-normal text-md text-center opacity-90">
              @ 2025 Galbi. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
