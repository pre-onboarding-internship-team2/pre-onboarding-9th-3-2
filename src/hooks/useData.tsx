import { ChartData } from 'chart.js';
import { useEffect, useState } from 'react';
import httpClient from '../api/httpClient';
import { TimeSeriesChartDataType } from '../types/chartData.types';
import { getChartData } from '../utils/getChartData';

function useChartData() {
    const [chartData, setChartData] = useState<
        ChartData<'bar' | 'line', TimeSeriesChartDataType[]>
    >({
        datasets: [],
    });

    const loadData = async () => {
        const responseData = await httpClient.loadData();

        if (!responseData) return;

        setChartData(getChartData(responseData));
    };

    useEffect(() => {
        loadData();
    }, []);

    return {
        chartData,
    };
}

export default useChartData;
