import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Album } from '../models/album';
import { Track } from '../models/track';
import { Artist } from '../models/artist';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private newReleasesUrl = `${environment.baseUrl}/album/new-releases?country=CO`;
  private albumUrl = `${environment.baseUrl}/album`;
  private searchUrl = `${environment.baseUrl}/search?`;
  private artistUrl = `${environment.baseUrl}/artists`;

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

  searchArtists(searchValue: string): Observable<Artist[]> {
    return this.http.get<Artist[]>(`${this.searchUrl}q=${searchValue}`);
  }

  getArtistById(id: string): Observable<Artist> {
    return this.http.get<Artist>(`${this.artistUrl}/${id}`);
  }

  getTopTracksByArtist(id: string): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.artistUrl}/${id}/top-tracks`);
  }
}
