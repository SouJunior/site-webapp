import { OccupationSection } from "../components/OccupationSection";
import { AboutSection } from "../components/AboutSection";
import { ParticipationSection } from "../components/Participation";
import HeaderComponent from "../components/commons/HeaderComponent/HerderC";

const Home = () => {
  return (
    <>
      <HeaderComponent tittle={"Texto para a página home!"} />
      <AboutSection />
      <OccupationSection />
      <ParticipationSection />
    </>
  );
};

export default Home;
