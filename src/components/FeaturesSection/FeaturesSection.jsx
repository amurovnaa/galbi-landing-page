import { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import featureIcon1 from "../../assets/videos/features-icons/VideoVerifiedProfiles.mp4";
import featureIcon2 from "../../assets/videos/features-icons/Respect-FirstMessaging.mp4";
import featureIcon3 from "../../assets/videos/features-icons/DiasporaBuilt.mp4";
import featureIcon4 from "../../assets/videos/features-icons/Dialect&CultureMatching.mp4";
import featureIcon5 from "../../assets/videos/features-icons/Intent-BasedDiscovery.mp4";
import featureIcon6 from "../../assets/videos/features-icons/10ToCausesYouChoose.mp4";
import Container from "../Container/Container.jsx";

const features = [
  {
    title: "Video Verified Profiles",
    desc: "Profiles are real every face is verified by video.",
    icon: featureIcon1,
  },
  {
    title: "Respect First Messaging",
    desc: "He can send one message. No chasing. No pressure.",
    icon: featureIcon2,
  },
  {
    title: "Diaspora Built",
    desc: "Built by diaspora, not bought by big tech, and never for sale.",
    icon: featureIcon3,
  },
  {
    title: "Dialect + Culture Matching",
    desc: "Match by dialect, not just distance, because language isn’t just location.",
    icon: featureIcon4,
  },
  {
    title: "Intent Based Discovery",
    desc: "You choose if you’re looking for love, marriage, or just curious.",
    icon: featureIcon5,
  },
  {
    title: "10% to Causes You Choose",
    desc: "10% of every subscription goes to the cause that matters most to you.",
    icon: featureIcon6,
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
    <section className="text-center py-[80px] rtl" id="features" ref={ref}>
      <Container className="xl:px-[140px] flex flex-col items-center justify-center">
        <motion.h2
          className="font-lucida font-semibold text-center text-black mb-6 text-[40px] lg:text-[48px]"
          variants={fadeUp}
          initial="hidden"
          animate={controls}
        >
          Why Galbi Matters
        </motion.h2>

        <motion.p
          className="font-normal text-xl leading-normal text-center text-black opacity-90 mb-[60px]"
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
              className="bg-white max-w-[453px] min-h-[200px] shadow-[0_1px_15px_0_rgba(0,0,0,0.05)] p-[24px] pr-[38px] rounded-[20px] hover:shadow-md transition-shadow duration-300"
              variants={fadeUp}
            >
              <div className="max-w-[110px] max-h-[62px] mb-4">
                <video
                  className="w-full h-full"
                  src={f.icon}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              <h3 className="text-left font-semibold text-[22px] text-black mb-3 text-left">
                {f.title}
              </h3>

              <p className="font-normal text-xl leading-[1.4] text-black opacity-75 text-left">
                {f.desc}
              </p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.button
          className="max-w-[358px] max-h-14 flex items-center justify-center gap-[10px]
        font-inter font-semibold text-[14px] text-center text-white
        px-7 py-3 rounded-full tracking-wide
        bg-gradient-to-b from-[#fb1555] to-[#8d1caa]
        hover:shadow-[0_2px_20px_rgba(0,0,0,0.15)]
        transition duration-700 ease-in-out
        hover:from-[#ff4a7c] hover:to-[#a42fc2] lg:text-[16px]
          "
          variants={fadeUp}
          initial="hidden"
          animate={controls}
        >
          <a className="py-5" href="#sign-up">
            Join the Movement
          </a>
          <svg
            className="inline-block w-4 h-4"
            strokeWidth="2"
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
