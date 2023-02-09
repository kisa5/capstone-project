import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import TaskForm from "@/components/TaskForm";

export default function Task({
  projects,
  onHandleAddTask,
  handleDeleteTask,
  handleTaskCheckbox,
}) {
  const router = useRouter();
  const { id } = router.query;
  const { isReady } = router;
  if (!isReady) {
    return <p>project is loading ..</p>;
  }

  const selectedProject = projects.find((project) => project.id === id);

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
              <label>
                <input
                  type="checkbox"
                  checked={task.isDone}
                  onChange={() => handleTaskCheckbox(task.id, id)}
                />
                {task.task}
              </label>
              <DeleteButton
                type="button"
                onClick={() => {
                  handleDeleteTask(task.id, id);
                }}
              >
                x
              </DeleteButton>
            </TaskItem>
          ))}
        </StyledList>
      </Wrapper>
      <TaskForm onHandleAddTask={onHandleAddTask} projectid={id} />
    </>
  );
}

const Wrapper = styled.div`
  margin: 0 0 55px 0;
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
