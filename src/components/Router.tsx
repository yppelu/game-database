import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "@/components/App";
import ErrorPage from "@/pages/ErrorPage/ErrorPage";
import HomePage from "@/pages/HomePage/HomePage";
import { paths } from "@/helpers/consts";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: paths.home,
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: `${paths.home}/games/game/:gameId`,
          element: <h1>This is going to be a game page.</h1>
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
