import React from "react";
import ProjectCard from "components/ProjectItem";
import Logo from "components/svg/logo.svg";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export default function HomePage() {
  return (
    <>
      <UniversalStyle />
      <Header>
        <Logo alt="logo" height={50} width={50} />
        <Title>my projects</Title>
      </Header>
      <main>
        <ProjectCard />
      </main>
    </>
  );
}

const UniversalStyle = createGlobalStyle`
* {
  background-color: #f7f7f7;
}`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-cpntent: center;
  align-items: center;
  padding: 10px;
`;

const Title = styled.h1`
position: absolute;
  top 40px;
  left: 15px;
  font-style: bold;
  font-size: 17px;
`;
