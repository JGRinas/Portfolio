import { AboutMe } from "../components/aboutme/AboutMe";
import { ContactCta } from "../components/contact/ContactCta";
import { FadeIn } from "../components/animations/fade-in";
import { SiteFooter } from "../components/footer/SiteFooter";
import { Navbar } from "../components/Navbar";
import { Presentation } from "../components/Presentation";
import { Projects } from "../components/projects/Projects";
import { TechStack } from "../components/stack/TechStack";
import { Main, StyledContainer } from "../styled/components/Container";

const Home = () => (
  <>
    <Navbar />
    <Presentation />
    <StyledContainer>
      <Main>
        <AboutMe />
        <FadeIn delay={50} className="w-full">
          <Projects />
        </FadeIn>
        <TechStack />
        <ContactCta />
      </Main>
      <SiteFooter />
    </StyledContainer>
  </>
);

export default Home;
