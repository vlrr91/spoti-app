import { Component, Input } from '@angular/core';
import { Track } from '../../../shared/models/track';

@Component({
  selector: 'sp-album-tracks',
  templateUrl: './album-tracks.component.html',
  styleUrls: ['./album-tracks.component.scss']
})
export class AlbumTracksComponent {
  @Input() tracks: Track[];

  constructor() { }
}
