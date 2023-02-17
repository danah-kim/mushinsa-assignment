import { GetCharacters } from 'apis';

const characters = {
  all: ['characters'] as const,
  characters: (params: GetCharacters) => [...characters.all, 'characters', params] as const,
};

export default {
  characters,
};
