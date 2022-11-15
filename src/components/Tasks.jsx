import React, {useContext} from 'react'
import { BoredContext } from '../context/Bored'

function Tasks() {
    const { tasks, reset } = useContext(BoredContext);
    const handlerReset = () => {
        reset()
    }
  return (
    <div>
        <h3>Do you have {tasks.length} planed activit{tasks.length > 1? "ies":"y"}</h3>
        <ul>
            {tasks.map((task, index) => (<li key={index}>{++index}.- {task.activity}</li>))}
        </ul>
        <button onClick={handlerReset}>reset</button>
    </div>
  )
}

export default Tasks