export default function DisplayTodo(props) {
  return (
    <div className="w-[60%] mx-auto flex p-2 border-b justify-between">
      <div className="w-[80%] text-2xl flex my-1  ">
        <input
          type="checkbox"
          className="border p-5 font-black text-4xl rounded-full"
        />
        <h1 className="p-3 text-2xl font-black">{props.todo}</h1>
      </div>
      <span className="material-icons p-4">delete_forever</span>
    </div>
  );
}
