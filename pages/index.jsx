import { OccupationSection } from "../components/OccupationSection";
import { AboutSection } from "../components/AboutSection";
import { ParticipationSection } from "../components/Participation";
import HeaderComponent from "../components/commons/HeaderComponent";
import Iniciativas2 from "../components/Iniciativas2";
import HeaderHome from "../components/HeaderHome";

function Home() {
  return (
    <>
      <HeaderComponent />
      <HeaderHome />
      <OccupationSection />
      <Iniciativas2 />
      <ParticipationSection />
    </>
  );
}

export default Home;
