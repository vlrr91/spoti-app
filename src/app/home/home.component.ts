import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../shared/services/spotify.service';
import { Observable } from 'rxjs';

import { NewRelease } from '../shared/models/new-release';

@Component({
  selector: 'sp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newReleases$: Observable<NewRelease[]>;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.newReleases$ = this.spotifyService.getNewReleases();
  }

}
