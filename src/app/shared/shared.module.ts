import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { CardColumnsComponent } from './components/card-columns/card-columns.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { NoImagePipe } from './pipes/no-image.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    NavBarComponent,
    CardColumnsComponent,
    BackButtonComponent,
    NoImagePipe,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    CardColumnsComponent,
    BackButtonComponent,
    NoImagePipe,
    SpinnerComponent
  ]
})
export class SharedModule { }
