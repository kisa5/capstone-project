import Form from "./Form";

export default function ProjectForm({ addProject }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newData = {
      ...data,
      slug: data.title,
      id: crypto.randomUUID(),
      tasks: [],
    };

    addProject(newData);

    event.target.reset();
  }

  return (
    <Form onSubmit={handleSubmit} name="title" placeholder="add your project" />
  );
}
