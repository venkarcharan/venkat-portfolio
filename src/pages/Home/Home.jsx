import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeSection = styled.section`
  min-height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 10%;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const Greeting = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 10px;
`;

const Name = styled.h1`
  font-size: 60px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 15px;
`;

const Role = styled.h2`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 25px;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 35px;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 20px;
`;

const PrimaryButton = styled(Link)`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 14px 30px;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

const OutlineButton = styled(Link)`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 14px 30px;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }
`;

function Home() {
  return (
    <HomeSection>
      <HeroContent>
        <Greeting>Hello, I'm</Greeting>

        <Name>S R Venkat Charan</Name>

        <Role>Software Developer</Role>

        <Description>
          Computer Science Engineering student passionate about building
          scalable web applications and Android solutions. Experienced in
          Java, Python, MySQL, MongoDB, and modern web technologies with a
          strong foundation in Object-Oriented Programming, DBMS, and
          problem-solving.
        </Description>

        <HeroButtons>
          <PrimaryButton to="/projects">
            View Projects
          </PrimaryButton>

          <OutlineButton to="/contact">
            Contact Me
          </OutlineButton>
        </HeroButtons>
      </HeroContent>
    </HomeSection>
  );
}

export default Home;