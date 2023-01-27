import styled from "styled-components";

export default function AddTask({ addTask }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    addTask(data);

    event.target.reset();
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="task"></label>
        <TaskInput
          id="task"
          type="text"
          name="task"
          placeholder="+ add new task"
          required
        />
        <SubmitButton type="submit">add</SubmitButton>
      </Form>
    </>
  );
}

const Form = styled.form`
  display: flex;
  align-items: center;
  padding-left: 15px;
`;

const TaskInput = styled.input`
  width: 85%;
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid grey;
  font-size: 15px;
`;

const SubmitButton = styled.button`
  position: absolute;
  right: 16%;
  background-color: lightgray;
  border: none;
  padding: 7px;
  border-radius: 5px;
`;
