import { pagesMapping } from '../../contexts/Router';
import Link from '../../molecules/Link/Link';
import './Header.css';
import Ul from '../../atoms/Ul/Ul';

const navLinks = [
  {
    text: 'Home',
    url: pagesMapping.home,
  },
  {
    text: 'Repositories',
    url: pagesMapping.repositories,
  },
  {
    text: 'Project',
    url: pagesMapping.project,
  },
];

const Header = () => {
  return (
    <div className='header--container'>
      <header className='header--header'>
        <div className='header--h1--container'>
          <h1 className='header--h1'>Onetoo</h1>
        </div>
        <div className='header--nav--container'>
          <nav className='header--nav'>
            <Ul>
              {navLinks.map((link, index) => (
                <li className='header--nav--li' key={index}>
                  <Link className='header--nav--link' href={link.url}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </Ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
