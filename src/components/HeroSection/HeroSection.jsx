import { useEffect, useState, useRef } from "react";
import bgVideo from "../../assets/videos/HalaGalbi.mp4";
import AppBar from "../AppBar/AppBar.jsx";
import { motion, useAnimation, useInView } from "framer-motion";
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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

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
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

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
            className="font-lufga italic font-semibold text-2xl text-center mb-[50px] opacity-90"
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
            on
          >
            <a className="" href="#sign-up">
              Join the Founding Members
            </a>
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
      </Container>
    </section>
  );
};

export default HeroSection;
