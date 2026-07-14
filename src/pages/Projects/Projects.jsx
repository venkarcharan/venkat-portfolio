import styled from "styled-components";

const projects = [
  {
    title: "Women's Security App – Real-Time SOS Alert System",
    description:
      "An Android application developed to improve women's safety by providing real-time location sharing and an emergency SOS alert system. The app automatically sends SMS alerts and location details to predefined contacts during emergencies.",
    technologies: ["Java", "XML", "Android Studio", "Firebase"],
  },
  {
    title: "Plant Disease Detection – Leaf Image Classification",
    description:
      "A deep learning application that detects plant diseases from leaf images. The project uses image preprocessing and machine learning techniques to identify crop diseases and improve agricultural monitoring.",
    technologies: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "Deep Learning",
    ],
  },
];

const ProjectsSection = styled.section`
  padding: 60px 10%;
  min-height: 100vh;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.text};
`;

const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const ProjectCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 25px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0px 8px 20px rgba(13, 110, 253, 0.3);
  }
`;

const ProjectTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 15px;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.7;
  margin-bottom: 20px;
  text-align: left;
`;

const TechHeading = styled.h4`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
`;

const TechList = styled.ul`
  padding-left: 20px;
`;

const TechItem = styled.li`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 8px;
`;

function Projects() {
  return (
    <ProjectsSection>
      <Title>My Projects</Title>

      <Subtitle>
        Here are some of the projects I have worked on.
      </Subtitle>

      {projects.map((project) => (
        <ProjectCard key={project.title}>
          <ProjectTitle>{project.title}</ProjectTitle>

          <Description>{project.description}</Description>

          <TechHeading>Technologies Used</TechHeading>

          <TechList>
            {project.technologies.map((tech) => (
              <TechItem key={tech}>{tech}</TechItem>
            ))}
          </TechList>
        </ProjectCard>
      ))}
    </ProjectsSection>
  );
}

export default Projects;