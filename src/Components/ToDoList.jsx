import { DndContext } from "@dnd-kit/core";
import { COLUMNS } from "./data/columns";
import Column from './Column/Column'
import DeleteZone from "./DeleteZone/DeleteZone";
import { useTodos } from "../Context/TodoContext";
import AddTask from "./AddTask/AddTask";
import { useCallback } from "react";

const containerStyles = {
  display: 'flex',
  width: '80%',
  gap: '2rem',
}

const ToDoList = () => {
  const { todos, setTodos } = useTodos();
  console.log(todos);

  const handleDragEnd = (e) => {
    // active = the task being dragged
    // over = the dropzone being dragged over
    const { active, over } = e;

    // If there is no dropzone, return
    if (!over) return;

    const todoId = active.id
    const newStatus = over.id;

    console.log('DraggableElementId: ' + todoId);
    console.log('Dropzone: ' + newStatus);

    // Update the status of the task
    // TODO: Add filter when task dropped over delete zone to completely remove from todos
    setTodos(prevTodos =>
      prevTodos.map(task =>
        task.id === todoId ? { ...task, status: newStatus } : task
      )
    );
  };

  const filteredTaskByColumn = useCallback((columnId) => (
    todos.filter((task) => task.status === columnId)
  ), [todos]);

  return (
    <DndContext
      onDragEnd={handleDragEnd}
    >
      {/* <div>Start here!</div> */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <AddTask />
        <div style={{ display: 'flex', gap: '2rem', width: '100%', justifyContent: 'center' }}>
          {COLUMNS.map((column) => (
            <Column
              key={column.id}
              column={column}
              todos={filteredTaskByColumn(column.id)}
            />
          ))}
        </div>
        <DeleteZone />
      </div>
    </DndContext>
  )
};

export default ToDoList;
