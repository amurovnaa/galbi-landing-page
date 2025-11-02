import { motion } from "framer-motion";
import Container from "../Container/Container.jsx";
import DynamicMockup from "../DynamicMockUp/DynamicMockUp.jsx";

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const mockupVariant = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut", delay: 0.3 },
  },
};

const MockupSection = () => {
  return (
    <motion.section
      className="bg-gradient-to-b from-pink-50 via-white to-pink-100 text-black py-[60px] overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Container className="flex flex-col items-center justify-evenly lg:flex-row">
        {/* Text Column */}
        <motion.div
          variants={textVariant}
          className="flex flex-col gap-6 lg:max-w-[499px] lg:mr-16"
        >
          <h2 className="font-lucida font-semibold text-center text-[40px] sm:text-[50px] lg:text-left lg2:text-[50px]">
            Rooted in Culture. Dialect. Intention
          </h2>
          <motion.p
            className="font-normal text-xl leading-normal text-center opacity-90 lg:text-left"
            variants={textVariant}
          >
            <span className="font-semibold">Galbi</span> is a culture-first
            dating app built for people who value tradition, dialect, and
            intentional love — not swiping games
          </motion.p>
          <p className="font-normal text-xl leading-normal text-center lg:text-left">
            You’re not just looking for a match. You’re looking for someone who
            gets your dialect, your values, your rhythm. That’s why we built{" "}
            <span className="font-semibold">Galbi</span> for people who want
            connection with culture, not chaos.
          </p>
        </motion.div>

        {/* Animated Mockup */}
        <motion.div variants={mockupVariant}>
          <DynamicMockup />
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default MockupSection;
