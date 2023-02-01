import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import TaskForm from "@/components/TaskForm";

export default function Task({ projects, onHandleAddTask }) {
  const router = useRouter();
  const { id } = router.query;

  const selectedProject = projects.find((project) => project.id === id) ?? {
    tasks: [],
  };

  return (
    <>
      <BackButton>
        <Link href="/"> ⬅️ </Link>
      </BackButton>
      <Wrapper>
        <StyledList>
          <Title>{selectedProject.title}</Title>
          {selectedProject.tasks.map((task) => (
            <TaskItem key={task.id}>{task.task}</TaskItem>
          ))}
        </StyledList>
      </Wrapper>
      <TaskForm onHandleAddTask={onHandleAddTask} projectid={id} />
    </>
  );
}

const Wrapper = styled.div`
  margin: 0px 0px 55px 0px;
`;

const Title = styled.h1`
  top: 40px;
  left: 15px;
  font-style: bold;
  font-size: 17px;
`;

const BackButton = styled.div`
  margin: 5px;
`;

const StyledList = styled.ul`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: start;
  padding-left: 13px;
  margin: 0;
`;

const TaskItem = styled.li`
  background-color: lightgrey;
  padding: 10px;
  margin: 5px;
  list-style-type: none;
  width: 85%;
  border-radius: 0.3rem;
  font-size: 15;
  overflow: hidden;
`;
