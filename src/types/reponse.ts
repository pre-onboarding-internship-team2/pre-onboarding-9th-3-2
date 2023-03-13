export type LocationDataType = {
    id: string;
    value_area: number;
    value_bar: number;
};
export type LocationDataKey = string;

export type ResponseData = {
    [k: LocationDataKey]: LocationDataType;
};

export type ResponseType = {
    type: string;
    version: number;
    response: ResponseData;
};
