import styled from "styled-components";

export default function Counter({ maxLength, counter }) {
  return (
    <Wrapper>
      {counter < maxLength && counter >= 0 ? (
        <Count> {maxLength - counter}</Count>
      ) : (
        <Count>0</Count>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 12%;
  right: 21%;
  justify-content: center;
`;

const Count = styled.p`
  font-size: 0.7em;
  color: #696969;
`;
