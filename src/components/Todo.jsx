import { useEffect, useState } from "react";
import DisplayTodo from "./DisplayTodo";
import Header from "./Header";
export default function Todo() {
  const [todo, setTodo] = useState({ todo: "", compeleted: false });
  const [todos, setTodos] = useState([]);
  function controlSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ todo: "", compeleted: false });
  }
  const filterA = todos.filter((item) => {
    return item.compeleted === true;
  });
  return (
    <div className="w-full">
      <Header />
      <div className="w-[60%] mx-auto">
        <form className="" onSubmit={controlSubmit}>
          <input
            value={todo.todo}
            onChange={(e) =>
              setTodo({ todo: e.target.value, compeleted: false })
            }
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
          <DisplayTodo
            todo={item.todo}
            check={item.compeleted}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
      <div className="bg-purple-500 absolute bottom-0 py-4 px-6 text-white flex justify-between w-full">
        <div className="text-center text-3xl font-bold">
          <h1>All Tasks : {todos.length}</h1>
        </div>
        <div className="text-center font-bold text-3xl mx-4">
          <h1>Completed Tasks:{filterA.length}</h1>
        </div>
      </div>
    </div>
  );
}
