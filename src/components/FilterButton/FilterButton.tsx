import React from "react";

type Props = {
  name: string;
  isPressed: boolean;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

function FilterButton(props: Props) {
  return (
    <button
      type="button"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span>Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;
