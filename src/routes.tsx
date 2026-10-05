import type { RouteRecord } from "vite-react-ssg";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { lazy, Suspense } from "react";

const Testimonials = lazy(() => import("./pages/Testimonials"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Newsletter = lazy(() => import("./pages/Newsletter"));

const LazyRoute = ({ Component }: { Component: React.ComponentType }) => (
  <Suspense fallback={null}>
    <Component />
  </Suspense>
);

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "testimonials", element: <LazyRoute Component={Testimonials} /> },
      { path: "gallery", element: <LazyRoute Component={Gallery} /> },
      { path: "newsletter", element: <LazyRoute Component={Newsletter} /> },
    ],
  },
];
