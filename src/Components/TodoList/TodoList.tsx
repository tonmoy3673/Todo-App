import { useTodo } from "../../ContextApi/ContextApi";

const TodoList = () => {
  const { todos, toggleTodo } = useTodo();
  const allTodos = todos;
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <h2 className="text-center text-2xl font-semibold text-gray-600 py-10">
          {" "}
          All Todo List : <span className="text-3xl">{allTodos.length} </span>
        </h2>
      </div>
      {/* ============== Todo List ============ */}
      <div className="">
        {allTodos.map((todo) => {
          return (
            <li key={todo?.id} className="list-none space-x-4 flex mb-2">
              <input
                type="checkbox"
                id={`todo-${todo.id}`}
                checked={todo?.isCompleted}
                onChange={() => toggleTodo(todo?.id)}
              />
              <label id={`todo-${todo.id}`}>{todo?.task}</label>

              {todo?.isCompleted && (
                <div>
                  <button className="rounded-lg bg-red-500 text-xs text-white px-2 py-1 cursor-pointer">
                    Delete
                  </button>
                </div>
              )}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
