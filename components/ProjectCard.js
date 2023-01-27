import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ProjectCard({ project }) {
  const router = useRouter();
  return (
    <ProjectList>
      {project.map((project, index) => (
        <ProjectItem key={index}>
          <Link href={`/project/${project.slug}`}>{project.title}</Link>
        </ProjectItem>
      ))}
    </ProjectList>
  );
}

const ProjectList = styled.ul`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: start;
  padding-left: 13px;
`;

const ProjectItem = styled.li`
  background-color: lightgrey;
  padding: 10px;
  margin: 5px;
  list-style-type: none;
  width: 85%;
  border-radius: 5px;
  font-size: 15;
`;
