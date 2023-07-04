import {OccupationSection} from "../components/OccupationSection";
import {AboutSection} from "../components/AboutSection";
import {ParticipationSection} from "../components/Participation";

export default function Home() {
  return (
    <>
      <AboutSection />
      <OccupationSection />
      <ParticipationSection />
    </>
  );
}
