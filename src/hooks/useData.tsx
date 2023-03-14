import { ChartData } from 'chart.js';
import { useEffect, useState } from 'react';
import httpClient from '../api/httpClient';
import { TimeSeriesChartDataType } from '../types/chartData.types';
import { LocationDataType } from '../types/response.types';
import { getChartData } from '../utils/getChartData';
import getUniqueLocations from '../utils/getUniqueLocations';

function useChartData() {
    const [isLoading, setIsLoading] = useState(false);
    const [chartData, setChartData] = useState<
        ChartData<'bar' | 'line', TimeSeriesChartDataType[]>
    >({
        datasets: [],
    });

    const [locations, setLocations] = useState<Array<LocationDataType['id']>>([]);

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
    };
}

export default useChartData;
