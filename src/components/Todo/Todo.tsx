import React from "react";
import { Item } from "../../types/Item";

type Props = {
  toggleTaskCompleted: (id: string) => void;
  deleteTask: (id: string) => void;
};

function Todo(props: Item & Props) {
  return (
    <li>
      <div>
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.done}
          onChange={() => {
            props.toggleTaskCompleted(props.id);
          }}
        />
        <label htmlFor={props.id}>{props.name}</label>
      </div>
      <div>
        <button type="button">Edit</button>
        <button
          type="button"
          onClick={() => {
            props.deleteTask(props.id);
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default Todo;
