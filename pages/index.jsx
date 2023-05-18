import { OccupationSection } from "../components/OccupationSection";
import { AboutSection } from "../components/AboutSection";
import { ParticipationSection } from "../components/Participation";
import HeaderHome from "../components/HeaderHome";
import Iniciativas from "../components/Iniciativas";
import HeaderComponent from "../components/commons/HeaderComponent/HerderC";

function Home() {
  return (
    <>
      <HeaderComponent />
      <HeaderHome />
      <OccupationSection />
      <Iniciativas />
      <ParticipationSection />
    </>
  );
}

export default Home;
