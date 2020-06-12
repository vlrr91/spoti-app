import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Artist } from '../../../shared/models/artist';

@Component({
  selector: 'sp-search-card',
  templateUrl: './search-card.component.html',
  styles: ['.search-card { cursor: pointer; }']
})
export class SearchCardComponent {
  @Input() artist: Artist;

  constructor(private router: Router) { }

  selectArtist(id: string) {
    this.router.navigate(['/artist', id]);
  }
}
