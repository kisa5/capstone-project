// import external resources
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";
// import internal resources
import ProjectCard from "@/components/ProjectCard";
import Logo from "@/components/svg/Logo.svg";
import AddProject from "@/components/AddProject";

export default function HomePage({ addProject, projects }) {
  return (
    <>
      <Header>
        <Logo alt="logo" height={50} width={50} />
        <Title>my projects</Title>
      </Header>
      <main>
        <ProjectCard projects={projects} />
        <AddProject addProject={addProject} />
      </main>
    </>
  );
}

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Title = styled.h1`
  position: absolute;
  top: 40px;
  left: 15px;
  font-style: bold;
  font-size: 17px;
`;
