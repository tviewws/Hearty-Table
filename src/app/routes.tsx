import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Philosophy } from "./pages/Philosophy";
import { Gather } from "./pages/Gather";
import { Collaborate } from "./pages/Collaborate";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "philosophy", Component: Philosophy },
      { path: "gather", Component: Gather },
      { path: "collaborate", Component: Collaborate },
    ],
  },
]);
