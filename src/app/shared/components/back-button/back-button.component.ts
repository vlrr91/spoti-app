import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'sp-back-button',
  templateUrl: './back-button.component.html'
})
export class BackButtonComponent {

  constructor(private location: Location) { }

  back(): void {
    this.location.back();
  }
}
