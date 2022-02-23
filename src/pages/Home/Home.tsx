import './Home.css';

/**
 * Home page that uses GitHub's Overview page as a framework for a collection of biographical and project information.
 *
 * @returns Home page
 */
const Home = () => {
  return (
    <div className='home--div'>
      <p className='home--p'>
        Onetoo is an organization of whatever{' '}
        <a
          href='https://carlcidromero.github.io'
          target='_blank'
          rel='noreferrer'
        >
          cidro12
        </a>{' '}
        has been up to lately-- typically making beats, playing Rocket League
        and coding.
      </p>
    </div>
  );
};

export default Home;
