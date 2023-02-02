import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ProjectList({ projects, handleDeleteProject }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Wrapper>
      <StyledList>
        <SearchBar
          type="text"
          placeholder="search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        {!projects ? (
          <p>Please add a project...</p>
        ) : (
          projects.map((project, index) => (
            <ProjectItem key={index}>
              <Link href={`/project/${project.id}`}>{project.title}</Link>
              <DeleteButton
                type="button"
                onClick={() => handleDeleteProject(project.id)}
              >
                x
              </DeleteButton>
            </ProjectItem>
          ))
        )}
      </StyledList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 50px 0px 55px 0px;
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
  background-color: lightgrey;
  padding: 10px;
  margin: 5px;
  list-style: none;
  width: 90%;
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
