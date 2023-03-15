import { useLocation, useSearchParams } from "react-router-dom";
import { reduceById } from "../functions/filterFunc";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const idArray = reduceById();

  const handleFilter = (id: string) => {
    const currentParams = new URLSearchParams(location.search);
    if (currentParams.get("id") === id) {
      setSearchParams();
      return;
    }
    setSearchParams({ ...searchParams, id: id });
  };

  return (
    <nav>
      {idArray.map((id) => (
        <button key={idArray.indexOf(id)} onClick={() => handleFilter(id)}>
          {id}
        </button>
      ))}
    </nav>
  );
};

export default Filter;
