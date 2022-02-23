import { Div } from '../../atoms';
import P from '../../atoms/P/P';
import { AudioPlayer, Board } from '../../molecules';

/**
 * Project page that uses GitHub's Project page as a framework for project management.
 *
 * @returns Project page
 */
const Project = () => {
  return (
    <Div>
      <h2>Notes To Self</h2>
      <P>A musical piece inspired by summer time in the 90's.</P>
      <AudioPlayer
        title='Beats And Carats - Notes To Self'
        src='https://drive.google.com/file/d/1QmaseRzwz3km-IpgXzOPpkqPKjdYilYj/preview?usp=sharing'
      ></AudioPlayer>
    </Div>
  );
};

export default Project;
