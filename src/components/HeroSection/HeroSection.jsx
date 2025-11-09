import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import bgVideo from "../../assets/videos/galbi-hero-videos.mp4";
import Container from "../Container/Container.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 60, filter: "blur(2px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
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
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover will-change-transform"
          style={{ objectPosition: "50% 0%" }}
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <Container className="relative z-10 mt-[232px] mb-[130px] flex flex-col justify-center items-center gap-[100px]">
        <motion.div
          ref={ref}
          className="max-w-[856px] flex flex-col items-center justify-center"
          initial="hidden"
          animate={controls}
          variants={container}
        >
          <motion.h1
            className="font-lucida font-semibold text-[40px] leading-[1.14] text-center text-white mb-6 lg:text-[50px] xl:text-[60px] relative will-change-transform"
            variants={fadeUp}
          >
            Your background is just the beginning
          </motion.h1>

          <motion.p
            className="font-lufga italic font-medium text-[20px] text-center mb-[50px] text-white/90 lg:text-[22px] relative will-change-transform"
            variants={fadeUp}
          >
            Is it Galbi or Kalbi?
          </motion.p>

          <motion.button
            className="max-w-[358px] max-h-16 flex items-center justify-center gap-[10px]
              font-semibold text-[14px] text-center text-white
              px-7 py-4 rounded-full tracking-wide
              bg-gradient-to-b from-[#fb1555] to-[#8d1caa]
              hover:shadow-[0_2px_20px_rgba(0,0,0,0.15)]
              hover:from-[#ff4a7c] hover:to-[#a42fc2] lg:text-[16px]
              "
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
