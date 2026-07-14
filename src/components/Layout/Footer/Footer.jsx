import styled from "styled-components";

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  padding: 40px 20px;
  margin-top: 50px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
`;

const Text = styled.p`
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.text};
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  margin: 20px 0;
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
`;

function Footer() {
  return (
    <FooterContainer>
      <Title>S R Venkat Charan</Title>

      <Text>Software Developer | Full Stack Developer</Text>

      <FooterLinks>
        <FooterLink href="mailto:srvenkatcharan@gmail.com">
          Email
        </FooterLink>

        <FooterLink
          href="https://github.com/venkarcharan"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </FooterLink>

        <FooterLink
          href="https://www.linkedin.com/in/sr-venkat-charan"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </FooterLink>
      </FooterLinks>

      <Copyright>
        © 2026 S R Venkat Charan. All Rights Reserved.
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;