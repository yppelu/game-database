import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "@/components/App";
import ErrorPage from "@/pages/ErrorPage/ErrorPage";
import HomePage from "@/pages/HomePage/HomePage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
