import React, {useContext} from 'react'
import { BoredContext } from '../context/Bored'

function Tasks() {
    const { tasks } = useContext(BoredContext);
  return (
    <div>
        <h3>Do you have {tasks.length} planed activity{tasks.length > 1? "s":""}</h3>
        <ul>
            {tasks.map((task, index) => (<li>{++index}.- {task.activity}</li>))}
        </ul>
    </div>
  )
}

export default Tasks