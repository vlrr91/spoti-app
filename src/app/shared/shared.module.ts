import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { CardColumnsComponent } from './components/card-columns/card-columns.component';

@NgModule({
  declarations: [NavBarComponent, CardColumnsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavBarComponent, CardColumnsComponent]
})
export class SharedModule { }
