import type { ReactNode } from 'react';

export function PageLayout({ children }: { children: ReactNode }) {
  return <div className={'max-w-full w-full p-0 m-0 h-auto'}>{children}</div>;
}
