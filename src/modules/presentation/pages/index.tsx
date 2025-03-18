import { AboutMe } from "../components/aboutme/AboutMe";
import { FadeIn } from "../components/animations/fade-in";
import { Contact } from "../components/Contact";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { Presentation } from "../components/Presentation";
import { Projects } from "../components/projects/Projects";
import { Footer, Header, Main } from "../styled/components/Container";
import { HorizontalLine } from "../styled/components/Presentation";
import ThemeSwitch from "../ui/ThemeSwitch";

const Home = () => (
  <>
    <Header>
      <FadeIn delay={50} className="w-full">
        <div className="flex justify-between items-center w-full">
          <LanguageSwitcher />
          <ThemeSwitch />
        </div>
        <HorizontalLine />
        <Presentation />
      </FadeIn>
    </Header>
    <Main>
      <FadeIn delay={50} className="w-full">
        <AboutMe />
      </FadeIn>
      <FadeIn delay={50} className="w-full">
        <Projects />
      </FadeIn>
    </Main>
    <Footer>
      <FadeIn delay={50}>
        <Contact />
      </FadeIn>
    </Footer>
  </>
);

export default Home;
