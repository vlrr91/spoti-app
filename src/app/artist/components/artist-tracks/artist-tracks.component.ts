import { Component, Input, OnInit } from '@angular/core';

import { Track } from '../../../shared/models/track';

@Component({
  selector: 'sp-artist-tracks',
  templateUrl: './artist-tracks.component.html',
  styleUrls: ['./artist-tracks.component.scss']
})
export class ArtistTracksComponent implements OnInit {
  @Input() tracks: Track[];

  constructor() { }

  ngOnInit(): void {
  }

}
