import { createContext, ReactNode, useContext, useState } from "react";

export type TodoProviderProps = {
  children: ReactNode;
};

export type Todo = {
  id: string;
  task: string;
  isCompleted: boolean;
  createdAt: Date;
};

export type TodoValue = {
  todos: Todo[];
  handleAddTodo: (task: string) => void;
};

export const TodoContext = createContext<TodoValue | null>(null);

export const ContextProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAddTodo = (task: string) => {
    setTodos((prev: Todo[]) => {
      const newTodo: Todo[] = [
        {
          id: Math.random().toString(),
          task: task,
          isCompleted: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      console.log(newTodo);
      return newTodo;
    });
  };
  return (
    <TodoContext.Provider value={{ todos, handleAddTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const todoConsumer = useContext(TodoContext);
  if (!todoConsumer) {
    throw new Error("Todo Context is not Working!!");
  }
  return todoConsumer;
};
