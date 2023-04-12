import {useState, useContext} from 'react';
import { BoredContext } from '../context/Bored';

function Task({task}) {
    const { toggle } = useContext(BoredContext);
    const [ done, setDone ] = useState(task.done)
    const handlerDone = () => {
        setDone(!done);
        toggle(task);
    }
  return (
    <>
        <li className='tasks-list__item'
            onClick={handlerDone} 
            style={(done)? {textDecoration: "line-through", color: "red"}: {}}
            >{task.activity}</li>
    </>
  )
}

export default Task