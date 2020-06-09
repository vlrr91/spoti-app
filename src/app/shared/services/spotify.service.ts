import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { NewRelease } from '../models/new-release';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private newReleasesUrl = `${environment.baseUrl}/album/new-releases?country=CO`;

  constructor(private http: HttpClient) { }

  getNewReleases(): Observable<NewRelease[]> {
    return this.http.get<NewRelease[]>(this.newReleasesUrl);
  }
}
