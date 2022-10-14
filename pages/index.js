import {OccupationSection} from "../components/OccupationSection";
import {AboutSection} from "../components/AboutSection";
import {Participation} from "../components/Participation/Participation";

export default function Home() {
  return (
    <>
      <AboutSection />
      <OccupationSection />
      <Participation />
    </>
  );
}
