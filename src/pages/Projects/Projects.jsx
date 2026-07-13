import "./Projects.css";

function Projects() {
  return (
    <section className="projects">
      <h1>My Projects</h1>
      <p>Here are some of the projects I have worked on.</p>

      <div className="project-card">
        <h2>Women's Security App – Real-Time SOS Alert System</h2>

        <p>
          An Android application developed to improve women's safety by
          providing real-time location sharing and an emergency SOS alert
          system. The app automatically sends SMS alerts and location details
          to predefined contacts during emergencies.
        </p>

        <h4>Technologies Used</h4>

        <ul>
          <li>Java</li>
          <li>XML</li>
          <li>Android Studio</li>
          <li>Firebase</li>
        </ul>
      </div>

      <div className="project-card">
        <h2>Plant Disease Detection – Leaf Image Classification</h2>

        <p>
          A deep learning application that detects plant diseases from leaf
          images. The project uses image preprocessing and machine learning
          techniques to identify crop diseases and improve agricultural
          monitoring.
        </p>

        <h4>Technologies Used</h4>

        <ul>
          <li>Python</li>
          <li>TensorFlow</li>
          <li>OpenCV</li>
          <li>Deep Learning</li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;