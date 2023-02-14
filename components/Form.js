import { useId } from "react";
import styled from "styled-components";
import { useState } from "react";
import Counter from "./Counter";

export default function Form({ onSubmit, name, placeholder }) {
  const id = useId();
  const [count, setCount] = useState(0);
  return (
    <StyledForm onSubmit={onSubmit}>
      <label htmlFor={id}></label>
      <Input
        id={id}
        type="text"
        maxLength="30"
        name={name}
        placeholder={placeholder}
        onChange={(event) => setCount(event.target.value.length)}
        autoComplete="off"
        required
      />
      <CounterWrapper>
        <Counter maxLength={30} counter={count} />
      </CounterWrapper>
      <SubmitButton type="submit">add</SubmitButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  position: fixed;
  bottom: 3.5em;
  width: 100%;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

const Input = styled.input`
  position: absolute;
  left: 1em;
  border-radius: 7px;
  border: 1px solid grey;
  font-size: 15px;
  width: 80%;
  margin: 5px;
  padding: 5px;
  color: #696969;
  border: 2.5px solid #94c3dd;
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 20%);
  word-wrap: break-word;
  word-break: break-all;
  &:focus {
    border: 3px solid #94c3dd;
    outline: none;
    box-shadow: 0 4px 14px 0 rgb(0 0 0 / 40%);
  }
`;

const CounterWrapper = styled.div`
  position: absolute;
  top: 0.3em;
  right: 6em;
  justify-content: center;
`;
const SubmitButton = styled.button`
  position: absolute;
  right: 1em;
  border: none;
  font-weight: 400;
  font-size: 20px;
  background-color: #94c3dd;
  color: white;
  font-size: 14px;
  width: 4.5em;
  margin: 5px;
  padding: 8px;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
`;
