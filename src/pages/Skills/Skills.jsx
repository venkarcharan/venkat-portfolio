import "./Skills.css";

function Skills() {
  return (
    <section className="skills">
      <h1>Technical Skills</h1>

      <div className="skills-container">

        <div className="skill-card">
          <h2>Programming Languages</h2>
          <p>Java</p>
          <p>Python</p>
          <p>JavaScript</p>
          <p>SQL</p>
        </div>

        <div className="skill-card">
          <h2>Frontend</h2>
          <p>HTML5</p>
          <p>CSS3</p>
          <p>React.js</p>
          <p>Responsive Design</p>
        </div>

        <div className="skill-card">
          <h2>Backend</h2>
          <p>Node.js</p>
          <p>Express.js</p>
        </div>

        <div className="skill-card">
          <h2>Database</h2>
          <p>MySQL</p>
          <p>MongoDB</p>
        </div>

        <div className="skill-card">
          <h2>Tools</h2>
          <p>Git</p>
          <p>GitHub</p>
          <p>VS Code</p>
        </div>

      </div>
    </section>
  );
}

export default Skills;