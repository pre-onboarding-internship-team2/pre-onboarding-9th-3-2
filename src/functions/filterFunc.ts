import { data } from "../components/Graph";

// 데이터 내 지역 이름을 추출하여 중복없는 지역 이름 배열을 return하는 함수
export const reduceById = (dataArray: data[]): string[] => {
  const reduceByRegion = dataArray.reduce((acc: string[], cur: data) => {
    const curKey = Object.keys(cur)[0];
    if (!acc.includes(cur[curKey].id)) {
      acc.push(cur[curKey].id);
    }
    return acc;
  }, []);
  return reduceByRegion;
};

// 데이터 내 시간대를 분 단위로 중복없이 추출하여 return하는 함수
export const reduceByMinute = (dataObj: data): string[] => {
  const minutesArray = Object.keys(dataObj);
  for (let i = 0; i < minutesArray.length; i++) {
    const date = new Date(minutesArray[i]);
    minutesArray[i] = String(date.getMinutes());
  }
  return [...new Set(minutesArray)];
};
