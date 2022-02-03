import { pagesMapping } from '../../contexts/Routing';
import Link from '../../molecules/Link/Link';
import './Header.css';

const navLinks = [
  {
    text: 'Home',
    url: pagesMapping.home,
  },
  {
    text: 'Repositories',
    url: pagesMapping.repositories,
  },
];

const Header = () => {
  return (
    <div className='header--container'>
      <div className='header--h1--container'>
        <h1 className='header--h1'>Onetoo</h1>
      </div>
      <div className='header--nav--container'>
        <nav className='header--nav'>
          <ul className='header--nav--ul'>
            {navLinks.map((link, index) => (
              <li className='header--nav--li' key={index}>
                <Link className='header--nav--link' href={link.url}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
