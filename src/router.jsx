import { createBrowserRouter } from "react-router";

import MainLayouts from "./layouts/MainLayouts";

import Home from "./pages/Home";
import About from "./pages/About";
import Testimony from "./pages/Testimony";
import Faq from "./pages/Faq";
import FaqDetail from "./pages/FaqDetail";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "testimony",
        element: <Testimony />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "faq/:id",
        element: <FaqDetail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;