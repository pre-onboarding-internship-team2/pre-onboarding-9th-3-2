import { useNavigate } from "react-router-dom";
import { ChartOptions } from "chart.js";
import { dataArr } from "../utils/fetchData";

const Y_AXIS_MAX = 200;

const useChartOption = () => {
  const navigate = useNavigate();

  const options: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Area-Bar Chart",
      },
      tooltip: {
        callbacks: {
          afterTitle: (tooltipItem) => {
            return `ID: ${dataArr[tooltipItem[0].dataIndex].id}`;
          },
        },
      },
    },
    scales: {
      y: {
        type: "linear" as const,
        display: true,
        position: "left" as const,
        title: { display: true, text: "Area" },
        max: Y_AXIS_MAX,
      },
      y1: {
        type: "linear" as const,
        display: true,
        position: "right" as const,
        title: { display: true, text: "Bar" },
        grid: {
          drawOnChartArea: false,
        },
      },
    },

    onClick: (event, element) => {
      navigate(`?targetId=${dataArr[element[0].index].id}`);
    },
  };

  return options;
};

export default useChartOption;
