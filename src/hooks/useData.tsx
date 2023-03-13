import React, { useEffect } from 'react';
import httpClient from '../api/httpClient';

function useData() {
    const loadData = async () => {
        const data = await httpClient.loadData();
        console.log(data);
    };

    useEffect(() => {
        loadData();
    }, []);
}

export default useData;
