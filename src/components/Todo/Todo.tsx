import React from "react";
import { Item } from "../../types/Item";

function Todo(props: Item) {
  return (
    <li>
      <div>
        <input id={props.id} type="checkbox" defaultChecked={props.done} />
        <label htmlFor={props.id}>{props.name}</label>
      </div>
      <div>
        <button type="button">Edit</button>
        <button type="button">Delete</button>
      </div>
    </li>
  );
}

export default Todo;
