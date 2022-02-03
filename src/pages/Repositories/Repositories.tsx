import { pagesMapping } from '../../contexts/Routing';
import Link from '../../molecules/Link/Link';

/**
 * Repositories page that uses GitHub's Repositories page as a framework for a collection of projects.
 *
 * @returns Repositories page
 */
const Repositories = () => {
  return (
    <>
      <div>Kumusta nagtaud repositories!</div>
      <Link href={pagesMapping.home}>Navigate to home</Link>
    </>
  );
};

export default Repositories;
