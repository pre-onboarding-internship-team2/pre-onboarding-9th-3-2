import Filter from "../components/Filter";
import Graph from "../components/Graph";

const MainPage = () => {
  return (
    <section className="px-4 flex flex-col items-center">
      <h1 className="font-bold text-4xl pt-2 pb-8">FlexSys Graph</h1>
      <Filter />
      <Graph />
    </section>
  );
};

export default MainPage;
