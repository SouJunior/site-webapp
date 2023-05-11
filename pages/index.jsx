import { OccupationSection } from "../components/OccupationSection";
import { AboutSection } from "../components/AboutSection";
import { ParticipationSection } from "../components/Participation";
import HeaderComponent from "../components/commons/HeaderComponent";

const Home = () => {
  return (
    <>
      <HeaderComponent />
      <AboutSection />
      <OccupationSection />
      <ParticipationSection />
    </>
  );
};

export default Home;