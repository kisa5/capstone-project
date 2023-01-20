import React from "react";
import ProjectItem from "components/ProjectItem";
import Logo from "components/svg/logo.svg";

export default function HomePage() {
  return (
    <>
      <header>
        <Logo alt="logo" height={50} width={50} />
        <h1>my projects</h1>
      </header>
      <main>
        <ProjectItem />
      </main>
    </>
  );
}
