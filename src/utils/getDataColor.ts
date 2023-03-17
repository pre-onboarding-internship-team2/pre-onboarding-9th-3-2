export const getDataBarColor = (idArray: string[], targetId: string | null) => {
  const newarr = idArray.map((id) =>
    id === targetId ? "rgba(219, 40, 41, 0.9)" : "rgba(255, 99, 132, 0.55)"
  );

  return newarr;
};

export const getDataLinePointColor = (
  idArray: string[],
  targetId: string | null
) => {
  const newarr = idArray.map((id) =>
    id === targetId ? "rgba(22, 57, 81, 0.9)" : "rgba(53, 162, 235, 0.35)"
  );

  return newarr;
};
