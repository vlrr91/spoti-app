import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { SpotifyService } from '../shared/services/spotify.service';
import { Artist } from '../shared/models/artist';

@Component({
  selector: 'sp-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  artists$: Observable<Artist[]>;

  constructor(private spotifyService: SpotifyService) {
  }

  search(event): void {
    if (event) {
      this.artists$ = this.spotifyService.searchArtists(event);
    } else {
      this.artists$ = undefined;
    }
  }
}
