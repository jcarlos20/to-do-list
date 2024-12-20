import React, { createContext, useCallback, useContext, useState } from 'react';
import { TaskStatus } from '../Components/data/taskStatus';

const TodosContext = createContext({});

const INITIAL_TODOS = [
  { id: 1, text: "buy milk", status: TaskStatus.TODO },
  { id: 2, text: "wash bike", status: TaskStatus.IN_PROGRESS },
  { id: 3, text: "do the budget", status: TaskStatus.DONE },
  { id: 4, text: "call jane", status: TaskStatus.TODO },
];

export const ProvideTodos = React.memo(({ children }) => {
  const Todos = useProvideTodos();
  return <TodosContext.Provider value={Todos}>{children}</TodosContext.Provider>;
});

export const useTodos = () => {
  return useContext(TodosContext);
};

const useProvideTodos = () => {
  const [todos, setTodos] = useState(INITIAL_TODOS);

  const onAddTodo = (taskName) => {
    const newTask = {
      id: todos.length + 1,
      text: taskName,
      status: TaskStatus.TODO,
    };
    setTodos(prevTodos => [...prevTodos, newTask]);
  };

  return {
    todos,
    setTodos,
    onAddTodo,
  };
};
