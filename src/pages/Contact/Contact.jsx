import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <h1>Contact Me</h1>

      <p>
        Feel free to connect with me for internships, collaborations, or
        software development opportunities.
      </p>

      <div className="contact-card">
        <h3>📞 Phone</h3>
        <p>+91 9019816134</p>

        <h3>📧 Email</h3>
        <p>srvenkatcharan@gmail.com</p>

        <h3>💼 LinkedIn</h3>
        <a
          href="https://www.linkedin.com/in/sr-venkat-charan"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/sr-venkat-charan
        </a>

        <h3>💻 GitHub</h3>
        <a
          href="https://github.com/venkarcharan"
          target="_blank"
          rel="noreferrer"
        >
          github.com/venkarcharan
        </a>
      </div>
    </section>
  );
}

export default Contact;