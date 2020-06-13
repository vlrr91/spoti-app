import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Album } from '../models/album';
import { Track } from '../models/track';
import { Artist } from '../models/artist';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }
  private newReleasesUrl = `${environment.baseUrl}/album/new-releases?country=CO`;
  private albumUrl = `${environment.baseUrl}/album`;
  private searchUrl = `${environment.baseUrl}/search?`;
  private artistUrl = `${environment.baseUrl}/artists`;

  private static handleError(err: any) {
    if (err.error instanceof ErrorEvent) {
      // A client side or network error occurred
      return throwError(`A ocurrido un error ${err.error.message}`);
    }
    // The backend returned an unsuccessful response code
    return throwError(`Servicio web retorna código ${err.error.httpStatusCode}: ${err.error.message}`);
  }

  getNewReleases(): Observable<Album[]> {
    return this.http.get<Album[]>(this.newReleasesUrl)
      .pipe(catchError(SpotifyService.handleError));
  }

  getTracksAlbum(id: string): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.albumUrl}/${id}/tracks`)
      .pipe(catchError(SpotifyService.handleError));
  }

  getAlbumById(id: string): Observable<Album> {
    return this.http.get<Album>(`${this.albumUrl}/${id}`)
      .pipe(catchError(SpotifyService.handleError));
  }

  searchArtists(searchValue: string): Observable<Artist[]> {
    return this.http.get<Artist[]>(`${this.searchUrl}q=${searchValue}`)
      .pipe(catchError(SpotifyService.handleError));
  }

  getArtistById(id: string): Observable<Artist> {
    return this.http.get<Artist>(`${this.artistUrl}/${id}`)
      .pipe(catchError(SpotifyService.handleError));
  }

  getTopTracksByArtist(id: string): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.artistUrl}/${id}/top-tracks`)
      .pipe(catchError(SpotifyService.handleError));
  }
}
