import React, { useState } from "react";
import Todo from "./components/Todo/Todo";
import Form from "./components/Form/Form";
import FilterButton from "./components/FilterButton/FilterButton";
import { DATA } from "./utils/mockData";

function App() {
  const [task, setTask] = useState(DATA)

  const taskList = task.map((task) => {
    return (
      <Todo key={task.id} id={task.id} name={task.name} done={task.done} />
    );
  });

  const addTask=(name: string)=>{
    const newTask = {id: "todo-" + Math.floor(Date.now() * Math.random()), name: name, done:false}
    setTask([...task, newTask])
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>React Todo List</h1>
      <Form addTask={addTask} />
      <div>
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2>3 tasks remaining</h2>
      <ul>{taskList}</ul>
    </div>
  );
}

export default App;
