import Navbar from "../components/NavBar";
import { Presentation } from "../components/Presentation";
import { SocialMedia } from "../components/SocialMedia";
import { Header, Main } from "../styled/components/Container";
import { StyledArrowBottom } from "../styled/components/Icons";

const Home = () => (
  <>
    <Header>
      <SocialMedia />
      <div>
        <Navbar />
        <Presentation />
      </div>
    </Header>
    <StyledArrowBottom height={150} width={150} />
    <Main></Main>
  </>
);

export default Home;
