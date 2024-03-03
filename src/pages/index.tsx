import NavSection from "../components/nav";
import SpaceBackground from "../components/space-background";
import { SpaceBackgroundProvider } from "../providers/space-background-provider";

function Home() {
  return (
    <SpaceBackgroundProvider>
      <SpaceBackground />
      <NavSection />
    </SpaceBackgroundProvider>
  );
}

export default Home;
