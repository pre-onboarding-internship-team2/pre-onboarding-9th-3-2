import { useSearchParams } from 'react-router-dom';

export const QUERY_STRING_KEY = 'id' as const;

type filterQueryStringKeyType = 'id';

export default function useFilterQueryString(key: filterQueryStringKeyType) {
    const [searchParams, setSerchParams] = useSearchParams();

    const filterQueryString = searchParams.get(key);
    const setFilterQueryString = (id: string | undefined) => {
        setSerchParams(id ? { [key]: id } : undefined);
    };

    return {
        filterQueryString,
        setFilterQueryString,
    };
}
