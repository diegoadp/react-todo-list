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
        <label className="lead mr-3" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input
          id={props.id}
          type="text"
          value={newName}
          required
          onChange={handleChange}
        />
      </div>
      <div className="btn-group" role="group">
        <button className="btn btn-primary" onClick={() => setIsEditing(false)}>
          Cancel
        </button>
        <button className="btn btn-primary">Save</button>
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
        <label className="lead ml-3" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group" role="group">
        <button className="btn btn-primary" onClick={() => setIsEditing(true)}>
          Edit
        </button>
        <button
          className="btn btn-primary"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );

  return (
    <li className="list-group-item">
      {isEditing ? editingTemplate : viewTemplate}
    </li>
  );
}

export default Todo;
