import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  background-color: cream;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
`;

const Input = styled.input`
  width: 300px;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
`;

const Button = styled.button`
  height: 40px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.danger ? "darkred" : "darkgreen")};
  }
  background-color: ${(props) => (props.danger ? "red" : "green")};
  color: white;
  padding: 0, 6rem 1.2 rem;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  width: auto;
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 0.7rem;
  margin-bottom: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ddd;
  font-size: 20px;
`;

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleAddTask() {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  }

  function handleDelete(index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
    <>
      <Container>
        <Title>Styled Todo List</Title>
        <Input
          type="text"
          value={task}
          placeholder="Enter a task"
          onChange={(e) => setTask(e.target.value)}
        />
        <Button onClick={handleAddTask}>Add</Button>

        <TaskList>
          {tasks.map((item, index) => (
            <TaskItem key={index}>
              {item}
              <Button danger onClick={() => handleDelete(index)}>
                Delete
              </Button>
            </TaskItem>
          ))}
        </TaskList>
      </Container>
    </>
  );
}
