import React,{useState} from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newtask = {id: Date.now(), text, completed: false}
    setTasks([newtask, ...tasks]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id,newTask) => {
    setTasks(tasks.map(task => task.id === id ? {...task, text: newTask} : task ));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm addTask = {addTask}/>
      <TaskList 
        tasks = {tasks}
        deleteTask = {deleteTask}
        updateTask = {updateTask}
      />
    </div>
  );
}

export default App;
