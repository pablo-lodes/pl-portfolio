//ReactRouter Imports
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

import React from 'react';

//Styles
import '../styles/app.css';

//Layouts
import RootLayout from "../layouts/RootLayout.js";

//Pages
import Error from '../pages/error/Error.js';
import NotFound from '../pages/NotFound.js';
import About from "../pages/About";
import Experience from "../pages/Experience";
import Projects from '../pages/Projects';
import Contact from "../pages/Contact";
import LegalNotice from "../pages/LegalNotice";
import PrivacyPolicy from "../pages/PrivacyPolicy";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<Error />}>

      <Route index element={<About />} />

      <Route path="about" element={<About />} />

      <Route path="experience" element={<Experience />} />

      <Route path="projects" element={<Projects />} />

      <Route path="contact" element={<Contact />} />

      <Route path="legal-notice" element={<LegalNotice />} />

      <Route path="privacy-policy" element={<PrivacyPolicy />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

