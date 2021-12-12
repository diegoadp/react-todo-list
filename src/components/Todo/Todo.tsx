import React, { useState } from "react";
import { Item } from "../../types/Item";

type Props = {
  toggleTaskCompleted: (id: string) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string, newName: string) => void;
};

function Todo(props: Item & Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setIsEditing(false);
  };

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={props.id}>New name for {props.name}</label>
        <input
          id={props.id}
          type="text"
          value={newName}
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={() => setIsEditing(false)}>
          Cancel
          <span>renaming {props.name}</span>
        </button>
        <button>
          Save
          <span>new name for {props.name}</span>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div>
      <div>
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.done}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label htmlFor={props.id}>{props.name}</label>
      </div>
      <div>
        <button onClick={() => setIsEditing(true)}>
          Edit <span>{props.name}</span>
        </button>
        <button onClick={() => props.deleteTask(props.id)}>
          Delete <span>{props.name}</span>
        </button>
      </div>
    </div>
  );

  return <li>{isEditing ? editingTemplate : viewTemplate}</li>;
}

export default Todo;
