import { useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen bg-sky-800 text-white flex flex-col items-center justify-center ">
      <h1 className="text-7xl font-bold mb-3">404</h1>
      <h3 className="text-5xl font-medium mb-7">Page Not Found</h3>

      <button
        className="border rounded-md px-6 py-2 bg-white text-sky-800 flex justify-center items-center"
        onClick={() => navigate("/")}
      >
        <HiOutlineArrowNarrowLeft className="mr-3" />
        Back to Home
      </button>
    </div>
  );
};

export default NotFoundPage;
