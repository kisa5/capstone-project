import GlobalStyle from "@/styles";
import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [projects, setProjects] = useLocalStorageState("project", {
    defaultValue: [],
  });

  function addProject(newProject) {
    setProjects([newProject, ...projects]);
  }

  function handleAddTask(id, newTask) {
    console.log(newTask);
    setProjects(
      projects.map((project) => {
        if (project.id === id) {
          return {
            ...project,
            tasks: [...project.tasks, newTask],
          };
        } else {
          return project;
        }
      })
    );
  }

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component
        {...pageProps}
        addProject={addProject}
        onHandleAddTask={handleAddTask}
        projects={projects}
      />
    </>
  );
}
