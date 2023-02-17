import { http } from 'lib/utils/http';
import qs from 'qs';

export function getCharacters(params: GetCharacters) {
  return http.get<GetCharactersResult[]>(`/api/characters${qs.stringify(params, { addQueryPrefix: true })}`);
}

export interface GetCharacters {
  page: number;
  pageSize: number;
  name?: string;
  gender?: string;
  culture?: string;
  born?: string;
  died?: string;
  isAlive?: boolean;
}

export interface GetCharactersResult {
  url: string;
  name: string;
  gender: string;
  culture: string;
  born: string;
  died: string;
  titles: string[];
  aliases: string[];
  father: string;
  mother: string;
  spouse: string;
  allegiances: string[];
  books: string[];
  povBooks: string[];
  tvSeries: string[];
  playedBy: string[];
}
