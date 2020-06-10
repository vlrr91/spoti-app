import { Artist } from './artist';

export interface Album {
  id: string;
  name: string;
  images?: any[];
  artists: Artist[];
}
