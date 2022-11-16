import React, { useContext } from 'react';
import { BoredContext } from '../context/Bored';
import Tasks from '../components/Tasks';
import Filter from '../components/Filter'

function Home() {
  const { task, tasks } = useContext(BoredContext);
  
  return (
    <main>
      <h2>We have a {task.type} activity for you!</h2>
      <h1>{task.activity}</h1>
      <ul>
        <li>Participants: {task.participants}</li>
        <li>price: {task.price}</li>
      </ul>
      <Filter />
      {tasks.length > 0 && <Tasks />}
      
      
    </main>
  )
}

export default Home