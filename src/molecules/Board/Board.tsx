import { Div } from '../../atoms';
import './Board.css';

interface IBoardProps {
  columns: string[];
}

const Board = ({ columns }: IBoardProps) => {
  return (
    <Div className='board--container' row={true}>
      {columns.map((column, index) => (
        <div key={index}>{column}</div>
      ))}
    </Div>
  );
};

export default Board;
