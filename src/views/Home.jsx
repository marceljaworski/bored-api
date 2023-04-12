import React, { useContext } from 'react';
import { BoredContext } from '../context/Bored';
import Tasks from '../components/Tasks';
import Filter from '../components/Filter'

function Home() {
  const { task, tasks, newTask, addTask } = useContext(BoredContext);
  const handlerNewTask = () => newTask();
  const handlerChoose = () => addTask();
  
  
  return (
    <main>
      <h3>We have a <Filter /> activity for you!</h3>
      <h1>{task.activity}</h1>
      <section>
        <ul>
          <li><a href={task.link} target='_blank'>{task.link}</a></li>
          <li>type: {task.type}</li>
          <li>Participants: {task.participants}</li>
        </ul>
        <div>
          <button onClick={handlerChoose}>Choose</button>
          <span> or search for a </span>
          <button className='newTask' onClick={handlerNewTask}>New activity</button>
        </div>
        {tasks.length > 0 && <Tasks />}
      </section>
    
      <footer><p>&copy; 2023 </p><a href='https://marceljaworski.de/'>marceljaworski.de</a></footer>
    </main>
  )
}

export default Home