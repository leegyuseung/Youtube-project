import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detail from "./components/Detail";
import Videos from "./components/Videos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Videos />,
    children: [
      {
        path: "/videos",
        element: <Videos />,
      },
      {
        path: "/videos/query",
        element: <Videos />,
      },
      {
        path: "/videos/watch/id",
        element: <Detail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
