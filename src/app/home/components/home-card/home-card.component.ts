import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sp-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent implements OnInit {
  @Input() newRelease;

  constructor() { }

  ngOnInit(): void {
  }

}
