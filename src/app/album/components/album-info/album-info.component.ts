import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Album } from '../../../shared/models/album';

@Component({
  selector: 'sp-album-info',
  templateUrl: './album-info.component.html'
})
export class AlbumInfoComponent implements OnInit {
  @Input() album: Album;

  constructor() { }

  ngOnInit(): void {
  }

}
