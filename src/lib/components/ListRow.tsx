import type { ReactNode } from 'react';
import cn from 'classnames';
import { forwardRef } from 'react';

interface ListRowProps {
  className?: string;
  contents: ReactNode;
  right?: ReactNode;
  onClick?: () => void;
}

const ListRow = forwardRef<HTMLLIElement, ListRowProps>(function ListRow({ className, contents, right, onClick }, ref) {
  return (
    <li
      ref={ref}
      className={cn('flex justify-between items-center first-of-type:mt-0 mt-4', className)}
      onClick={onClick}
    >
      {contents}
      {right}
    </li>
  );
});

export default ListRow;
