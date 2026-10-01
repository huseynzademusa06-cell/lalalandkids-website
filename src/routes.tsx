import type { RouteRecord } from "vite-react-ssg";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Testimonials from "./pages/Testimonials";
import Gallery from "./pages/Gallery";
import Newsletter from "./pages/Newsletter";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "testimonials", element: <Testimonials /> },
      { path: "gallery", element: <Gallery /> },
      { path: "newsletter", element: <Newsletter /> },
    ],
  },
];
