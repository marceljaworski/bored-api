import { useContext} from 'react';
import { BoredContext } from '../context/Bored';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faCircleCheck, faCircleDot, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

function Task({task}) {
    const { toggle, deleteOne } = useContext(BoredContext);
    const handleDone = () => {
        toggle(task.key);
    };
    const handleDelete = () => {
        deleteOne(task.key);
    }
  return (
    <div className='tasks-list__item-container'>
        
        <li className='tasks-list__item'
            onClick={handleDone} 
            style={(task.done)? {textDecoration: "line-through", color: "red"}: {}}>
                <FontAwesomeIcon style={(task.done)? {color:"rgb(43, 226, 198)"}: {}} icon={(task.done)? faCircleCheck : faCircleDot} />
                {task.activity}</li>
        {task.done&&<FontAwesomeIcon onClick={handleDelete} className='delete-item' icon={faDeleteLeft} />}
            
            
    </div>
  )
}

export default Task