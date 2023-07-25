import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../pages/RootLayout";
import Home from "../pages/Home";
import SearchResult from "../pages/SearchResult";
import VideoDetail from "../pages/VideoDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "searchResult/:searchQuery", element: <SearchResult /> },
      { path: "video/:id", element: <VideoDetail /> },
    ],
  },
]);

export default router;
