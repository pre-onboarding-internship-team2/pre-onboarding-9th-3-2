import { X_AXIS_KEY, Y_AXIS_KEY } from '../consts/chart.const';
import { LocationDataType } from './response.types';

export type TimeSeriesChartDataType = {
    [X_AXIS_KEY]: string;
    [Y_AXIS_KEY]: LocationDataType;
};
