import { useEffect, useState, useRef } from "react";
import bg1 from "../../assets/images/hero-bg1.webp";
import bg2 from "../../assets/images/hero-bg2.webp";
import bg3 from "../../assets/images/hero-bg3.webp";
import bg4 from "../../assets/images/hero-bg4.webp";
import bg5 from "../../assets/images/hero-bg5.webp";
import bg6 from "../../assets/images/hero-bg6.webp";
import card1 from "../../assets/images/hero-card-1.webp";
import card2 from "../../assets/images/hero-card-2.webp";
import card3 from "../../assets/images/hero-card-3.webp";

import AppBar from "../AppBar/AppBar.jsx";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import Container from "../Container/Container.jsx";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const HeroSection = () => {
  const images = [bg1, bg2, bg3, bg4, bg5, bg6];
  const [current, setCurrent] = useState(0);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    images.forEach((src) => (new Image().src = src));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-visible rtl"
      id="hero"
      ref={ref}
    >
      <AppBar />

      <AnimatePresence>
        {images.map((img, index) =>
          index === current ? (
            <motion.div
              key={index}
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
              initial={index === 0 ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.7 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          ) : null
        )}
      </AnimatePresence>

      <div className="absolute top-0 left-0 w-full h-full"></div>

      <Container className="relative z-10 mt-[232px] mb-[130px] xxl:px-[405px] flex flex-col justify-center items-center gap-[100px]">
        <motion.div
          className="max-w-[856px] flex flex-col items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h1
            className="font-lucida font-semibold text-[50px]  leading-[1.14] text-center text-white mb-6 md:text-[70px]"
            variants={fadeUp}
          >
            Your background is just the beginning
          </motion.h1>
          <motion.p
            className="font-normal text-[22px] leading-[1.64] text-center mb-[30px] opacity-90"
            variants={fadeUp}
          >
            Galbi is a culture-first dating app built for people who value
            tradition, dialect, and intentional love — not swiping games
          </motion.p>
          <motion.p
            className="font-lufga italic font-normal text-2xl text-center mb-[50px] opacity-90"
            variants={fadeUp}
          >
            Is it Galbi or Kalbi?
          </motion.p>
          <motion.button
            className="
    max-w-[358px] min-h-16 flex items-center justify-center gap-[10px]
    font-inter font-semibold text-[19px] text-center text-white
    px-4 py-2 rounded-2xl
    bg-gradient-to-b from-[#fb1555] to-[#8d1caa]
    shadow-none
    transition-[box-shadow,background-position,background-color] duration-700 ease-in-out
    hover:shadow-[0_2px_20px_rgba(0,0,0,0.15)]
    hover:from-[#ff4a7c] hover:to-[#a42fc2] md:w-[358px] md:h-16 md:text-[19px]
  "
            variants={fadeUp}
          >
            <span className="">Join the Founding Members</span>
            <svg
              className="inline-block w-6 h-6"
              strokeWidth="1.5"
              stroke="#fff"
              fill="none"
            >
              <use href="/sprite.svg#icon-arrow-right"></use>
            </svg>
          </motion.button>
        </motion.div>

        <ul className="flex flex-wrap justify-center gap-5">
          <li className="flex justify-center items-start w-full max-w-[310px] max-h-[365px] p-[30px] rounded-2xl border border-solid border-[rgba(255,255,255,0.5)] bg-white/20 backdrop-blur-sm">
            <img
              src={card1}
              alt="Happy Galbi People"
              className="w-full h-auto max-h-[305px] object-contain"
            />
          </li>

          <li className="flex justify-center items-start w-full max-w-[450px] max-h-[365px] p-[30px] rounded-2xl border border-solid border-[rgba(255,255,255,0.5)] bg-white/20 backdrop-blur-sm">
            <img
              src={card2}
              alt="Happy Galbi People"
              className="w-full h-auto max-h-[305px] object-contain"
            />
          </li>

          <li className="flex justify-center items-start w-full max-w-[310px] max-h-[365px] p-[30px] rounded-2xl border border-solid border-[rgba(255,255,255,0.5)] bg-white/20 backdrop-blur-sm">
            <img
              src={card3}
              alt="Happy Galbi People"
              className="w-full h-auto max-h-[305px] object-contain"
            />
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default HeroSection;
