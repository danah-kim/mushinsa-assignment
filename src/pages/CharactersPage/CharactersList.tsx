/* eslint-disable @typescript-eslint/ban-ts-comment */
import { List, ListRow, Card } from 'lib/components';
import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import { useInfiniteQuery } from 'react-query';
import queryKeys from 'lib/constants/queryKeys';
import { getCharacters } from 'apis';
import useInfiniteScroll from 'lib/hooks/useInfiniteScroll';

interface CharactersListProps {
  filter: {
    isAlive: boolean;
    isFemale: boolean;
    noTvSeries: boolean;
    removedIds: number[];
  };
  onClickFilter: ({
    isAlive,
    isFemale,
    noTvSeries,
    removedIds,
  }: {
    isAlive: boolean;
    isFemale: boolean;
    noTvSeries: boolean;
    removedIds?: number[];
  }) => void;
}

export default function CharactersList({ filter, onClickFilter }: CharactersListProps) {
  const location = useLocation();
  const params = useMemo(
    () => ({
      page: Number(qs.parse(location.search, { ignoreQueryPrefix: true })?.page || 0),
      pageSize: 10,
    }),
    [location.search]
  );
  const {
    data: { pages = [] } = {},
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(queryKeys.characters.characters(params), ({ pageParam }) =>
    getCharacters({ ...params, page: pageParam || params.page })
  );
  const characters = useMemo(
    () =>
      pages
        .flatMap(page => page)
        .map((page, index) => ({ ...page, id: index + 1 }))
        .filter(({ id }) => !filter.removedIds.includes(id))
        .filter(({ died, gender, tvSeries }) => {
          const { isAlive, isFemale, noTvSeries } = filter;

          return (
            (!isAlive || (isAlive && died.length === 0)) &&
            (!isFemale || (isFemale && gender === 'Female')) &&
            (!noTvSeries || (noTvSeries && tvSeries.filter(ts => ts.length > 0).length === 0))
          );
        }),
    [filter, pages]
  );
  const [lastCharacter, setLastCharacter] = useState<HTMLLIElement | null>(null);
  useInfiniteScroll({
    target: lastCharacter,
    handleIntersect(entries) {
      const hasNextPage = pages.length < 10;

      return entries.forEach(entry => {
        if (hasNextPage && !isFetchingNextPage && entry.isIntersecting) {
          fetchNextPage({ pageParam: pages.length });
        }
      });
    },
  });

  return (
    <section>
      <List className={'pb-6'}>
        {characters.map(({ id, name, aliases, titles, books, tvSeries }, index) => (
          <ListRow
            ref={ref => {
              if (index + 1 === characters.length) {
                setLastCharacter(ref);
              }
            }}
            key={`characters-${id}`}
            contents={
              <Card
                title={`${name ? `name: ${name} / ` : ''}${aliases.length ? `aliases: ${aliases.join(',')}` : ''}`}
                contentTop={titles.some(title => title.length > 0) ? <p>{titles.join(',')}</p> : null}
                contentBottom={
                  <div className={'flex justify-between items-center w-full'}>
                    <p>books: {books.length}</p>
                    {tvSeries.some(tvSerie => tvSerie.length > 0) ? <p>tvSeries: {tvSeries.length}</p> : null}
                  </div>
                }
                actions={
                  <button
                    className="btn btn-md md:btn-md lg:btn-lg"
                    onClick={() => {
                      onClickFilter({ ...filter, removedIds: filter.removedIds.concat([id]) });
                    }}
                  >
                    삭제
                  </button>
                }
              />
            }
          />
        ))}
      </List>
    </section>
  );
}
