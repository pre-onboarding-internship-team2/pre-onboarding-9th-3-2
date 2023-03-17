import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <div className="w-full h-screen">
      <Outlet />
    </div>
  );
};

export default PageLayout;
