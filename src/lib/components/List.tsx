import type { PropsWithChildren } from 'react';
import cn from 'classnames';

interface ListProps {
  className?: string;
}

const List = ({ className, children }: PropsWithChildren<ListProps>) => {
  return <ul className={cn('py-0 px-6 flex flex-col', className)}>{children}</ul>;
};

export default List;
