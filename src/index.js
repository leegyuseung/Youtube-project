import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import VideoDetail from "./pages/VideoDetail";
import Videos from "./pages/Videos";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true, // 최상위
        element: <Videos />,
      },
      {
        path: "videos",
        element: <Videos />,
      },
      {
        path: "videos/:keyword",
        element: <Videos />,
      },
      {
        path: "videos/watch/:videoId",
        element: <VideoDetail />,
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
