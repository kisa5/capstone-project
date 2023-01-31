import { useId } from "react";
import styled from "styled-components";

export default function Form({ onSubmit, name, placeholder }) {
  const id = useId();
  return (
    <Form onSubmit={onSubmit}>
      <label htmlFor={id}></label>
      <Input
        id={id}
        type="text"
        name={name}
        placeholder={placeholder}
        required
      />
      <SubmitButton type="submit">add</SubmitButton>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  align-items: center;
  padding-left: 15px;
`;

const Input = styled.input`
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
