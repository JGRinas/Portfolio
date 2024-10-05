import { Presentation } from "../components/Presentation";
import { SocialMedia } from "../components/SocialMedia";
import { Header, Main } from "../styled/components/Container";

const Home = () => (
  <>
    <Header>
      <SocialMedia />
      <Presentation />
    </Header>
    <Main></Main>
  </>
);

export default Home;
