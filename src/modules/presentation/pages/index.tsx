import { AboutMe } from "../components/aboutme/AboutMe";
import { Contact } from "../components/Contact";
import { Presentation } from "../components/Presentation";
import { Projects } from "../components/projects/Projects";
import { SocialMedia } from "../components/SocialMedia";
import { Footer, Header, Main } from "../styled/components/Container";

const Home = () => (
  <>
    <Header>
      <SocialMedia />
      <Presentation />
    </Header>
    <Main>
      <AboutMe />
      <Projects />
    </Main>
    <Footer>
      <Contact />
    </Footer>
  </>
);

export default Home;
