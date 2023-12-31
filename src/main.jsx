import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createData } from "./data.js";
import { Provider } from "react-redux";
import Component from "./components/component.jsx";
import "./index.css";
import xtore from "./app/xtore.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Component />,
    action: createData,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={xtore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
