import { X_AXIS_KEY, Y_AXIS_KEY, VALUE_AREA_KEY, VALUE_BAR_KEY } from '../consts/chart.const';
import { TimeSeriesChartDataType } from '../types/chartData.types';
import { ResponseData } from '../types/response.types';

// 여기(dataset)에 적용된 옵션은
// ./getChartOption.ts 의 chartOption보다 우선 적용됨

function getAriaDataset(dataList: TimeSeriesChartDataType[]) {
    return {
        type: 'line' as const,
        label: 'area',
        data: dataList,
        parsing: {
            xAxisKey: X_AXIS_KEY,
            yAxisKey: `${Y_AXIS_KEY}.${VALUE_AREA_KEY}`,
        },
        borderWidth: 2,
        yAxisID: 'area',
        borderColor: '#129887',
        backgroundColor: '#34fc87',
    };
}

function getBarDataset(dataList: TimeSeriesChartDataType[]) {
    return {
        type: 'bar' as const,
        label: 'bar',
        data: dataList,
        parsing: {
            xAxisKey: X_AXIS_KEY,
            yAxisKey: `${Y_AXIS_KEY}.${VALUE_BAR_KEY}`,
        },
        yAxisID: 'bar',
        borderColor: '#36A2EB',
        backgroundColor: '#9BD0F5',
    };
}

function getChartData(responseData: ResponseData) {
    const dataList = Object.entries(responseData).map(([time, data]) => ({
        [X_AXIS_KEY]: time,
        [Y_AXIS_KEY]: data,
    }));
    return {
        datasets: [getAriaDataset(dataList), getBarDataset(dataList)],
    };
}

export { getChartData };
