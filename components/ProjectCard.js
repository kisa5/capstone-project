import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ProjectCard({ projects, onHandleAddTask }) {
  return (
    <ProjectList>
      {!projects ? (
        <p>Please add a project...</p>
      ) : (
        projects.map((project, index) => (
          <ProjectItem key={index}>
            <Link href={`/project/${project.id}`}>{project.title}</Link>
          </ProjectItem>
        ))
      )}
    </ProjectList>
  );
}

const ProjectList = styled.ul`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: start;
  padding-left: 15px;
  margin-bottom: 0;
`;

const ProjectItem = styled.li`
  background-color: lightgrey;
  padding: 10px;
  margin: 5px;
  list-style-type: none;
  width: 85%;
  border-radius: 5px;
`;
