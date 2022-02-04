import './Www.css';
import P from '../../atoms/P/P';
import Div from '../../atoms/Div/Div';

export interface IWwwProps {
  what: {
    is: string;
    aint: string;
    might: string;
  };
}

/**
 * Www organism that describes what something is, is not and might become with continued support.
 *
 * @param what `what: {is: string, aint: string, might: string}`
 * @returns "What it is, ain't and might be" description.
 */
const Www = ({ what }: IWwwProps) => {
  return (
    <Div>
      <h2>What it is</h2>
      <P>{what.is}</P>
      <h2>What it ain't</h2>
      <P>{what.aint}</P>
      <h2>What it might be one day</h2>
      <P>{what.might}</P>
    </Div>
  );
};

export default Www;
