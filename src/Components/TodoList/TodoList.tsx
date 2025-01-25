import { useTodo } from "../../ContextApi/ContextApi";

const TodoList = () => {
  const { todos } = useTodo();
  const allTodos = todos;
  return (
    <div>
      <div>
        <h2 className="text-center text-2xl font-semibold text-gray-600 py-10">
          {" "}
          All Todo List : <span className="text-3xl">{allTodos.length} </span>
        </h2>
      </div>
      {/* ============== Todo List ============ */}
      <div>
        {allTodos.map((todo) => {
          return (
            <li
              key={todo?.id}
              className="flex flex-row space-x-8 items-center justify-center"
            >
              <input type="checkbox" />
              <label>{todo?.task}</label>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
