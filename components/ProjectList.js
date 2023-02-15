import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";
import SearchIcon from "@/public/SearchIcon.svg";
import DeleteIcon from "@/public/DeleteIcon.svg";

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
      <SearchWrapper>
        <StyledSearchIcon />
        <InvisibleLabel htmlFor="search">search</InvisibleLabel>
        <SearchInput
          type="text"
          placeholder="search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </SearchWrapper>
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
                <Link
                  href={`/project/${project.id}`}
                  style={{ textDecoration: "none", color: "#696969" }}
                >
                  {project.title}
                </Link>
                <DeleteButton
                  aria-label="delete-button"
                  type="button"
                  onClick={() => setProjectToDelete(project.id)}
                >
                  <DeleteIcon />
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

const SearchWrapper = styled.div`
  position: fixed;
  top: 10em;
  width: 85%;
  margin: 5px;
  padding: 4px;
  border-radius: 7px;
  border: 2.5px solid #94c3dd;
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 18%);
`;

const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  top: 0.4em;
`;
const SearchInput = styled.input`
  width: 95%;
  margin-left: 1em;
  font-size: 15px;
  word-wrap: break-word;
  word-break: break-all;
  font-size: 14px;
  color: #696969;
  border: none;
  &:focus {
    border-color: none;
    outline: none;
  }
`;

const ProjectWrapper = styled.div`
  position: fixed;
  top: 12em;
  bottom: 4em;
  overflow: scroll;
  width: 100%;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin-bottom: 0;
`;

const ProjectItem = styled.li`
  display: flex;
  position: relative;
  background-color: #94c3dd;
  width: 80%;
  margin: 5px;
  padding: 6px;
  list-style: none;
  word-wrap: break-word;
  border-radius: 0.3rem;
  overflow: hidden;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 0.2em;
  right: 1em;
  border: none;
  height: 2em;
  width: 2em;
  background-color: inherit;
`;

const InvisibleLabel = styled.label`
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;
