import { ContentBox } from '@onetoo-dot-us/react-library';

/**
 * Repositories page that uses GitHub's Repositories page as a framework for project file management.
 *
 * @returns Repositories page
 */
const Repositories = () => {
  return (
    <>
      <div className='avatar--container'>
        <ContentBox label='Self-portrait of the user' />
      </div>
      <div className='display-name--container'>
        <h2 className='display-name--h2'>Cidro Onetoo</h2>
      </div>
      <div className='username--container'>
        <span className='username--span'>cidro12</span>
      </div>
    </>
  );
};

export default Repositories;
