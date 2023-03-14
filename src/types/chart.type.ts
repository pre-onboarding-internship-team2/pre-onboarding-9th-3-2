export interface ChartDataResponse {
  id: string;
  value_area: number;
  value_bar: number;
}

export interface ChartDataType extends ChartDataResponse {
  time: string;
}
