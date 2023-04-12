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
  };
  const addTask = () => {
    task.done = false;
    setTasks((current) => [...current, task]);
    newTask();
  };
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
  };
  const reset = () => {
    setTasks([])
    localStorage.removeItem("activities");
  };
  const toggle = ( key ) => {
    const _tasks = [...tasks]
    _tasks.forEach(task => {
      if(task.key == key) task.done = !task.done 
    });
    // _tasks[task.id].done = !task.done
    setTasks(_tasks)
  }; 
  const deleteOne = (key) => {
    const _tasks = tasks.filter( task => task.key !== key)
    setTasks( _tasks)
  };
  return (
    <BoredContext.Provider value={{ 
      task: task,
      tasks: tasks,
      newTask: newTask,
      addTask,
      reset,
      typeFilter,
      toggle,
      deleteOne
    }}>
      {children}
    </BoredContext.Provider>
  );
};

export default BoredProvider