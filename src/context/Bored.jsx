import React, { useState, useEffect , createContext } from 'react';
import axios from 'axios';
export const BoredContext = createContext();


function BoredProvider({ children }) {
  const [task, setTask] = useState({})
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("activities")) || [])
  
  useEffect(() => {
    newTask()
  }, []);
  
  const newTask = async () => {
    try {
      const response = await axios.get("https://www.boredapi.com/api/activity/");
      if (response.status === 200) {
        setTask(response.data)        
      }
    }catch (errors) {
      console.log(errors)
    } 
  }
  const addTask = () => {
    task.done = false;
    task.id = tasks.length;
    setTasks((current) => [...current, task])
  }
  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(tasks));
  }, [tasks]);
  const typeFilter = async (type) => {
    try {
      const response = await axios.get(`https://www.boredapi.com/api/activity?type=${type}`);
      if (response.status === 200) {
        setTask(response.data)           
      }
    }catch (errors) {
      console.log(errors)
    } 
  }
  const reset = () => {
    setTasks([])
    localStorage.removeItem("activities");
  }
  const toggle = ( task ) => {
    const _tasks = [...tasks]
    _tasks[task.id].done = !task.done
    
    setTasks(_tasks)
  } 
  return (
    <BoredContext.Provider value={{ 
      task: task,
      tasks: tasks,
      newTask: newTask,
      addTask,
      reset,
      typeFilter,
      toggle
    }}>
      {children}
    </BoredContext.Provider>
  );
}

export default BoredProvider