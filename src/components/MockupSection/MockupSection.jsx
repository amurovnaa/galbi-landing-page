import Container from "../Container/Container.jsx";
import DynamicMockup from "../DynamicMockUp/DynamicMockUp.jsx";

const MockupSection = () => {
  return (
    <section className="bg-gradient-to-b from-pink-50 via-white to-pink-100 text-black py-[60px]">
      <Container className="flex flex-col items-center justify-evenly lg:flex-row ">
        <div className="flex flex-col gap-6 lg:max-w-[399px] lg:max-w-[329px] xl:max-w-[699px] ">
          <h2 className="font-lucida font-semibold text-center text-[42px] lg:text-left lg2:text-[50px] ">
            Rooted in Culture. Dialect. Intention
          </h2>
          <p className="font-normal text-xl leading-normal text-center lg:text-left">
            You’re not just looking for a match. You’re looking for someone who
            gets your dialect, your values, your rhythm. That’s why we built
            Galbi for people who want connection with culture, not chaos.
          </p>
        </div>
        <DynamicMockup />
      </Container>
    </section>
  );
};
export default MockupSection;
