import { useState } from "react";
import styled from "styled-components";
import Logo from "@/public/Logo.svg";

export default function HomePage({}) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }
  return (
    <>
      <PageWrapper>
        <Wrapper>
          <Logo />
          <StyledLink
            href={`/ProjectPage`}
            style={{ textDecoration: "none", color: "#94c3dd" }}
            onClick={handleClick}
            isClicked={isClicked}
          >
            Welcome
          </StyledLink>
        </Wrapper>
      </PageWrapper>
    </>
  );
}
const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #94c3dd;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2em;
  width: 7em;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 15%);
  background-color: ${(props) => (props.isClicked ? "#ccc" : "#fff")};
`;
