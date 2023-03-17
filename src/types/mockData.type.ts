export type MockType = {
  date: string;
  id: string;
  value_area: datasetType;
  value_bar: datasetType;
};

type datasetType = {
  x: string;
  y: number;
};
