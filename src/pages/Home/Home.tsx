import { pagesMapping } from '../../contexts/Routing';
import Link from '../../molecules/Link/Link';

/**
 * Home page that uses GitHub's Overview page as a framework for a collection of biographical and project information.
 *
 * @returns Home page
 */
const Home = () => {
  return (
    <>
      <div>Kumusta nagtaud taeng!</div>
      <Link href={pagesMapping.repositories}>Navigate to repositories</Link>
    </>
  );
};

export default Home;
