import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";

function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRouter;