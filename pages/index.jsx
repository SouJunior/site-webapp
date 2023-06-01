import { OccupationSection } from "../components/OccupationSection";
import { AboutSection } from "../components/AboutSection";
import { ParticipationSection } from "../components/Participation";
import HeaderHome from "../components/HeaderHome";
import Iniciativas from "../components/Iniciativas";
import HeaderComponent from "../components/commons/HeaderComponent";
import PrivacyPolicy from "../components/commons/PrivacyPolicy/PrivacyPolicy"

function Home() {
  return (
    <>
    
      <HeaderComponent />
      <HeaderHome />
      <OccupationSection />
      <Iniciativas />
      <ParticipationSection />
      <PrivacyPolicy />
    </>
  );
}

export default Home;
