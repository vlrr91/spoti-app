import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Album } from '../models/album';
import { Track } from '../models/track';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private newReleasesUrl = `${environment.baseUrl}/album/new-releases?country=CO`;
  private albumUrl = `${environment.baseUrl}/album`;

  constructor(private http: HttpClient) { }

  getNewReleases(): Observable<Album[]> {
    return this.http.get<Album[]>(this.newReleasesUrl);
  }

  getTracksAlbum(id: string): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.albumUrl}/${id}/tracks`);
  }

  getAlbumById(id: string): Observable<Album> {
    return this.http.get<Album>(`${this.albumUrl}/${id}`);
  }
}
