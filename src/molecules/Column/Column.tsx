import { Div } from '../../atoms';

interface IColumnProps {
  tasks: string[];
}

const Column = ({ tasks }: IColumnProps) => {
  return (
    <Div>
      {tasks.map((task, index) => (
        <div key={index}>{task}</div>
      ))}
    </Div>
  );
};

export default Column;
