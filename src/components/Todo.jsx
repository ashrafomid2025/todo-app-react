import { useEffect, useState } from "react";
import DisplayTodo from "./DisplayTodo";
export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function controlSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <div className="w-full">
      <div className="w-full p-4 text-center bg-amber-400 text-4xl text-white mb-4">
        <h1>TODO APP</h1>
      </div>
      <div className="w-[60%] mx-auto">
        <form className="" onSubmit={controlSubmit}>
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            placeholder="What is in your mind?"
            className="py-4 focus:outline-0  placeholder:text-gray-500 border-b w-[80%]"
          />
          <button className="py-4 animation2 rounded-tr-2xl rounded-br-2xl px-5 font-bold bg-blue-500 text-white ">
            Save
          </button>
        </form>
      </div>
      <div>
        {todos.map((item) => (
          <DisplayTodo todo={item} />
        ))}
      </div>
      <div className="bg-amber-400 absolute bottom-0 py-4 px-6 text-white flex justify-between w-full">
        <div className="text-center text-3xl font-bold">
          <h1>All Tasks : {todos.length}</h1>
        </div>
        <div className="text-center font-bold text-3xl">
          <h1>Completed Tasks:0</h1>
        </div>
      </div>
    </div>
  );
}
