import React from 'react';

function FilterButtons({ locations }: { locations: string[] }) {
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        console.log(e.currentTarget.textContent);
    };
    return (
        <div>
            {locations.map((loc, idx) => (
                <button key={idx} onClick={handleClick}>
                    {loc}
                </button>
            ))}
        </div>
    );
}

export default FilterButtons;
