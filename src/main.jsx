import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createData } from "./data.js";
import { Provider } from "react-redux";
import Component from "./components/component.jsx";
import "./index.css";
import xtore from "./app/xtore.js";
import ErrorPage from "./ErrorPage.jsx";
import {
  loader as rootLoader,
  action as rootAction,
} from "./components/component.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Component />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={xtore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
