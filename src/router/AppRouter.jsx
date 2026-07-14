import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Skills from "../pages/Skills/Skills";
import Education from "../pages/Education/Education";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";

function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRouter;