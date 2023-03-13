export const options = {
  responsive: true,
  maintainAspectRatio: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  scales: {
    bar: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
      title: {
        display: true,
        text: "Bar",
      },
      ticks: {
        beginAtZero: true,
        stepSize: 5000,
      },
    },
    area: {
      type: "linear" as const,
      display: true,
      position: "right" as const,
      title: {
        display: true,
        text: "Area",
      },
      ticks: {
        stepSize: 30,
      },
      grid: {
        drawOnChartArea: false,
      },
    },
  },
  hover: {
    mode: "point" as const,
    intersect: false,
  },
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "시계열 차트",
    },
  },
};
