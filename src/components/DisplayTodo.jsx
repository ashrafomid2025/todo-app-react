import { useState } from "react";

export default function DisplayTodo({ todo, check, todos, setTodos }) {
  function handleChange(name) {
    console.log(name);
    const newTodos = todos.map((item) => {
      return item.todo === name
        ? { ...item, compeleted: !item.compeleted }
        : item;
    });
    setTodos(newTodos);
    console.log(newTodos);
  }
  const changeStyle = check ? "done" : "";
  return (
    <div className="w-[60%] mx-auto flex p-2 border-b justify-between">
      <div className="w-[80%] text-2xl flex my-1  ">
        <input
          type="checkbox"
          className="form-checkbox h-4 my-5 w-4 text-green-400"
        />
        <h1 className={changeStyle} onClick={() => handleChange(todo)}>
          {todo}
        </h1>
      </div>
      <span className="material-icons p-4">delete_forever</span>
    </div>
  );
}
