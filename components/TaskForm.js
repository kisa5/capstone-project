import Form from "./Form";

export default function TaskForm({ onHandleAddTask, projectid }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newData = { task: data.task, id: crypto.randomUUID(), isDone: false };
    onHandleAddTask(projectid, newData);

    event.target.reset();
  }

  return (
    <Form
      onSubmit={handleSubmit}
      name="task"
      placeholder="add your task"
      label="task"
    />
  );
}
