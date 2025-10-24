import "./styles/theme.css";
import "./styles/globals.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./views/MainPage/MainPage";
import { ProductsList } from "./views/ProductsList/ProductsList";
import { ProductDetails } from "./views/ProductDetails/ProductDetails";
import { Cart } from "./views/Cart/Cart";
import { Favourites } from "./views/Favourites/Favourites";
import { Layout } from "./components/Layout/Layout";
import { mainPageLoader } from "./api/mainPageLoader";
import { productListLoader } from "./api/productListLoader";
import { productLoader } from "./api/productLoader";
import { addProductToFavouritesAction } from "./api/addProductToFavouritesAction";
import { favouritesLoader } from "./api/favouritesLoader";
import { deleteFavouriteAction } from "./api/deleteFavouriteAction";

const router = createBrowserRouter([
  {
    path: "/add-to-favourites/:productId",
    action: addProductToFavouritesAction,
  },
  {
    path: "/delete-from-favourites/:favouriteId",
    action: deleteFavouriteAction,
  },
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/koszyk",
        element: <Cart />,
      },
      {
        path: "/ulubione",
        element: <Favourites />,
        loader: favouritesLoader,
      },
      {
        path: "/:gender?",
        element: <MainPage />,
        loader: mainPageLoader,
      },
      {
        path: "/:gender/:category/:subcategory?",
        element: <ProductsList />,
        loader: productListLoader,
      },
      {
        path: "/:gender/:category/:subcategory/:productId",
        element: <ProductDetails />,
        loader: productLoader,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
