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

  function handleTaskCheckbox(taskId, projectId) {
    setProjects(
      projects.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            tasks: project.tasks.map((task) => {
              if (task.id === taskId) {
                return {
                  ...task,
                  isDone: !task.isDone,
                };
              } else {
                return task;
              }
            }),
          };
        } else {
          return project;
        }
      })
    );
  }

  function handleDeleteProject(id) {
    setProjects((oldProjects) =>
      oldProjects.filter((project) => project.id !== id)
    );
  }

  function handleDeleteTask(taskId, projectId) {
    setProjects(
      projects.map((e) => {
        if (e.id === projectId) {
          return {
            ...e,
            tasks: e.tasks.filter((task) => task.id !== taskId),
          };
        } else {
          return e;
        }
      })
    );
  }

  function handleNote(data, id) {
    setProjects(
      projects.map((project) => {
        if (project.id === id) {
          return {
            ...project,
            notes: data,
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
        handleDeleteProject={handleDeleteProject}
        handleTaskCheckbox={handleTaskCheckbox}
        handleDeleteTask={handleDeleteTask}
        handleNote={handleNote}
      />
    </>
  );
}

project: [
  { title: "", slug: "", id: "", tasks: [{ task: "", id: "", isDone: false }] },
];
