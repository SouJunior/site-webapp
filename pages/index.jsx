import { OccupationSection } from "../components/OccupationSection";
import { ParticipationSection } from "../components/Participation";
import HeaderHome from "../components/HeaderHome";
import Iniciativas from "../components/Iniciativas";
import PrivacyPolicy from "../components/commons/PrivacyPolicy/PrivacyPolicy";
import { Depositions } from "../components/Depositions";

function Home() {
  return (
    <>
      <HeaderHome />
      <OccupationSection />
      <Iniciativas />
      <Depositions />
      <ParticipationSection />
      <PrivacyPolicy />
    </>
  );
}

export default Home;
