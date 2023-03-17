import {
    X_AXIS_KEY,
    Y_AXIS_KEY,
    VALUE_AREA_KEY,
    VALUE_BAR_KEY,
    COLORS,
} from '../consts/chart.const';
import { TimeSeriesChartDataType } from '../types/chartData.types';
import { ResponseData } from '../types/response.types';

// 여기(dataset)에 적용된 옵션은
// ./getChartOption.ts 의 chartOption보다 우선 적용됨

function getAriaDataset(dataList: TimeSeriesChartDataType[]) {
    return {
        type: 'line' as const,
        label: VALUE_AREA_KEY,
        data: dataList,
        parsing: {
            xAxisKey: X_AXIS_KEY,
            yAxisKey: `${Y_AXIS_KEY}.${VALUE_AREA_KEY}`,
        },
        borderWidth: 2,
        yAxisID: 'area',
        borderColor: COLORS.pink.normal,
        backgroundColor: COLORS.pink.dark,
        pointBorderWidth: 0,
        pointHoverBorderColor: COLORS.pink.normal,
        pointHoverBorderWidth: 2,
        pointHoverBackgroundColor: COLORS.pink.normal,
        fill: true,
        order: 1,
    };
}

function getBarDataset(dataList: TimeSeriesChartDataType[]) {
    return {
        type: 'bar' as const,
        label: VALUE_BAR_KEY,
        data: dataList,
        parsing: {
            xAxisKey: X_AXIS_KEY,
            yAxisKey: `${Y_AXIS_KEY}.${VALUE_BAR_KEY}`,
        },
        yAxisID: 'bar',
        borderColor: COLORS.blue.normal,
        backgroundColor: COLORS.blue.dark,
        hoverBorderColor: COLORS.blue.normal,
        hoverBackgroundColor: COLORS.blue.normal,
        order: 2,
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
