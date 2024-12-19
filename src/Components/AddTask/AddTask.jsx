import React, { useState } from 'react';
import { useTodos } from '../../Context/TodoContext';

const AddTask = () => {
  const [taskName, setTaskName] = useState('');
  const { onAddTodo } = useTodos();

  const handleAddTask = () => {
    if (taskName.trim()) {
      onAddTodo(taskName);
      setTaskName('');
    }
  };

  return (
    <div style={{ margin: '1rem' }}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a new task"
        style={{ marginRight: '1rem' }}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;