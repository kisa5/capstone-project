import styled from "styled-components";

export default function TaskCard() {
  return (
    <StyledList>
      {selectedProject.tasks.map((task) => (
        <TaskItem key={task.id}>{task.task}</TaskItem>
      ))}
    </StyledList>
  );
}
const BackButton = styled.div`
  margin: 5px;
`;

const StyledList = styled.ul`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: start;
  padding-left: 13px;
  margin: 0;
`;

const TaskItem = styled.li`
  background-color: lightgrey;
  padding: 10px;
  margin: 5px;
  list-style-type: none;
  width: 85%;
  border-radius: 5px;
  font-size: 15;
`;
