import React, { useContext } from 'react';
import { BoredContext } from '../context/Bored';
function Home() {
  const { task } = useContext(BoredContext);
  
  return (
    <main>
      <h1>{task.activity}</h1>
      <ul>
        <li>Type: {task.type}</li>
        <li>Participants: {task.participants}</li>
        <li>price: {task.price}</li>
      </ul>
      
    </main>
  )
}

export default Home