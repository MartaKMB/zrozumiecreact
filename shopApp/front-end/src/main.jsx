import "./styles/theme.css";
import "./styles/globals.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Cart } from "./views/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Cart />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
