import styled from "styled-components";

export default function Counter({ maxLength, counter }) {
  return (
    <div>
      {counter < maxLength && counter >= 0 ? (
        <Count> {maxLength - counter}</Count>
      ) : (
        <Count>0</Count>
      )}
    </div>
  );
}

const Count = styled.p`
  font-size: 0.7em;
  color: #a4a8a4;
`;
