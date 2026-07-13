import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;