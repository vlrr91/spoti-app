import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistComponent } from './artist.component';
import { SharedModule } from '../shared/shared.module';
import { ArtistInfoComponent } from './components/artist-info/artist-info.component';
import { ArtistTracksComponent } from './components/artist-tracks/artist-tracks.component';


@NgModule({
  declarations: [ArtistComponent, ArtistInfoComponent, ArtistTracksComponent],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    SharedModule
  ]
})
export class ArtistModule { }
