import styled from "styled-components";

const educationData = [
  {
    degree: "Bachelor of Engineering",
    specialization: "Computer Science & Engineering",
    institute: "AMC Engineering College",
    duration: "2022 - 2026",
    score: "CGPA : 8.5",
  },
  {
    degree: "Pre-University College",
    institute: "NARAYANA PU College",
    duration: "2020 - 2022",
    score: "Percentage : 80%",
  },
  {
    degree: "SSLC",
    institute: "SFS High School",
    duration: "2019 - 2020",
    score: "Percentage : 85%",
  },
];

const EducationSection = styled.section`
  padding: 100px 10%;
  min-height: 100vh;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 42px;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.colors.text};
`;

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const EducationCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-left: 5px solid ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-left-width: 5px;
  border-radius: 12px;
  padding: 30px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(10px);
    box-shadow: 0px 8px 20px rgba(13, 110, 253, 0.25);
  }
`;

const Degree = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
`;

const Specialization = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
`;

const Institute = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 8px;
`;

const Duration = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 10px;
`;

const Score = styled.h4`
  color: ${({ theme }) => theme.colors.text};
`;

function Education() {
  return (
    <EducationSection>
      <Title>Education</Title>

      <EducationContainer>
        {educationData.map((education) => (
          <EducationCard key={education.degree}>
            <Degree>{education.degree}</Degree>

            {education.specialization && (
              <Specialization>{education.specialization}</Specialization>
            )}

            <Institute>{education.institute}</Institute>

            <Duration>{education.duration}</Duration>

            <Score>{education.score}</Score>
          </EducationCard>
        ))}
      </EducationContainer>
    </EducationSection>
  );
}

export default Education;