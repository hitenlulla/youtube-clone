import React from "react";
import router from "./router/router";

import { AppContext } from "./context/contextApi";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <AppContext>
      <RouterProvider router={router}></RouterProvider>
    </AppContext>
  );
};

export default App;
