import React, {useState} from "react";
import './App.css';

import Navbar from "./components/Navbar/Navbar"
import TaskList from "./components/TaskList/TaskList"

let idAcc = 0;
const generateId = () => {
  idAcc += 1;
  return idAcc;
}
export default function App() {
  const {tasks, setTasks} = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id:generateId(),
      title,
      state
    }
    setTasks((existingTasks) => {
      return [...existingTasks, ...newTask]
    })
  }
  const updateTask = ( id, title, state ) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return {...task, title, state};
        } else {
          return task;
        }
      })
    })
  }
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList title="Pendente"
        onAddTask={addTask}
        taskState="Pendente"
        tasks={tasks.filter((t) => t.state === "Pendente")}
        onTaskUpdate={updateTask}
        />
        <TaskList title="Fazendo"
        onAddTask={addTask}
        taskState="Fazendo"
        tasks={tasks.filter((t) => t.state === "Fazendo")}
        onTaskUpdate={updateTask}
        />
        <TaskList title="Completo"
        onAddTask={addTask}
        taskState="Completo"
        tasks={tasks.filter((t) => t.state === "Completa")}
        onTaskUpdate={updateTask}
        />
      </div>
    </div>
  );
}

