import styled from "styled-components";

const contactDetails = [
  {
    title: "📞 Phone",
    value: "+91-90198 16134",
    href: "tel:+91-90198-16134",
  },
  {
    title: "📧 Email",
    value: "srvenkatcharan@gmail.com",
    href: "mailto:srvenkatcharan@gmail.com",
  },
  {
    title: "💼 LinkedIn",
    value: "linkedin.com/in/sr-venkat-charan",
    href: "https://www.linkedin.com/in/sr-venkat-charan",
  },
  {
    title: "💻 GitHub",
    value: "github.com/venkarcharan",
    href: "https://github.com/venkarcharan",
  },
];

const ContactSection = styled.section`
  padding: 60px 10%;
  text-align: center;
  min-height: 80vh;
`;

const Title = styled.h1`
  font-size: 42px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.text};
`;

const Description = styled.p`
  max-width: 700px;
  margin: 0 auto 40px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.secondary};
`;

const ContactCard = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 35px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const ContactTitle = styled.h3`
  margin-top: 20px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.primary};

  &:first-child {
    margin-top: 0;
  }
`;

const ContactLink = styled.a`
  display: inline-block;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }
`;

function Contact() {
  return (
    <ContactSection>
      <Title>Contact</Title>

      <Description>
        Thank you for visiting my portfolio. If you'd like to discuss
        opportunities, projects, or collaborations, you can reach me through
        the contact details below.
      </Description>

      <ContactCard>
        {contactDetails.map((contact) => (
          <div key={contact.title}>
            <ContactTitle>{contact.title}</ContactTitle>

            <ContactLink
              href={contact.href}
              target={
                contact.href.startsWith("http") ? "_blank" : undefined
              }
              rel={
                contact.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              {contact.value}
            </ContactLink>
          </div>
        ))}
      </ContactCard>
    </ContactSection>
  );
}

export default Contact;