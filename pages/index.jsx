import { OccupationSection } from "../components/OccupationSection";
import { AboutSection } from "../components/AboutSection";
import { ParticipationSection } from "../components/Participation";
import Iniciativas from "../components/Iniciativas";
import HeaderComponent from "../components/commons/HeaderComponent";

const Home = () => {
  return (
    <>
      <HeaderComponent />
      <AboutSection />
      <OccupationSection />
      <Iniciativas />
      <ParticipationSection />
    </>
  );
};

export default Home;
