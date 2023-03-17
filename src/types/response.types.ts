import { VALUE_AREA_KEY, VALUE_BAR_KEY } from '../consts/chart.const';

export type LocationDataType = {
    id: string;
    [VALUE_AREA_KEY]: number;
    [VALUE_BAR_KEY]: number;
};

/** "2023-02-01 14:32:00" 형태의 문자열 */
export type LocationDataKey = string;

export type ResponseData = {
    [k: LocationDataKey]: LocationDataType;
};

export type ResponseType = {
    type: string;
    version: number;
    response: ResponseData;
};
