import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { reduceById } from "../functions/filterFunc";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const idArray = reduceById();

  const handleFilter = (id: string) => {
    setSearchParams({ ...searchParams, id: id });
  };

  useEffect(() => {
    console.log(searchParams.get("id"));
  }, [searchParams]);
  return (
    <>
      {idArray.map((id) => (
        <button key={idArray.indexOf(id)} onClick={() => handleFilter(id)}>
          {id}
        </button>
      ))}
    </>
  );
};

export default Filter;
