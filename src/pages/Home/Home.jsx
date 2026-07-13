import "./Home.css";

function Home() {
  return (
    <section className="home">
      <div className="hero-content">
        <p className="greeting">Hello, I'm</p>

        <h1>S R Venkat Charan</h1>

        <h2>Software Developer</h2>

        <p className="description">
          Computer Science Engineering student passionate about building
          scalable web applications and Android solutions. Experienced in
          Java, Python, MySQL, MongoDB, and modern web technologies with a
          strong foundation in Object-Oriented Programming, DBMS, and
          problem-solving.
        </p>

        <div className="hero-buttons">
          <a href="/projects" className="btn">
            View Projects
          </a>

          <a href="/contact" className="btn-outline">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;