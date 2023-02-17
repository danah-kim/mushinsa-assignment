import { Title, List, ListRow, Card } from 'lib/components';

export function CharactersPage() {
  return (
    <div className={'flex flex-col gap-y-3'}>
      <Title>무신사 과제</Title>
      <section className={'flex w-full overflow-auto'}>
        <div className={'relative flex gap-2 px-6'}>
          {Array.from({ length: 20 }, (_, index) => (
            <button key={`filter-button-${index}`} className={'btn min-w-fit'}>
              {index}
            </button>
          ))}
        </div>
      </section>
      <section>
        <List>
          {Array.from({ length: 5 }, (_, index) => (
            <ListRow
              key={`characters-${index}`}
              contents={
                <Card
                  title={`title-${index}`}
                  contentTop={`contentTop${index}`}
                  contentBottom={`contentTop${index}`}
                  actions={<button className="btn btn-md md:btn-md lg:btn-lg">삭제</button>}
                />
              }
            />
          ))}
        </List>
      </section>
    </div>
  );
}
