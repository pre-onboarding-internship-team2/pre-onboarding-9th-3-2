import { BLUE, DARK_BLUE, Y_AXIS_KEY } from '../consts/chart.const';
import { TimeSeriesChartDataType } from '../types/chartData.types';
import { LocationDataType } from '../types/response.types';

type DatasetStyleReturnType = {
    areaPointBorderWidth: number[];
    barBackgroundColor: string[];
};

function getDatasetStyleByFilter(
    data: TimeSeriesChartDataType[],
    filterId: LocationDataType['id'] | null,
): DatasetStyleReturnType {
    return data.reduce<DatasetStyleReturnType>(
        (obj, current) => {
            const currentDataId = current[Y_AXIS_KEY].id;
            const isIdMatched = currentDataId === filterId;

            const newBorderWidth = isIdMatched ? 2 : 0;
            const newColor = isIdMatched ? BLUE : DARK_BLUE;

            return {
                areaPointBorderWidth: [...obj.areaPointBorderWidth, newBorderWidth],
                barBackgroundColor: [...obj.barBackgroundColor, newColor],
            };
        },
        { areaPointBorderWidth: [], barBackgroundColor: [] },
    );
}

export { getDatasetStyleByFilter };
