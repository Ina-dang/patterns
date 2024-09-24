import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { CompoundComponentPage, ErrorPage, SingletonPage } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "design",
        children: [
          {
            path: "singleton",
            element: <SingletonPage />,
          },
        ],
      },
      {
        path: "react",
        children: [
          {
            path: "compound-component",
            element: <CompoundComponentPage />,
          },
        ],
      },
    ],
  },
]);
