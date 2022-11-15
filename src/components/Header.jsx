import { BoredContext } from '../context/Bored';
import { Link } from 'react-router-dom';
import { useContext } from 'react';


function Header() {
  const { newTask } = useContext(BoredContext);
  const handlerNewTask = ((event) => {
    newTask()
  })
  return (
    <header>
      <Link className='welkome' to="/">Welkome to the boring Api app</Link>
      <button>Choose</button>or search for a <button className='newTask' onClick={handlerNewTask}>New activity</button> 
    </header>
  )
}

export default Header