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
        required
      />
      <CounterWrapper>
        <Counter maxLength={30} counter={count} />
      </CounterWrapper>
      <SubmitButton type="submit">+</SubmitButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  position: fixed;
  bottom: 5px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const Input = styled.input`
  width: 85%;
  margin: 5px;
  padding: 10px;
  border-radius: 7px;
  border: 1px solid grey;
  font-size: 15px;
  word-wrap: break-word;
  word-break: break-all;
  border: none;
  font-size: 14px;
  color: #696969;
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);
`;

const CounterWrapper = styled.div`
  position: absolute;
  top: 12%;
  right: 21%;
  justify-content: center;
`;
const SubmitButton = styled.button`
  position: absolute;
  top: 25%;
  right: 11%;
  border: none;
  height: 25px;
  width: 35px;
  font-weight: 400;
  font-size: 20px;
  background-color: white;
  color: #696969;
`;
