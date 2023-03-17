import { ChartOptions, TooltipItem } from 'chart.js';
import { X_AXIS_KEY } from '../consts/chart.const';
import { TimeSeriesChartDataType } from '../types/chartData.types';

// https://stackoverflow.com/questions/74883697/tooltip-callback-cannot-recognize-metadata-ts-2339
// raw 타입이 unknown이라 커스텀 타입을 만듦
interface CustomTooltipItem extends TooltipItem<'bar' | 'line'> {
    raw: TimeSeriesChartDataType;
}

/** bar 그래프와 겹치지 않도록 임의로 정한 값(json 데이터 내에서 area_value 최대값은 99인듯)  */
const AREA_MAX = 200;

const chartOption: ChartOptions<'bar' | 'line'> = {
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
            max: AREA_MAX,
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
    plugins: {
        tooltip: {
            callbacks: {
                afterTitle: function (this, [areaItem, barItem]: CustomTooltipItem[]) {
                    // 둘 다 같은 데이터 넣어놔서 아무거나 써도 상관없음
                    return `id : ${areaItem.raw.y.id}`;
                },
            },
        },
    },
};

export { chartOption };
