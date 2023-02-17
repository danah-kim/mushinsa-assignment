import cn from 'classnames';
import type { ReactNode } from 'react';

interface CardProps {
  className?: string;
  title?: ReactNode;
  contentTop: ReactNode;
  contentBottom?: ReactNode;
  actions?: ReactNode;
}

function Card({ className, title, contentTop, contentBottom, actions }: CardProps) {
  return (
    <div className={cn('card w-full bg-base-200 shadow-xl', className)}>
      <div className="card-body flex flex-row justify-between">
        <div>
          {title && <h2 className="card-title">{title}</h2>}
          <div className={'flex gap-x-2 justify-between'}>
            <div>
              <p>{contentTop}</p>
              {contentBottom && <p>{contentBottom}</p>}
            </div>
          </div>
        </div>
        <div className="card-actions justify-end items-center">{actions}</div>
      </div>
    </div>
  );
}

export default Card;
