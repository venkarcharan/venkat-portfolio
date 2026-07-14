import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <h1>Contact</h1>

      <p>
        Thank you for visiting my portfolio. If you'd like to discuss
        opportunities, projects, or collaborations, you can reach me through
        the contact details below.
      </p>

      <div className="contact-card">

        <h3>📞 Phone</h3>
        <a href="tel:+919019816134">
          +91 90198 16134
        </a>

        <h3>📧 Email</h3>
        <a href="mailto:srvenkatcharan@gmail.com">
          srvenkatcharan@gmail.com
        </a>

        <h3>💼 LinkedIn</h3>
        <a
          href="https://www.linkedin.com/in/sr-venkat-charan"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/sr-venkat-charan
        </a>

        <h3>💻 GitHub</h3>
        <a
          href="https://github.com/venkarcharan"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/venkarcharan
        </a>

      </div>
    </section>
  );
}

export default Contact;