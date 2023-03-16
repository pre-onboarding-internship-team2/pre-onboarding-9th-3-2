import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler,
  Title,
  LineController,
  BarController,
  ChartData,
  ChartOptions,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { useSearchParams } from "react-router-dom";
import {
  reduceByMinutes,
  reduceAreaData,
  reduceBarData,
  reduceDataColor,
  reduceSelectedDataColor,
} from "../functions/reduceDataFunc";
import { dataArray } from "../functions/funcData";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler,
  Title,
  LineController,
  BarController
);

const Graph = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentParams = searchParams.get("id");

  const labels = reduceByMinutes();

  const options: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "초 단위 데이터 변동그래프",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const id = Object.values(dataArray[context.dataIndex])[0].id;
            if (!currentParams) return `${id} : ${context.raw}`;
            if (currentParams === id) {
              return `${id} : ${context.raw}`;
            } else {
              return "클릭 시 해당 구역 데이터가 나타납니다.";
            }
          },
        },
      },
    },
    scales: {
      ["left-y"]: {
        position: "left",
        max: 20000,
      },
      ["right-y"]: {
        position: "right",
        max: 200,
      },
    },
    onClick: (event, element) => {
      if (element.length === 0) return;
      const currentID = Object.values(dataArray[element[0].index])[0].id;
      if (currentParams === currentID) {
        setSearchParams();
        return;
      }
      setSearchParams({
        ...searchParams,
        id: currentID,
      });
    },
  };

  const data: ChartData = {
    labels,
    datasets: [
      {
        type: "line" as const,
        label: "LINE",
        yAxisID: "right-y",
        borderJoinStyle: "round",
        borderColor: "#3282B8",
        borderWidth: 2,
        pointBorderColor: currentParams
          ? reduceSelectedDataColor(currentParams)
          : reduceDataColor(),
        pointBorderWidth: 3,
        pointBackgroundColor: "white",
        fill: true,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        data: reduceAreaData(),
      },
      {
        type: "bar" as const,
        label: "BAR",
        yAxisID: "left-y",
        backgroundColor: currentParams
          ? reduceSelectedDataColor(currentParams)
          : reduceDataColor(),
        data: reduceBarData(),
      },
    ],
  };
  return (
    <article className="w-full h-96 mt-6 flex justify-center">
      <Chart type="line" options={options} data={data} />
    </article>
  );
};

export default Graph;
