import {useState, useContext} from 'react';
import { BoredContext } from '../context/Bored';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faCircleCheck, faCircleDot } from '@fortawesome/free-solid-svg-icons';

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
            style={(done)? {textDecoration: "line-through", color: "green"}: {}}
            ><FontAwesomeIcon icon={(done)? faCircleCheck : faCircleDot} />  {task.activity}</li>
    </>
  )
}

export default Task