import React, { useContext } from 'react';
import { BoredContext } from '../context/Bored';
function Home() {
  const { task } = useContext(BoredContext);
  
  return (
    <main>
      <h2>We have a {task.type} activity for you!</h2>
      <h1>{task.activity}</h1>
      <ul>
        
        <li>Participants: {task.participants}</li>
        <li>price: {task.price}</li>
      </ul>
      
    </main>
  )
}

export default Home