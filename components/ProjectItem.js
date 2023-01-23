import React from "react";
import { titles } from "lib/db.json";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

export default function ProjectCard() {
  return (
    <>
      <ProjectList>
        {titles.map((title) => (
          <ProjectItem key={uuidv4()}>{title.title}</ProjectItem>
        ))}
      </ProjectList>
    </>
  );
}

const ProjectList = styled.ul`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: start;
  padding-left: 13px;
`;

const ProjectItem = styled.li`
  background-color: lightgrey;
  padding: 10px;
  margin: 5px;
  list-style-type: none;
  width: 85%;
  border-radius: 5px;
  font-size: 15;
`;
