import { useDroppable } from '@dnd-kit/core';
import Task from '../Task/Task';

const Column = ({ column, todos }) => {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  console.log('cols', todos)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', border: '2px solid limegreen', width: '200px', padding: '10px', justifyContent: 'center', alignItems: 'center' }}>
      <div ref={setNodeRef}>
        <h3>{column.name}</h3>
        {todos.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default Column;
