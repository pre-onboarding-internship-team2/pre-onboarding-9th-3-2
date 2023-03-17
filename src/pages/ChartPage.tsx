import FilterBar from "../components/FilterBar";
import TimeSeriesChart from "../components/TimeSeriesChart";

const ChartPage = () => {
  return (
    <>
      <h3 className=" text-center py-5 bg-sky-800 text-white text-2xl font-bold ">
        플렉시스 차트 데이터
      </h3>

      <FilterBar />
      <TimeSeriesChart />
    </>
  );
};

export default ChartPage;
