import { BoredContext } from '../context/Bored';
import { Link } from 'react-router-dom';
import { useContext } from 'react';


function Header() {
  const { newTask, addTask, reset, tasks } = useContext(BoredContext);
  const handlerNewTask = () => newTask();
  const handlerReset = () => {
    reset()
}
  
  const handlerChoose = () => {
    addTask()
  }
  return (
    <header>
      {tasks.length > 0 && <button className='red' onClick={handlerReset}>reset</button>}
      <Link className='welkome' to="/">Welkome to the bored Api app</Link>
      <button onClick={handlerChoose}>Choose</button>
      or search for a 
      <button className='newTask' onClick={handlerNewTask}>New activity</button>
      

    </header>
  )
}

export default Header