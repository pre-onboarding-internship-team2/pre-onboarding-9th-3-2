import { ChartOptions } from 'chart.js';
import { X_AXIS_KEY } from '../consts/chart.const';

const chartOption: ChartOptions<'bar' | 'line'> = {
    layout: {
        padding: 20,
    },
    responsive: true,
    interaction: {
        mode: 'index' as const,
        intersect: false,
    },
    scales: {
        area: {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
            title: { display: true, text: 'Area' },
        },
        bar: {
            type: 'linear' as const,
            display: true,
            position: 'right' as const,
            title: { display: true, text: 'Bar' },
        },
    },
    parsing: {
        xAxisKey: X_AXIS_KEY,
    },
};

function getChartOption() {
    return chartOption;
}

export { getChartOption };
