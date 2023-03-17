import { createBrowserRouter } from "react-router-dom";
import PageLayout from "./layouts/PageLayout";
import ChartPage from "./pages/ChartPage";
import NotFoundPage from "./pages/NotFoundPage";

const Router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <ChartPage />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

export default Router;
