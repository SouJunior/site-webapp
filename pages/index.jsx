import { OccupationSection } from "../components/OccupationSection";
import { ParticipationSection } from "../components/Participation";
import HeaderHome from "../components/HeaderHome";
import Iniciativas from "../components/Iniciativas";
import HeaderComponent from "../components/commons/HeaderComponent";
import { Depositions } from "../components/Depositions";

function Home() {
  return (
    <>
      <HeaderComponent />
      <HeaderHome />
      <OccupationSection />
      <Iniciativas />
      <Depositions/>
      <ParticipationSection />
      
    </>
  );
}

export default Home;
