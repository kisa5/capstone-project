import Link from "next/link";
import { useRouter } from "next/router";
import { projects } from "@/lib/db.js";
import styled from "styled-components";

export default function Tasks() {
  const router = useRouter();
  const { slug } = router.query;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return <p>404 page</p>;
  }

  const { title, tasks } = project;

  return (
    <>
      <BackButton>
        <Link href="/"> ⬅️ </Link>
      </BackButton>
      <StyledList>
        <Title>{title}</Title>
        {tasks.map(({ task }) => (
          <TaskItem key={task.id}>{task}</TaskItem>
        ))}
      </StyledList>
    </>
  );
}

const BackButton = styled.div`
  margin: 5px;
`;

const Title = styled.h1`
  top: 40px;
  left: 15px;
  font-style: bold;
  font-size: 17px;
`;

const StyledList = styled.ul`
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
