import { useState } from "react";

const AddTodo = () => {
  const [todos, setTodos] = useState("");

  const handleForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    setTodo("");

    console.log("connect");
  };
  return (
    <div>
      <form
        onSubmit={handleForm}
        className="flex items-center justify-center space-x-8"
      >
        <div>
          <label htmlFor="todo" className="text-xl text-gray-600 font-semibold">
            Add Todo :{" "}
          </label>
          <input
            id="todo"
            className="bg-gray-500 placeholder:text-white px-2 py-1 rounded-md"
            type="text"
            value={todos}
            placeholder="Enter Todo Item"
            onChange={(e) => setTodos(e.target.value)}
          />
        </div>
        <div>
          <button
            className="cursor-pointer bg-gray-600 text-white py-1 px-2 rounded-md"
            type="submit"
          >
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
