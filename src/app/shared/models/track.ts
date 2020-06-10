import { Artist } from './artist';

export interface Track {
  id; string;
  name: string;
  artists: Artist[];
  previewUrl: string;
}
