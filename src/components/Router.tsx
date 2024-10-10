/* eslint-disable sort-keys */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "@/components/App";
import ErrorPage from "@/pages/ErrorPage/ErrorPage";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
