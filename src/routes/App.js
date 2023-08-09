//ReactRouter Imports
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

//import React from 'react';

//Styles
import '../styles/app.css';

//Layouts
import RootLayout from "../layouts/RootLayout.js";

//Pages
import Error from '../pages/error/Error.js';
import NotFound from '../pages/NotFound.js';
import Experience from "../pages/Experience";
import Projects from '../pages/Projects';
import About from "../pages/About";
import Contact from "../pages/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<Error />}>

      <Route index element={<About />} />

      <Route path="about" element={<About />} />

      <Route path="experience" element={<Experience />} />

      <Route path="projects" element={<Projects />} />

      <Route path="contact" element={<Contact />} />

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

