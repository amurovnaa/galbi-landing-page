import galbiLogo from "../../assets/images/galbi-logo.png";
import footerBgImg from "../../assets/images/footer-bg.png";
import Container from "../Container/Container.jsx";
import sphere from "../../assets/images/sphere-bg.png";
const Footer = () => {
  return (
    <section
      className="relative bg-cover bg-right bg-no-repeat flex justify-center"
      style={{ backgroundImage: `url(${footerBgImg})` }}
    >
      {/* <img
        src={sphere}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[256px] h-[256px] opacity-[0.45]"
        alt="decorative sphere"
      /> */}
      <Container className="relative z-10 xxl:px-[240px] flex justify-center pt-[100px] pb-[50px]">
        <div className="flex flex-col gap-[100px] max-w-[900px] items-center">
          <div className="flex flex-col items-center justify-center">
            <img className="w-[81px] h-[80px] mb-10" src={galbiLogo} />
            <h2 className="leading-[1.4] font-semibold text-4xl text-center mb-[55px]">
              Galbi is made with love for people who still believe in
              intentional connection.
            </h2>
            <ul className="flex gap-10 font-normal text-xl text-center mb-[55px] wrap">
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Terms</a>
              </li>
              <li>
                <a href="/">Privacy</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
            <ul className="cursor-pointer flex gap-[30px] items-center wrap">
              <li className=" flex items-center justify-center max-w-[55px] max-h-[55px] p-[15.8px] rounded-full bg-white/20 hover:bg-white/30 transition">
                <a href="/">
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
                <a href="/">
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
                <a href="/">
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
            <p className="leading-[1.4] font-normal text-lg text-center">
              @ 2025 Galbi. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
