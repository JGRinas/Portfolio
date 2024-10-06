import { AboutMe } from "../components/aboutme/AboutMe";
import { Contact } from "../components/Contact";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { Presentation } from "../components/Presentation";
import { Projects } from "../components/projects/Projects";
import { Footer, Header, Main } from "../styled/components/Container";
import { HorizontalLine } from "../styled/components/Presentation";

const Home = () => (
  <>
    <Header>
      <LanguageSwitcher />
      <HorizontalLine />
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
