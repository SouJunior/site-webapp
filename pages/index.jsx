import { OccupationSection } from "../components/OccupationSection";
import { AboutSection } from "../components/AboutSection";
import { ParticipationSection } from "../components/Participation";
import HeaderComponent from "../components/commons/HeaderComponent";

const Home = () => {
  return (
    <>
      <HeaderComponent
        tittle={"Texto para a página home!"}
        subtitle={"O Junior de hoje é o Sênior do amanhã!"}
      />
      <AboutSection />
      <OccupationSection />
      <ParticipationSection />
    </>
  );
};

export default Home;
