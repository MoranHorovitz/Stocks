import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Stocks } from "./pages/StocksPage";
import { StockDetails } from "./pages/StocksDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Stocks />,
  },
  {
    path: "/stock/:id",
    element: <StockDetails />,
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
