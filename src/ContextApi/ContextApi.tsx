import { createContext, ReactNode, useContext, useState } from "react";

export type ContextProviderProps = {
  children: ReactNode;
};

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};
export type TodoContext = {
  todos: Todo[];
  handleAddTodo: (task: string) => void;
};

export const ContextApi = createContext<TodoContext | null>(null);

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAddTodo = (task: string) => {
    setTodos((prev) => {
      const newTodo: Todo[] = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      console.log(newTodo);
      return newTodo;
    });
  };

  return (
    <ContextApi.Provider value={{ todos, handleAddTodo }}>
      {children}
    </ContextApi.Provider>
  );
};

export const useTodos = () => {
  const todoConsumer = useContext(ContextApi);
  if (!todoConsumer) {
    throw new Error("UseTodos used in outside of Provider");
  }
  return todoConsumer;
};
