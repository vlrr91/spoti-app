import { Artist } from './Artist';

export interface NewRelease {
  id: string;
  name: string;
  images: any[];
  artists: Artist[];
}
