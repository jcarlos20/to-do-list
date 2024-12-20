import { useDroppable } from '@dnd-kit/core';
import { useTodos } from '../../Context/TodoContext';
import { TaskStatus } from '../data/taskStatus';

const DeleteZone = () => {
  const { todos } = useTodos();
  const { setNodeRef } = useDroppable({
    id: 'deleted',
  });

  const deletedTasks = todos.filter(task => task.status === TaskStatus.DELETED);

  return (
    <>
      <div style={{ width: '60%', display: 'flex', backgroundColor: '#FF7F7F', padding: '10px', marginTop: '30px', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <div ref={setNodeRef}>
          <h3>Trash Zone</h3>
        </div>
      </div>
      <div styles={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
        <h3>Deleted tasks: </h3>
        {deletedTasks.map(task => (
          <p key={task.id} style={{ margin: '5px', padding: '5px', backgroundColor: 'white', border: '1px solid red' }}>
            {task.text}
          </p>
        ))}
      </div>
    </>
  );
}

export default DeleteZone;
