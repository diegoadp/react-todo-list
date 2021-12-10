import React, { useState } from "react";

type Props = {
  addTask: (name: string) => void;
};

function Form(props: Props) {
  const [name, setName] = useState("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.addTask(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        <label htmlFor="new-todo-input">What needs to be done?</label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        name="text"
        value={name}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
