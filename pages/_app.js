import GlobalStyle from "@/styles";
import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [project, setProject] = useLocalStorageState("project", {
    defaultValue: [],
  });

  function addProject(projectname) {
    setProject([projectname, ...project]);
  }

  const [task, setTask] = useLocalStorageState("task", {
    defaultValue: [],
  });
  function addTask(taskname) {
    setTask([taskname, ...task]);
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
        project={project}
        addTask={addTask}
        task={task}
      />
    </>
  );
}
