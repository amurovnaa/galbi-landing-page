import { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import feature1 from "../../assets/images/feature-1.webp";
import feature2 from "../../assets/images/feature-2.webp";
import feature3 from "../../assets/images/feature-3.webp";
import feature4 from "../../assets/images/feature-4.webp";
import feature5 from "../../assets/images/feature-5.webp";
import feature6 from "../../assets/images/feature-6.webp";
import Container from "../Container/Container.jsx";

const features = [
  {
    title: "Video Verified Profiles",
    desc: "Profiles are real every face is verified by video.",
    icon: feature1,
  },
  {
    title: "Respect First Messaging",
    desc: "He can send one message. No chasing. No pressure.",
    icon: feature2,
  },
  {
    title: "Diaspora Built",
    desc: "Built by diaspora, not bought by big tech, and never for sale.",
    icon: feature3,
  },
  {
    title: "Dialect + Culture Matching",
    desc: "Match by dialect, not just distance, because language isn’t just location.",
    icon: feature4,
  },
  {
    title: "Intent Based Discovery",
    desc: "You choose if you’re looking for love, marriage, or just curious.",
    icon: feature5,
  },
  {
    title: "10% to Causes You Choose",
    desc: "10% of every subscription goes to the cause that matters most to you.",
    icon: feature6,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const FeaturesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  if (inView) controls.start("visible");

  return (
    <section
      className="text-center pt-[120px] pb-[120px] rtl"
      id="features"
      ref={ref}
    >
      <Container className="xl:px-[240px] flex flex-col items-center justify-center">
        <motion.h2
          className="font-lucida font-semibold text-[40px] sm:text-[50px] text-center text-black mb-6"
          variants={fadeUp}
          initial="hidden"
          animate={controls}
        >
          Why Galbi Matters
        </motion.h2>

        <motion.p
          className="font-normal text-xl leading-normal text-center text-black opacity-90 mb-[100px]"
          variants={fadeUp}
          initial="hidden"
          animate={controls}
        >
          We're building more than a dating app we're creating a
          <br />
          space where cultural identity is celebrated.
        </motion.p>

        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-[60px]"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {features.map((f, idx) => (
            <motion.li
              key={idx}
              className="bg-white max-w-[453px] min-h-[269px] shadow-[0_1px_15px_0_rgba(0,0,0,0.05)] p-[30px] pr-[38px] rounded-[20px] hover:shadow-md transition-shadow duration-300"
              variants={fadeUp}
            >
              <div className="mb-[41px] rounded-[140px]">
                <img src={f.icon} alt={f.title} className="w-[70px] h-[70px]" />
              </div>
              <h3 className="font-semibold text-[22px] text-black mb-3 text-left">
                {f.title}
              </h3>
              <p className="font-normal text-xl leading-[1.4] text-black opacity-75 text-left">
                {f.desc}
              </p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.button
          className="
            w-[278px] h-16 flex items-center justify-center gap-[10px]
            font-inter font-semibold text-[19px] text-center text-white
            px-[34px]  rounded-2xl
            bg-gradient-to-b from-[#fb1555] to-[#8d1caa]
            shadow-none
            transition-[box-shadow,background-position,background-color] duration-700 ease-in-out
            hover:shadow-[0_2px_20px_rgba(0,0,0,0.15)]
            hover:from-[#ff4a7c] hover:to-[#a42fc2]
          "
          variants={fadeUp}
          initial="hidden"
          animate={controls}
        >
          <a className="py-5" href="#sign-up">
            Join the Movement
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
      </Container>
    </section>
  );
};

export default FeaturesSection;
