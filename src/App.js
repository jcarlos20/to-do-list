import './App.css';
import ToDoList from './Components/ToDoList';
import { ProvideTodos } from './Context/TodoContext';

function App() {
  // INITIAL_TODOS moved to TodoContext.jsx 
  return (
    <ProvideTodos>
      <ToDoList />
    </ProvideTodos>
  );
}

export default App;
