import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Component from "./components/component.jsx";
import "./index.css";
import xtore from "./app/xtore.js";
import ErrorPage from "./ErrorPage.jsx";
import {
  loader as componentLoader,
  action as componentAction,
} from "./components/component.jsx";
import { loader as dataLoader } from "./components/DataComponent.jsx";
import Update from "./components/Update.jsx";
import DataComponent from "./components/DataComponent.jsx";
import { action as dataAction } from "./components/Update.jsx";
import { action as deleteAction } from "./components/Delete.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Component />,
    errorElement: <ErrorPage />,
    loader: componentLoader,
    action: componentAction,
  },
  {
    path: "data/:dataId",
    element: <DataComponent />,
    loader: dataLoader,
  },
  {
    path: "data/:dataId/edit",
    element: <Update />,
    loader: dataLoader,
    action: dataAction,
  },
  {
    path: "data/:dataId/destroy",
    action: deleteAction,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={xtore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
