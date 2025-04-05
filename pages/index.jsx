import { OccupationSection } from "../components/OccupationSection";
import { ParticipationSection } from "../components/Participation";
import HeroHome from "../components/HeroHome";
import Iniciativas from "../components/Iniciativas";
import PrivacyPolicy from "../components/commons/PrivacyPolicy/PrivacyPolicy";
import { Depositions } from "../components/Depositions";
import { ApoiarSection } from "../components/Apoiar";

const Home = () => {
  return (
    <>
      <HeroHome />
      <OccupationSection />
      <Iniciativas />
      <Depositions />
      <ParticipationSection />
      <PrivacyPolicy />
      <ApoiarSection />
    </>
  );
};

export default Home;
