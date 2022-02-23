import './Header.css';
import Ul from '../../atoms/Ul/Ul';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header--div'>
      <header>
        <h1 className='header--h1'>Onetoo</h1>
        <nav className='header--nav'>
          <Ul>
            <li>
              <Link className='header--link' to='/'>
                Home
              </Link>
            </li>
          </Ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
