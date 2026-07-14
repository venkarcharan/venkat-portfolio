import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <h2>S R Venkat Charan</h2>

      <p>Software Developer | Full Stack Developer</p>

      <div className="footer-links">
        <a
          href="mailto:srvenkatcharan@gmail.com"
        >
          Email
        </a>

        <a
          href="https://github.com/venkarcharan"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/sr-venkat-charan"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>

      <p className="copyright">
        © 2026 S R Venkat Charan. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;