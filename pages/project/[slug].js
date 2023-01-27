import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import AddTask from "@/components/AddTask";

export default function Task({ addTask, task }) {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <BackButton>
        <Link href="/"> ⬅️ </Link>
      </BackButton>
      <StyledList>
        <Title>{slug}</Title>
        {task.map((task, index) => (
          <TaskItem key={index}>{task.task}</TaskItem>
        ))}
      </StyledList>
      <AddTask addTask={addTask} />
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
