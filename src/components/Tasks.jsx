import React, {useContext} from 'react'
import { BoredContext } from '../context/Bored'

function Tasks() {
    const { tasks } = useContext(BoredContext);
    console.log(tasks)
  return (
    <div>
        <p>Do you have {tasks.length} planed activity{tasks.length > 1? "s":""}</p>
        <ul>
            {tasks.map((task, index) => (<li>{++index}.- {task.activity}</li>))}
        </ul>
        
    </div>
  )
}

export default Tasks