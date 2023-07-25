import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../pages/RootLayout";
import Home from "../pages/Home";
import Search from "../pages/Search";
import VideoDetail from "../pages/Video";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "searchResult/:searchQuery", element: <Search /> },
      { path: "video/:id", element: <VideoDetail /> },
    ],
  },
]);

export default router;
