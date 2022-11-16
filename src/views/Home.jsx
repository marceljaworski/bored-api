import React, { useContext } from 'react';
import { BoredContext } from '../context/Bored';
import Tasks from '../components/Tasks';
import Filter from '../components/Filter'

function Home() {
  const { task, tasks, newTask, addTask } = useContext(BoredContext);
  const handlerNewTask = () => newTask();
  const handlerChoose = () => {
    addTask()
  }
  
  return (
    <main>
      <h3>We have a <Filter /> activity for you!</h3>
      <h1>{task.activity}</h1>
      <ul>
        <li>Participants: {task.participants}</li>
        <li>price: {task.price}</li>
      </ul>
      <button onClick={handlerChoose}>Choose</button>
      <span> or search for a </span>
      <button className='newTask' onClick={handlerNewTask}>New activity</button>
      
      {tasks.length > 0 && <Tasks />}
      
      
    </main>
  )
}

export default Home