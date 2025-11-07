import { motion } from "framer-motion";
import Container from "../../components/Container/Container.jsx";
import appsImg from "../../assets/images/storyPage-apps.png";

const OurStoryPage = () => {
  return (
    <main>
      <section className="text-black pt-[20px] pb-[80px] rtl overflow-hidden">
        <Container className="xl:px-[140px] flex flex-col">
          <motion.div
            className="flex flex-col items-center gap-8 lg:flex-row"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.ul
              className="w-full lg:w-1/2 text-[15px] flex flex-col gap-6 font-roboto font-normal text-[15px] leading-[1.4] text-black text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } },
              }}
            >
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-lucida font-semibold text-black mb-6 text-[40px] lg:text-[48px]">
                  Our Story
                </h2>
              </motion.li>

              {[
                `With so many dating apps out there, you’d think finding someone real would be easier. Instead, most of them want you to swipe endlessly, hoping that maybe the next match will finally end the single trail. Almost every app focuses on looks and interests, but none focus on you. Who you are. What you stand for. Your culture. Your background.`,
                `It’s not just about religion or language, it’s deeper than that.`,
                `It’s about finding someone who shares what makes you, you! Someone who understands the way you were raised, the values you carry, and the small details that mean everything. Galbi wasn’t created to chase profit or trends. As long as it runs, it runs for a purpose, to help people find real, honest relationships, the traditional way.`,
                `This isn’t another app trying to keep you hooked.`,
                `It’s a home for people who still believe love should be intentional, respectful, and rooted in meaning. Because in a world moving too fast, we choose love that remembers where it came from.`,
              ].map((text, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <p
                    className={`${
                      i === 1 || i === 3
                        ? "font-inter font-semibold text-[18px] text-black"
                        : ""
                    }`}
                  >
                    {text}
                  </p>
                </motion.li>
              ))}
            </motion.ul>

            <motion.img
              src={appsImg}
              alt="apps"
              className="w-full lg:w-1/2 rounded-2xl object-cover"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </Container>
      </section>
    </main>
  );
};

export default OurStoryPage;
