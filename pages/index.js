// import external resources
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";
// import internal resources
import ProjectList from "@/components/ProjectList";
import Logo from "@/components/svg/Logo.svg";
import ProjectForm from "@/components/ProjectForm";

export default function HomePage({
  addProject,
  projects,
  handleDeleteProject,
}) {
  return (
    <>
      <Header>
        <Title>my projects</Title>
      </Header>
      <ProjectList
        projects={projects}
        handleDeleteProject={handleDeleteProject}
      />
      <ProjectForm addProject={addProject} />
    </>
  );
}

const Header = styled.main`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
`;

const Title = styled.h1`
  position: absolute;
  top: 20px;
  font-style: bold;
  font-size: 17px;
`;
