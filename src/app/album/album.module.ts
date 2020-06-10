import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from './album.component';
import { AlbumInfoComponent } from './components/album-info/album-info.component';
import { SharedModule } from '../shared/shared.module';
import { AlbumTracksComponent } from './components/album-tracks/album-tracks.component';


@NgModule({
  declarations: [AlbumComponent, AlbumInfoComponent, AlbumTracksComponent],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    SharedModule
  ]
})
export class AlbumModule { }
