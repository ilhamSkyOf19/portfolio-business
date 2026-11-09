import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LayoutsContent from "../layouts/LayoutsContent";
import AboutPage from "../pages/AboutPage";
import ServicePage from "../pages/ServicePage";
import OurTeamPage from "../pages/OurTeanPage";
import ContactPage from "../pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutsContent />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "service",
        element: <ServicePage />,
      },
      {
        path: "our-team",
        element: <OurTeamPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
