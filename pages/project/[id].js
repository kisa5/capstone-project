import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useState } from "react";
import TaskForm from "@/components/TaskForm";
import useLocalStorageState from "use-local-storage-state";

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
  const { isReady } = router;
  if (!isReady) {
    return <p>project is loading ..</p>;
  }

  const selectedProject = projects.find((project) => project.id === id);

  return (
    <>
      <Header>
        <BackButton>
          <Link href="/"> back </Link>
        </BackButton>
        <Title>{selectedProject.title}</Title>
      </Header>
      <Body>
        <TaskWrapper>
          <StyledList>
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
        </TaskWrapper>
        <NotesForm onSubmit={handleSubmit}>
          <Textarea
            rows={10}
            maxLength="250"
            placeholder="Write your note here .."
            name="note"
            defaultValue={selectedProject.notes}
            onChange={(event) => setCount(event.target.value.length)}
          ></Textarea>
          {count < 250 && count >= 0 ? (
            <NotesCounter>{250 - count}</NotesCounter>
          ) : (
            <NotesCounter>0</NotesCounter>
          )}
          <SaveNoteButton type="submit">save note</SaveNoteButton>
        </NotesForm>
        <TaskForm onHandleAddTask={onHandleAddTask} projectid={id} />
      </Body>
    </>
  );
}

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.9em;
  align-items: center;
`;
const BackButton = styled.div`
  position: absolute;
  padding-left: 0.5em;
  padding-right: 0.5em;
  left: 1em;
  width: 3.3em;
  outline: 0;
  cursor: pointer;
  border: none;
  line-height: 2em;
  border-radius: 7px;
  font-weight: 400;
  background: #9fa3ac;
  color: #494b49;
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);
`;

const Title = styled.h1`
  position: absolute;
  top: 2em;
  font-style: bold;
  font-size: 17px;
  color: #494b49;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TaskWrapper = styled.div`
  position: fixed;
  top: 5em;
  bottom: 16em;
  overflow: scroll;
  width: 85%;
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
  color: #494b49;
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 15%);
  background: #fff;
  padding: 3px;
  margin: 5px;
  list-style: none;
  word-wrap: break-word;
  width: 85%;
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

const NotesForm = styled.form`
  display: flex;
  position: fixed;
  bottom: 5px;
  display: flex;
  position: fixed;
  bottom: 3.7em;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const NotesCounter = styled.p`
  position: absolute;
  bottom: 0em;
  font-size: 0.7em;
  color: #a4a8a4;
`;
const Textarea = styled.textarea`
  width: 80%;
  padding: 10px;
  border-radius: 7px;
  border: 1px solid grey;
  font-size: 15px;
  word-wrap: break-word;
  word-break: break-all;
  border: none;
  font-size: 14px;
  color: #494b49;
  background-color: #e9eaec;
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);
`;

const SaveNoteButton = styled.button`
  position: absolute;
  bottom: 0.5em;
  right: 3.5em;
  outline: 0;
  cursor: pointer;
  border: none;
  line-height: 2em;
  border-radius: 7px;
  font-weight: 400;
  background: #b8bbc1;
  color: #494b49;
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);
  transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
`;
