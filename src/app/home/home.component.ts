import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { SpotifyService } from '../shared/services/spotify.service';
import { Album } from '../shared/models/album';

@Component({
  selector: 'sp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newReleases$: Observable<Album[]>;

  constructor(private spotifyService: SpotifyService,
              private router: Router) { }

  ngOnInit(): void {
    this.newReleases$ = this.spotifyService.getNewReleases();
  }

  select(event) {
    if (event.type === 'new-release') {
      this.router.navigate(['/album', event.id]);
    }

    if (event.type === 'artist') {
      // TODO: select artist
    }
  }
}
