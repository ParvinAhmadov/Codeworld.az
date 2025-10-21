import { createBrowserRouter } from "react-router-dom";
import Layout from "./featured/Layout";
import ErrorBoundry from "./featured/ErrorBoundry";
import LandingPage from "./pages/Landing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundry />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
]);
