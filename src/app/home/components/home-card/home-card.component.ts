import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Album } from '../../../shared/models/album';

@Component({
  selector: 'sp-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent {
  @Input() newRelease;
  @Output() selectCard = new EventEmitter<any>();

  select(event, id: string) {
    if (event.target.classList.contains('badge')) {
      return;
    }
    this.selectCard.emit({ id, type: 'new-release'});
  }

  selectArtist(id: string) {
    this.selectCard.emit({ id, type: 'artist'});
  }
}


