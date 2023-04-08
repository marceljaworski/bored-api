import { BoredContext } from '../context/Bored';
import { Link } from 'react-router-dom';
import { useContext } from 'react';


function Header() {
  return (
    <header>
      <Link className='welkome' to="/">Welkome to the bored Api app</Link>
    </header>
  )
}

export default Header