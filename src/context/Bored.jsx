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
      const response = await axios.get("http://www.boredapi.com/api/activity/");
      if (response.status === 200) {
        setTask(response.data)           
      }
    }catch (errors) {
      console.log(errors)
    } 
  }
  const addTask = () => {
    // let value
    setTasks((current) => [...current, task])
    
  }
  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(tasks));
  }, [addTask]);
    
  const reset = () => {
    setTasks([])
    localStorage.removeItem("activities");
  }
  return (
    <BoredContext.Provider value={{ 
      task: task,
      tasks: tasks,
      newTask: newTask,
      addTask,
      reset,
    }}>
      {children}
    </BoredContext.Provider>
  );
}

export default BoredProvider