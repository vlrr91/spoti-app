import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { SpotifyService } from '../shared/services/spotify.service';
import { Track } from '../shared/models/track';
import { Album } from '../shared/models/album';

@Component({
  selector: 'sp-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  tracks$: Observable<Track[]>;
  album$: Observable<Album>;

  constructor(private spotifyService: SpotifyService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.album$ = this.spotifyService.getAlbumById(id);
    this.tracks$ = this.spotifyService.getTracksAlbum(id);
  }
}
