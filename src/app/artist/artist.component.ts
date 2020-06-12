import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { SpotifyService } from '../shared/services/spotify.service';

import { Artist } from '../shared/models/artist';
import { Track } from '../shared/models/track';

@Component({
  selector: 'sp-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  artist$: Observable<Artist>;
  tracks$: Observable<Track[]>;

  constructor(private spotifyService: SpotifyService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.artist$ = this.spotifyService.getArtistById(id);
    this.tracks$ = this.spotifyService.getTopTracksByArtist(id);
  }
}
