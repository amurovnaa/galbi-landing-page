import { useEffect, useState, useRef } from "react";
import bgVideo from "../../assets/videos/galbi-hero-videos.mp4";
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
    <section className="relative z-0 w-full h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          style={{ objectPosition: "50% 0%" }}
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/40 to-transparent" />
      </div>

      <Container className="relative z-10 mt-[232px] mb-[130px] flex flex-col justify-center items-center gap-[100px]">
        <motion.div
          ref={ref}
          className="max-w-[856px] flex flex-col items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h1
            className="font-lucida font-semibold text-[40px]  leading-[1.14] text-center text-white mb-6 lg:text-[50px] xl:text-[60px]"
            variants={fadeUp}
          >
            Your background is just the beginning
          </motion.h1>

          <motion.p
            className="font-lufga italic font-medium text-[20px] text-center mb-[50px] opacity-90 lg:text-[22px]"
            variants={fadeUp}
          >
            Is it Galbi or Kalbi?
          </motion.p>

          <motion.button
            className="max-w-[358px] max-h-16 flex items-center justify-center gap-[10px]
       font-semibold text-[14px] text-center text-white
        px-7 py-4 rounded-2xl
        bg-gradient-to-b from-[#fb1555] to-[#8d1caa]
        hover:shadow-[0_2px_20px_rgba(0,0,0,0.15)]
        transition duration-700 ease-in-out
        hover:from-[#ff4a7c] hover:to-[#a42fc2] lg:text-[16px]"
            variants={fadeUp}
          >
            <a href="#sign-up">Join the Founding Members</a>
            <svg
              className="inline-block w-4 h-4"
              strokeWidth="2"
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
