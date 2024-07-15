import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home-page/Home";
import Admin from "./pages/admin-page/Admin";
import Landing from "./pages/landing-page/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },

  {
    path: "admin",
    element: <Admin />,
  },
  {
    path: "store",
    element: <Home />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
