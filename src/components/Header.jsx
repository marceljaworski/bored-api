import { BoredContext } from '../context/Bored';
import { Link } from 'react-router-dom';
import { useContext } from 'react';


function Header() {
  const { newTask, addTask } = useContext(BoredContext);
  const handlerNewTask = () => newTask();
  
  const handlerChoose = () => {
    addTask()
  }
  return (
    <header>
      <Link className='welkome' to="/">Welkome to the bored Api app</Link>
      <button onClick={handlerChoose}>Choose</button>
      or search for a 
      <button className='newTask' onClick={handlerNewTask}>New activity</button> 
    </header>
  )
}

export default Header