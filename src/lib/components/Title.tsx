import type { PropsWithChildren } from 'react';

export default function Title({ children }: PropsWithChildren<{}>) {
  return (
    <title className="hero bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{children}</h1>
        </div>
      </div>
    </title>
  );
}
