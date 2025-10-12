import communityBg from "../../assets/images/communitySec-bg.webp";
import Container from "../Container/Container.jsx";

const CommunitySection = () => {
  return (
    <section className="pt-[60px] pb-[60px] rtl" id="impact">
      <Container className="relative xl:px-[229px] flex items-center justify-center overflow-visible ">
        <div className="relative w-full h-[700px] flex items-center justify-center">
          <img
            src={communityBg}
            alt="Galbi Community"
            className="w-full h-full object-cover rounded-3xl"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 z-10 md:px-12">
            <h2 className="font-lucida font-semibold text-[30px] md:text-[65px] leading-tight mb-[50px]">
              Built by us. For us. For good.
            </h2>
            <p className="max-w-[800px] font-medium text-2xl leading-[1.58] text-center">
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
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CommunitySection;
