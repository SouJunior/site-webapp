import { OccupationSection } from "../components/OccupationSection";
import { AboutSection } from "../components/AboutSection";
import { ParticipationSection } from "../components/Participation";
import  Iniciativas from "../components/Iniciativas"
import HeaderComponent from "../components/commons/HeaderComponent/HerderC";

const Home = () => {
  return (
    <>
      <HeaderComponent tittle={"Texto para a página home!"} />
      <AboutSection />
      <OccupationSection />
      <Iniciativas /> 
      <ParticipationSection />
    </>
  );
};

export default Home;
