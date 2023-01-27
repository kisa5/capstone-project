import styled from "styled-components";
export default function AddProject({ addProject }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const newData = { ...data, slug: data.title };
    console.log(data);
    addProject(newData);

    event.target.reset();
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="project"></label>
        <ProjectInput
          id="project"
          type="text"
          name="title"
          placeholder="+ add new project"
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

const ProjectInput = styled.input`
  width: 85%;
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid grey;
  font-size: 15px;
  word-wrap: break-word;
  word-break: break-all;
`;

const SubmitButton = styled.button`
  position: absolute;
  right: 16%;
  background-color: lightgray;
  border: none;
  padding: 7px;
  border-radius: 5px;
`;
