import React, { useContext } from 'react';
import { BoredContext } from '../context/Bored';

function Tasks() {
  const { tasks, reset } = useContext(BoredContext);
  const handlerDone = () => {
    
  }
  const handlerReset = () => {
    reset()
  }
  
  return (
    <div className='tasks-container'>
      <h3>You have {tasks.length} planed activit{tasks.length > 1? "ies":"y"}</h3>
      <ul>
          {tasks.map((task, index) => (<li key={index}> {task.activity}</li>))}
      </ul>
      <button className='red' onClick={handlerReset}>reset</button>
        
    </div>
  )
}

export default Tasks