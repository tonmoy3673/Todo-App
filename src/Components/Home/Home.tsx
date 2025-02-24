import AddTodo from "../AddTodo/AddTodo";
import TodoList from "../TodoList/TodoList";

const Home = () => {
  return (
    <div>
      <main>
        <h1 className="text-center text-2xl md:text-3xl font-bold text-gray-600 py-10 mt-5">
          Todo App
        </h1>
        <AddTodo />
        <TodoList />
      </main>
    </div>
  );
};

export default Home;
