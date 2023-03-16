const Y_AXIS_MAX = 200;

export const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Area-Bar Chart",
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
};
