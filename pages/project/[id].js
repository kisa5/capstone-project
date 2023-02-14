import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";
import TaskForm from "@/components/TaskForm";
import Counter from "@/components/Counter";
import DeleteIcon from "@/public/DeleteIcon.svg";
import PlusIcon from "@/public/PlusIcon.svg";

export default function Task({
  projects,
  onHandleAddTask,
  handleDeleteTask,
  handleTaskCheckbox,
  handleNote,
}) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    handleNote(data.note, id);
  }

  const [count, setCount] = useLocalStorageState(250);
  const router = useRouter();
  const { id } = router.query;
  const selectedProject = projects.find((project) => project.id === id);
  const { isReady } = router;
  if (!isReady) {
    return <div>project is loading ..</div>;
  }
  if (!selectedProject) {
    return (
      <>
        <Header>
          <AppName>PlanMaster</AppName>
        </Header>
        <ErrorWrapper>
          <ErrorMessage>404 Page</ErrorMessage>
          <StyledLink
            href="/"
            style={{ textDecoration: "none", color: "white" }}
          >
            Go back to your projects
          </StyledLink>
        </ErrorWrapper>
        <StyledPlusIcon />
      </>
    );
  }

  return (
    <>
      <Header>
        <AppName>PlanMaster</AppName>
        <BackButton>
          <Link href="/" style={{ textDecoration: "none", color: "white" }}>
            {" "}
            back{" "}
          </Link>
        </BackButton>
        <Title>{selectedProject.title}</Title>
      </Header>
      <Wrapper>
        <TaskWrapper>
          <StyledList>
            {selectedProject.tasks.map((task) => (
              <TaskItem key={task.id}>
                <Checkbox
                  type="checkbox"
                  checked={task.isDone}
                  onChange={() => handleTaskCheckbox(task.id, id)}
                />
                <label>{task.task}</label>
                <DeleteButton
                  type="button"
                  onClick={() => {
                    handleDeleteTask(task.id, id);
                  }}
                >
                  <DeleteIcon />
                </DeleteButton>
              </TaskItem>
            ))}
          </StyledList>
        </TaskWrapper>
        <NotesForm onSubmit={handleSubmit}>
          <Textarea
            rows={10}
            maxLength="250"
            placeholder="take notes ..."
            name="note"
            defaultValue={selectedProject.notes}
            onChange={(event) => setCount(event.target.value.length)}
          ></Textarea>
          <NotesCounter>
            <Counter maxLength={250} counter={count} />
          </NotesCounter>
          <SaveNoteButton type="submit">save</SaveNoteButton>
        </NotesForm>
        <TaskForm onHandleAddTask={onHandleAddTask} projectid={id} />
        <StyledPlusIcon />
      </Wrapper>
    </>
  );
}

const ErrorWrapper = styled.div`
  position: absolute;
  top: 10em;
  left: 1em;
  width: 85%;
  height: 15%;
  background-color: aliceblue;
  border-radius: 10px;
  margin: 1em;
  padding: 1em;
`;

const ErrorMessage = styled.div`
  font-size: 18px;
  color: #696969;
`;

const StyledLink = styled(Link)`
  position: absolute;
  bottom: 1em;
  border-radius: 20px;
  padding: 0.5em;
  background-color: #94c3dd;
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
`;

const AppName = styled.h1`
  position: absolute;
  color: #94c3dd;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  top: 0em;
  left: 0.7em;
`;

const BackButton = styled.div`
  position: fixed;
  right: 1em;
  top: 1em;
  width: 4em;
  outline: 0;
  border: none;
  padding: 0.3em 1em 0.3em 1em;
  border-radius: 20px;
  background: #c5c5c5;
  color: #494b49;
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);
`;

const Title = styled.h2`
  position: absolute;
  top: 4.5em;
  left: 0em;
  padding: 0.3em 0.8em 0.3em 1.5em;
  font-size: 17px;
  color: #696969;
  background-color: #d9d9d9;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TaskWrapper = styled.div`
  position: fixed;
  top: 8.5em;
  bottom: 17em;
  overflow: scroll;
  width: 85%;
  background-color: aliceblue;
  border-radius: 10px;
`;

const StyledList = styled.ul`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 6px;
`;

const TaskItem = styled.li`
  display: flex;
  position: relative;
  background-color: #94c3dd;
  color: #696969;
  width: 90%;
  margin: 5px;
  padding: 6px;
  list-style: none;
  word-wrap: break-word;
  border-radius: 0.3rem;
  overflow: hidden;
`;

const Checkbox = styled.input`
  position: absolute;
  top: 0.35em;
  right: 3.5em;
  appearance: none;
  width: 3em;
  height: 1.3em;
  border-radius: 9px;
  border: 2px solid;
  border: none;
  background-color: #efefef;
  outline: none;
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 15%);
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 1.3em;
    height: 1.3em;
    border-radius: 50%;
    background-color: #fff;
    transition: transform 0.3s ease-in-out;
  }

  &:checked {
    background-color: #61ff00;
  }

  &:checked::before {
    transform: translateX(1.75em);
  }

  &:checked + label {
    text-decoration: line-through;
  }
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

const NotesForm = styled.form`
  display: flex;
  position: fixed;
  bottom: 4.3em;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const NotesCounter = styled.div`
  position: absolute;
  bottom: 0em;
`;
const Textarea = styled.textarea`
  width: 80%;
  padding: 10px;
  border-radius: 7px;
  border: 2px solid;
  border: none;
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
  word-wrap: break-word;
  word-break: break-all;
  font-size: 14px;
  color: #a4a8a4;
  background-color: #efefef;
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 20%);
  ::placeholder {
    color: #a4a8a4;
  }
  &:focus {
    border: 3px solid #94c3dd;
    outline: none;
    box-shadow: 0 3px 14px 0 rgb(0 0 0 / 40%);
  }
`;

const SaveNoteButton = styled.button`
  position: absolute;
  bottom: 0.8em;
  right: 3.5em;
  outline: 0;
  padding: 0.3em 1.3em 0.3em 1.3em;
  cursor: pointer;
  border: none;
  border-radius: 20px;
  background: #94c3dd;
  color: #fff;
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);
  transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
`;

const StyledPlusIcon = styled(PlusIcon)`
  position: absolute;
  left: 0em;
  bottom: 0em;
  z-index: -100;
`;
