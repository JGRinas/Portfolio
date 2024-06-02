import ThemeSwitch from "../components/ThemeSwitch";

interface IHome {
  toggleTheme: () => void;
}

const Home = ({ toggleTheme }: IHome) => {
  return (
    <>
      <header>
        <ThemeSwitch toggleTheme={toggleTheme} />
      </header>
      <main></main>;
    </>
  );
};

export default Home;
