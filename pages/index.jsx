import { OccupationSection } from "../components/OccupationSection";
import { ParticipationSection } from "../components/Participation";
import HeroHome from "../components/HeroHome";
import Iniciativas from "../components/Iniciativas";
<<<<<<< HEAD
import HeaderComponent from "../components/commons/HeaderComponent";
import PrivacyPolicy from "../components/commons/PrivacyPolicy/PrivacyPolicy";
=======
>>>>>>> 817c6a7f9446a3a51d255472cc12b4ed9cfb919c
import { Depositions } from "../components/Depositions";

const Home = () => {
  return (
    <>
      <HeroHome />
      <OccupationSection />
      <Iniciativas />
      <Depositions />
      <ParticipationSection />
    </>
  );
};

export default Home;
