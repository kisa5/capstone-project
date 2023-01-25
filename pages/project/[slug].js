import Link from "next/link";
import { useRouter } from "next/router";
import { projects } from "@/lib/db.js";
import styled from "styled-components";

export default function Tasks() {
  const router = useRouter();
  const { slug } = router.query;

  const projectIndex = projects.findIndex((project) => project.slug === slug);

  const project = projects[projectIndex];

  if (!project) {
    return null;
  }

  const { title, tasks } = project;

  return (
    <>
      <h1>{title}</h1>
      <ul>
        {tasks.map(({ task }) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </>
  );
}
