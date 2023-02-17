import { Title } from 'lib/components';
import { useState } from 'react';
import CharactersFilter from './CharactersFilter';
import CharactersList from './CharactersList';

export default function CharactersPage() {
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

  const handleClickFilter = ({
    isAlive,
    isFemale,
    noTvSeries,
    removedIds,
  }: {
    isAlive: boolean;
    isFemale: boolean;
    noTvSeries: boolean;
    removedIds?: number[];
  }) => {
    setFilter(prevState => ({
      isAlive,
      isFemale,
      noTvSeries,
      removedIds: removedIds ? removedIds : prevState.removedIds,
    }));
  };

  return (
    <div className={'flex flex-col gap-y-3'}>
      <Title>무신사 과제</Title>
      <CharactersFilter filter={filter} onClickFilter={handleClickFilter} />
      <CharactersList filter={filter} onClickFilter={handleClickFilter} />
    </div>
  );
}
