import Link from "next/link";
import { useRouter } from "next/router";
import { projects } from "@/lib/db.js";
import styled from "styled-components";

export default function Tasks() {
  const router = useRouter();
  const { slug } = router.query;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return null;
  }

  const { title, tasks } = project;

  return (
    <>
      <Button>
        <Link href="/">⬅️</Link>
      </Button>
      <Title>{title}</Title>
      <TaskList>
        {tasks.map(({ task }) => (
          <TaskItem key={task}>{task}</TaskItem>
        ))}
      </TaskList>
    </>
  );
}

const Button = styled.button`
  border-radius: 5px;
  border: none;
  background-color: lightgrey;
  margin: 10px;
  padding: 8px;
  color: grey;
`;

const Title = styled.h1`
  position: absolute;
  top: 40px;
  left: 15px;
  font-style: bold;
  font-size: 17px;
`;

const TaskList = styled.ul`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: start;
  padding-left: 13px;
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
