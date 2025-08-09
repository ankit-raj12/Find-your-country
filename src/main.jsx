import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.jsx";
import Error from "./components/Error.jsx";
import Home from "./components/Home.jsx";
import CountryDetail from "./components/CountryDetail.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <div>Contact</div>,
      },
      {
        path: "/:country",
        element: <CountryDetail />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
