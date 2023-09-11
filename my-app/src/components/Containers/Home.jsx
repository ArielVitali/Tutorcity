import HomeHero from "../Hero/HomeHero.jsx";
import HomeServicesContainer from "./HomeServicesContainer.jsx";

const Home = () => {
  return (
    <div className="h-full w-full font-barlow">
      <HomeHero />
      <HomeServicesContainer />
    </div>
  );
};

export default Home;
