import React, { useState } from "react";
import Todo from "./components/Todo/Todo";
import Form from "./components/Form/Form";
import FilterButton from "./components/FilterButton/FilterButton";
import { DATA } from "./utils/mockData";
import { Item } from "./types/Item";

const FILTER_MAP: { [key: string]: (prop: Item) => boolean } = {
  All: () => true,
  Active: (task) => !task.done,
  Done: (task) => task.done,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App() {
  const [tasks, setTasks] = useState(DATA);
  const [filter, setFilter] = useState("All");

  const toggleTaskCompleted = (id: string) => {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, done: !task.done };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };

  const addTask = (name: string) => {
    const newTask = {
      id: "todo-" + Math.floor(Date.now() * Math.random()),
      name: name,
      done: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: string) => {
    const remainingTasks = tasks.filter((task) => {
      return id !== task.id;
    });
    setTasks(remainingTasks);
  };

  const editTask = (id: string, newName: string) => {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      } else {
        return task;
      }
    });
    setTasks(editedTaskList);
  };

  const taskList = tasks.filter(FILTER_MAP[filter]).map((task) => {
    return (
      <Todo
        key={task.id}
        id={task.id}
        name={task.name}
        done={task.done}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    );
  });

  const filterList = FILTER_NAMES.map((name) => {
    return (
      <FilterButton
        key={name}
        name={name}
        isPressed={name === filter}
        setFilter={setFilter}
      />
    );
  });

  const tasksNoun = taskList.length === 1 ? "tasks" : "task";
  const tasksRemaining = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>React Todo List</h1>
      <Form addTask={addTask} />
      {filterList}
      <h2>{tasksRemaining}</h2>
      <ul>{taskList}</ul>
    </div>
  );
}

export default App;
