import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import AddTask from "@/components/AddTask";

export default function Task({ projects, onHandleAddTask }) {
  const router = useRouter();
  const { id } = router.query;
  // const { isReady } = router;

  const selectedProject = projects.find((project) => project.id === id) ?? {
    tasks: [],
  };

  return (
    <>
      <BackButton>
        <Link href="/"> ⬅️ </Link>
      </BackButton>
      <Title>{selectedProject.title}</Title>
      <StyledList>
        {selectedProject.tasks.map((task) => (
          <TaskItem key={task.id}>{task.task}</TaskItem>
        ))}
      </StyledList>
      <AddTask onHandleAddTask={onHandleAddTask} projectid={id} />
    </>
  );
}

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
  border-radius: 5px;
  font-size: 15;
`;
