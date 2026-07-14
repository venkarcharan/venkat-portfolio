import { Link } from "react-router-dom";

import "./Navbar.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Portfolio
      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/skills">Skills</Link>
        </li>

        <li>
          <Link to="/education">Education</Link>
        </li>

        <li>
          <Link to="/projects">Projects</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

      </ul>

      <ThemeToggle />

    </nav>
  );
}

export default Navbar;