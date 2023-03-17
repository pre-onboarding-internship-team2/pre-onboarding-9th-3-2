import { ResponseData } from '../types/response.types';

export default function getUniqueLocations(responseData: ResponseData) {
    return [...new Set(Object.values(responseData).map(({ id }) => id))];
}
