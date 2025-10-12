import AuthForm from "../AuthForm/AuthForm.jsx";
import Container from "../Container/Container.jsx";
import signUpBg from "../../assets/images/sign-up-bg.webp";

const SignUpSection = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${signUpBg})` }}
    >
      <Container className="xl:px-[360px] py-[120px] flex flex-col items-center justify-center gap-[100px]">
        <div>
          <h2 className="font-lucida font-semibold text-[50px] text-center mb-6">
            Join the Founding Members
          </h2>
          <p className="font-normal text-xl leading-normal text-center opacity-[0.9]">
            You’re not just signing up. You’re helping define the future of
            intentional, culture-first love
          </p>
        </div>
        <AuthForm />
      </Container>
    </section>
  );
};
export default SignUpSection;
