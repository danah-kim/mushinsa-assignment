interface CharactersFilterProps {
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

export default function CharactersFilter({
  filter: { isAlive, isFemale, noTvSeries },
  onClickFilter,
}: CharactersFilterProps) {
  return (
    <section className={'grid grid-flow-col auto-cols-max gap-x-2 overflow-x-auto px-6'}>
      <button className={'btn w-fit'} onClick={() => onClickFilter({ isAlive: !isAlive, isFemale, noTvSeries })}>
        생존인물만
      </button>
      <button className={'btn w-fit'} onClick={() => onClickFilter({ isAlive, isFemale: !isFemale, noTvSeries })}>
        여자
      </button>
      <button className={'btn w-fit'} onClick={() => onClickFilter({ isAlive, isFemale, noTvSeries: !noTvSeries })}>
        tvSeries 없음
      </button>
      <button
        className={'btn w-fit'}
        onClick={() => onClickFilter({ isAlive: false, isFemale: false, noTvSeries: false, removedIds: [] })}
      >
        초기화
      </button>
    </section>
  );
}
