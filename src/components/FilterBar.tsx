import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { dataArr } from "../utils/fetchData";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useTargetId } from "../hooks/useTargetId";

const FilterBar = () => {
  const navigate = useNavigate();
  const targetID = useTargetId();
  const placeArr =
    [...new Set<string>(dataArr.map((data) => data.id))].sort() || [];
  const [selected, isSelected] = useState<string>(targetID || "");

  useEffect(() => {
    isSelected(targetID || "");
  }, [navigate, targetID]);

  const onClickPlaceHandler = (e: React.MouseEvent<HTMLElement>) => {
    navigate(`/?targetId=${e.currentTarget.textContent}`);
  };

  return (
    <div className="w-full flex items-center justify-center flex-row relative h-24">
      <div className="absolute left-10">
        {placeArr.map((place, idx) => (
          <button
            key={place}
            value={place}
            onClick={onClickPlaceHandler}
            className={
              place === targetID
                ? "border-2 bg-sky-700 text-white rounded-md px-6 py-2 mr-3"
                : "border-2 border-sky-700 rounded-md px-6 py-2 mr-3"
            }
          >
            {place}
          </button>
        ))}
      </div>
      {selected !== "" && (
        <>
          <h2 className="text-2xl font-bold mr-2"> {selected} </h2>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            <AiOutlineCloseCircle
              style={{ width: "24px", height: "24px", color: "#777" }}
            />
          </button>
        </>
      )}
    </div>
  );
};

export default FilterBar;
