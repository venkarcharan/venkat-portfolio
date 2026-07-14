import "./Education.css";

function Education() {
  return (
    <section className="education">

      <h1>Education</h1>

      <div className="education-container">

        <div className="education-card">
          <h2>Bachelor of Engineering</h2>
          <h3>Computer Science & Engineering</h3>
          <p>AMC Engineering College</p>
          <span>2022 - 2026</span>
          <h4>CGPA : 8.5</h4>
        </div>

        <div className="education-card">
          <h2>Pre-University College</h2>
          <p>NARAYANA PU College</p>
          <span>2020 - 2022</span>
          <h4>Percentage : 80%</h4>
        </div>

        <div className="education-card">
          <h2>SSLC</h2>
          <p>SFS High School</p>
          <span>2019 - 2020</span>
          <h4>Percentage : 85%</h4>
        </div>

      </div>

    </section>
  );
}

export default Education;