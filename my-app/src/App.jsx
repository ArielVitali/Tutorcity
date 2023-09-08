import HomeServicesContainer from "./components/Containers/HomeServicesContainer.jsx";
import HomeHero from "./components/Hero/HomeHero.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

function App() {
  return (
    <div className="h-full w-full font-barlow">
      <NavBar />
      <HomeHero />
      <HomeServicesContainer />
    </div>
  );
}

export default App;
