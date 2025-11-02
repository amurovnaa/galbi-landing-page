import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import AuthForm from "../AuthForm/AuthForm.jsx";
import Container from "../Container/Container.jsx";
import signUpBg from "../../assets/images/sign-up-bg.webp";

const SignUpSection = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      className="bg-cover bg-center bg-no-repeat rtl"
      style={{ backgroundImage: `url(${signUpBg})` }}
      id="sign-up"
      ref={ref}
    >
      <Container className=" py-[120px] flex flex-col items-center justify-center gap-[100px] xxl:px-[360px]">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.h2
            className="font-lucida font-semibold text-[40px] sm:text-[50px] text-center mb-6"
            variants={fadeUp}
          >
            Join the Founding Members
          </motion.h2>
          <motion.p
            className="font-normal text-xl leading-normal text-center opacity-[0.9]"
            variants={fadeUp}
          >
            You’re not just signing up. You’re helping define the future of
            intentional, culture-first love
          </motion.p>
        </motion.div>
        <AuthForm />
      </Container>
    </section>
  );
};

export default SignUpSection;
