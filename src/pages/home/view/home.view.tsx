import Navbar from "../../../components/navbar/navbar.component";
import { HomeContent, PageWrapper } from "../home.styled";
import { HomeViewProps } from "../types";

const HomeView: React.FC<HomeViewProps> = ({ handleLink }) => {
  return (
    <PageWrapper>
      <Navbar handleLink={handleLink} />
      <HomeContent>
        <h1>Welcome to SouJunior</h1>
        <p>This is a brief description of the SouJunior initiative.</p>
      </HomeContent>
    </PageWrapper>
  );
};

export default HomeView;
