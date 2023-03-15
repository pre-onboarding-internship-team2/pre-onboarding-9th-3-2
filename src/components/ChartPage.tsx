import mockData from "../data/mockData.json";
import { labelUtil, AreaValueUtil, BarValueUtil } from "../utility/controlData";

import {
	Chart as ChartJS,
	LinearScale,
	CategoryScale,
	BarElement,
	PointElement,
	LineElement,
	Legend,
	Tooltip,
	LineController,
	BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
	LinearScale,
	CategoryScale,
	BarElement,
	PointElement,
	LineElement,
	Legend,
	Tooltip,
	LineController,
	BarController
);

const ChartPage = () => {
	const allKey = Object.keys(mockData.response);
	const allValue = Object.values(mockData.response);

	const labels: string[] = [...labelUtil(allKey)];
	const valueArea: number[] = [...AreaValueUtil(allValue)];
	const valueBar: number[] = [...BarValueUtil(allValue)];

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

	const data = {
		labels,
		datasets: [
			{
				type: "line" as const,
				label: "Area",
				borderColor: "rgb(255, 99, 132)",
				borderWidth: 2,
				fill: false,
				data: valueArea.map((element) => element),
				yAxisID: "y",
			},
			{
				type: "bar" as const,
				label: "Bar",
				backgroundColor: "rgb(75, 192, 192)",
				data: valueBar.map((element) => element),
				borderColor: "white",
				borderWidth: 2,
				yAxisID: "y1",
			},
		],
	};

	return <Chart type="bar" options={options} data={data} />;
};

export default ChartPage;
