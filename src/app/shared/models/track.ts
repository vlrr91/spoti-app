import { Artist } from './artist';
import { Album } from './album';

export interface Track {
  id; string;
  name: string;
  artists: Artist[];
  previewUrl?: string;
  album: Album;
}
