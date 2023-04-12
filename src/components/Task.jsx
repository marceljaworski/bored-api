import {useState} from 'react'

function Task(task, index) {
    const [ done, setDone ] = useState(task.task.done)
    const handlerDone = () => {
        setDone(!done)
    }
  return (
    <>
        <li className='tasks-list__item' key={index}
            onClick={handlerDone} 
            style={(done)? {textDecoration: "line-through", color: "red"}: {}}
            >{task.task.activity}</li>
    </>
  )
}

export default Task