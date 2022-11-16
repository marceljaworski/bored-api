import { BoredContext } from '../context/Bored';
import { Link } from 'react-router-dom';
import { useContext } from 'react';


function Header() {
  const {reset, tasks } = useContext(BoredContext);
  
  const handlerReset = () => {
    reset()
  }

  return (
    <header>
      {tasks.length > 0 && <button className='red' onClick={handlerReset}>reset</button>}
      <Link className='welkome' to="/">Welkome to the bored Api app</Link>
     
      

    </header>
  )
}

export default Header