import './Home.css';

/**
 * Home page that uses GitHub's Overview page as a framework for a collection of biographical and project information.
 *
 * @returns Home page
 */
const Home = () => {
  return (
    <div className='home--container'>
      <div className='home--summary--container'>
        <h2 className='home--summary--h2'>What it is</h2>
        <p className='home--summary'>
          Onetoo is a make-believe project that uses GitHub as a framework for
          project management.
        </p>
        <h2 className='home--summary--h2'>What it ain't</h2>
        <p className='home--summary'>Real. True, just not real.</p>
        <h2 className='home--summary--h2'>What it might be one day</h2>
        <code className='home--summary'>
          <span className='home--summary--span'>open-source 2.0.0-alpha</span>
        </code>
      </div>
    </div>
  );
};

export default Home;
