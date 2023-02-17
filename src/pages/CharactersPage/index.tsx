import { Title, List, ListRow, Card } from 'lib/components';
import { useInfiniteQuery } from 'react-query';
import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import queryKeys from 'lib/constants/queryKeys';
import { getCharacters } from 'apis';
import CharactersFilter from './CharactersFilter';

export default function CharactersPage() {
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
    // fetchNextPage,
    // hasNextPage,
    // isFetchingNextPage,
    // isLoading,
    // refetch,
  } = useInfiniteQuery(
    queryKeys.characters.characters(params),
    ({ pageParam }) => getCharacters({ ...params, page: pageParam || params.page }),
    {
      getNextPageParam: data => {
        return data.length < 100;
      },
    }
  );
  // const [{ isAlive, isFemale, noTvSeries }, setFilter] = useState({
  const [filter, setFilter] = useState<{
    isAlive: boolean;
    isFemale: boolean;
    noTvSeries: boolean;
    removedIds: number[];
  }>({
    isAlive: false,
    isFemale: false,
    noTvSeries: false,
    removedIds: [],
  });
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

  const handleClickFilter = ({
    isAlive,
    isFemale,
    noTvSeries,
    reset = false,
  }: {
    isAlive: boolean;
    isFemale: boolean;
    noTvSeries: boolean;
    reset?: boolean;
  }) => {
    setFilter(prevState => ({
      isAlive,
      isFemale,
      noTvSeries,
      removedIds: reset ? [] : prevState.removedIds,
    }));
  };

  return (
    <div className={'flex flex-col gap-y-3'}>
      <Title>무신사 과제</Title>
      <CharactersFilter filter={filter} onClickFilter={handleClickFilter} />
      <section>
        <List>
          {characters.map(({ id, name, aliases, titles, books, tvSeries }) => (
            <ListRow
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
                      onClick={() =>
                        setFilter(prevState => ({
                          ...prevState,
                          removedIds: prevState.removedIds.concat([id]),
                        }))
                      }
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
    </div>
  );
}
