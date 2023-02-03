import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import TaskForm from "@/components/TaskForm";
import { useState } from "react";
import dynamic from "next/dynamic";

const ModalDeleteTask = dynamic(() => import("@/components/ModalDeleteTask"));

export default function Task({ projects, onHandleAddTask, handleDeleteTask }) {
  const router = useRouter();
  const { id } = router.query;
  const [taskToDelete, setTaskToDelete] = useState(null);

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
            <TaskItem key={task.id}>
              {task.task}
              <DeleteButton
                type="button"
                onClick={() => setTaskToDelete(task.id, id)}
              >
                x
              </DeleteButton>
            </TaskItem>
          ))}
        </StyledList>
        <ModalDeleteTask
          appearModalDeleteTask={taskToDelete}
          handleDeleteTask={() => handleDeleteTask(taskToDelete)}
          handleClose={() => setTaskToDelete(null)}
        />
      </Wrapper>
      <TaskForm onHandleAddTask={onHandleAddTask} projectid={id} />
    </>
  );
}

const Wrapper = styled.div`
  margin: 0px 0px 55px 0px;
`;

const Title = styled.h1`
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
  align-items: center;
  padding: 0;
  margin: 0;
`;

const TaskItem = styled.li`
  background-color: lightgrey;
  padding: 10px;
  margin: 5px;
  list-style: none;
  word-wrap: break-word;
  width: 90%;
  border-radius: 0.3rem;
  font-size: 15;
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
