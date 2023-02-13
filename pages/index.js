// import external resources
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";
// import internal resources
import ProjectList from "@/components/ProjectList";
import PlusIcon from "@/public/PlusIcon.svg";
import ProjectForm from "@/components/ProjectForm";

export default function HomePage({
  addProject,
  projects,
  handleDeleteProject,
}) {
  return (
    <>
      <Header>
        <AppName>PlanMaster</AppName>
        <Title>my projects</Title>
      </Header>

      <ProjectList
        projects={projects}
        handleDeleteProject={handleDeleteProject}
      />

      <ProjectForm addProject={addProject} />
      <StyledPlusIcon />
    </>
  );
}

const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
`;

const AppName = styled.h1`
  position: absolute;
  color: #94c3dd;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  top: 0em;
  left: 0.7em;
`;

const Title = styled.h2`
  position: absolute;
  top: 4.5em;
  left: 0em;
  padding: 0.3em 0.8em 0.3em 1.5em;
  font-size: 17px;
  color: #696969;
  background-color: #d9d9d9;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
`;

const StyledPlusIcon = styled(PlusIcon)`
  position: absolute;
  left: 0em;
  bottom: 0em;
  z-index: -100;
`;
