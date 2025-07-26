import { useState } from "react";

export default function DisplayTodo({ todo, check, todos, setTodos }) {
  function handleChange(name) {
    const newTodos = todos.map((item) => {
      return item.todo === name
        ? { ...item, compeleted: !item.compeleted }
        : item;
    });
    setTodos(newTodos);
    console.log(newTodos);
  }

  function handleDelete(todo) {
    const newArray = todos.filter((item) => {
      return item.todo !== todo;
    });
    setTodos(newArray);
  }
  const changeStyle = check ? "done" : "";
  return (
    <div className="w-[60%] mx-auto flex p-2 border-b justify-between">
      <div className="w-[80%] text-2xl flex my-2  ">
        <input
          type="checkbox"
          onClick={() => handleChange(todo)}
          checked={check}
          className="form-checkbox accent-purple-500 h-4 mx-3.5 my-1.5  w-4 text-green-400"
        />
        <h1 className={changeStyle}>{todo}</h1>
      </div>
      <span
        className="material-icons p-4 cursor-pointer"
        onClick={() => handleDelete(todo)}
      >
        delete_forever
      </span>
    </div>
  );
}
