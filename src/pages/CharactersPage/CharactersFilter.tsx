interface CharactersFilterProps {
  filter: {
    isAlive: boolean;
    isFemale: boolean;
    noTvSeries: boolean;
  };
  onClickFilter: ({
    isAlive,
    isFemale,
    noTvSeries,
    reset,
  }: {
    isAlive: boolean;
    isFemale: boolean;
    noTvSeries: boolean;
    reset?: boolean;
  }) => void;
}

export default function CharactersFilter({
  filter: { isAlive, isFemale, noTvSeries },
  onClickFilter,
}: CharactersFilterProps) {
  return (
    <section className={'flex w-full overflow-auto'}>
      <div className={'relative flex gap-2 px-6'}>
        <button className={'btn min-w-fit'} onClick={() => onClickFilter({ isAlive: !isAlive, isFemale, noTvSeries })}>
          생존인물만
        </button>
        <button className={'btn min-w-fit'} onClick={() => onClickFilter({ isAlive, isFemale: !isFemale, noTvSeries })}>
          여자
        </button>
        <button
          className={'btn min-w-fit'}
          onClick={() => onClickFilter({ isAlive, isFemale, noTvSeries: !noTvSeries })}
        >
          tvSeries 없음
        </button>
        <button
          className={'btn min-w-fit'}
          onClick={() => onClickFilter({ isAlive, isFemale, noTvSeries, reset: true })}
        >
          초기화
        </button>
      </div>
    </section>
  );
}
