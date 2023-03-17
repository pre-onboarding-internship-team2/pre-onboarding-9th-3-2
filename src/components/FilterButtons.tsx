import React from 'react';
import useFilterQueryString, { QUERY_STRING_KEY } from '../hooks/useFilterQueryString';

function FilterButtons({ locations }: { locations: string[] }) {
    const { filterQueryString, setFilterQueryString } = useFilterQueryString(QUERY_STRING_KEY);

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        const text = e.currentTarget.textContent;
        if (!text) return;
        setFilterQueryString(text === filterQueryString ? undefined : text);
    };
    return (
        <div className="filter-buttons-container">
            {locations.map((location, idx) => (
                <button
                    className={`filter-button ${location === filterQueryString ? 'active' : ''}`}
                    key={idx}
                    onClick={handleClick}
                >
                    {location}
                </button>
            ))}
        </div>
    );
}

export default FilterButtons;
