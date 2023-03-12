import "./styles/globals.css";
import "./styles/swiper.styles.css";

import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages";
import Classic24kHoddieSignatureEditrion from "./pages/product/Classic24kHoodieSignatureEdition";
import ClassicMafiaHoodie from "./pages/product/ClassicMafiaHoodie";
import ClassicMafiaLongSleave from "./pages/product/ClassicMafiaLongSleave";
import ClassicMafiaTee from "./pages/product/ClassicMafiaTee";
import Classic24kLongSleave from "./pages/product/Classic24kLongSleave";
import Classic24kTee from "./pages/product/Classic24kTee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/Classic24kHoodieSignatureEdition",
    element: <Classic24kHoddieSignatureEditrion />,
  },
  {
    path: "/product/ClassicMafiaHoodie",
    element: <ClassicMafiaHoodie />,
  },
  {
    path: "/product/ClassicMafiaLongSleave",
    element: <ClassicMafiaLongSleave />,
  },
  {
    path: "/product/ClassicMafiaTee",
    element: <ClassicMafiaTee />,
  },
  {
    path: "/product/Classic24kTee",
    element: <Classic24kTee />,
  },
  {
    path: "/product/Classic24KLongSleave",
    element: <Classic24kLongSleave />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
