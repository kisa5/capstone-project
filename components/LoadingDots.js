import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 15em 0 0 7em;
`;

const Dot = styled.span`
  display: inline-block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: #94c3dd;

  animation: ${fadeIn} 1s ease-in-out infinite;
  animation-delay: ${(props) => props.delay || 0}s;
`;

const LoadingMessage = styled.p`
  margin: 0;
  padding-right: 0.5em;
  font-size: 22px;
  color: #94c3dd;
`;

export default function LoadingDots() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length >= 3 ? "" : prevDots + "."));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <LoadingMessage>Loading</LoadingMessage>
      <Dot delay={0} />
      <Dot delay={0.2} />
      <Dot delay={0.4} />
    </Wrapper>
  );
}
