import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sp-artist-info',
  templateUrl: './artist-info.component.html',
  styleUrls: ['./artist-info.component.scss']
})
export class ArtistInfoComponent implements OnInit {
  @Input() artist;

  constructor() { }

  ngOnInit(): void {
  }

}
