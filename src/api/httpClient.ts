import { ResponseData } from '../types/reponse';

const httpClient = {
    async loadData(): Promise<ResponseData | null> {
        const response = await fetch('/mock_data.json');
        const data = await response.json();
        if (!data || !data.response) return null;
        return data.response;
    },
};

export default httpClient;
