import { Component, Input } from '@angular/core';

import { Artist } from '../../../shared/models/artist';

@Component({
  selector: 'sp-search-card',
  templateUrl: './search-card.component.html',
  styles: ['.search-card { cursor: pointer; }']
})
export class SearchCardComponent {
  @Input() artist: Artist;

  constructor() { }
}
