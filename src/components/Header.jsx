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
      <Link to="/">Welkome to the Bored Api</Link>
      <button>Choose</button>or click for a <button onClick={handlerNewTask}>New task</button> 
    </header>
  )
}

export default Header