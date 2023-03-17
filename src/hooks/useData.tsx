import type { InteractionItem } from 'chart.js';
import { Chart as ChartJS, ChartData } from 'chart.js';
import { useCallback, useEffect, useRef, useState } from 'react';
import { getElementsAtEvent } from 'react-chartjs-2';
import httpClient from '../api/httpClient';
import { TimeSeriesChartDataType } from '../types/chartData.types';
import { LocationDataType } from '../types/response.types';
import { getChartData } from '../utils/getChartData';
import { getDatasetStyleByFilter } from '../utils/getDatasetStyleByFilter';
import getUniqueLocations from '../utils/getUniqueLocations';
import useFilterQueryString, { QUERY_STRING_KEY } from './useFilterQueryString';

interface ChartDataState extends ChartData<'bar' | 'line', TimeSeriesChartDataType[]> {}

function useChartData() {
    const { filterQueryString, setFilterQueryString } = useFilterQueryString(QUERY_STRING_KEY);

    const [isLoading, setIsLoading] = useState(false);

    const [chartData, setChartData] = useState<ChartDataState>({ datasets: [] });
    const [locations, setLocations] = useState<Array<LocationDataType['id']>>([]);

    const chartRef = useRef<ChartJS>(null);
    const isFirstRender = useRef<boolean>(true);

    const highlightById = (filterId: string | null) => {
        if (!chartRef.current || chartData.datasets.length === 0) return;

        const [areaDataset] = chartData.datasets;

        const { areaPointBorderWidth, barBackgroundColor } = getDatasetStyleByFilter(
            areaDataset.data,
            filterId,
        );

        setChartData(({ datasets }) => {
            const [areaDataset, barDataset] = datasets;
            return {
                datasets: [
                    {
                        ...areaDataset,
                        pointBorderWidth: areaPointBorderWidth,
                    },
                    { ...barDataset, backgroundColor: barBackgroundColor },
                ],
            };
        });
    };

    const getIdFromElement = (element: InteractionItem[]) => {
        // 차트가 아닌 canvas 내 빈 곳을 클릭한 경우 빈 배열이므로 element.length 확인 필요
        if (!element.length || chartData.datasets.length === 0) return;
        const { datasetIndex, index } = element[0];
        const id = chartData.datasets[datasetIndex].data[index].y.id;
        return id;
    };

    const onCanvasClick: React.MouseEventHandler<HTMLCanvasElement> = useCallback(
        (event) => {
            if (!chartRef.current) return;
            const clickedElementInCanvas = getElementsAtEvent(chartRef.current, event);
            const id = getIdFromElement(clickedElementInCanvas);
            setFilterQueryString(id);
        },
        [chartRef.current],
    );

    useEffect(() => {
        highlightById(filterQueryString);
    }, [filterQueryString]);

    useEffect(() => {
        if (chartData.datasets.length !== 0 && isFirstRender.current && filterQueryString) {
            isFirstRender.current = false;
            highlightById(filterQueryString);
        }
    }, [chartData]);

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);

            const responseData = await httpClient.loadData();

            if (!responseData) return;

            setLocations(getUniqueLocations(responseData));
            setChartData(getChartData(responseData));

            setIsLoading(false);
        };

        loadData();
    }, []);

    return {
        chartData,
        locations,
        isLoading,
        chartRef,
        onClick: onCanvasClick,
    };
}

export default useChartData;
