/* eslint-disable consistent-return */

import { useEffect, useState } from 'react';

type UseInfiniteScrollProps = {
  root?: Element | null;
  target: Element | null;
  handleIntersect: IntersectionObserverCallback;
  threshold?: number;
  rootMargin?: string;
};

function useInfiniteScroll({
  root = null,
  target,
  handleIntersect,
  threshold = 1.0,
  rootMargin = '0px',
}: UseInfiniteScrollProps) {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver;

    if (target) {
      observer = new IntersectionObserver(handleIntersect, {
        root,
        rootMargin,
        threshold,
      });
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer?.unobserve(target);
      }
    };
  }, [target, root, rootMargin, threshold, handleIntersect]);

  return [isFetching, setIsFetching];
}

export default useInfiniteScroll;
