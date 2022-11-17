import React, { useContext } from 'react';
import { BoredContext } from '../context/Bored';

function Tasks() {
    const { tasks } = useContext(BoredContext);
   
  return (
    <div>
        <h3>You have {tasks.length} planed activit{tasks.length > 1? "ies":"y"}</h3>
        <ul>
            {tasks.map((task, index) => (<li key={index}>{++index}.- {task.activity}</li>))}
        </ul>
        
    </div>
  )
}

export default Tasks