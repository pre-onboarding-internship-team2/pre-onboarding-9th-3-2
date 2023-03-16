import { useSearchParams } from "react-router-dom";
import { reduceById } from "../functions/reduceDataFunc";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const idArray = reduceById();

  const handleFilter = (id: string) => {
    const currentParams = searchParams.get("id");
    if (currentParams === id) {
      setSearchParams();
      return;
    }
    setSearchParams({ ...searchParams, id: id });
  };

  return (
    <nav>
      <button
        onClick={() => setSearchParams("")}
        className="w-16 h-8 mx-4 border-2 border-black rounded-xl font-bold"
      >
        전체
      </button>
      {idArray.map((id, index) => (
        <button
          key={index}
          onClick={() => handleFilter(id)}
          className="w-16 h-8 mx-4 border-2 border-black rounded-xl font-bold"
        >
          {id}
        </button>
      ))}
    </nav>
  );
};

export default Filter;
