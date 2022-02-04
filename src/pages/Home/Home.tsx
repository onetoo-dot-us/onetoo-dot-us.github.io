import './Home.css';
import Www from '../../organisms/Www/Www';
import { www } from './www';

/**
 * Home page that uses GitHub's Overview page as a framework for a collection of biographical and project information.
 *
 * @returns Home page
 */
const Home = () => {
  return (
    <div className='home--container'>
      <Www what={www.what} />
    </div>
  );
};

export default Home;
