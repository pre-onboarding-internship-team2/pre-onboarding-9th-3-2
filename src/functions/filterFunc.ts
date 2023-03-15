import { dataArray, dataObject, data } from "./funcData";

// 데이터 내 지역 이름을 추출하여 중복없는 지역 이름 배열을 return하는 함수
export const reduceById = () => {
  const reduceByRegion = dataArray.reduce((acc: string[], cur: data) => {
    const curKey = Object.keys(cur)[0];
    if (!acc.includes(cur[curKey].id)) {
      acc.push(cur[curKey].id);
    }
    return acc;
  }, []);
  return reduceByRegion;
};

// 데이터 내 시간대를 추출하여 return하는 함수
export const reduceByMinutes = () => {
  const minutesArray = Object.keys(dataObject);
  return minutesArray;
};

// 바 형태 데이터 추출하여 배열로 return하는 함수
export const reduceBarData = () => {
  const barData = Object.values(dataObject).reduce((acc: number[], cur) => {
    acc.push(cur.value_bar);
    return acc;
  }, []);
  return barData;
};

// 라인 형태 데이터 추출하여 배열로 return하는 함수
export const reduceAreaData = () => {
  const areaData = Object.values(dataObject).reduce((acc: number[], cur) => {
    acc.push(cur.value_area);
    return acc;
  }, []);
  return areaData;
};

// 데이터 ID별 BackGroundColor 배열 return하는 함수
export const reduceDataColor = () => {
  const dataColor = Object.values(dataObject).reduce((acc: string[], cur) => {
    switch (cur.id) {
      case "성북구":
        acc.push("#204051");
        break;
      case "강남구":
        acc.push("#3B6978");
        break;
      case "노원구":
        acc.push("#84A9AC");
        break;
      case "중랑구":
        acc.push("#CAE8D5");
        break;
      default:
        break;
    }
    return acc;
  }, []);
  return dataColor;
};

// params.id와 data ID의 일치 여부에 따라 BackGroundColor 배열을 return 하는 함수
export const reduceSelectedDataColor = (id: string) => {
  const dataColor = Object.values(dataObject).reduce((acc: string[], cur) => {
    if (cur.id !== id) {
      acc.push("lightgray");
    } else {
      switch (cur.id) {
        case "성북구":
          acc.push("#204051");
          break;
        case "강남구":
          acc.push("#3B6978");
          break;
        case "노원구":
          acc.push("#84A9AC");
          break;
        case "중랑구":
          acc.push("#CAE8D5");
          break;
        default:
          break;
      }
    }
    return acc;
  }, []);
  return dataColor;
};
