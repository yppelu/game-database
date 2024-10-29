import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { paths } from "@/helpers/consts";
import App from "@/components/App";
const ErrorPage = lazy(() => import("@/pages/ErrorPage/ErrorPage"));
import HomePage from "@/pages/HomePage/HomePage";
const GamePage = lazy(() => import("@/pages/GamePage/GamePage"));
import GamePageSkeleton from "@/pages/GamePage/GamePage.skeleton";

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
          element: (
            <Suspense fallback={<GamePageSkeleton />}>
              <GamePage />
            </Suspense>
          )
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
