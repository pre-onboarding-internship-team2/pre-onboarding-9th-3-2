import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import mockData from "../data/mockData.json";
import { labelUtil, AreaValueUtil, BarValueUtil } from "../utility/controlData";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const ChartPage = () => {
	const allKey = Object.keys(mockData.response);
	const allValue = Object.values(mockData.response);

	const options = {
		responsive: true,
		interaction: {
			mode: "index" as const,
			intersect: false,
		},
		stacked: false,
		plugins: {
			title: {
				display: true,
				text: "Flexsys",
			},
		},
		scales: {
			y: {
				type: "linear" as const,
				display: true,
				position: "left" as const,
			},
			y1: {
				type: "linear" as const,
				display: true,
				position: "right" as const,
				grid: {
					drawOnChartArea: false,
				},
			},
		},
	};

	const labels: string[] = [...labelUtil(allKey)];
	const valueArea: number[] = [...AreaValueUtil(allValue)];
	const valueBar: number[] = [...BarValueUtil(allValue)];

	const data = {
		labels,
		datasets: [
			{
				label: "Area",
				data: valueArea.map((element: number) => element),
				borderColor: "rgb(255, 99, 132)",
				backgroundColor: "rgba(255, 99, 132, 0.5)",
				yAxisID: "y",
			},
			{
				label: "Bar",
				data: valueBar.map((element: number) => element),
				borderColor: "rgb(53, 162, 235)",
				backgroundColor: "rgba(53, 162, 235, 0.5)",
				yAxisID: "y1",
			},
		],
	};

	return <Line options={options} data={data} />;
};

export default ChartPage;
