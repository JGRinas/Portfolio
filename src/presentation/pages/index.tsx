import Navbar from "../components/NavBar";
import { Presentation } from "../components/Presentation";
import { SocialMedia } from "../components/SocialMedia";
import { Header } from "../styled/components/Container";

const Home = () => (
  <>
    <Header>
      <SocialMedia />
      <div>
        <Navbar />
        <Presentation />
      </div>
    </Header>
    <main></main>
  </>
);

export default Home;
