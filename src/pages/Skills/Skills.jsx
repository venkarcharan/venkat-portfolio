import styled from "styled-components";

const SkillsSection = styled.section`
  padding: 100px 10%;
  min-height: 100vh;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 42px;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.colors.text};
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
`;

const SkillCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  padding: 25px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0px 8px 20px rgba(13, 110, 253, 0.4);
  }
`;

const SkillTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 15px;
`;

const Skill = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
`;

function Skills() {
  return (
    <SkillsSection>
      <Title>Technical Skills</Title>

      <SkillsContainer>
        <SkillCard>
          <SkillTitle>Programming Languages</SkillTitle>
          <Skill>Java</Skill>
          <Skill>Python</Skill>
          <Skill>JavaScript</Skill>
          <Skill>SQL</Skill>
        </SkillCard>

        <SkillCard>
          <SkillTitle>Frontend</SkillTitle>
          <Skill>HTML5</Skill>
          <Skill>CSS3</Skill>
          <Skill>React.js</Skill>
          <Skill>Responsive Design</Skill>
        </SkillCard>

        <SkillCard>
          <SkillTitle>Backend</SkillTitle>
          <Skill>Node.js</Skill>
          <Skill>Express.js</Skill>
        </SkillCard>

        <SkillCard>
          <SkillTitle>Database</SkillTitle>
          <Skill>MySQL</Skill>
          <Skill>MongoDB</Skill>
        </SkillCard>

        <SkillCard>
          <SkillTitle>Tools</SkillTitle>
          <Skill>Git</Skill>
          <Skill>GitHub</Skill>
          <Skill>VS Code</Skill>
        </SkillCard>
      </SkillsContainer>
    </SkillsSection>
  );
}

export default Skills;