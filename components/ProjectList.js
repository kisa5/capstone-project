import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import dynamic from "next/dynamic";

const ModalDeleteProject = dynamic(
  () => import("@/components/ModalDeleteProject"),
  {
    ssr: false,
  }
);

export default function ProjectList({ projects, handleDeleteProject }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [projectToDelete, setProjectToDelete] = useState(null);

  return (
    <Wrapper>
      <SearchInput
        type="text"
        placeholder="search"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <ProjectWrapper>
        <StyledList>
          {projects
            .filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((project, index) => (
              <ProjectItem key={index}>
                <Link href={`/project/${project.id}`}>{project.title}</Link>
                <DeleteButton
                  type="button"
                  onClick={() => setProjectToDelete(project.id)}
                >
                  -
                </DeleteButton>
              </ProjectItem>
            ))}
        </StyledList>
        <ModalDeleteProject
          appearModalDeleteProject={projectToDelete}
          handleDeleteProject={() => handleDeleteProject(projectToDelete)}
          handleClose={() => {
            setProjectToDelete(null);
          }}
        />
      </ProjectWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchInput = styled.input`
  position: fixed;
  top: 5em;
  width: 85%;
  margin: 5px;
  padding: 10px;
  border-radius: 7px;
  border: 1px solid grey;
  font-size: 15px;
  word-wrap: break-word;
  word-break: break-all;
  border: none;
  font-size: 14px;
  color: #696969;
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);
`;

const ProjectWrapper = styled.div`
  position: fixed;
  top: 6.5em;
  bottom: 3.5em;
  overflow: scroll;
  width: 100%;
`;

const StyledList = styled.ul`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin-bottom: 0;
`;

const ProjectItem = styled.li`
  background-color: #fff;
  width: 80%;
  padding: 8px;
  margin: 5px;
  list-style: none;
  word-wrap: break-word;
  border-radius: 0.3rem;
  overflow: hidden;
`;

const DeleteButton = styled.button`
  border: none;
  font-weight: 600;
  border-radius: 50px;
  font-size: 13px;
  height: 25px;
  width: 30px;
`;
