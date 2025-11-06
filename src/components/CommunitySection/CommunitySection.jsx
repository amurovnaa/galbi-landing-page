import { motion } from "framer-motion";
import communityBg from "../../assets/images/communitySec-bg.webp";
import Container from "../Container/Container.jsx";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: "easeOut",
    },
  }),
};

const CommunitySection = () => {
  return (
    <section
      className="bg-gradient-to-b from-pink-50 via-white to-pink-100 py-[60px] rtl"
      id="impact"
    >
      <Container className="relative flex items-center justify-center overflow-visible">
        <div className="relative w-full h-[700px] flex items-center justify-center">
          <img
            src={communityBg}
            alt="Galbi Community"
            className="w-full h-full object-cover rounded-3xl"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 z-10 md:px-12">
            <motion.h2
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              custom={0.2}
              viewport={{ once: true, amount: 0.3 }}
              className="font-lucida font-semibold leading-tight mb-10 text-[40px] lg:text-[48px]"
            >
              Built by us. For us. For good.
            </motion.h2>

            <motion.p
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              custom={0.4}
              viewport={{ once: true, amount: 0.3 }}
              className="max-w-[800px] font-medium text-xl leading-[1.58] text-center"
            >
              Galbi isn’t just an app. It’s a choice to build love with meaning.
              <br />
              10% of every subscription goes to causes you care about Gaza,
              Sudan,
              <br />
              Yemen, Palestine, and more.
              <br />
              Because your love has weight.
              <br />
              And your heart was made to give.
            </motion.p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CommunitySection;
