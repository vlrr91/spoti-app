import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SearchCardComponent } from './components/search-card/search-card.component';
import { SearchInputComponent } from './components/search-input/search-input.component';


@NgModule({
  declarations: [SearchComponent, SearchCardComponent, SearchInputComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class SearchModule { }
