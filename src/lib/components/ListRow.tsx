import type { ReactNode } from 'react';
import cn from 'classnames';

interface ListRowProps {
  className?: string;
  contents: ReactNode;
  right?: ReactNode;
  onClick?: () => void;
}

const ListRow = ({ className, contents, right, onClick }: ListRowProps) => {
  return (
    <li className={cn('flex justify-between items-center first-of-type:mt-0 mt-4', className)} onClick={onClick}>
      {contents}
      {right}
    </li>
  );
};

export default ListRow;
