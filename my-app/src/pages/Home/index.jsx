import HomeHero from "./HomeHero";
import HomeServicesContainer from "./HomeServicesContainer";

const index = () => {
  return (
    <div className="h-full w-full font-barlow">
      <HomeHero />
      <HomeServicesContainer />
    </div>
  );
};

export default index;
